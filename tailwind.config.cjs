const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        main: '#0C0020',
        secondaryText: '#BAADCF',
        greyText: '#94a3b8',
        highlightText: '#9acd32',
      },
    },
  }
};

module.exports = config;
