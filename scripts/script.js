const images = document.querySelectorAll('.container_item')

images.forEach(container_item => {
    container_item.addEventListener('mouseover', ()=>{
    removeFocus()
    container_item.classList.add('selected')
    })
    
    removeFocus = () => {
    images.forEach(container_item => {
    container_item.classList.remove('selected')
    })
    }
})

const button = document.querySelector('.btn')

button.addEventListener('click', ()=> {
alert(`Your message was successfully sent. Thank you for trust us ❤️`)
})