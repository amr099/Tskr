// window.addEventListener("load", function () {
//     burger = document.querySelector(".burger");
//     navCloseBtn = document.querySelector(".nav-close");
//     nav = document.querySelector("nav.mobile");


//     burger.addEventListener("click", function () {
//         nav.style.display = "flex";
//         navCloseBtn.style.display = 'flex'
//         burger.style.display = 'none'
//     });
//     navCloseBtn.addEventListener("click", function () {
//         nav.style.display = "none";
//         burger.style.display = "flex";
//         navCloseBtn.style.display = "none";
//     });

//     heroSection = document.querySelector(".hero");
//     aboutSection = document.querySelector(".about");
//     usSection = document.querySelector(".us");
//     newsSection = document.querySelector(".news");
//     faqSection = document.querySelector(".faq");
//     regSection = document.querySelector(".reg");

//     closeSectionBtn = document.querySelectorAll(".close-section")
//     aboutTrigger = document.querySelectorAll(".about-trigger");
//     usTrigger = document.querySelectorAll(".us-trigger");
//     newsTrigger = document.querySelectorAll(".news-trigger");
//     faqTrigger = document.querySelectorAll(".faq-trigger");
//     regTrigger = document.querySelectorAll(".reg-trigger");
    

//     for (let i = 0; i < aboutTrigger.length; i++) {
//         aboutTrigger[i].addEventListener('click',()=>{
//             heroSection.style.filter = 'brightness(10%)' 
//             aboutSection.style.display='flex'
//         })

//     }
//     for (let i = 0; i < usTrigger.length; i++) {
//         usTrigger[i].addEventListener('click',()=>{
//             heroSection.style.filter = 'blur(5px)'
//             usSection.style.display='flex'
//         })

//     }
//     for (let i = 0; i < newsTrigger.length; i++) {
//         newsTrigger[i].addEventListener('click',()=>{
//             heroSection.style.filter = 'blur(5px)'
//             newsSection.style.display='flex'
//         })

//     }
//     for (let i = 0; i < faqTrigger.length; i++) {
//         faqTrigger[i].addEventListener('click',()=>{
//             heroSection.style.filter = 'blur(5px)'
//             faqSection.style.display='flex'
//         })

//     }
//     for (let i = 0; i < regTrigger.length; i++) {
//         regTrigger[i].addEventListener('click',()=>{
//             heroSection.style.filter = 'blur(5px)'
//             regSection.style.display='flex'
//         })

//     }

//     for (let i = 0; i < closeSectionBtn.length; i++) {
//         closeSectionBtn[i].addEventListener('click',()=>{
//             heroSection.style.filter = 'none'
//             aboutSection.style.display='none'
//             usSection.style.display='none'
//             newsSection.style.display='none'
//             faqSection.style.display='none'
//             regSection.style.display='none'
//         })

//     }
// });

$(()=>{

    $('.burger').on('click', ()=>{
        $('.mobile').css('display','flex')
        $('.burger').css('display','none')
        $('.nav-close').css('display','block')
    })

    $('.nav-close').on('click', ()=>{
        $('.mobile').css('display','none')
        $('.burger').css('display','flex')
        $('.nav-close').css('display','none')
        
    })

    

    let sections = ['about','us','news','faq','reg']

    function trigger(name){
        $(`.${name}-trigger`).on('click',()=>{
            $('.hero').css('filter','brightness(10%) blur(5px)')
            $(`.${name}`).css('display','flex')
        })
    }

    function closeSection(name){
        $(`.close-section`).on('click',()=>{
            $('.hero').css('filter','')
            $(`.${name}`).css('display','none')
        })
    }

    for(let section of sections){
        trigger(section)
    }

    $(`.close-section`).on('click',()=>{
        for(let section of sections){
            closeSection(section)
        }
    })

})

