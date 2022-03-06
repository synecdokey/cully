const preloadImage = (url: string) => {
  const nextImage = document.createElement("link");
  nextImage.type = "image/jpeg";
  nextImage.href = url;
  nextImage.rel = "preload";
  nextImage.as = "image";
  document.head.appendChild(nextImage);
};

export default preloadImage;
