
export const mockProduct = {
    pid: 123456,
    slug: "halston-lux",
    name: "Halston Lux",
    image: "https://skdesign.ru/wp-content/uploads/2020/02/HLL_60_2_0005-1-750x750.jpg",

    subname: [ "диван", "двухместный" ],

    "static_attrs": [{
        "name": "Высота дивана",
        "values": ["123 см"]
    },{
        "name": "Материал ножек",
        "values": ["Шпон", "Металл"]
    }],

    default_attrs: [
        { tax: "pa_width", term: "100" },
        { tax: "pa_color", term: "red" },
    ],

    variable_attrs: [{
        slug: 'pa_width',
        value: 'Ширина',
        options: [
            { slug: '100', name: '100 см'},
            { slug: '200', name: '200 см'},
        ]
    },{
        slug: "pa_color",
        value: "Цвет",
        options: [
            { slug: 'red', name: 'Красный', img: '' },
            { slug: 'blue', name: 'Синий' },
        ]
    },{
        slug: 'pa_fabric',
        value: 'Ткань',
        options: []
    }],

    variations: [
        {
            vid: "111111",
            price: 33700,
            general_image: "https://skdesign.ru/wp-content/uploads/2020/02/HLL_60_2_0005-1-750x750.jpg",
            gallery: [
                "https://skdesign.ru/wp-content/uploads/2020/01/Halston_01_-738x738.jpg",
                "https://skdesign.ru/wp-content/uploads/2020/02/HLL_60_1_0005-1-738x738.jpg",
                "https://skdesign.ru/wp-content/uploads/2020/02/HLL_60_3_0005-1-738x738.jpg"
            ],
            fabric: {
                slug: "velutto-15",
                name: "Velutto 15",
                category: {
                    rate: 1,
                    name: "Велюр"
                },
                images: {
                    large: "https://skdesign.ru/wp-content/uploads/2019/12/DSC_4542-1.jpg",
                    small: "https://skdesign.ru/wp-content/uploads/2019/12/DSC_6253-150x150.jpg"
                }
            },
            variation_attrs: [
                { tax_slug: "pa_color", term_slug: "red" },
                { tax_slug: "pa_width", term_slug: "100" }
            ]
        },
        {
            vid: "111222",
            price: 82700,
            general_image: "https://skdesign.ru/wp-content/uploads/2020/02/HLL_96_2_0005-1-750x750.jpg",
            gallery: [
                "https://skdesign.ru/wp-content/uploads/2020/01/Halston_01_-738x738.jpg",
                "https://skdesign.ru/wp-content/uploads/2020/01/HLL_96_1_0005-1-738x738.jpg",
                "https://skdesign.ru/wp-content/uploads/2020/01/HLL_96_3_0005-1-738x738.jpg"
            ],
            fabric: {
                slug: "velutto-15",
                name: "Velutto 15",
                category: {
                    rate: 1,
                    name: "Велюр"
                },
                images: {
                    large: "https://skdesign.ru/wp-content/uploads/2019/12/DSC_4542-1.jpg",
                    small: "https://skdesign.ru/wp-content/uploads/2019/12/DSC_6253-150x150.jpg"
                }
            },
            variation_attrs: [
                { tax_slug: "pa_color", term_slug: "red" },
                { tax_slug: "pa_width", term_slug: "200" }
            ]
        },
        {
            vid: "222111",
            price: 33700,
            general_image: "https://skdesign.ru/wp-content/uploads/2020/02/HLL_60_2_0002-1-750x750.jpg",
            gallery: [
                "https://skdesign.ru/wp-content/uploads/2020/01/Halston_01_-738x738.jpg",
                "https://skdesign.ru/wp-content/uploads/2020/02/HLL_60_1_0002-1-738x738.jpg",
                "https://skdesign.ru/wp-content/uploads/2020/02/HLL_60_3_0002-1-738x738.jpg"
            ],
            fabric: {
                slug: "velvet-lux-29",
                name: "Velvet Lux 29",
                category: {
                    rate: 1.1,
                    name: "Вельвет"
                },
                images: {
                    small: "https://skdesign.ru/wp-content/uploads/2019/12/DSC_6253-150x150.jpg",
                    large: "https://skdesign.ru/wp-content/uploads/2019/12/DSC_6253.jpg"
                }
            },
            variation_attrs: [
                { tax_slug: "pa_color", term_slug: "blue" },
                { tax_slug: "pa_width", term_slug: "100" }
            ]
        },
        {
            vid: "222222",
            price: 82700,
            fabric_price: 90970,
            general_image: "https://skdesign.ru/wp-content/uploads/2020/02/HLL_96_2_0002-1-750x750.jpg",
            gallery: [
                "https://skdesign.ru/wp-content/uploads/2020/01/Halston_01_-738x738.jpg",
                "https://skdesign.ru/wp-content/uploads/2020/01/HLL_96_1_0002-1-738x738.jpg",
                "https://skdesign.ru/wp-content/uploads/2020/01/HLL_96_3_0002-1-738x738.jpg"
            ],
            fabric: {
                slug: "velvet-lux-29",
                name: "Velvet Lux 29",
                category: {
                    rate: 1.1,
                    name: "Вельвет"
                },
                images: {
                    small: "https://skdesign.ru/wp-content/uploads/2019/12/DSC_6253-150x150.jpg",
                    large: "https://skdesign.ru/wp-content/uploads/2019/12/DSC_6253.jpg"
                }
            },
            variation_attrs: [
                { tax_slug: "pa_color", term_slug: "blue" },
                { tax_slug: "pa_width", term_slug: "200" }
            ]
        }
    ]
}
