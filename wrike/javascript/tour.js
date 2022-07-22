document.getElementById("srtfrfre").addEventListener("click", () => {
  document.getElementById("email").style.display = "inline-block";
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 400 && window.innerWidth > 1200)
    document.getElementById("email").style.display = "inline-block";
  else if (window.scrollY < 400)
    document.getElementById("email").style.display = "none";
});

let paras = document.querySelectorAll(".ctn>div>p");
let imgs = document.querySelectorAll("#sldimg>img");
let hds = document.querySelectorAll(".ctn>div>h1");
paras[0].style.display = "block";
imgs[0].style.opacity="1";
for (let i = 0; i < paras.length; i++) {
  let p = paras[i];
  let img = imgs[i];
 
  hds[i].addEventListener("click", () => {
    for (let j = 0; j < paras.length; j++) {
      let p = paras[j];
      let img = imgs[j];
      p.style.display = "none";
      img.style.opacity = "0";
    }

    p.style.display = "block";
    img.style.opacity = "1";
  });
}
