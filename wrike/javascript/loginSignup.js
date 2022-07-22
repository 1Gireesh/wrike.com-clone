let o =JSON.parse(localStorage.getItem("o")) || {};

document.getElementById('btn1').addEventListener("click",()=>{


    o.email = document.querySelector('.pg1>.ctn>input').value;

    if(o.email=="")
        document.querySelector('.pg1>.ctn>p').innerHTML="please fill valid email";
    else
    {
    document.querySelector('.pg1').style.display="none";
    document.querySelector('.pg2').style.display="block";
    document.querySelector('.pg1').style.left="35%";
    document.querySelector('.pg2').style.left="35%";
    document.querySelector('.pg1').style.top="10%";
    document.querySelector('.pg2').style.top="10%";
    
    }
});
document.getElementById('btn2').addEventListener("click",()=>{

    document.querySelector('.pg1').style.display="block";
    document.querySelector('.pg2').style.display="none";

    
});

document.getElementById('login').addEventListener("click",()=>{

    o.password = document.querySelector('.pg2>.ctn>input').value;

    localStorage.setItem("o",JSON.stringify(o));
});