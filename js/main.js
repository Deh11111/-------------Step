let menu = document.querySelector('.menu')
let arrowbtn = document.getElementsByClassName('arrow-up')[0];

menu.addEventListener('click',function(e){
    let target = e.target;
    let links = menu.querySelectorAll(".header_link")
    for(let i = 0;i<links.length;i++){
        let link = links[i];
        link.classList.remove('active2')
    }
    if(target.classList.contains('header_link')){
        target.classList.add('active2')
    }
   

})

window.addEventListener('load',function(){
    let header = document.getElementsByClassName('header')[0];
    let banner = document.getElementsByClassName('banner')[0]
    header.style.transform = 'translateX(0px)';
    banner.style.transform = 'translateX(0px)';

})

window.addEventListener('scroll',function(){
    let currentScroll = window.pageYOffset;
    if(currentScroll>500){
        arrowbtn.classList.add('show')
    }
    else{
        arrowbtn.classList.remove('show')
    }
})

function offset () {
    if(window.pageYOffset == 0){
        alert('Ghbt[fkb')
        window.removeEventListener('scroll',offset)
    }
}

function Plus(e){
    if(confirm("Вы хотите выше?")){ 
        alert("Ну поехали!!!")
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
        window.addEventListener('scroll',offset)
    }
}
 arrowbtn.addEventListener('click',Plus)
 


 $('.sliderbox').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '<button class="slider__arrow slider__next"><svg width="27" height="50" viewBox="0 0 27 50"  xmlns="http://www.w3.org/2000/svg"><path d="M26.1731 23.3953L3.27435 0.559851C2.5241 -0.187888 1.30943 -0.186631 0.560438 0.563719C-0.187975 1.31397 -0.186041 2.52933 0.564306 3.27765L22.1 24.754L0.563532 46.2303C-0.186718 46.9787 -0.188652 48.1932 0.559664 48.9436C0.935127 49.3197 1.42701 49.5078 1.91889 49.5078C2.40952 49.5078 2.89947 49.321 3.27426 48.9475L26.1731 26.1126C26.5344 25.753 26.7372 25.2638 26.7372 24.754C26.7372 24.2442 26.5338 23.7555 26.1731 23.3953Z" fill="black"/></svg></button>',
    prevArrow:'<button class="slider__arrow slider__prev"><svg width="28" height="50" viewBox="0 0 28 50"  xmlns="http://www.w3.org/2000/svg"><path d="M1.43404 26.0282L24.5605 48.6295C25.3182 49.3696 26.545 49.3683 27.3014 48.6257C28.0573 47.8831 28.0553 46.6802 27.2975 45.9396L5.5476 24.6835L27.2983 3.42755C28.056 2.68681 28.058 1.48468 27.3022 0.742031C26.923 0.369747 26.4262 0.183605 25.9294 0.183605C25.4339 0.183605 24.9391 0.368504 24.5606 0.738201L1.43404 23.3389C1.0691 23.6947 0.864315 24.179 0.864315 24.6835C0.864315 25.1881 1.06969 25.6717 1.43404 26.0282Z" fill="black"/></svg></button>'
 })

 $(function(){                                   // Почему не работает без window 'load'??
    $('.slider__next svg').hover(                    
        function() {
            $('.slider__next path').css('fill','rgb(103,36,154,0.5)');
            }, function() {
            $( 'path').css('fill','black');
            }
    )
    $('.slider__prev svg').hover(                    
        function() {
            $('.slider__prev path').css('fill','rgb(103,36,154,0.5)');
            }, function() {
            $( 'path').css('fill','black');
            }
    )
});
/* $(function(){         
                        
                        
                
                
                    
                        
                       
                
/*
let sliderBox = document.querySelector('.sliderbox')
let images = sliderBox.getElementsByTagName('img')
let dotsbox = document.querySelector('.controls-slider')
let dots = dotsbox.getElementsByTagName('li')
let leftArrow = document.querySelector('.left-arrow')
let rightArrow = document.querySelector('.right-arrow')


rightArrow.addEventListener('click',function(){
    let step = 400;
    let counter = 0
    console.log(step)
    counter++;
    sliderBox.style.transform=`translateX(${-step-100*counter}px)`;
})

leftArrow.addEventListener('click',function(){
    let step = 400;
    let counter = 0
    console.log(step)
    counter++;
    sliderBox.style.transform=`translateX(${step-100*counter}px)`;
}) */

let tabs = document.getElementsByClassName('tabs__nav-btn');
let item = document.getElementsByClassName('tabs__item');



for(let i=0;i<tabs.length;i++){
    let tab = tabs[i]
    let it = item[i]
    tab.addEventListener('click',function(){
        console.log(it)
        for(let i = 0 ;i<tabs.length;i++){
            tabs[i].classList.remove('active')
        }
        for(let i = 0 ;i<item.length;i++){
            item[i].classList.remove('active')
        }
        it.classList.add('active')
        tab.classList.add('active')

    });
}


        
    /* for(let i=0;i<tabs.length;i++){
        tabs[i].addEventListener('click',function(){
            let currentBtn =tabs[i]
            let tabId = currentBtn.getAttribute('data-tab')
            let currentTab = document.querySelector(tabId)

             if(!currentBtn.classList.contains('active')){ 
                for(let i = 0 ; i<item.length;i++){
                    item[i].classList.remove('active')
                }
                for(let i=0;i<tabs.length;i++){
                    tabs[i].classList.remove('active')
                }
                currentBtn.classList.add('active')
                currentTab.classList.add('active')
            }
           
        });
    } */



        


    document.querySelector('.tabs__nav-btn').click()   /* document.querySelector('.tabs__nav-btn:nth-child(3)'). click() */ 