window.onload = function(){
    'use strict'


    // QNA hideANs
    document.querySelector('.ques1').addEventListener('mouseover',function(){
        document.querySelector('.hideAns1').style.top = '0px'
    })
    document.querySelector('.hideAns1').addEventListener('mouseout',function(e){
        e.target.style.top = '180px'
    })

    document.querySelector('.ques2').addEventListener('mouseover',function(){
        document.querySelector('.hideAns2').style.top = '0px'
    })
    document.querySelector('.hideAns2').addEventListener('mouseout',function(e){
        e.target.style.top = '180px'
    })
    document.querySelector('.ques3').addEventListener('mouseover',function(){
        document.querySelector('.hideAns3').style.top = '0px'
    })
    document.querySelector('.hideAns3').addEventListener('mouseout',function(e){
        e.target.style.top = '180px'
    })



    // TMI conText mouserover
    document.querySelector('.baseball').addEventListener('mouseover',function(){
        document.querySelectorAll('.conText')[0].classList.add('active')
    })
    document.querySelector('.baseball').addEventListener('mouseout',function(){
        document.querySelectorAll('.conText')[0].classList.remove('active')
    })

    document.querySelector('.conan').addEventListener('mouseover',function(){
        document.querySelectorAll('.conText')[1].classList.add('active')
    })
    document.querySelector('.conan').addEventListener('mouseout',function(){
        document.querySelectorAll('.conText')[1].classList.remove('active')
    })

    document.querySelector('.itzy').addEventListener('mouseover',function(){
        document.querySelectorAll('.conText')[2].classList.add('active')
    })
    document.querySelector('.itzy').addEventListener('mouseout',function(){
        document.querySelectorAll('.conText')[2].classList.remove('active')
    })




    // TMI hobby mouserover
    document.querySelector('.hobbyQ').addEventListener('mouseover',function(e){
        e.target.style.background = 'rgba(0,0,0,0.5)'
        e.target.style.color = '#fff'
        e.target.innerText = '영상편집 or 영화관 가서 영화보기!'
    })

    document.querySelector('.hobbyQ').addEventListener('mouseout',function(e){
        e.target.style.background = '#b9dfb8'
        e.target.style.color = 'black'
        e.target.innerText = '취미는요...'

    })



    // TMI food mouserover
    document.querySelector('.foodQ').addEventListener('mouseover',function(e){
        e.target.innerText = 'Danger... 달달한 거 좋아합니다'
    })

    document.querySelector('.foodQ').addEventListener('mouseout',function(e){
        e.target.innerText = '좋아하는 음식은요...'
    })

}