
let eye=document.querySelector("i");
let x=true;
eye.addEventListener("click",function(){
    if(x){

    document.querySelector("i").classList.remove("fa-regular" ,"fa-eye");
    document.querySelector("i").classList.add("fa-solid" ,"fa-eye-slash");
    document.querySelector(".password input").type="password";
    x=false;
    }else{
        document.querySelector("i").classList.remove("fa-solid" ,"fa-eye-slash");
    document.querySelector("i").classList.add("fa-regular" ,"fa-eye");
    document.querySelector(".password input").type="text";
    x=true;

    }
})
let menu=document.querySelector(".menu i");
let test=true;

menu.addEventListener("click",function(){
    if(test){
    document.querySelector(".options").style.display="flex";

    test=false;
}
    else{
        document.querySelector(".options").style.display="none";
        test=true;

    }
})
let style2=document.querySelector(".style2");
let style1=document.querySelector(".style1");
let style3=document.querySelector(".style3");
style2.addEventListener("click",function(){
    document.querySelector("h2").style.fontFamily = " 'Courier New', Lucida Console, monospace";
    document.querySelector(".contain").style.boxShadow = "10px 10px 5px red";
    document.querySelector(".options").style.display="none";
    document.querySelector("img").src="images/portrait-handsome-smiling-stylish-young-man-model-wearing-jeans-clothes-fashion-man.jpg";
})
style1.addEventListener("click",function(){
    document.querySelector("h2").style.fontFamily = `"Trebuchet MS", Helvetica, sans-serif`;
    document.querySelector(".contain").style.boxShadow = "10px 10px 5px rgb(117, 110, 110)";
    document.querySelector(".options").style.display="none";
    document.querySelector("img").src="images/ns-37rVmK3jY-c-unsplash.jpg";
})
style3.addEventListener("click",function(){
    document.querySelector("h2").style.fontFamily = "Verdana, sans-serif";
    document.querySelector(".contain").style.boxShadow = "10px 10px 5px green";
    document.querySelector(".options").style.display="none";
    document.querySelector("img").src="images/taras-chernus--au3XMzfhro-unsplash.jpg";
})
let form=document.querySelector('form');
var input1=document.querySelector('.name input');
var input2=document.querySelector('.email input');
var input3=document.querySelector('.password input');
let arr_name=[];
let arr_email=[];
let arr_password=[];
form.addEventListener('submit',function(event){
    event.preventDefault();

var input1=document.querySelector('.name input');
var input2=document.querySelector('.email input');
var input3=document.querySelector('.password input');
   arr_name.push(input1.value);
   arr_email.push(input2.value);
   arr_password.push(input3.value);
   localStorage.setItem('name', JSON.stringify(arr_name));
   localStorage.setItem('email', JSON.stringify(arr_email));
   localStorage.setItem('password', JSON.stringify(arr_password));
    window.location.href='index_5.html';

})

