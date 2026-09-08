const LAPTOPS_FULL_DATA = [
  {
    id: 1, ten: "Lenovo IdeaPad Slim 5", hang: "Lenovo", gia: 15.49,
    loai_nhu_cau: "van_phong", cpu: "Ryzen_AI_5_330", gpu: "AMD Radeon_820M_Graphics", 
    rom: 512, TTrom: "512GB PCIe NVMe SSD", ram: 16, TTRam: "2*2_SODIMM_DDR5-5600", 
    trong_luong: 1.46, display: 14, pixel: "1920*1200", Pin: "60 UBS-C Slim(Wall-mount)"
  },
  {
    id: 2, ten: "MacBook Air M3 13 inch", hang: "Apple", gia: 24.49,
    loai_nhu_cau: "van_phong", cpu: "Apple_M3_8Core", gpu: "Apple_M3_8Core_GPU",
    rom: 256, TTrom: "256GB Unified SSD", ram: 8, TTRam: "8GB_Unified_Memory",
    trong_luong: 1.24, display: 13.6, pixel: "2560*1664", Pin: "52.6Wh_MagSafe_3"
  },
  {
    id: 3, ten: "Dell Inspiron 14 Plus", hang: "Dell", gia: 20.99,
    loai_nhu_cau: "van_phong", cpu: "Core_Ultra_7_155H", gpu: "Intel_Arc_Graphics",
    rom: 512, TTrom: "512GB PCIe NVMe SSD", ram: 16, TTRam: "16GB_LPDDR5x-6400MHz",
    trong_luong: 1.60, display: 14, pixel: "2880*1800", Pin: "64Wh_65W_USB-C"
  },
  {
    id: 4, ten: "ASUS Vivobook S 14", hang: "ASUS", gia: 18.99,
    loai_nhu_cau: "van_phong", cpu: "Ryzen_7_8845HS", gpu: "AMD_Radeon_780M",
    rom: 512, TTrom: "512GB PCIe 4.0 SSD", ram: 16, TTRam: "16GB_LPDDR5X",
    trong_luong: 1.30, display: 14, pixel: "1920*1200", Pin: "75Wh_90W_USB-C"
  },
  {
    id: 13, ten: "Acer Aspire 5 (Cũ/Likenew)", hang: "Acer", gia: 9.50,
    loai_nhu_cau: "van_phong", cpu: "Core_i5_1135G7", gpu: "Intel_Iris_Xe",
    rom: 512, TTrom: "512GB NVMe SSD", ram: 8, TTRam: "8GB_DDR4-3200MHz",
    trong_luong: 1.70, display: 15.6, pixel: "1920*1080", Pin: "48Wh_45W_Adapter"
  },
  {
    id: 14, ten: "HP Pavilion 14", hang: "HP", gia: 14.20,
    loai_nhu_cau: "van_phong", cpu: "Core_i5_1335U", gpu: "Intel_Iris_Xe",
    rom: 512, TTrom: "512GB PCIe NVMe SSD", ram: 16, TTRam: "16GB_DDR4-3200MHz",
    trong_luong: 1.41, display: 14, pixel: "1920*1080", Pin: "43Wh_65W_Smart_AC"
  },
  {
    id: 15, ten: "MacBook Air M1 (Cũ/Likenew)", hang: "Apple", gia: 14.80,
    loai_nhu_cau: "van_phong", cpu: "Apple_M1_8Core", gpu: "Apple_M1_7Core_GPU",
    rom: 256, TTrom: "256GB Unified SSD", ram: 8, TTRam: "8GB_Unified_Memory",
    trong_luong: 1.29, display: 13.3, pixel: "2560*1600", Pin: "49.9Wh_30W_USB-C"
  },
  {
    id: 16, ten: "LG Gram 14 (2025)", hang: "LG", gia: 28.90,
    loai_nhu_cau: "van_phong", cpu: "Core_Ultra_5_125H", gpu: "Intel_Arc_Graphics",
    rom: 512, TTrom: "512GB Gen4 NVMe SSD", ram: 16, TTRam: "16GB_LPDDR5X-7467MHz",
    trong_luong: 0.99, display: 14, pixel: "1920*1200", Pin: "72Wh_65W_Type-C"
  },
  {
    id: 17, ten: "Dell XPS 13", hang: "Dell", gia: 34.50,
    loai_nhu_cau: "van_phong", cpu: "Snapdragon_X_Elite_X1E", gpu: "Qualcomm_Adreno_GPU",
    rom: 512, TTrom: "512GB PCIe 4.0 NVMe", ram: 16, TTRam: "16GB_LPDDR5X-8448MHz",
    trong_luong: 1.19, display: 13.4, pixel: "1920*1200", Pin: "55Wh_60W_AC_Adapter"
  },
  {
    id: 5, ten: "Acer Nitro V 15", hang: "Acer", gia: 20.99,
    loai_nhu_cau: "gaming", cpu: "Core_i5_13420H", gpu: "NVIDIA_RTX_4050_6GB",
    rom: 512, TTrom: "512GB PCIe NVMe SSD", ram: 16, TTRam: "16GB_DDR5-5200MHz",
    trong_luong: 2.10, display: 15.6, pixel: "1920*1080", Pin: "57Wh_135W_AC_Adapter"
  },
  {
    id: 6, ten: "Lenovo LOQ 15", hang: "Lenovo", gia: 26.99,
    loai_nhu_cau: "gaming", cpu: "Core_i7_13650HX", gpu: "NVIDIA_RTX_4060_8GB",
    rom: 512, TTrom: "512GB PCIe 4.0 NVMe", ram: 16, TTRam: "16GB_DDR5-4800MHz",
    trong_luong: 2.38, display: 15.6, pixel: "1920*1080", Pin: "60Wh_170W_Slim_Tip"
  },
  {
    id: 7, ten: "ASUS ROG Zephyrus G14", hang: "ASUS", gia: 41.99,
    loai_nhu_cau: "gaming", cpu: "Ryzen_9_8945HS", gpu: "NVIDIA_RTX_4070_8GB",
    rom: 1024, TTrom: "1TB PCIe 4.0 NVMe M.2", ram: 32, TTRam: "32GB_LPDDR5X-6400MHz",
    trong_luong: 1.65, display: 14, pixel: "2880*1800", Pin: "73Wh_180W_AC_Adapter"
  },
  {
    id: 8, ten: "MSI Katana 15", hang: "MSI", gia: 23.99,
    loai_nhu_cau: "gaming", cpu: "Core_i7_13620H", gpu: "NVIDIA_RTX_4060_8GB",
    rom: 1024, TTrom: "1TB NVMe PCIe Gen4 SSD", ram: 16, TTRam: "16GB_DDR5-5200MHz",
    trong_luong: 2.25, display: 15.6, pixel: "1920*1080", Pin: "53.5Wh_200W_Adapter"
  },
  {
    id: 18, ten: "ASUS TUF Gaming F15 (Cũ)", hang: "ASUS", gia: 13.90,
    loai_nhu_cau: "gaming", cpu: "Core_i5_11400H", gpu: "NVIDIA_RTX_3050_4GB",
    rom: 512, TTrom: "512GB PCIe 3.0 NVMe", ram: 8, TTRam: "8GB_DDR4-3200MHz",
    trong_luong: 2.30, display: 15.6, pixel: "1920*1080", Pin: "48Wh_180W_Adapter"
  },
  {
    id: 19, ten: "HP Victus 16", hang: "HP", gia: 21.50,
    loai_nhu_cau: "gaming", cpu: "Ryzen_7_7840HS", gpu: "NVIDIA_RTX_4050_6GB",
    rom: 512, TTrom: "512GB PCIe Gen4 NVMe", ram: 16, TTRam: "16GB_DDR5-5600MHz",
    trong_luong: 2.30, display: 16.1, pixel: "1920*1080", Pin: "70Wh_230W_Smart_AC"
  },
  {
    id: 20, ten: "Lenovo Legion Slim 5", hang: "Lenovo", gia: 32.90,
    loai_nhu_cau: "gaming", cpu: "Ryzen_7_7840HS", gpu: "NVIDIA_RTX_4060_8GB",
    rom: 512, TTrom: "512GB PCIe 4.0 NVMe", ram: 16, TTRam: "16GB_DDR5-5600MHz",
    trong_luong: 2.10, display: 16, pixel: "2560*1600", Pin: "80Wh_230W_Slim_Tip"
  },
  {
    id: 21, ten: "Acer Predator Helios 16", hang: "Acer", gia: 46.50,
    loai_nhu_cau: "gaming", cpu: "Core_i9_13900HX", gpu: "NVIDIA_RTX_4070_8GB",
    rom: 1024, TTrom: "1TB PCIe Gen4 NVMe", ram: 32, TTRam: "32GB_DDR5-5600MHz",
    trong_luong: 2.60, display: 16, pixel: "2560*1600", Pin: "90Wh_330W_Adapter"
  },
  {
    id: 9, ten: "Dell Precision 5680", hang: "Dell", gia: 47.99,
    loai_nhu_cau: "do_hoa", cpu: "Core_i7_13800H", gpu: "NVIDIA_RTX_A2000_8GB",
    rom: 1024, TTrom: "1TB Gen 4 PCIe SSD", ram: 32, TTRam: "32GB_LPDDR5x-6000MHz",
    trong_luong: 1.91, display: 16, pixel: "1920*1200", Pin: "100Wh_165W_Type-C"
  },
  {
    id: 10, ten: "MacBook Pro M3 Pro 14", hang: "Apple", gia: 48.99,
    loai_nhu_cau: "do_hoa", cpu: "Apple_M3_Pro_11Core", gpu: "Apple_M3_Pro_14Core_GPU",
    rom: 512, TTrom: "512GB Unified SSD", ram: 18, TTRam: "18GB_Unified_Memory",
    trong_luong: 1.61, display: 14.2, pixel: "3024*1964", Pin: "70Wh_70W_USB-C"
  },
  {
    id: 11, ten: "HP ZBook Firefly 14", hang: "HP", gia: 35.99,
    loai_nhu_cau: "do_hoa", cpu: "Core_i7_13700H", gpu: "NVIDIA_RTX_A500_4GB",
    rom: 512, TTrom: "512GB PCIe Gen4 NVMe", ram: 16, TTRam: "16GB_DDR5-5200MHz",
    trong_luong: 1.45, display: 14, pixel: "1920*1200", Pin: "51Wh_65W_USB-C"
  },
  {
    id: 12, ten: "Lenovo ThinkPad P16s", hang: "Lenovo", gia: 41.99,
    loai_nhu_cau: "do_hoa", cpu: "Core_i7_1370P", gpu: "NVIDIA_RTX_A500_4GB",
    rom: 1024, TTrom: "1TB PCIe 4.0 Performance", ram: 32, TTRam: "32GB_LPDDR5x-7500MHz",
    trong_luong: 1.70, display: 16, pixel: "1920*1200", Pin: "86Wh_135W_USB-C"
  },
  {
    id: 22, ten: "Dell Precision 7550 (Cũ)", hang: "Dell", gia: 16.50,
    loai_nhu_cau: "do_hoa", cpu: "Core_i7_10850H", gpu: "NVIDIA_Quadro_T1000_4GB",
    rom: 512, TTrom: "512GB PCIe NVMe SSD", ram: 16, TTRam: "16GB_DDR4-2933MHz",
    trong_luong: 2.49, display: 15.6, pixel: "1920*1080", Pin: "68Wh_180W_Adapter"
  },
  {
    id: 23, ten: "ASUS ProArt Studiobook 16", hang: "ASUS", gia: 54.00,
    loai_nhu_cau: "do_hoa", cpu: "Core_i9_13980HX", gpu: "NVIDIA_RTX_4070_8GB",
    rom: 1024, TTrom: "1TB PCIe 4.0 Performance", ram: 32, TTRam: "32GB_DDR5-5200MHz",
    trong_luong: 2.20, display: 16, pixel: "3200*2000", Pin: "90Wh_240W_AC_Adapter"
  },
  {
    id: 24, ten: "MSI Creator M16", hang: "MSI", gia: 29.50,
    loai_nhu_cau: "do_hoa", cpu: "Core_i7_13700H", gpu: "NVIDIA_RTX_4060_8GB",
    rom: 1024, TTrom: "1TB NVMe PCIe Gen4 SSD", ram: 16, TTRam: "16GB_DDR5-5200MHz",
    trong_luong: 2.26, display: 16, pixel: "2560*1600", Pin: "53.5Wh_180W_Adapter"
  },
  {
    id: 25, ten: "MacBook Pro M4 Pro 16 (2025)", hang: "Apple", gia: 59.90,
    loai_nhu_cau: "do_hoa", cpu: "Apple_M4_Pro_14Core", gpu: "Apple_M4_Pro_20Core_GPU",
    rom: 1024, TTrom: "1TB Unified SSD", ram: 24, TTRam: "24GB_Unified_Memory",
    trong_luong: 2.14, display: 16.2, pixel: "3456*2234", Pin: "100Wh_140W_USB-C"
  }
];

