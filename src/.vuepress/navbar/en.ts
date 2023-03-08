import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  { text: "Demo", icon: "discover", link: "/demo/" },
  {
    text: "Posts",
    icon: "edit",
    prefix: "/posts/",
    children: [
      {
        text: "Algorithm",
        icon: "edit",
        prefix: "Algorithm/",
        children: [
          { text: "Overview", icon: "edit", link: "1" },
          { text: "Contents", icon: "edit", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "Stat",
        icon: "edit",
        prefix: "Stat/",
        children: [
          {
            text: "Overview",
            icon: "edit",
            link: "1",
          },
          {
            text: "Contents",
            icon: "edit",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "ML", icon: "edit", link: "ML" },
      { text: "DL", icon: "edit", link: "DL" },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "V2 Docs",
    icon: "note",
    link: "https://theme-hope.vuejs.press/",
  },
]);
