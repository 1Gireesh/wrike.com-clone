let arr = [
    "The end goal was to create an agile professional design engine. Wrike was our top pick it was the one solution that we felt could make this a reality","I'm thankful for Wrike. It's a fast-paced world, and we're all trying to keep up. Wrike helps me do just that.","Everyone is in Wrike daily, we’ve built one story and one version of the truth. And that is a game changer for us. Now we do our project reviews in Wrike: no more need for presentations, word documents, or any of this additional work.",'yes it was the one system that met each and every one of our team’s comprehensive and complex requirements.',"I'm thankful for Wrike. It's a fast-paced world, and we're all trying to keep up. Wrike helps me do just that."
]
let imgs = [
    "https://web-static.wrike.com/cdn-cgi/image/width=927,fit=cover,format=auto,q=80/content/uploads/2021/07/rebrand-quote-slider_image_kitchenaid_2x.jpg?av=a815976b26dc1095c756e1a2175f9e4d","https://web-static.wrike.com/cdn-cgi/image/width=927,fit=cover,format=auto,q=80/content/uploads/2021/06/rebrand-quote-slider_image_monumental_2x.jpg?av=a486ca287bf5dc44431588aa22150ca9","https://web-static.wrike.com/cdn-cgi/image/width=927,fit=cover,format=auto,q=80/content/uploads/2021/01/rebrand-quote-slider_image_walmart_canada_2x.jpg?av=d5e35691719cb1e63e834465386bfcf9","https://web-static.wrike.com/cdn-cgi/image/width=927,fit=cover,format=auto,q=80/content/uploads/2022/03/rebrand-quote-slider_image_texas-rangers_2x.png?av=0c496b6cadbd59fead0695de3e43f5c5","https://web-static.wrike.com/cdn-cgi/image/width=927,fit=cover,format=auto,q=80/content/uploads/2022/01/rebrand-quote-slider_image_syneos-health_2x.jpg?av=675edb298df70721dcf48c02c67ec608"
]
document.getElementById('srtfrfre').addEventListener("click",()=>{
    document.getElementById('email').style.display="inline-block";
});

window.addEventListener("scroll",()=>{
if(window.scrollY>400 && window.innerWidth>1200)
    document.getElementById('email').style.display="inline-block";
 
else if(window.scrollY<400)
    document.getElementById('email').style.display="none";
});

console.log(arr.length);
let slideBtns = document.querySelectorAll('.btns>button');
for(let i=0; i<slideBtns.length; i++){
    let btn = slideBtns[i];
    console.log(imgs.length);
    btn.addEventListener("click",()=>{
        document.querySelector('#pg3>div>img').src = imgs[i];
        document.querySelector('#pg3>div>div>h2').innerText='"'+arr[i]+'"';
    })
}
document.addEventListener("drag",(e)=>{
    let i =Math.floor(Math.random()*4);
    // console.log((Math.random)*4);
    document.querySelector('#pg3>div>img').src = imgs[i];
    document.querySelector('#pg3>div>div>h2').innerText='"'+arr[i]+'"';
})