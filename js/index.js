let score = 0
let answer;

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const options = [randomColor(), randomColor(), randomColor()];

function newStage() {
  

  document.querySelectorAll(".option-item").forEach((optionEl, index) => {
    optionEl.style.backgroundColor = options[index];
  });

  answer = Math.floor(Math.random() * 3);

  document.querySelector(".color-text").textContent = options[answer];


}

document.querySelectorAll(".option-item").forEach((optionEl, index) => {
    optionEl.addEventListener("click", e => {
        if (answer === index) {
            score++
          
            document.querySelector('.right-modal').classList.add('open')
            document.querySelector(".right-modal").style.backgroundColor = options[answer];
        } else {
            score = 0
            document.querySelector('.wrong-modal').classList.add('open')
            document.querySelector(".wrong-modal").style.backgroundColor = e.target.style.backgroundColor;
        }
        document.querySelector('.score-text').textContent = score
    });
});





newStage()

document.querySelector('.next-stage').addEventListener('click', e => {
    newStage()
    document.querySelector('.right-modal').classList.remove('open')
})

document.querySelector('.play-again').addEventListener('click', e => {
    newStage()
    document.querySelector('.wrong-modal').classList.remove('open')
})

