export const product = [
    {
        id: 0,
        image: 'assets/productSliderImage.png',
        description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
        actualPrice: 100,
        price: 79.90,
        discount: 10,
    },
    {
        id: 1,
        image: 'assets/productSliderImage.png',
        description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
        actualPrice: 100,
        price: 79.90,
        discount: 10,
    },
    {
        id: 2,
        image: 'assets/productSliderImage.png',
        description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
        actualPrice: 100,
        price: 79.90,
        discount: 10,
    },
    {
        id: 3,
        image: 'assets/productSliderImage.png',
        description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
        actualPrice: 100,
        price: 79.90,
        discount: 10,
    },
    {
        id: 4,
        image: 'assets/productSliderImage.png',
        description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
        actualPrice: 100,
        price: 79.90,
        discount: 10,
    },
    {
        id: 5,
        image: 'assets/productSliderImage.png',
        description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
        actualPrice: 100,
        price: 79.90,
        discount: 10,
    },
    {
        id: 6,
        image: 'assets/productSliderImage.png',
        description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
        actualPrice: 100,
        price: 79.90,
        discount: 10,
    },
    {
        id: 7,
        image: 'assets/productSliderImage.png',
        description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
        actualPrice: 100,
        price: 79.90,
        discount: 10,
    },
    {
        id: 8,
        image: 'assets/productSliderImage.png',
        description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
        actualPrice: 100,
        price: 79.90,
        discount: 10,
    },
    {
        id: 9,
        image: 'assets/productSliderImage.png',
        description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
        actualPrice: 100,
        price: 79.90,
        discount: 10,
    },
    {
        id: 10,
        image: 'assets/productSliderImage.png',
        description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
        actualPrice: 100,
        price: 79.90,
        discount: 10,
    },
    {
        id: 11,
        image: 'assets/productSliderImage.png',
        description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
        actualPrice: 100,
        price: 79.90,
        discount: 10,
    },
    {
        id: 12,
        image: 'assets/productSliderImage.png',
        description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
        actualPrice: 100,
        price: 79.90,
        discount: 10,
    },
    {
        id: 13,
        image: 'assets/productSliderImage.png',
        description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
        actualPrice: 100,
        price: 79.90,
        discount: 10,
    },
];

export function getItemsPerPage() {
    const width = window.innerWidth;
    if (width <= 800) return 2;
    if (width <= 1200) return 3;
    if (width <= 1350) return 4;
    return 5;
};