const opens = function(){
    let trigger = document.querySelector('.js__menu-link--search');
    let popup = document.querySelector('.search');

    let cencle = document.querySelector('.search__top--cencle');

    let home = document.querySelector('.menu__link--home');

    let callBack = document.querySelector('.js__callback');

    let callBackPopap = document.querySelector('.callback');

    let callbackClose = document.querySelector('.callback__close');

    let allTriggers= document.querySelectorAll('.category__fil-container-inner-list-item');

    
    let theOpens = document.querySelectorAll('.category__fil-container-list-item-trigger');

    
    let theMainFill = document.querySelector('.category__filters-open-trigger');
    let theMainCon = document.querySelector('.category__filters');

    theMainFill.addEventListener('click', ()=>{
        theMainCon.classList.toggle('none');
    });


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



    theOpens.forEach((item)=>{
        item.addEventListener('click', ()=>{
            item.classList.toggle('category__fil-container-list-item-trigger--open');
        });
    });
   
    window.addEventListener('click', (e)=>{
        if(e.target.classList.contains('category__fil-checked--close')){
            e.target.closest('li').remove();
        };

    });

    allTriggers.forEach((item)=>{
        item.addEventListener('click', ()=>{
            let el = document.createElement('li');
            let h4 = document.createElement('h4');
            h4.textContent = item.closest('.category__fil-container-list-item').querySelector('.category__fil-container-list-item-trigger h4').innerHTML;
            let h5 = document.createElement('h5');
            h5.textContent = item.querySelector('label').textContent;
            let butt = document.createElement('button');
            
            butt.classList.add('category__fil-checked--close')
            butt.setAttribute('type', 'button');
            el.appendChild(h4);
            el.appendChild(h5);
            el.appendChild(butt);
            document.querySelector('.category__fil-checked ul').appendChild(el);
        });
    });




};
export default opens;