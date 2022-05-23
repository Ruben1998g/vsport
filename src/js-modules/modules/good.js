const good = function(){
    const trigger = document.querySelector('.good__informations-all-info');

    const optionsThe = document.querySelector('.good__informations-head-title');

    const block = document.querySelector('.good__informations-list--none');

    const labels = document.querySelectorAll('.good__options-list-item-inner-container-label');

    const triggers = document.querySelectorAll('.js__trigger-inner-list-item');

    trigger.addEventListener('click', ()=>{
        document.querySelectorAll('.good__information--li-hidden').forEach((item)=>{
            item.classList.remove('good__information--li-hidden');
        });
        trigger.remove();
    });

    optionsThe.addEventListener('click', ()=>{
        block.classList.toggle('good__informations-list--none');
        optionsThe.classList.toggle('good__informations-head-title--active');
    });

    labels.forEach((item)=>{
        item.addEventListener('click', ()=>{
            item.classList.toggle('good__options-list-item-inner-container-label--show');
            document.querySelectorAll('.good__options-list-item-inner-container-label--show').forEach((el)=>{
                if(el != item){
                    el.classList.remove('good__options-list-item-inner-container-label--show');
                }
            });
        });
    
    });

    triggers.forEach((el)=>{
        el.addEventListener('click', (e)=>{
            let textInner = el.querySelector('span').textContent;
            console.log(textInner);
            el.closest('.good__options-list-item-inner-container').querySelector('.good__options-list-item-inner-container-label').innerHTML = textInner;
            document.querySelector('.good__options-list-item-inner-container-label--show').classList.remove('good__options-list-item-inner-container-label--show');
        });
    });
    

};
export default good;