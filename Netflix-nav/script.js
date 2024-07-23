const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav_black = document.querySelector('.nav-black')
const nav_red = document.querySelector('.nav-red')
const nav_white = document.querySelector('.nav-white')

open_btn.addEventListener('click', () => {
    nav_black.classList.add('visible')
    nav_red.classList.add('visible')
    nav_white.classList.add('visible')
})

close_btn.addEventListener('click', () => {
    nav_black.classList.remove('visible')
    nav_red.classList.remove('visible')
    nav_white.classList.remove('visible')
})
