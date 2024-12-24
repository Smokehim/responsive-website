const open = document.querySelector('#navopenday')
const X = document.querySelector('#closing')
const closing = document.querySelector('#navdiv')


open.addEventListener('click', ()=>{
    open.style.display = 'none'
    closing.style.display = 'block'
})
x.addEventListener('click', ()=>{
    open.style.display = 'block'
    closing.style.display = 'none'
})