const id = document.querySelector('.id')
const btn = document.querySelector('.btn')
const advice = document.querySelector('.advice')

const getDateApi = async () => {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    // console.log(data)
    // img.src = data.results[0].picture.large
    id.innerHTML = data.slip.id
    advice.innerHTML = data.slip.advice
  }

btn.addEventListener('click', (e) => {
    e.preventDefault()
    getDateApi()
})
