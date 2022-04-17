let output = document.querySelector('.output')
let submit = document.querySelector('.button')
let input = document.querySelector('.input')






function fetchData(input) {
    let x = `https://api.funtranslations.com/translate/minion.json?text=${input}`

    fetch(x).then(result => result.json()).then(data => { output.innerText = data.contents.translated })
}

submit.addEventListener('click', function () { fetchData(input.value) })
