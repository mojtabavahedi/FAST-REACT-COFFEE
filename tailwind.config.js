/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "346px",
      tablet: "615px",
      ipadmini: "768px",
      ipadpro: "900px",
      desktop: "1280px",
      lgdesktop: "1600px",
    },
    extend: {
      height: {
        screen: "100dvh",
      },
      gridTemplateColumns: {
        mobilewidth: "repeat(1, minmax(0, 615px))",
        tabletwidthupper: "repeat(1,minmax(615px,1920px))",
      },

      fontFamily: {
        vaziri: "vaziri",
      },
    },
  },
  plugins: [require("@xpd/tailwind-3dtransforms")],
};
