/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff5748",
        secondary: "#007bff",
      },
      fontSize: {
        h1: ["48px", { lineHeight: "56px", fontWeight: "700" }],
        h2: ["28px", { lineHeight: "36px", fontWeight: "700" }],
        h4: ["18px", { lineHeight: "32px", fontWeight: "700" }],
        h5: ["18px", { lineHeight: "24px", fontWeight: "700" }],
        h6: ["16px", { lineHeight: "24px", fontWeight: "700" }],
        h7: ["14px", { lineHeight: "24px", fontWeight: "700" }],
        h8: ["12px", { lineHeight: "24px", fontWeight: "700" }],
        p: ["14px", { lineHeight: "24px", fontWeight: "400" }],
        "p-large": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "p-small-medium": ["12px", { lineHeight: "150%", fontWeight: "500" }],
        "p-small-light": ["12px", { lineHeight: "150%", fontWeight: "400" }],
      },
    },
  },
  plugins: [],
};
