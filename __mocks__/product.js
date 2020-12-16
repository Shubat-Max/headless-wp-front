
export const mockProduct = {
    "pid": 123456,
    "slug": "vento-light",
    "name": "Vento Light",
    "image": "img_url",

    "subname": [
        "диван",
        "двухместный"
    ],

    "static_attrs": [{
        "name": "Высота дивана",
        "values": ["123 см"]
    },{
        "name": "Материал ножек",
        "values": ["Шпон", "Металл"]
    }],

    default_attrs: [
        { tax: "pa_width", term: "160" },
        { tax: "pa_mechanism", term: "evk" },
        { tax: "pa_color", term: "red" },
        { tax: "pa_fabric", term: "default-fabric" },
    ],

    variable_attrs: [{
        slug: 'pa_width',
        value: 'Ширина',
        options: [
            { slug: '100', name: '100 см'},
            { slug: '120', name: '120 см'},
            { slug: '140', name: '140 см'},
            { slug: '160', name: '160 см'},
            { slug: '180', name: '180 см'},
            { slug: '200', name: '200 см'},
            { slug: '220', name: '220 см'},
            { slug: '240', name: '240 см'},
            { slug: '260', name: '260 см'},
        ]
    },{
        slug: 'pa_mechanism',
        value: 'Тип механизма',
        options: [
            { slug: 'evk', name: 'Евро-раскладушка'},
            { slug: 'vk', name: 'Выкатная раскладушка'},
            { slug: 'fvk', name: 'Французская раскладушка'},
        ]
    },{
        slug: "pa_color",
        value: "Цвет",
        options: [
            { slug: 'red', name: 'Красный' },
            { slug: 'green', name: 'Зеленый' },
            { slug: 'blue', name: 'Синий' },
            { slug: 'magenta', name: 'Пурпурный' },
            { slug: 'cyan', name: 'Голубой' },
            { slug: 'yellow', name: 'Желтый' },
            { slug: 'black', name: 'Черный' },
        ]
    },{
        slug: 'pa_fabric',
        value: 'Ткань',
        options: [
            // { slug: 'enzo-715', name: 'Enzo 715', href: 'https://skdesign.ru/wp-content/uploads/2019/12/DSC_5881-263x263.jpg'},
        ]
    },{
        slug: 'pa_fabric',
        value: 'Ткань',
        options: [
            { slug: 'enzo-715', name: 'Enzo 715', category: 'Велюр', href: 'https://skdesign.ru/wp-content/uploads/2019/12/DSC_5881-263x263.jpg'},
        ]
    }],

    "variations": [
    {
        "vid": "222222",
        "sale_price": 1000,
        "regular_price": 1200,
        "default": "true/false",
        "general_image": "img_url",
        "gallery": [
            "img_url",
            "img_url",
            "img_url",
            "img_url"
        ],
        "fabric": {},
        "blueprint": {},
        "mechanism": {},
        "attrs": [
            {
                "tax_slug": "blueprints",
                "tax_name": "Чертеж",
                "term_slug": "evk",
                "term_name": "Выкатная раскладушка"
            },
            {
                "tax_slug": "mechanism",
                "tax_name": "Тип механизма",
                "term_slug": "evk",
                "term_name": "Выкатная раскладушка"
            }
        ],
        "variation_attrs": [
            {
                "tax_slug": "pa_color",
                "term_slug": "red"
            }
        ]
    }
]
}
