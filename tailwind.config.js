module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#f19066",
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
