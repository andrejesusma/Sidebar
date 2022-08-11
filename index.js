const buttonMenu = document.querySelector('img.menu')
const aside = document.querySelector('aside')
const logo = document.getElementById('logo')
const perfil = document.getElementById('perfil')
const header = document.querySelector('header')
buttonMenu.addEventListener('click',toggleMenu)

function toggleMenu() {   
    if(aside.className == 'toggle'){
        aside.classList.remove('toggle');
        perfil.style.display = 'flex'
        logo.style.display = 'block'
        header.style.justifyContent = 'space-between'
    }else{
        aside.classList.add('toggle')
        perfil.style.display = 'none'
        logo.style.display = 'none'
        header.style.justifyContent = 'space-around'
    }
}