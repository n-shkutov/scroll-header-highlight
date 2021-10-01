const wrapper = document.querySelector('.wrapper');

// Нужна вся высота контейнера
const { offsetHeight } = wrapper;

// Нужна высота окна браузера
const { innerHeight } = window;

// Получили все элементы, которые хотим подсвечивать (по требованию -- задом на перёд)
const headers = [...document.querySelectorAll('h3')].reverse();

// Какова часть каждого элемента (в нашем случае хедера) от общей высоты
const pxPart = Math.floor((offsetHeight - innerHeight) / headers.length);

// Нам нужно знать предыдущий элемент с селектором, чтобы убирать его и ставить новый
let headerIdx = null;

const scrollHandler = ({ currentTarget }) => {

    const { scrollY } = currentTarget;

    let nextIdx = Math.floor(scrollY / pxPart);

    if (nextIdx < 0 || nextIdx + 1 > headers.length) {

        if (headerIdx !== null) headers[headerIdx].classList.remove('active');

        headerIdx = null;

        return;
    }

    if (headerIdx === null) {
        headerIdx = nextIdx;

        headers[headerIdx].classList.add('active');

    } else if (headerIdx !== nextIdx) {

        headers[headerIdx].classList.remove('active');
        headers[nextIdx].classList.add('active');

        headerIdx = nextIdx;
    }

};

export default {
    init: () => window.addEventListener('scroll', scrollHandler),
    end: () => window.removeEventListener('scroll', scrollHandler)
}