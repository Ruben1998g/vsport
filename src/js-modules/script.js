import Swiper from './modules/swip';

import Sliders from './modules/sliders';

import menuOpen from './modules/menu-open';

import opens from './modules/opens';

import search from './modules/search';

import clear from './modules/clear';

import cart from './modules/cart';

import tabs from './modules/tabs';

import good from './modules/good';

import cartOpen from './modules/cart-open';

import sort from './modules/sort';

document.addEventListener('DOMContentLoaded', ()=>{
    try{
        Swiper();
    }catch(error){};

    try{
        Sliders();
    }catch(error){};

    try{
        menuOpen();
    }catch(error){};

    try{
        opens();
    }catch(error){};

    try{
        search();
    }catch(error){};

    try{
        clear();
    }catch(error){};
    
    try{
        cart();
    }catch(error){};

    try{
        tabs();
    }catch(error){};
    
    try{
        good();
    }catch(error){};

    try{
        cartOpen();
    }catch(error){};
    
    try{
        sort();
    }catch(error){};

});


