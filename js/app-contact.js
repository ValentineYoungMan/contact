import * as flsFunctions from "./modules/functions.js";
import {DA} from "./dynamic-adaptive.js";

flsFunctions.isWebp();

function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

//----------------------------------------------
DA();
//----------------------------------------------


//menu burger
const iconMenu = document.querySelector('.menu-icon');
const menuBody = document.querySelector('.menu-body');

let unlock = true;


if (iconMenu) {
    
    iconMenu.addEventListener("click", function(e) {
        // document.body.classList.toggle('_lock')
        // iconMenu.classList.toggle('_active');
        // menuBody.classList.toggle('_active');
        

        if (unlock===true && !iconMenu.classList.contains('_active')){                         //menuBody.classList.contains('_active') && 
            menuBody.classList.add('top-active');
            document.body.classList.add('_lock')
            iconMenu.classList.add('_active');
            menuBody.classList.add('_active');
            animStart()
            unlock=false;
        } else if(unlock===false && iconMenu.classList.contains('_active')) {
            document.body.classList.remove('_lock')
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
            animEnd()
            setTimeout(()=>{
            
                unlock=true;
                menuBody.classList.remove('top-active');
                
            }, 1200);
            
        }

    });
}

//------------------------------



const animItems = document.querySelectorAll('._anim-items');

function animStart() {
    if (animItems.length > 0) {
        for (let i = 0; i < animItems.length; i++) {
            let animItem = animItems[i];
            
            animItem.classList.add('_active2')
        }
    }
}

function animEnd() {
    if (animItems.length > 0) {
        for (let i = 0; i < animItems.length; i++) {
            let animItem = animItems[i];
            animItem.classList.remove('_active2')
        }
    }
}

//---------------------------------------------------------

const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

window.addEventListener("DOMContentLoaded", () => {
    if (animItems.length > 0) {
        for (let i = 0; i < animItems.length; i++) {
            let animItem = animItems[i];
            
            if (viewport_width > 767) {
                animItem.classList.add('_anim-initial')
            } else{
                animItem.classList.remove('_anim-initial')
            }
        }
    }
})

//------------------------------

let header = document.querySelector('.header');
let body = document.querySelector('body');


let scrollY1 = 0;

window.addEventListener('scroll', ()=>{

    let scrollY2 = window.pageYOffset;

     if(document.documentElement.scrollTop===0) {
            
        setTimeout(()=>{
            header.classList.remove('blackBackground')
        }, 300);

        scrollY1 = scrollY2    
    } else if (scrollY2 < scrollY1){
        header.classList.add('blackBackground')
        header.classList.remove('hide')
        scrollY1 = scrollY2 
    }else if(document.documentElement.scrollTop!==0){
        header.classList.add('hide')
        scrollY1 = scrollY2
    }
})


//------------------------------

let formButton = document.querySelector('.block1-button');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup-close');
let block1 = document.querySelector('.block1');
let block1Container = document.querySelector('.block1-container');
//let block1Text = document.querySelector('.block1-text');


//робимо це для того, щоб отримати ширину скролу, який ми будемо приховувати
const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
const lockPaddingValue2 = window.innerWidth - document.querySelector('.wrapper').offsetWidth;


formButton.addEventListener('click', ()=>{
    popup.classList.add('_open');
   // block1Text.classList.add('_open');
    body.classList.add('_lock');

    body.style.paddingRight = lockPaddingValue;
    header.style.paddingRight = lockPaddingValue;
    block1.style.paddingRight = lockPaddingValue;
    block1Container.style.paddingLeft = lockPaddingValue2 + 17+'px';
})

popupClose.addEventListener('click', (e)=>{
    e.preventDefault();
    popup.classList.remove('_open');
    //block1Text.classList.add('_open');
    body.classList.remove('_lock');
    body.style.paddingRight = '0px';
    header.style.paddingRight = '0px';
    block1.style.paddingRight = '0px';
    block1Container.style.paddingLeft = '17px';
    
    
})

//------------------------------

function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

//---------------------------------

let sendForm = document.querySelector('.form-button');
let inputItems = document.querySelectorAll('.input-name-item');
let inputEmail = document.querySelector('.input-email-item');

sendForm.addEventListener('click', (e)=>{

    e.preventDefault();

    for (let i = 0; i < inputItems.length; i++){

        inputItems[i].classList.remove('error');

        if (!inputItems[i].value){
            inputItems[i].classList.add('error');
            console.log(inputItems[i].value)
        }

       // console.log(emailTest(inputEmail))
    }
    
    if (emailTest(inputEmail)) {
        inputEmail.classList.add('error');
    }
})
