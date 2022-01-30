const input = document.getElementById('input')
const button = document.getElementById('btn')
const h2 = document.getElementById('h2')

button.addEventListener('click', function(){
    console.log(input.value)
    document.body.style.background = input.value
    if  (input.value === 'black') {
        h2.classList.add('ni')
    }
})

