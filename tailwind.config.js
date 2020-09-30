module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: false,
  },
  theme: {
    extend: {
      colors: {
        gold: '#c4b423',
      },
      fontFamily: {
        'helvet': 'Helvetica, Arial, sans-serif',
      },
      screens: {
        'portrait': {'raw': '(orientation: portrait)'},
      },
    },
  },
  variants: {},
  plugins: [],
};
