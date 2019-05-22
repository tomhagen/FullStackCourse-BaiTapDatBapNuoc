const initialState = [
    {
        id: Math.random(),
        name: "Bắp rang 60z - Phô Mai",
        img: './img/Baprang-60z.jpeg',
        price: 55.000,
        title: "Bắp Rang"
    },
    {
        id: Math.random(),
        name: "Combo 1",
        img: './img/combo1.png',
        price: 79.000,
        title: "Combo Tết"
    },
    {
        id: Math.random(),
        name: "Combo 2 HCM",
        img: './img/combo-2.jpg',
        price: 95.000,
        title: "Combo Tết"
    },
    {
        id: Math.random(),
        name: "Combo 3",
        img: './img/combo-3.jpg',
        price: 105.000,
        title: "Combo Tết"
    },
    {
        id: Math.random(),
        name: "Combo 4",
        img: './img/combo-4.jpg',
        price: 209.000,
        title: "Combo Tết"
    },
    {
        id: Math.random(),
        name: "Coke 22oz",
        img: './img/coke-1.jpg',
        price: 25.000,
        title: "Nước Ngọt"
    },
    {
        id: Math.random(),
        name: "Coke 32oz",
        img: './img/coke-2.jpg',
        price: 35.000,
        title: "Nước Ngọt"
    }
]

const ItemReducer = ( state = initialState , action ) => {
    switch(action.type){
        default : return [...state]
    }
}
export default ItemReducer