const LAPTOP_DISPLAY_DETAILS = {
  1: { man_hinh: "14 inch IPS", tan_so_quet: "60Hz", do_sang: "300 nits", he_dieu_hanh: "Windows 11 Home", ket_noi: "USB-C, 2 x USB-A, HDMI 1.4, Wi-Fi 6" },
  2: { man_hinh: "13.6 inch Liquid Retina IPS", tan_so_quet: "60Hz", do_sang: "500 nits", he_dieu_hanh: "macOS", ket_noi: "2 x Thunderbolt / USB 4, MagSafe 3, Wi-Fi 6E" },
  3: { man_hinh: "14 inch IPS", tan_so_quet: "90Hz", do_sang: "400 nits", he_dieu_hanh: "Windows 11 Home", ket_noi: "Thunderbolt 4, USB-A, HDMI 2.1, Wi-Fi 6E" },
  4: { man_hinh: "14 inch OLED", tan_so_quet: "120Hz", do_sang: "600 nits HDR", he_dieu_hanh: "Windows 11 Home", ket_noi: "USB-C, USB-A, HDMI 1.4, Wi-Fi 6E" },
  5: { man_hinh: "15.6 inch IPS", tan_so_quet: "144Hz", do_sang: "250 nits", he_dieu_hanh: "Windows 11 Home", ket_noi: "USB-C, 3 x USB-A, HDMI 2.1, RJ-45" },
  6: { man_hinh: "15.6 inch IPS", tan_so_quet: "144Hz", do_sang: "350 nits", he_dieu_hanh: "Windows 11 Home", ket_noi: "USB-C, USB-A, HDMI 2.1, RJ-45, Wi-Fi 6" },
  7: { man_hinh: "14 inch ROG Nebula IPS", tan_so_quet: "120Hz", do_sang: "500 nits", he_dieu_hanh: "Windows 11 Home", ket_noi: "USB-C, USB-A, HDMI 2.1, Wi-Fi 6E" },
  8: { man_hinh: "15.6 inch IPS", tan_so_quet: "144Hz", do_sang: "250 nits", he_dieu_hanh: "Windows 11 Home", ket_noi: "USB-C, 3 x USB-A, HDMI 2.1, RJ-45" },
  9: { man_hinh: "16 inch IPS sRGB 100%", tan_so_quet: "60Hz", do_sang: "500 nits", he_dieu_hanh: "Windows 11 Pro", ket_noi: "2 x Thunderbolt 4, USB-A, HDMI 2.1, Wi-Fi 6E" },
  10: { man_hinh: "14.2 inch Liquid Retina XDR mini-LED", tan_so_quet: "120Hz ProMotion", do_sang: "1600 nits HDR", he_dieu_hanh: "macOS", ket_noi: "3 x Thunderbolt 4, HDMI, MagSafe 3, Wi-Fi 6E" },
  11: { man_hinh: "14 inch IPS 100% sRGB", tan_so_quet: "60Hz", do_sang: "400 nits", he_dieu_hanh: "Windows 11 Pro", ket_noi: "2 x Thunderbolt 4, USB-A, HDMI 2.1, Wi-Fi 6E" },
  12: { man_hinh: "16 inch IPS 100% sRGB", tan_so_quet: "60Hz", do_sang: "400 nits", he_dieu_hanh: "Windows 11 Pro", ket_noi: "2 x Thunderbolt 4, USB-A, HDMI 2.1, RJ-45" },
  13: { man_hinh: "15.6 inch IPS", tan_so_quet: "60Hz", do_sang: "250 nits", he_dieu_hanh: "Windows 11 Home", ket_noi: "USB-C, 3 x USB-A, HDMI 2.0, RJ-45" },
  14: { man_hinh: "14 inch IPS", tan_so_quet: "60Hz", do_sang: "250 nits", he_dieu_hanh: "Windows 11 Home", ket_noi: "USB-C, 2 x USB-A, HDMI 1.4, Wi-Fi 6" },
  15: { man_hinh: "13.3 inch Retina IPS", tan_so_quet: "60Hz", do_sang: "400 nits", he_dieu_hanh: "macOS", ket_noi: "2 x Thunderbolt / USB 4, Wi-Fi 6" },
  16: { man_hinh: "14 inch IPS", tan_so_quet: "60Hz", do_sang: "400 nits", he_dieu_hanh: "Windows 11 Home", ket_noi: "2 x Thunderbolt 4, USB-A, HDMI 2.1, Wi-Fi 6E" },
  17: { man_hinh: "13.4 inch IPS", tan_so_quet: "120Hz", do_sang: "500 nits", he_dieu_hanh: "Windows 11 Home", ket_noi: "2 x USB-C, USB-A, microSD, Wi-Fi 7" },
  18: { man_hinh: "15.6 inch IPS", tan_so_quet: "144Hz", do_sang: "250 nits", he_dieu_hanh: "Windows 11 Home", ket_noi: "USB-C, 3 x USB-A, HDMI 2.0, RJ-45" },
  19: { man_hinh: "16.1 inch IPS", tan_so_quet: "144Hz", do_sang: "300 nits", he_dieu_hanh: "Windows 11 Home", ket_noi: "USB-C, 3 x USB-A, HDMI 2.1, RJ-45" },
  20: { man_hinh: "16 inch IPS 100% sRGB", tan_so_quet: "165Hz", do_sang: "500 nits", he_dieu_hanh: "Windows 11 Home", ket_noi: "USB-C, 3 x USB-A, HDMI 2.1, RJ-45" },
  21: { man_hinh: "16 inch Mini LED", tan_so_quet: "240Hz", do_sang: "1000 nits", he_dieu_hanh: "Windows 11 Home", ket_noi: "Thunderbolt 4, USB-C, USB-A, HDMI 2.1, RJ-45" },
  22: { man_hinh: "15.6 inch IPS", tan_so_quet: "60Hz", do_sang: "300 nits", he_dieu_hanh: "Windows 10 Pro", ket_noi: "Thunderbolt 3, USB-A, HDMI 2.0, RJ-45" },
  23: { man_hinh: "16 inch OLED 3.2K", tan_so_quet: "120Hz", do_sang: "500 nits", he_dieu_hanh: "Windows 11 Pro", ket_noi: "Thunderbolt 4, USB-C, USB-A, HDMI 2.1, RJ-45" },
  24: { man_hinh: "16 inch IPS 100% DCI-P3", tan_so_quet: "120Hz", do_sang: "500 nits", he_dieu_hanh: "Windows 11 Home", ket_noi: "USB-C, 2 x USB-A, HDMI 2.1, RJ-45" },
  25: { man_hinh: "16.2 inch Liquid Retina XDR mini-LED", tan_so_quet: "120Hz ProMotion", do_sang: "1600 nits HDR", he_dieu_hanh: "macOS", ket_noi: "3 x Thunderbolt 5, HDMI, SDXC, MagSafe 3" }
};

LAPTOPS_FULL_DATA.forEach((laptop) => {
  Object.assign(laptop, LAPTOP_DISPLAY_DETAILS[laptop.id] || {});
});