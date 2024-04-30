let form=document.querySelector('form');

form.addEventListener('submit',function(event){
    let check1=0;
    let check2=0;
    event.preventDefault();
    let arr_email=JSON.parse(localStorage.getItem('email'));
    if (!Array.isArray(arr_email)) {
        arr_email = [];
    }
    let arr_password=JSON.parse(localStorage.getItem('password'));
    if (!Array.isArray(arr_password)) {
        
        arr_password = [];
    }
    let email=document.getElementById('x').value;
    let password=document.getElementById('y').value;
    for(let x of arr_email){
        if(x===email){
            check1=1;
        }
    }
    for(let y of arr_password){
        if(y===password){
        check2=1;}
    }
    if(check1===1 && check2===1){
        window.location.href='index7.html'

    }
    else{
        document.getElementById('x').setAttribute('placeholder','try agian');
        document.getElementById('x').style.border='2px solid red';
        document.getElementById('y').setAttribute('placeholder','try agian');
        document.getElementById('y').style.border='2px solid red';
        

    }
    

   

})