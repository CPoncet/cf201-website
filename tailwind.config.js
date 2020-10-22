module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#f19066",
      secondary: "#f8c8b3",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      primary: "#f19066",
    }),
    extend: {},
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
