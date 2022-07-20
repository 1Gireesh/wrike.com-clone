
document.getElementById('srtfrfre').addEventListener("click",()=>{
    document.getElementById('email').style.display="inline-block";
});

window.addEventListener("scroll",()=>{
if(window.scrollY>400 && window.innerWidth>1200)
    document.getElementById('email').style.display="inline-block";
 
else if(window.scrollY<400)
    document.getElementById('email').style.display="none";
});

