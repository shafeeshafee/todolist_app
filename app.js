const body = document.querySelector('body');
const container = document.querySelector('.container');
const h1 = document.querySelector('h1');
const btn = document.querySelector('#add');
const input = document.querySelector('#enter-task');
const darkModeButton = document.querySelector('#darkmode');


class Task {
    constructor(title, time) {
        this.title = title;
        this.time = time;
    }
    addTask() {
        const { title, time } = this;

        let divBody = document.createElement('div');
        let div = document.createElement('div');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let complete = document.createElement('button');

        // appending elements
        divBody.classList.add('divbody');
        complete.innerText = "Complete?";
        h3.innerText = title;
        p.innerText = time;
        div.classList.add('faded', 'fade-in');
        div.append(h3, p, complete);
        container.append(divBody);
        divBody.append(div);

        // strike out task
        div.addEventListener('click', function () {
            h3.classList.toggle('striked');
            p.classList.toggle('striked');
            div.classList.toggle('color-striked');
        });

        // complete a task
        complete.addEventListener('click', function () {
            div.remove();
            this.remove();
        });
    }

}

btn.addEventListener('click', (e) => {
    newTaskCard();
});


input.addEventListener('keyup', function (e) {
    e.key === 'Enter' ? newTaskCard() : 0;
});


// feature: dark mode
darkModeButton.addEventListener('click', function () {
    let header = document.querySelector('header');
    let h4 = document.querySelector('h4');
    let darkModeBtn = document.querySelector('#darkmode');

    let toDark = [header, h4, darkModeBtn];

    toDark.forEach(item => {
        item.classList.toggle('textWhite');
    });


    body.classList.toggle('bgImgToggle');
});


// new card creator
function newTaskCard() {
    if (input.value) {
        let newTask = new Task(input.value, `Added: ${showTime(new Date)}`).addTask();
        input.value = "";
    }
}

// display time
function showTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    let strTime = hours + ':' + minutes + ' ' + ampm;

    return strTime;
}
