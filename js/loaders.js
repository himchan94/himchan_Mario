export function loadImage(url) {
  return new Promise((resolve) => {
    const image = new Image();
    image.addEventListener("load", () => {
      console.log("img", image);
      resolve(image);
    });
    image.src = url;
  });
}

export function loadLevel(name) {
  return fetch(`/levels/${name}.json`).then((r) => r.json());
}
