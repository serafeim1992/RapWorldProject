
const menuBtn =document.querySelector('.user-nav');
const interviewBox =document.getElementById('first');
const interviewBoxes = document. querySelectorAll('.jstext');

const buttonBackToMenu = document.querySelector('.button');

const preLoad= document.getElementById('preloader');
const container= document.querySelector('.container');



function containerHidden(){
  container.style.visibility='hidden';
  
}


window.addEventListener('load',()=>{
  containerHidden();
  preLoad.style.display="none";
  container.style.visibility='visible';
  scroll();
});




function menuChangeHandler(){
    const navigation= document.querySelector('.navigation');
    const navigationItems=document.querySelector('.navigation__list');
    const navigationLink= document.querySelectorAll('.navigation__link');
    menuBtn.classList.toggle('open__menu');
    navigation.classList.toggle('navigation-open');
    navigationItems.classList.toggle('navigation-ul');
      
    
          navigationLink.forEach((link)=>{
            link.addEventListener('click',()=>{
               menuBtn.classList.remove('open__menu');
              navigation.classList.remove('navigation-open');
              navigationItems.classList.remove('navigation-ul');
    });
  }) 
}



function scroll(){
  let scrollpos= 600;
  let windowY = window.scrollY;
   if(windowY > scrollpos){
     buttonBackToMenu.classList.add('disc');
     buttonBackToMenu.style.transition='.1s';
   } else {
     buttonBackToMenu.classList.remove('disc');
   
     buttonBackToMenu.style.transition='.1s';
   }  

}



function backToTopHandler(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

  menuChangeHandler();
      
}



interviewBoxes.forEach((box)=>{
  const text = document.createElement('p');
  box.addEventListener('mouseover',()=>{text.innerHTML=` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil eaque ut molestiae laudantium. 
  Veritatis mollitia alias sunt inventore? Provident, non.`
text.classList.add('text__interview');
  box.appendChild(text);
})
box.addEventListener('mouseleave',()=>{
   text.innerHTML="";
   text.classList.remove('text__interview');
  
})
})


function textButtonHandler(){
  const buttonText = document.querySelector('.button__text');
  buttonText.textContent='menu';
  buttonBackToMenu.addEventListener('mouseleave',()=>{
    buttonText.textContent='';
  })
   
}



window.addEventListener('scroll',scroll);

buttonBackToMenu.addEventListener('mouseover',textButtonHandler, false);

menuBtn.addEventListener('click', menuChangeHandler);
buttonBackToMenu.addEventListener('click', backToTopHandler);

