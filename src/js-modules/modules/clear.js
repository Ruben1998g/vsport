const clear = function(){
    const trigger = document.querySelector('.js__comparison-clear');
    const contents = document.querySelectorAll('.comparison__table tr');
    const noneHave = document.querySelector('.comparison__not-have');

    trigger.addEventListener('click', ()=>{
        contents.forEach((item)=>{
            item.remove();
        });
        noneHave.classList.remove('none');
        trigger.remove();
    });

    window.addEventListener("click", (e)=>{
        if(e.target.classList.contains('comparison__img-container-delete')){
            
            let num = e.target.closest('th').getAttribute('data-num');
            e.target.closest('th').remove();

            document.querySelectorAll(`td[data-num="${num}"]`).forEach((item)=>{
                item.remove();
                if(!document.querySelector('.comparison__table th')){
                    trigger.remove();
                    noneHave.classList.remove('none');
                }
            });

        }
    });
    

};
export default clear;