const form = document.querySelector("#recommendation-form");
const resultsContainer = document.querySelector("#results");
const resultCount = document.querySelector("#result-count");
const resultTitle = document.querySelector("#result-title");

const needLabels = {
  all: "mọi nhu cầu",
  van_phong: "văn phòng / học tập",
  gaming: "gaming",
  do_hoa: "đồ họa / trạm"
};

const formatPrice = (price) => `${price.toFixed(2).replace(".", ",")} triệu`;
const formatWeight = (weight) => `${weight.toFixed(2).replace(".", ",")} kg`;

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

function scoreLaptop(laptop, criteria) {
  const maxWeight = 3.5;
  const portabilityScore = Math.max(0, ((maxWeight - laptop.trong_luong) / (maxWeight - 1.1)) * 100);
  const totalWeight = Object.values(criteria.weights).reduce((sum, value) => sum + value, 0) || 1;
  const normalized = {
    performance: (laptop.cpu_score * criteria.weights.performance) / totalWeight,
    graphics: (laptop.gpu_score * criteria.weights.graphics) / totalWeight,
    portability: (portabilityScore * criteria.weights.portability) / totalWeight,
    battery: (laptop.pin_score * criteria.weights.battery) / totalWeight
  };
  const score = normalized.performance + normalized.graphics + normalized.portability + normalized.battery;

  return { ...laptop, score, portabilityScore, normalized };
}

function filterAndRank(criteria) {
  return LAPTOPS
    .filter((laptop) => criteria.need === "all" || laptop.loai_nhu_cau === criteria.need)
    .filter((laptop) => laptop.gia <= criteria.budget)
    .filter((laptop) => laptop.trong_luong <= criteria.maxWeight)
    .filter((laptop) => laptop.cpu_score >= criteria.minCpu)
    .filter((laptop) => laptop.gpu_score >= criteria.minGpu)
    .filter((laptop) => laptop.pin_score >= criteria.minBattery)
    .map((laptop) => scoreLaptop(laptop, criteria))
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
    <article class="laptop-card ${index === 0 ? "top-result" : ""}">
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

function analyze(event) {
  event.preventDefault();
  const criteria = getFormData();
  renderResults(filterAndRank(criteria), criteria);
}

document.querySelectorAll('input[type="range"]').forEach((input) => input.addEventListener("input", updateRangeLabels));
form.addEventListener("submit", analyze);
updateRangeLabels();
renderResults(filterAndRank(getFormData()), getFormData());
