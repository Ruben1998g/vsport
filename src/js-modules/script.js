import Swiper from './modules/swip';

import Sliders from './modules/sliders';

import menuOpen from './modules/menu-open';

import opens from './modules/opens';

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

});


