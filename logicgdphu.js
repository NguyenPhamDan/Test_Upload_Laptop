const list = document.querySelector("#laptop-list");
const searchInput = document.querySelector("#search-input");
const categoryFilter = document.querySelector("#category-filter");
const listCount = document.querySelector("#list-count");
const modal = document.querySelector("#detail-modal");
const detailContent = document.querySelector("#detail-content");

const categoryLabels = { van_phong: "Văn phòng / Học tập", gaming: "Gaming", do_hoa: "Đồ họa / Máy trạm" };
const formatPrice = (price) => `${price.toFixed(2).replace(".", ",")} triệu đồng`;
const formatRam = (ram) => `${ram} GB`;
const formatStorage = (rom) => rom >= 1024 ? `${rom / 1024} TB` : `${rom} GB`;

function getFilteredLaptops() {
	const query = searchInput.value.trim().toLowerCase();
	const category = categoryFilter.value;
	return LAPTOPS_FULL_DATA.filter((laptop) => {
		const searchable = [laptop.ten, laptop.hang, laptop.cpu, laptop.gpu, laptop.loai_nhu_cau].join(" ").toLowerCase();
		return (!query || searchable.includes(query)) && (category === "all" || laptop.loai_nhu_cau === category);
	});
}

function renderList() {
	const laptops = getFilteredLaptops();
	listCount.textContent = `${laptops.length} mẫu laptop`;
	if (!laptops.length) {
		list.innerHTML = '<div class="empty-state"><strong>Không tìm thấy laptop</strong><span>Thử từ khóa hoặc nhóm nhu cầu khác.</span></div>';
		return;
	}
	list.innerHTML = laptops.map((laptop) => `
		<button class="laptop-card" type="button" data-laptop-id="${laptop.id}">
			<span class="card-number">${String(laptop.id).padStart(2, "0")}</span>
			<span class="card-body"><span class="brand-label">${laptop.hang}</span><strong>${laptop.ten}</strong><span class="card-meta">${categoryLabels[laptop.loai_nhu_cau]} · ${laptop.cpu.replaceAll("_", " ")} · ${laptop.gpu.replaceAll("_", " ")}</span></span>
			<span class="card-price">${formatPrice(laptop.gia)} <b>→</b></span>
		</button>`).join("");
}

function renderDetails(laptop) {
	detailContent.innerHTML = `
		<p class="eyebrow">CHI TIẾT SẢN PHẨM</p>
		<div class="detail-heading"><div><span class="brand-label">${laptop.hang}</span><h2 id="detail-title">${laptop.ten}</h2><p class="category-tag">${categoryLabels[laptop.loai_nhu_cau]}</p></div><strong class="detail-price">${formatPrice(laptop.gia)}</strong></div>
		<div class="spec-table" role="table" aria-label="Thông số laptop">
			${[
				["Bộ xử lý (CPU)", laptop.cpu.replaceAll("_", " ")],
				["Card đồ họa (GPU)", laptop.gpu.replaceAll("_", " ")],
				["RAM", `${formatRam(laptop.ram)} · ${laptop.TTRam.replaceAll("_", " ")}`],
				["Ổ cứng", `${formatStorage(laptop.rom)} · ${laptop.TTrom.replaceAll("_", " ")}`],
				["Màn hình", `${laptop.man_hinh} · ${laptop.pixel.replaceAll("*", " × ")}`],
				["Tần số quét", laptop.tan_so_quet],
				["Độ sáng", laptop.do_sang],
				["Khối lượng", `${laptop.trong_luong.toFixed(2).replace(".", ",")} kg`],
				["Pin / sạc", laptop.Pin.replaceAll("_", " ")],
				["Hệ điều hành", laptop.he_dieu_hanh],
				["Kết nối", laptop.ket_noi]
			].map(([label, value]) => `<div class="spec-row"><span>${label}</span><strong>${value}</strong></div>`).join("")}
		</div>`;
	modal.hidden = false;
	document.body.classList.add("modal-open");
}

list.addEventListener("click", (event) => {
	const card = event.target.closest("[data-laptop-id]");
	if (card) renderDetails(LAPTOPS_FULL_DATA.find((laptop) => laptop.id === Number(card.dataset.laptopId)));
});
document.querySelectorAll("[data-close-modal]").forEach((element) => element.addEventListener("click", () => {
	modal.hidden = true;
	document.body.classList.remove("modal-open");
}));
searchInput.addEventListener("input", renderList);
categoryFilter.addEventListener("change", renderList);
renderList();