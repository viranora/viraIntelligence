import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Garanti olsun diye src de ekledik
  ],
  // Bu renkleri ASLA silme, her zaman oluştur:
  safelist: [
    "bg-vintage-900",
    "bg-vintage-800",
    "bg-vintage-500",
    "bg-vintage-200",
    "bg-vintage-100",
    "text-vintage-900",
    "text-vintage-100",
  ],
  theme: {
    extend: {
      colors: {
        vintage: {
          900: "#231709", // Çok koyu kahve (Arka plan)
          800: "#3d2b1f", // Panel renkleri
          500: "#b08968", // Mat Altın/Hardal (Butonlar)
          400: "#ddb892", // Vurgular
          200: "#e6ccb2", // Eski Kağıt (Listeler)
          100: "#ede0d4", // Açık Krem (Kartlar)
          50:  "#f7f1e3", // Yazı alanları
          text: "#432818" // Koyu kahve yazı rengi
        }
      },
    },
  },
  plugins: [],
};
export default config;