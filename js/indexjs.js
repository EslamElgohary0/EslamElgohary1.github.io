let menu=document.querySelector('.container_1  .click i');


menu.addEventListener('click',function(){
    document.querySelector('.menu').style.display='block';
    document.querySelector('.container_1  .click i').style.display='none';
})
document.addEventListener('click',function(event){
    if((!event.target.closest('.menu')) && (event.target !==menu)){
        document.querySelector('.menu').style.display='none';
    document.querySelector('.container_1  .click i').style.display='block';

    }
})
let form=document.querySelector('.search form');
form.addEventListener('submit',function(event){
    event.preventDefault();
    let input=document.querySelector('.search input')
    let put=String(input.value).toLocaleLowerCase().trim();
    if(put==='men'){
    location.href='cart.html';
    }
    else if(put==='woman'){
        location.href='index7.html';
    }
    else if(put==='kids'){
        location.href='israa.html';
    }
    else{
        window.alert('serach about men or woman or kids only')
    }

})

