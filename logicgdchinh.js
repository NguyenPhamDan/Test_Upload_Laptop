const form = document.querySelector("#recommendation-form");
const resultsContainer = document.querySelector("#results");
const resultCount = document.querySelector("#result-count");
const resultTitle = document.querySelector("#result-title");
const detailModal = document.querySelector("#detail-modal");
const detailContent = document.querySelector("#detail-content");

const needLabels = {
  all: "mọi nhu cầu",
  van_phong: "văn phòng / học tập",
  gaming: "gaming",
  do_hoa: "đồ họa / trạm"
};

const formatPrice = (price) => `${price.toFixed(2).replace(".", ",")} triệu`;
const formatWeight = (weight) => `${weight.toFixed(2).replace(".", ",")} kg`;
const formatStorage = (storage) => storage >= 1024 ? `${storage / 1024} TB` : `${storage} GB`;
const displayValue = (value) => String(value).replaceAll("_", " ").replaceAll("*", " × ");

function updateRangeLabels() {
  document.querySelector("#budget-value").textContent = `${document.querySelector("#budget").value} triệu`;
  document.querySelector("#weight-value").textContent = `${Number(document.querySelector("#weight").value).toFixed(1)} kg`;
  document.querySelector("#cpu-value").textContent = `${document.querySelector("#cpu").value} / 100`;
  document.querySelector("#gpu-value").textContent = `${document.querySelector("#gpu").value} / 100`;
  document.querySelector("#battery-value").textContent = `${document.querySelector("#battery").value} / 100`;
}

function getFormData() {
  const formData = new FormData(form);
  const weights = {};
  document.querySelectorAll(".weight-input").forEach((input) => {
    weights[input.dataset.weight] = Math.max(0, Number(input.value) || 0);
  });

  return {
    need: formData.get("need"),
    budget: Number(formData.get("budget")),
    maxWeight: Number(formData.get("weight")),
    minCpu: Number(formData.get("cpu")),
    minGpu: Number(formData.get("gpu")),
    minBattery: Number(formData.get("battery")),
    weights
  };
}
//Phương pháp quyết định TOPSIS
function calculateTopsis(laptops, criteria) {
  if (!laptops.length) return [];

  // Chuyển cân nặng thành tiêu chí lợi ích: máy càng nhẹ, điểm càng cao
  const matrix = laptops.map((laptop) => ({
    laptop,
    values: [
      laptop.cpu_score,
      laptop.gpu_score,
      Math.max(0, ((3.5 - laptop.trong_luong) / (3.5 - 1.1)) * 100),
      laptop.pin_score
    ]
  }));

  const criteriaKeys = ["performance", "graphics", "portability", "battery"];
  const denominators = criteriaKeys.map((_, index) => Math.sqrt(
    matrix.reduce((sum, item) => sum + item.values[index] ** 2, 0)
  ));

  const totalWeight = criteriaKeys.reduce((sum, key) => sum + criteria.weights[key], 0) || 1;
  const weights = criteriaKeys.map((key) => criteria.weights[key] / totalWeight);
  const weightedMatrix = matrix.map((item) => item.values.map((value, index) =>
    (value / denominators[index]) * weights[index]
  ));

  const idealPositive = criteriaKeys.map((_, index) => Math.max(...weightedMatrix.map((row) => row[index])));
  const idealNegative = criteriaKeys.map((_, index) => Math.min(...weightedMatrix.map((row) => row[index])));

  return matrix.map((item, rowIndex) => {
    const row = weightedMatrix[rowIndex];
    const distanceToPositive = Math.sqrt(row.reduce((sum, value, index) =>
      sum + (value - idealPositive[index]) ** 2, 0
    ));

    const distanceToNegative = Math.sqrt(row.reduce((sum, value, index) =>
      sum + (value - idealNegative[index]) ** 2, 0
    ));
    
    const score = distanceToNegative / (distanceToPositive + distanceToNegative || 1);
    return { ...item.laptop, score: score * 100 };
  });
}

function filterAndRank(criteria) {
  const filteredLaptops = LAPTOPS
    .filter((laptop) => criteria.need === "all" || laptop.loai_nhu_cau === criteria.need)
    .filter((laptop) => laptop.gia <= criteria.budget)
    .filter((laptop) => laptop.trong_luong <= criteria.maxWeight)
    .filter((laptop) => laptop.cpu_score >= criteria.minCpu)
    .filter((laptop) => laptop.gpu_score >= criteria.minGpu)
    .filter((laptop) => laptop.pin_score >= criteria.minBattery);

  return calculateTopsis(filteredLaptops, criteria)
    .sort((first, second) => second.score - first.score);
}

function getReason(laptop, criteria) {
  const reasons = [];
  if (laptop.cpu_score >= criteria.minCpu + 15) reasons.push("CPU mạnh");
  if (laptop.gpu_score >= criteria.minGpu + 15) reasons.push("GPU tốt");
  if (laptop.trong_luong <= criteria.maxWeight - 0.25) reasons.push("gọn nhẹ");
  if (laptop.pin_score >= criteria.minBattery + 15) reasons.push("pin bền");
  return reasons.slice(0, 3).join(" • ") || "Đáp ứng đủ các tiêu chí tối thiểu";
}

