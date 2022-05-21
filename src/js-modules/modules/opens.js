const opens = function(){
    let trigger = document.querySelector('.js__menu-link--search');
    let popup = document.querySelector('.search');

    let cencle = document.querySelector('.search__top--cencle');

    let home = document.querySelector('.menu__link--home');

    let callBack = document.querySelector('.js__callback');

    let callBackPopap = document.querySelector('.callback');

    let callbackClose = document.querySelector('.callback__close');
    
    callBack.addEventListener('click', ()=>{
        callBackPopap.classList.add('show');
    });

    callBack.addEventListener('click', ()=>{
        callBackPopap.classList.add('show');
    });

    callbackClose.addEventListener('click', ()=>{
        callBackPopap.classList.remove('show');
    });

    window.addEventListener('click',(e)=>{
        if(e.target.classList.contains('callback')){
            callBackPopap.classList.remove('show');
        }
    });
    

    trigger.addEventListener('click', ()=>{
        popup.classList.add('show');
    });

    cencle.addEventListener('click', ()=>{
        popup.classList.remove('show');
    });

    home.addEventListener('click', ()=>{
        document.querySelector('.html__menu-open').classList.remove('html__menu-open');
    });

   


};
export default opens;