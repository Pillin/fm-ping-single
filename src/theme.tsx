export const themes = {
  light: {
    name: "LIGHTMODE",
    background: {
      desktop: "/images/bg-desktop-light.jpg",
      mobile: "/images/bg-mobile-light.jpg"
    },
    typography: {
      p: {
        color: "#9495A5"
      }
    }
  },
};

export type Theme = typeof themes.light;