function renderResults(items, criteria) {
  resultCount.textContent = `${items.length} lựa chọn`;
  resultTitle.textContent = `Đề xuất cho ${needLabels[criteria.need]}`;

  if (!items.length) {
    resultsContainer.innerHTML = `
      <div class="empty-state">
        <span class="empty-icon">⌕</span>
        <h3>Chưa tìm thấy lựa chọn phù hợp</h3>
        <p>Hãy tăng ngân sách hoặc giảm một trong các ngưỡng tối thiểu để hệ thống có thêm phương án.</p>
      </div>`;
    return;
  }

  resultsContainer.innerHTML = items.map((laptop, index) => `
    <article class="laptop-card ${index === 0 ? "top-result" : ""}" tabindex="0" role="button" data-laptop-id="${laptop.id}" aria-label="Xem chi tiết ${laptop.ten}">
      <div class="rank">${String(index + 1).padStart(2, "0")}</div>
      <div class="laptop-main">
        <div class="card-title-row">
          <div>
            <span class="laptop-brand">${laptop.hang}</span>
            <h3>${laptop.ten}</h3>
          </div>
          ${index === 0 ? '<span class="best-badge">PHÙ HỢP NHẤT</span>' : ""}
        </div>
        <p class="reason">${getReason(laptop, criteria)}</p>
        <div class="specs">
          <span><b>CPU</b> ${laptop.cpu_score}/100</span>
          <span><b>GPU</b> ${laptop.gpu_score}/100</span>
          <span><b>PIN</b> ${laptop.pin_score}/100</span>
          <span><b>NẶNG</b> ${formatWeight(laptop.trong_luong)}</span>
        </div>
      </div>
      <div class="card-score">
        <span class="score-label">ĐIỂM PHÙ HỢP</span>
        <strong>${laptop.score.toFixed(1)}</strong>
        <span class="price">${formatPrice(laptop.gia)}</span>
      </div>
    </article>`).join("");
}

function renderDetails(laptop) {
  if (!laptop) return;
  detailContent.innerHTML = `
    <p class="eyebrow">CHI TIẾT SẢN PHẨM</p>
    <div class="detail-heading">
      <div><span class="laptop-brand">${laptop.hang}</span><h2 id="detail-title">${laptop.ten}</h2><p class="category-tag">${needLabels[laptop.loai_nhu_cau]}</p></div>
      <strong class="detail-price">${formatPrice(laptop.gia)}</strong>
    </div>
    <div class="spec-table" role="table" aria-label="Thông số laptop">
      ${[
        ["Bộ xử lý (CPU)", displayValue(laptop.cpu)],
        ["Card đồ họa (GPU)", displayValue(laptop.gpu)],
        ["RAM", `${laptop.ram} GB · ${displayValue(laptop.TTRam)}`],
        ["Ổ cứng", `${formatStorage(laptop.rom)} · ${displayValue(laptop.TTrom)}`],
        ["Màn hình", `${laptop.man_hinh || `${laptop.display} inch`} · ${displayValue(laptop.pixel)}`],
        ["Tần số quét", laptop.tan_so_quet || "Chưa cập nhật"],
        ["Độ sáng", laptop.do_sang || "Chưa cập nhật"],
        ["Khối lượng", formatWeight(laptop.trong_luong)],
        ["Pin / sạc", displayValue(laptop.Pin)],
        ["Hệ điều hành", laptop.he_dieu_hanh || "Chưa cập nhật"],
        ["Kết nối", laptop.ket_noi || "Chưa cập nhật"]
      ].map(([label, value]) => `<div class="spec-row"><span>${label}</span><strong>${value}</strong></div>`).join("")}
    </div>`;
  detailModal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeDetails() {
  detailModal.hidden = true;
  document.body.classList.remove("modal-open");
}

function analyze(event) {
  event.preventDefault();
  const criteria = getFormData();
  renderResults(filterAndRank(criteria), criteria);
}

document.querySelectorAll('input[type="range"]').forEach((input) => input.addEventListener("input", updateRangeLabels));
form.addEventListener("submit", analyze);
resultsContainer.addEventListener("click", (event) => {
  const card = event.target.closest("[data-laptop-id]");
  if (card) renderDetails(LAPTOPS_FULL_DATA.find((laptop) => laptop.id === Number(card.dataset.laptopId)));
});
resultsContainer.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    const card = event.target.closest("[data-laptop-id]");
    if (card) renderDetails(LAPTOPS_FULL_DATA.find((laptop) => laptop.id === Number(card.dataset.laptopId)));
  }
});
document.querySelectorAll("[data-close-modal]").forEach((element) => element.addEventListener("click", closeDetails));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !detailModal.hidden) closeDetails();
});
updateRangeLabels();
renderResults(filterAndRank(getFormData()), getFormData());

//
function resetfrom(){
  form.reset();
  const swit = getFormData();
  renderResults(filterAndRank(swit),swit);
}

