export const patternPosition = [
  { x: 155, y: 10 },
  { x: 267, y: 10 },
  { x: 379, y: 10 },
  { x: 491, y: 10 },
];

export const manifest = {
  bundles: [
    {
      name: "load-screen",
      assets: [
        {
          name: "intro",
          srcs: getUrlPathName("intro.png"),
        },
        {
          name: "startBtn",
          srcs: getUrlPathName("start-btn.png"),
        },
        {
          name: "main",
          srcs: getUrlPathName("main.png"),
        },
      ],
    },
  ],
};


export function getUrlPathName(url) {
  return new URL(`../assets/images/${url}`, import.meta.url).href;
}
