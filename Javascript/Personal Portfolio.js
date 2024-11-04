

document.addEventListener('DOMContentLoaded',()=>{

    //preloader

    const loader=document.querySelector('.loader-container');

    window.addEventListener('load',()=>{
        loader.style.display='none';
    })

    //mobile navigation menu

    const bars=document.querySelector('.fa-bars');
    const xmark=document.querySelector('.fa-xmark');
    const links=document.querySelector('.links');

    bars.addEventListener('click',()=>{
        links.style.right='0';
    });
    xmark.addEventListener('click',()=>{
        links.style.right='-100%';
    });



    const angle_down=document.querySelector('.fa-angle-down');

     angle_down.addEventListener('click',()=>{
    if(angle_down.parentElement.nextElementSibling.classList.contains('display') && angle_down.classList.contains('rotate')){
        angle_down.parentElement.nextElementSibling.classList.remove('display');
        angle_down.classList.remove('rotate');
    }else{
        angle_down.classList.add('rotate');
        angle_down.parentElement.nextElementSibling.classList.add('display');
    }
     });


    // portfolio section


    const link=document.querySelectorAll('.link');

    link.forEach((e)=>{
    e.addEventListener('click',()=>{
        for(var i=0; i<link.length; i++){
            if(link[i]!==e){
                link[i].classList.remove('color');
                link[i].parentElement.parentElement.nextElementSibling.children[i].style.display='none';
            }else{
                e.classList.add('color');
                e.parentElement.parentElement.nextElementSibling.children[i].style.display='flex';
            }
        }
    });
    });

    //when the page open first button link will be clicked
    document.querySelector('.link').click();




    //accordion section

    const angle=document.querySelectorAll('.fa-angle-down');

    angle.forEach((e)=>{
    e.addEventListener('click',()=>{
        e.parentElement.nextElementSibling.classList.toggle('height');
        e.parentElement.classList.toggle('color');
        e.classList.toggle('rotate');
    });
    });

    //slider container


    const buttons=document.querySelector('.buttons');
    const slides=document.querySelectorAll('.slides')

    for(var j=0; j<slides.length; j++){
    const div=document.createElement('div');
    div.classList='dots';
    buttons.appendChild(div);
    }

    const dots=document.querySelectorAll('.dots');
    const slider=document.querySelector('.slider');


    dots.forEach((e,i)=>{
    e.addEventListener('click',()=>{
        slider.style.transform=`translateX(-${i*100}vw)`;
        for(var k=0; k<dots.length; k++){
            if(dots[k]!==e){
                dots[k].classList.remove('active');
            }else{
                e.classList.add('active');
            }
        }
    });
    });

    // when the document open first dot will be clicked
    document.querySelector('.dots').click();


    //sticky header

    const header=document.querySelector('header');
    const section=document.querySelectorAll('section');
    window.addEventListener('scroll',()=>{
    header.style.position='sticky';
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-480;
        let height=sec.offsetHeight;
        if(top >= offset && top < offset + height){
            sec.classList.add('show-animation');
        }
        //for repeating animation
        // else{
        //     sec.classList.remove('animation');
        // }
    });

    });

});


