const getRandomNumber = max => {
    return Math.floor(Math.random() * max);
};

const getRandomColor = () => {
    return `rgb(${getRandomNumber(255)}, ${getRandomNumber(255
    )}, ${getRandomNumber(255)}`;
};


class Clock {
    constructor(mountPoint = document.querySelector('body')) {
        this.mountPoint = mountPoint;
    }

    init() {
        this.render();
        this.setColors();
    }
    render() {
        this.container = document.createElement('div');
        this.content = document.createElement('h1');
        this.container.style.background = getRandomColor();
        this.content.textContent = '00/00/00';
        this.container.classList.add('clock');
        this.content.classList.add('clock__content');

        this.container.appendChild(this.content);
        this.mountPoint.appendChild(this.container);
    }

    setColors() {
        const color = getRandomColor();
        this.container.style.background = color;
        this.content.style.color = color;
    }
}