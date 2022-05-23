
const sort = function(){
    const triggers = document.querySelectorAll('.category__sort-trigger');
    const theAll = document.querySelectorAll('.js__category__sort-list-item');

    const tabTrigger = document.querySelector('.js__category__sort-table'); 
    const listTrigger = document.querySelector('.js__category__sort-list'); 

    triggers.forEach((item)=>{
        item.addEventListener('click', ()=>{
            triggers.forEach((el)=>{
                if(el != item){
                    el.classList.remove('category__sort-trigger--active')
                }     
            });
            item.classList.toggle('category__sort-trigger--active');
          
        });
    });

    theAll.forEach((item)=>{
        item.addEventListener('click', ()=>{
            let el = item.closest('.category__sort-inner-container').querySelector('.category__sort-trigger');
            el.querySelector('span').setAttribute('class', item.querySelector('span').getAttribute('class'));
            el.querySelector('span').innerHTML = item.querySelector('span').innerHTML;
            el.closest('.category__sort-inner-container').querySelector('.category__sort-trigger--active').classList.remove('category__sort-trigger--active');
        });
    });

    tabTrigger.addEventListener('click', ()=>{
        document.querySelector('body').classList.remove('category-page--list');
    });

    listTrigger.addEventListener('click', ()=>{
        document.querySelector('body').classList.add('category-page--list');
    });
};

export default sort;