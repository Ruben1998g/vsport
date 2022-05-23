const search = function(){
    const trigger = document.querySelector('.header__search-input');
    const searchContainer = document.querySelector('.header__search-bottom');

    trigger.addEventListener('click', ()=>{
        searchContainer.classList.add('header__search-bottom--show');
    });

    window.addEventListener('click', (e)=>{
        if(e.target.closest('.header__search')){
        }else{
            searchContainer.classList.remove('header__search-bottom--show');
        }
    });

};
export default search;