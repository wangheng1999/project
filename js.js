let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2');
let box3 = document.querySelector('.box3');
let box4 = document.querySelector('.box4');
let box5 = document.querySelector('.box5');
let card = document.querySelectorAll('.card')

box1.onclick = function () {
    card[0].style.opacity = 1
    card[0].style.zIndex = 99
    card[0].style.left = '50px'

    card[1].style.opacity = 0
    card[1].style.left = '40%'
    card[1].style.zIndex = 0

    card[2].style.opacity = 0
    card[2].style.top = '30%'
    card[2].style.zIndex = 0


    card[3].style.opacity = 0
    card[3].style.left = '2%'
    card[3].style.zIndex = 0

    card[4].style.opacity = 0
    card[4].style.left = '45%'
    card[4].style.zIndex = 0

}
box2.onclick = function () {
    card[1].style.opacity = 1
    card[1].style.left = 'calc(40% + 80px)'
    card[1].style.zIndex = 99

    card[0].style.opacity = 0
    card[0].style.left = '0'
    card[0].style.zIndex = 0

    card[2].style.opacity = 0
    card[2].style.top = '30%'
    card[2].style.zIndex = 0


    card[3].style.opacity = 0
    card[3].style.left = '2%'
    card[3].style.zIndex = 0

    card[4].style.opacity = 0
    card[4].style.left = '45%'
    card[4].style.zIndex = 0
}
box3.onclick = function () {
    card[2].style.opacity = 1
    card[2].style.top = 'calc(35% - 50px)'
    card[2].style.zIndex = 1

    card[0].style.opacity = 0
    card[0].style.left = '0'
    card[0].style.zIndex = 0

    card[1].style.opacity = 0
    card[1].style.left = '40%'
    card[1].style.zIndex = 0

    card[3].style.opacity = 0
    card[3].style.left = '2%'
    card[3].style.zIndex = 0

    card[4].style.opacity = 0
    card[4].style.left = '45%'
    card[4].style.zIndex = 0
}
box4.onclick = function () {
    card[0].style.opacity = 0
    card[0].style.left = '0'
    card[0].style.zIndex = 0

    card[1].style.opacity = 0
    card[1].style.left = '40%'
    card[1].style.zIndex = 0

    card[2].style.opacity = 0
    card[2].style.top = '30%'
    card[2].style.zIndex = 0

    card[3].style.opacity = 1
    card[3].style.left = 'calc(2% + 80px)'
    card[3].style.zIndex = 1

    card[4].style.opacity = 0
    card[4].style.left = '45%'
    card[4].style.zIndex = 0
}
box5.onclick = function () {
    card[0].style.opacity = 0
    card[0].style.left = '0'
    card[0].style.zIndex = 0

    card[1].style.opacity = 0
    card[1].style.left = '40%'
    card[1].style.zIndex = 0

    card[2].style.opacity = 0
    card[2].style.top = '30%'
    card[2].style.zIndex = 0

    card[3].style.opacity = 0
    card[3].style.left = '2%'
    card[3].style.zIndex = 0

    card[4].style.opacity = 1
    card[4].style.left = 'calc(45% + 50px)'
    card[4].style.zIndex = 1
}
let content_title = document.querySelector('.content_title')
setInterval(() => {
    content_title.style.color = getRandomRgbColor()
},500)
function getRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
