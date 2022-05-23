const cartOpen = function(){
    let popup = document.querySelector('.popup-cart');

    let cencle = document.querySelector('.popup-cart__close');
    

    window.addEventListener('click', (e)=>{
        if(e.target.classList.contains('popup-cart')){
            popup.classList.remove('show');
        }
    });

    cencle.addEventListener('click', ()=>{
        popup.classList.remove('show');
    });

    window.addEventListener('click',(e)=>{
        if(e.target.classList.contains('js__cart-buy')){
            popup.classList.add('show');
        }
    });


   
};
export default cartOpen;