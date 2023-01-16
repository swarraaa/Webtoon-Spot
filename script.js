const h1 = document.getElementById("h1"),
  banner = document.getElementById("banner"),
  bannerDiv=document.getElementsByClassName("bannerDiv"),
  button = document.getElementById("buttons"),
  aDiv = document.getElementById("aaa"),
  bDiv = document.getElementById("bbb"),
  cDiv = document.getElementById("ccc"),
  dDiv = document.getElementById("ddd"),
  eDiv = document.getElementById("eee");

const onScroll = (event) => {
  const scrollPosition = event.target.scrollingElement.scrollTop;
  if (scrollPosition >150) {
    banner.style.backgroundSize = "150%";
    h1.style.opacity = 0;
    h1.style.translate = "0 -50px";
    h1.style.scale = "0.9";
    button.style.opacity = 0;
    button.style.translate = "0 -50px";
    button.style.scale = "0.8";
    bannerDiv.style.opacity = 0;
    bannerDiv.style.translate = "0 -50px";
    bannerDiv.style.scale = "0.8";
  } else {
    banner.style.backgroundSize = "180%";
    h1.style.opacity = 1;
    h1.style.translate = 0;
    h1.style.scale = 1;
    button.style.opacity = 1;
    button.style.translate = 0;
    button.style.scale = 1;
    bannerDiv.style.opacity = 1;
    bannerDiv.style.translate = 0;
    bannerDiv.style.scale = 1;
  }
};
const onScrola = (event) => {
  const scrollPosition = event.target.scrollingElement.scrollTop;
  if (scrollPosition >900) {
    aDiv.style.opacity = 0;
    aDiv.style.translate = "0 -50px";
    aDiv.style.scale = "0.8";
  } else {
    aDiv.style.opacity = 1;
    aDiv.style.translate = 0;
    aDiv.style.scale = 1;
  }
};
const onScrollb = (event) => {
  const scrollPosition = event.target.scrollingElement.scrollTop;
  if (scrollPosition >1550) {
    bDiv.style.opacity = 0;
    bDiv.style.translate = "0 -50px";
    bDiv.style.scale = "0.8";
  } else {
    bDiv.style.opacity = 1;
    bDiv.style.translate = 0;
    bDiv.style.scale = 1;
  }
};
const onScrollc = (event) => {
  const scrollPosition = event.target.scrollingElement.scrollTop;
  if (scrollPosition >2350) {
    cDiv.style.opacity = 0;
    cDiv.style.translate = "0 -50px";
    cDiv.style.scale = "0.8";
  } else {
    cDiv.style.opacity = 1;
    cDiv.style.translate = 0;
    cDiv.style.scale = 1;
  }
};
const onScrolld = (event) => {
  const scrollPosition = event.target.scrollingElement.scrollTop;
  if (scrollPosition >3000) {
    dDiv.style.opacity = 0;
    dDiv.style.translate = "0 -50px";
    dDiv.style.scale = "0.8";
  } else {
    dDiv.style.opacity = 1;
    dDiv.style.translate = 0;
    dDiv.style.scale = 1;
  }
};
const onScrolle = (event) => {
  const scrollPosition = event.target.scrollingElement.scrollTop;
  if (scrollPosition >3650) {
    eDiv.style.opacity = 0;
    eDiv.style.translate = "0 -50px";
    eDiv.style.scale = "0.8";
  } else {
    eDiv.style.opacity = 1;
    eDiv.style.translate = 0;
    eDiv.style.scale = 1;
  }
};

document.addEventListener("scroll", onScroll);
document.addEventListener("scroll",onScrola)
document.addEventListener("scroll",onScrollb)
document.addEventListener("scroll",onScrollc)
document.addEventListener("scroll",onScrolld)
document.addEventListener("scroll",onScrolle)