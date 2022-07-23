let arr =JSON.parse(localStorage.getItem("arr")) || [];

document.getElementById('srtfrfr').addEventListener("click",()=>{
    let o={};
    o.email = document.querySelector('.pg1cnt>div>input').value;
    console.log(o.email);
    if(o.email=="")
        document.querySelector('.pg1cnt>h1').innerHTML="please enter valid email";
    else
        {
        document.querySelector('.pg1cnt>h1').innerHTML="verification link is sent to your email pleaser verify";
        }

});