/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        saned: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
        },
      },
    },
  },
  // needed because your code builds class names dynamically like bg-${COLORS.primary}
  safelist: [
    // backgrounds
    "bg-white",
    "bg-teal-500",
    "bg-teal-700",
    "bg-cyan-200",
    "bg-cyan-300",
    "bg-cyan-500",
    "bg-orange-300",
    "bg-orange-500",

    // text colors
    "text-gray-900",
    "text-gray-700",
    "text-gray-600",
    "text-gray-500",
    "text-teal-700",
    "text-teal-500",
    "text-white",

    // borders
    "border-teal-500",
    "border-teal-700",
    "border-orange-500",
    "border-cyan-500",

    // some utility backgrounds used in cards / filters
    "bg-gray-50",
    "bg-gray-100",
    "bg-gray-200",
  ],
  plugins: [],
};
