const tabs = function(){
    const triggers = document.querySelectorAll('.good__bottom-container-triggers-container .goods__bottom-tabs-trigger');
    const containers = document.querySelectorAll('.good__bottom-container--content-container .goods__bottom-tabs-content');


    triggers.forEach((item)=>{
        item.addEventListener('click', (e)=>{
            triggers.forEach((el)=>{
                el.classList.remove('goods__bottom-tabs-trigger--active');
            });
            item.classList.add('goods__bottom-tabs-trigger--active');

            containers.forEach((el)=>{
                el.classList.add('none');
                if(el.getAttribute('data-li-num') == item.getAttribute('data-li-num')){
                    el.classList.remove('none');
                }
            });
        });
    });

};
export default tabs;