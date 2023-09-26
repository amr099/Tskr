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

    function close(name){
        $(`.x`).on('click',()=>{
            $('.hero').css('filter','')
            $(`.${name}`).css('display','none')
        })
    }

    for(let section of sections){
        trigger(section)
    }


    $(`.x`).on('click',()=>{
        console.log('close')
        for(let section of sections){
            close(section)
        }
    })

})

