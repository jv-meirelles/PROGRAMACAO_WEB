const title = document.querySelector('.autotextphoto');
const text = "As melhores fotos"

let index = 0;

const play = () => {
    title.innerHTML = text.slice(0, index)

    if (index > text.length) {
        index = text.length + 1;
        clearTimeout(timer);
    } else {
        index++;
    }
}

play();

let timer = setInterval(play, 175);