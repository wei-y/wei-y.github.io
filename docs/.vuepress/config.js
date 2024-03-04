module.exports = {
  title: "Wei's Blog",
  description: "Personal blog, mostly testing automation",
  theme: "reco",
  themeConfig: {
    subSidebar: "auto",
    sidebar: [
      "/",
      {
        title: "Practical Playwright",
        path: "/practical-playwright",
        children: [
          "/practical-playwright/01-installation",
          "/practical-playwright/02-system-under-testing",
        ],
      },
      "/ansible-testing",
    ],
  },
};
