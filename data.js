const LAPTOPS = [
  // --- PHÂN KHÚC VĂN PHÒNG / PHỔ THÔNG ---
  {
    id: 1, ten: "Lenovo IdeaPad Slim 5", hang: "Lenovo", gia: 15.49,
    loai_nhu_cau: "van_phong", cpu_score: 58, gpu_score: 32, trong_luong: 1.46, pin_score: 88
  },
  {
    id: 2, ten: "MacBook Air M3 13 inch", hang: "Apple", gia: 24.49,
    loai_nhu_cau: "van_phong", cpu_score: 78, gpu_score: 52, trong_luong: 1.24, pin_score: 96
  },
  {
    id: 3, ten: "Dell Inspiron 14 Plus", hang: "Dell", gia: 20.99,
    loai_nhu_cau: "van_phong", cpu_score: 72, gpu_score: 42, trong_luong: 1.60, pin_score: 82
  },
  {
    id: 4, ten: "ASUS Vivobook S 14", hang: "ASUS", gia: 18.99,
    loai_nhu_cau: "van_phong", cpu_score: 68, gpu_score: 38, trong_luong: 1.30, pin_score: 84
  },
  {
    id: 13, ten: "Acer Aspire 5 (Cũ/Likenew)", hang: "Acer", gia: 9.50,
    loai_nhu_cau: "van_phong", cpu_score: 45, gpu_score: 22, trong_luong: 1.70, pin_score: 65
  },
  {
    id: 14, ten: "HP Pavilion 14", hang: "HP", gia: 14.20,
    loai_nhu_cau: "van_phong", cpu_score: 55, gpu_score: 30, trong_luong: 1.41, pin_score: 78
  },
  {
    id: 15, ten: "MacBook Air M1 (Cũ/Likenew)", hang: "Apple", gia: 14.80,
    loai_nhu_cau: "van_phong", cpu_score: 65, gpu_score: 40, trong_luong: 1.29, pin_score: 90
  },
  {
    id: 16, ten: "LG Gram 14 (2025)", hang: "LG", gia: 28.90,
    loai_nhu_cau: "van_phong", cpu_score: 75, gpu_score: 45, trong_luong: 0.99, pin_score: 98
  },
  {
    id: 17, ten: "Dell XPS 13 Copilot+ PC", hang: "Dell", gia: 34.50,
    loai_nhu_cau: "van_phong", cpu_score: 85, gpu_score: 58, trong_luong: 1.19, pin_score: 94
  },

  // --- PHÂN KHÚC GAMING ---
  {
    id: 5, ten: "Acer Nitro V 15", hang: "Acer", gia: 20.99,
    loai_nhu_cau: "gaming", cpu_score: 76, gpu_score: 78, trong_luong: 2.10, pin_score: 56
  },
  {
    id: 6, ten: "Lenovo LOQ 15", hang: "Lenovo", gia: 26.99,
    loai_nhu_cau: "gaming", cpu_score: 84, gpu_score: 86, trong_luong: 2.38, pin_score: 52
  },
  {
    id: 7, ten: "ASUS ROG Zephyrus G14", hang: "ASUS", gia: 41.99,
    loai_nhu_cau: "gaming", cpu_score: 92, gpu_score: 93, trong_luong: 1.65, pin_score: 68
  },
  {
    id: 8, ten: "MSI Katana 15", hang: "MSI", gia: 23.99,
    loai_nhu_cau: "gaming", cpu_score: 81, gpu_score: 88, trong_luong: 2.25, pin_score: 48
  },
  {
    id: 18, ten: "ASUS TUF Gaming F15 (Cũ)", hang: "ASUS", gia: 13.90,
    loai_nhu_cau: "gaming", cpu_score: 60, gpu_score: 62, trong_luong: 2.30, pin_score: 42
  },
  {
    id: 19, ten: "HP Victus 16", hang: "HP", gia: 21.50,
    loai_nhu_cau: "gaming", cpu_score: 74, gpu_score: 75, trong_luong: 2.30, pin_score: 50
  },
  {
    id: 20, ten: "Lenovo Legion Slim 5", hang: "Lenovo", gia: 32.90,
    loai_nhu_cau: "gaming", cpu_score: 88, gpu_score: 90, trong_luong: 2.10, pin_score: 60
  },
  {
    id: 21, ten: "Acer Predator Helios 16", hang: "Acer", gia: 46.50,
    loai_nhu_cau: "gaming", cpu_score: 95, gpu_score: 96, trong_luong: 2.60, pin_score: 45
  },

  // --- PHÂN KHÚC ĐỒ HỌA / TRẠM (WORKSTATION) ---
  {
    id: 9, ten: "Dell Precision 5680", hang: "Dell", gia: 47.99,
    loai_nhu_cau: "do_hoa", cpu_score: 94, gpu_score: 90, trong_luong: 1.91, pin_score: 70
  },
  {
    id: 10, ten: "MacBook Pro M3 Pro 14", hang: "Apple", gia: 48.99,
    loai_nhu_cau: "do_hoa", cpu_score: 96, gpu_score: 86, trong_luong: 1.61, pin_score: 91
  },
  {
    id: 11, ten: "HP ZBook Firefly 14", hang: "HP", gia: 35.99,
    loai_nhu_cau: "do_hoa", cpu_score: 82, gpu_score: 72, trong_luong: 1.45, pin_score: 79
  },
  {
    id: 12, ten: "Lenovo ThinkPad P16s", hang: "Lenovo", gia: 41.99,
    loai_nhu_cau: "do_hoa", cpu_score: 88, gpu_score: 78, trong_luong: 1.70, pin_score: 76
  },
  {
    id: 22, ten: "Dell Precision 7550 (Cũ)", hang: "Dell", gia: 16.50,
    loai_nhu_cau: "do_hoa", cpu_score: 68, gpu_score: 65, trong_luong: 2.49, pin_score: 55
  },
  {
    id: 23, ten: "ASUS ProArt Studiobook 16", hang: "ASUS", gia: 54.00,
    loai_nhu_cau: "do_hoa", cpu_score: 95, gpu_score: 92, trong_luong: 2.20, pin_score: 72
  },
  {
    id: 24, ten: "MSI Creator M16", hang: "MSI", gia: 29.50,
    loai_nhu_cau: "do_hoa", cpu_score: 80, gpu_score: 76, trong_luong: 2.26, pin_score: 58
  },
  {
    id: 25, ten: "MacBook Pro M4 Pro 16 (2025)", hang: "Apple", gia: 59.90,
    loai_nhu_cau: "do_hoa", cpu_score: 99, gpu_score: 94, trong_luong: 2.14, pin_score: 95
  }
];