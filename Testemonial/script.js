const testimonialContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
 {
    name: 'John Doe',
    position: 'Game Designer',
    photo: 'https://picsum.photos/200',
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sint aspernatur, ipsum ducimus magni soluta error sapiente ratione, officia fugit porro dolore nobis eum qui eligendi. Eaque ipsam quia odio."
},
{
    name: 'Bruce Wayne',
    position: 'Batman',
    photo: 'https://picsum.photos/200',
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sint aspernatur, ipsum ducimus magni soluta error sapiente ratione, officia fugit porro dolore nobis eum qui eligendi. Eaque ipsam quia odio."
},
{
    name: 'Ronald McDonald',
    position: 'McDonald Clown',
    photo: 'https://picsum.photos/200',
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sint aspernatur, ipsum ducimus magni soluta error sapiente ratione, officia fugit porro dolore nobis eum qui eligendi. Eaque ipsam quia odio."
},
{
    name: 'Joseph Mason',
    position: 'Trying to be a Web Developer',
    photo: 'https://picsum.photos/200',
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sint aspernatur, ipsum ducimus magni soluta error sapiente ratione, officia fugit porro dolore nobis eum qui eligendi. Eaque ipsam quia odio."
},
]

let idx = 1

function updateTestimonial(){
    const {name, position, photo, text} = testimonial[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position

    idx++

    if(idx > testimonials.length - 1){
        idx = 0
    }
}

setInterval(updateTestimonial, 10000)