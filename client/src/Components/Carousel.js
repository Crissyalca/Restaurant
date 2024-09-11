import { useState, useRef, useEffect } from "react";

export default function Carousel() {
  let slideIndex = 1;
  // const images = [
  //   "/img/bolognese-1.webp",
  //   "img/pesce.jpeg",
  //   "/img/pannacotta.jpg",
  //   "/img/pastaScampi.jpeg",
  //   "img/Polpette.webp",
  //   "/img/tiramisu1.png",
  // ];
  const images = [
    "/img/1.png",
    "/img/2.png",
    "/img/3.png",
    "/img/4.png",
    "/img/5.png",
    "/img/6.png",
  ];
  useEffect(() => {
    showSlides(slideIndex);
  }, []);
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  return (
    <div>
      <div className="gallery">
        <div className=" fade">
          {images.map((url, i) => {
            return (
              <img className="mySlides carousel" src={url} alt="dishes"></img>
            );
          })}
          <div className="dot-container">
            {images.map((_, i) => {
              return (
                <span
                  className="dot"
                  onClick={() => {
                    currentSlide(i + 1);
                  }}
                ></span>
              );
            })}
          </div>
        </div>
        <a
          className="prev"
          onClick={() => {
            plusSlides(-1);
          }}
        >
          ❮
        </a>
        <a
          className="next"
          onClick={() => {
            plusSlides(1);
          }}
        >
          ❯
        </a>
      </div>
    </div>
  );
}
