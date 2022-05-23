const cart = function(){
    const clr = document.querySelector('.cart__order--clear');

    const minuses = document.querySelectorAll('.cart__order-item-count-minus');
    const pluses = document.querySelectorAll('.cart__order-item-count-plus');

    clr.addEventListener('click', ()=>{
        document.querySelector('.cart__order').remove();
        if(clr.closest('.popup-cart')){
            document.querySelector('.popup-cart').remove('show');
        }
    });

    window.addEventListener('click', (e)=>{
        if(e.target.classList.contains('cart__order-item-dellete')){
            
            if(e.target.closest('.cart__order-list').querySelectorAll('li').length==1){
                
                document.querySelector('.cart__order').remove();
                document.querySelector('.popup-cart').remove('show');
            }
            e.target.closest('li').remove();
        }
    });

    minuses.forEach((item)=>{
        item.addEventListener('click', ()=>{
            let count = item.closest('.cart__order-item-count').querySelector('.cart__order-item-count-value').value;
            
            if(count>1){
                item.closest('.cart__order-item-count').querySelector('.cart__order-item-count-value').value--;
            }
        });
    });

    pluses.forEach((item)=>{
        item.addEventListener('click', ()=>{
            item.closest('.cart__order-item-count').querySelector('.cart__order-item-count-value').value++;
        });
    });

};
export default cart;