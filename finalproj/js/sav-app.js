const imagesToLoad = document.querySelectorAll("[fat-data]");

/*const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 50px 0px"
};*/

const imgObserver = new IntersectionObserver((entries, imgObserver))

if('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if(item.isIntersecting) {
        loadImages(item.target);
       observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) => {
    imgObserver.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}




/*const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("fat-data"));
  image.onload = () => {
    image.removeAttribute('fat-data');
  };
};

imagesToLoad.forEach((img) => {
  imgObserver.observe(img);
});

/* setTimeout(() => { imagesToLoad.forEach((img) => {
  loadImages(img);
})}, 1000) */
