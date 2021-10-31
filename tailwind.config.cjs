const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
      extend: {
      fontFamily: {
        'sans': ['Unica One']
      }
 
    },
  },

  plugins: [
    require('daisyui')
  ],

  daisyui: {
    styled: true,
    // themes: [
    //   {
    //     'garden': {
    //       "primary": "#80A87D",
    //       "primary-focus": "#48614f",
    //       "primary-content": "#ffffff",
    //       "secondary": "#ecf4e7",
    //       "secondary-focus": "#cde2c1",
    //       "secondary-content": "#24331a",
    //       "accent": "#fae5e5",
    //       "accent-focus": "#f4bebe",
    //       "accent-content": "#322020",
    //       "neutral": "#5d5656",
    //       "neutral-focus": "#2a2727",
    //       "neutral-content": "#e9e7e7",
    //       "base-100": "#e9e7e7",
    //       "base-200": "#d1cccc",
    //       "base-300": "#b9b1b1",
    //       "base-content": "#100f0f",
    //       "info": "#2094f3",
    //       "success": "#009485",
    //       "warning": "#ff9900",
    //       "error": "#ff5724",
    //       "--border-color": "var(--b3)",
    //       "--rounded-box": "1rem",
    //       "--rounded-btn": "0.5rem",
    //       "--rounded-badge": "1.9rem",
    //       "--animation-btn": "0.25s",
    //       "--animation-input": ".2s",
    //       "--btn-text-case": "uppercase",
    //       "--btn-focus-scale": "0.95",
    //       "--navbar-padding": ".5rem",
    //       "--border-btn": "1px",
    //       "--tab-border": "1px",
    //       "--tab-radius": "0.5rem",
    //     },
    //   },
    // ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};

module.exports = config;
