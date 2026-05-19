
// console.dir(searchBtn)
const searchBtn = document.querySelector('.search-btn')
const searchInput = document.querySelector('.search-box input')
const cardWrapper = document.querySelector('.content-main__list')

const cardArray = [
    {
        id: 0,
        title: "Первый товар",
        price: "170 ₽",
        address: "Казань, р-н Вахитовский",
        date: "10 июля 11:39",
        image: "./image/card.png",
    },
    {
        id: 1,
        title: "Второй товар",
        price: "180 ₽",
        address: "Казань, р-н Вахитовский",
        date: "10 июля 11:39",
        image: "./image/card.png",
    },
    {
        id: 2,
        title: "Третий товар",
        price: "190 ₽",
        address: "Казань, р-н Вахитовский",
        date: "10 июля 11:39",
        image: "./image/card.png",
    },
    {
        id: 3,
        title: "Четвертый товар",
        price: "200 ₽",
        address: "Казань, р-н Вахитовский",
        date: "10 июля 11:39",
        image: "./image/card.png",
    },
    {
        id: 4,
        title: "Пятый товар",
        price: "300 ₽",
        address: "Казань, р-н Вахитовский",
        date: "10 июля 11:39",
        image: "./image/card.png",
    },
    {
        id: 5,
        title: "Шестой товар",
        price: "400 ₽",
        address: "Казань, р-н Вахитовский",
        date: "10 июля 11:39",
        image: "./image/card.png",
    },
]

const render = (cardList) => {
    cardWrapper.innerHTML = '' // очищает content-main__list перед созданием списка

    cardList.forEach((item, index) => {
        // console.log(item);
        cardWrapper.insertAdjacentHTML('beforeend', `
            <a href="./product.html" class="content-main__list-item">
                <div class="content-main__list-item--img">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <h5 class="content-main__list-item--title">${item.title}</h5>
                <strong class="content-main__list-item--price">${item.price}</strong>
                <div class="content-main__list-item--desc-box">
                    <span class="content-main__list-item--desc">${item.address}</span>
                    <span class="content-main__list-item--desc">${item.date}</span>
                </div>
            </a>    
        `);
    })
}

const filteredArray = (array, value) => {
    console.log(array);
    console.log(value);
    
    return array.filter((item) => {
        return item.title.includes(value) //|| item.price.includes(value)
    }) // всегда возвращает либо true, либо false
}

// переназначаем стили
cardWrapper.style.justifyContent = 'flex-start'
cardWrapper.style.gap = '30px'

render(cardArray)

searchBtn.addEventListener('click', () => {
    // console.log(searchInput.value);
    render(filteredArray(cardArray, searchInput.value))
});