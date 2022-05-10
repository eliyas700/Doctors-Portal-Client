module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  themes: [
    {
      mytheme: {
        primary: "#a991f7",
        secondary: "#f6d860",
        accent: "#37cdbe",
        neutral: "#3d4451",
        "base-100": "#ffffff",
      },
    },
    "dark",
    "cupcake",
  ],
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
