const header = document.getElementById("header")
const title = document.getElementById("title")
const excerpt = document.getElementById("excerpt")
const profile_img = document.getElementById("profile_img")
const author = document.getElementById("author")
const date = document.getElementById("date")

const animated_bgs = document.querySelectorAll(".animated-bg")
const animated_bg_texts = document.querySelectorAll(".animated-bg-text")

setTimeout(getData, 1250)

function getData(){
    
    // card img 
    header.innerHTML = '' 

    // card title
    title.innerHTML = ''

    // excerpt
    excerpt.innerHTML = ''

    // profile image
    profile_img.innerHTML = ''

    // name
    author.innerHTML = ''

    // date
    date.innerHTML = ''

    animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"))
    animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"))
}
