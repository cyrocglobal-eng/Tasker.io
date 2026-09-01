import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#E4231F",
          50: "#FEF2F2",
          100: "#FEE2E1",
          200: "#FCC5C3",
          300: "#F99B98",
          400: "#F4605C",
          500: "#E4231F",
          600: "#C71915",
          700: "#A31411",
          800: "#851512",
          900: "#6F1815",
          950: "#3D0705",
        },
        ink: {
          DEFAULT: "#0A0A0B",
          soft: "#141416",
          muted: "#26262A",
        },
        paper: "#FAFAF9",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      fontWeight: {
        "500": "500",
        "600": "600",
        "700": "700",
        "800": "800",
      },
      spacing: {
        "4.5": "1.125rem",
        "5.5": "1.375rem",
      },
      maxWidth: {
        container: "1200px",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
export default config;
