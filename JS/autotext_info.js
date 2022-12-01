const title = document.querySelector('.autotextinfo');
const text = "Apresentação do telescópio James Webb"

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