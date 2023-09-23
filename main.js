let guide = document.querySelector('#guide-bar')
let hamburger = document.querySelector('#icon-hamburger')
let exite = document.querySelector('#exite-ham')





hamburger.addEventListener('click' , ()=>{
    guide.style.display = 'flex'
    hamburger.style.display = 'none'
    exite.style.display = 'flex'
})

exite.addEventListener('click' , ()=>{
    guide.style.display = 'none'
    hamburger.style.display = 'flex'
    exite.style.display = 'none'
})