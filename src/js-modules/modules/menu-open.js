const menuOpen = function(){
    const triggers = document.querySelectorAll('.js__header__desktop-menu-item--open-trgger-container .header__desktop-menu-item-link');
    const innerTriggers = document.querySelectorAll('.js__header__desktop-menu-inner-list-container-list-link');

    const links = document.querySelectorAll('.header__desktop-menu-inner-list-container-list-link');
    const blocks = document.querySelectorAll('.header__desktop-menu-inner-list-container-list--innered');

    const theHtml = document.querySelector('html');
    const theOpen = document.querySelector('.js__mobile-menu-open-trigger');
    

    theOpen.addEventListener('click', ()=>{
        theHtml.classList.toggle('html__menu-open');
    });

    const closeIt = function(){
        links.forEach((item)=>{
            item.classList.remove('header__desktop-menu-inner-list-container-list-link--active');
        });

        blocks.forEach((item)=>{
            item.classList.remove('show');
        });
    };

    triggers.forEach((item)=>{
        item.addEventListener('click', (el)=>{
            let cont = item.closest('li').querySelector('.header__desktop-menu-inner-list-container');
            cont.classList.toggle('show');
            item.classList.toggle('header__desktop-menu-item-link--active');
            item.closest('li').querySelectorAll('.header__desktop-menu-inner-list-container .show').forEach((its)=>{
                its.classList.remove('show');
            });
            item.closest('li').querySelectorAll('.header__desktop-menu-inner-list-container-list-link--active').forEach((its)=>{
                its.classList.remove('header__desktop-menu-inner-list-container-list-link--active');
            });
        });
    });

    innerTriggers.forEach((item)=>{
        item.addEventListener('click', (el)=>{
            let cont = item.closest('li').querySelector('.header__desktop-menu-inner-list-container-list--innered');
            
                closeIt();
            cont.classList.toggle('show');
            item.classList.toggle('header__desktop-menu-inner-list-container-list-link--active');
        });
    });


    window.addEventListener('click', (e)=>{
        let flug = e.target.closest('.header__desktop-menu-inner-list-container');
    
        if(flug || e.target.classList.contains('header__desktop-menu-item-link')){
        }else{
            if (document.documentElement.clientWidth >= 1200){
                closeIt();
                document.querySelector('.header__desktop-menu-inner-list-container').classList.remove('show');
                document.querySelector('.header__desktop-menu-item-link--active').classList.remove('header__desktop-menu-item-link--active');
            }
        }
    
    });

};
export default menuOpen;