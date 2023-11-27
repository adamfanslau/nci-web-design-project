function carouselImgClick(e) {
    const target = e.target;
    const imgDesc = target.children[0] || target;
    const display = imgDesc.style.display;
    console.log(display, imgDesc);
    imgDesc.style.display = display === "block" ? "none" : "block";
  }
  
  const carousel = document.querySelector(".carousel-inner");
  carousel.addEventListener("click", carouselImgClick);
  
  function hideDescr(e) {
    const images = document.querySelectorAll(".image-description");
    for(let i = 0; i<images.length; i++){
      images[i].style.display = "none";
    
    }
  }
  
  const next = document.querySelector(".carousel-control-next");
  const prev = document.querySelector(".carousel-control-prev");
  
  next.addEventListener("click", hideDescr);
  prev.addEventListener("click", hideDescr);