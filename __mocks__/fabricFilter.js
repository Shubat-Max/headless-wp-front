export const fabricFilterOptions = [
    {
        label: 'Цвет',
        param_slug: 'color',
        type: 'color',
        options: [
            { slug: 'beige', name: 'Бежевый', hex: '#EED9BD' },
            { slug: 'red', name: 'Красный', hex: '#B33A3A' },
            { slug: 'blue', name: 'Синий', hex: '#6E93D6' },
            { slug: 'grey', name: 'Серый', hex: '#AEB8B8' },
            { slug: 'brown', name: 'Коричневый', hex: '#99604E' },
            { slug: 'yellow', name: 'Жёлтый', hex: '#FCDF87' },
            { slug: 'violet', name: 'Фиолетовый', hex: '#745582' },
            { slug: 'green', name: 'Зеленый', hex: '#63A583' },
            { slug: 'pink', name: 'Розовый', hex: '#FFD2F9' },
            { slug: 'orange', name: 'Оранжевый', hex: '#C7784C' },
            { slug: 'black', name: 'Черный', hex: '#353238' },
        ]
    },{
        label: 'Категория',
        param_slug: 'category',
        type: 'select',
        options: [
            { slug: '1', name: '1 категория' },
            { slug: '2', name: '2 категория (+10%)' },
            { slug: '3', name: '3 категория (+20%)' },
            { slug: '4', name: '4 категория (+30%)' },
        ]
    },{
        label: 'Материал',
        param_slug: 'material',
        type: 'select',
        options: [
            { slug: 'chenille', name: 'Шенилл' },
            { slug: 'gunny', name: 'Рогожка' },
            { slug: 'velour', name: 'Велюр' },
            { slug: 'wool', name: 'Искусственная шерсть' },
            { slug: 'jacquard', name: 'Жаккард' },
            { slug: 'velveteen', name: 'Вельвет' },
        ]
    },{
        label: 'Свойство',
        param_slug: 'property',
        type: 'select',
        options: [
            { slug: 'db', name: 'Износостойкая' },
            { slug: 'da', name: 'Домашние животные' },
            { slug: 'kk', name: 'Подходит для кухни' },
            { slug: 'ab', name: 'Антибактериальная пропитка' },
            { slug: 'wc', name: 'Влажная уборка' },
        ]
    }
]