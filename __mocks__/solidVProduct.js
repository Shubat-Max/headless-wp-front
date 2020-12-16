
export const mockProduct = {
  pid: '000000',
  slug: "divan-rio-dvuhmestniy",
  name: "Диван Rio",
  subtitle: [ "диван", "двухместный" ],

  static_attrs: [
      {
          taxonomy_slug: "pa_frame-material",
          taxonomy_name: "Материал каркаса",
          term_slug: "birch-plywood",
          term_name: "Березовая фанера",
      },{
          taxonomy_slug: "pa_upholstery",
          taxonomy_name: "Материал обивки",
          term_slug: "upholstfabric",
          term_name: "Ткань",
      },{
          taxonomy_slug: "pa_legs-material",
          taxonomy_name: "Материал опор",
          term_slug: "solid-oak",
          term_name: "Массив дуба",
      },{
          taxonomy_slug: "pa_manufacturer",
          taxonomy_name: "Производитель",
          term_slug: "skdesign",
          term_name: "SK Design, Санкт-Петербург",
      },{
          taxonomy_slug: "pa_folding-mechanism",
          taxonomy_name: "Раскладной механизм",
          term_slug: "without-mechanism",
          term_name: "Без механизма",
      },{
          taxonomy_slug: "pa_seat-height",
          taxonomy_name: "Высота сиденья",
          term_slug: "47-sm",
          term_name: "47 см",
      },{
          taxonomy_slug: "pa_seat-depth",
          taxonomy_name: "Глубина сиденья",
          term_slug: "56-sm",
          term_name: "56 см",
      },{
          taxonomy_slug: "pa_armrest-width",
          taxonomy_name: "Ширина подлокотника",
          term_slug: "17-sm",
          term_name: "17 см",
      }
  ],

  default_attrs: [
      {
          taxonomy_slug: "pa_size-width1",
          taxonomy_name: "Габаритная ширина",
          term_slug: "200-sm",
          term_name: "200 см",
      },{
          taxonomy_slug: "pa_legs-height",
          taxonomy_name: "Высота ножек",
          term_slug: "13-sm",
          term_name: "13 см",
      },{
          taxonomy_slug: "pa_color",
          taxonomy_name: "Цвет",
          term_slug: 'blue',
          term_name: 'Синий',
      },{
          taxonomy_slug: "pa_fabric-selector",
          term_slug: 'default-fabric',
      }
  ],

  variable_attrs: [
      {
          taxonomy_slug: 'pa_size-width1',
          taxonomy_name: 'Габаритная ширина',
          tax_options: [
              { term_slug: '100-sm', term_name: '100 см' },
              { term_slug: '200-sm', term_name: '200 см' },
          ]
      },
      {
          taxonomy_slug: "pa_legs-height",
          taxonomy_name: "Высота ножек",
          tax_options: [
              { term_slug: '13-sm', term_name: '13 см' },
              { term_slug: '10-sm', term_name: '10 см' },
          ]
      },
      {
          taxonomy_slug: "pa_color",
          taxonomy_name: "Цвет",
          tax_options: [
              { term_slug: 'red', term_name: 'Красный', img: '' },
              { term_slug: 'blue', term_name: 'Синий', img: '' },
          ]
      },
      {
          taxonomy_slug: 'pa_fabric',
          taxonomy_name: 'Ткань',
          tax_options: []
      }
  ],

  variations: [
      {
          vid: "000001",
          price: 33700,
          general_image: "https://skdesign.ru/wp-content/uploads/2020/02/HLL_60_2_0005-1-750x750.jpg",
          gallery: [
              "https://skdesign.ru/wp-content/uploads/2020/01/Halston_01_-738x738.jpg",
              "https://skdesign.ru/wp-content/uploads/2020/02/HLL_60_1_0005-1-738x738.jpg",
              "https://skdesign.ru/wp-content/uploads/2020/02/HLL_60_3_0005-1-738x738.jpg"
          ],
          // fabric: {
          //     slug: "velutto-15",
          //     name: "Velutto 15",
          //     category: {
          //         rate: 1,
          //         name: "Велюр"
          //     },
          //     images: {
          //         large: "https://skdesign.ru/wp-content/uploads/2019/12/DSC_4542-1.jpg",
          //         small: "https://skdesign.ru/wp-content/uploads/2019/12/DSC_6253-150x150.jpg"
          //     }
          // },
          blueprint: {},
          mechanism: {},
          variation_attrs: [
              { tax_slug: "pa_size-width1", term_slug: "100-sm" },
              { tax_slug: "pa_legs-height", term_slug: "10-sm" },
              { tax_slug: "pa_color", term_slug: "red" },
          ]
      },
      {
          vid: "000002",
          price: 82700,
          general_image: "https://skdesign.ru/wp-content/uploads/2020/02/HLL_96_2_0005-1-750x750.jpg",
          gallery: [
              "https://skdesign.ru/wp-content/uploads/2020/01/Halston_01_-738x738.jpg",
              "https://skdesign.ru/wp-content/uploads/2020/01/HLL_96_1_0005-1-738x738.jpg",
              "https://skdesign.ru/wp-content/uploads/2020/01/HLL_96_3_0005-1-738x738.jpg"
          ],
          fabric: {
              slug: "15",
              name: "15",
              collection: "Bella",
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
              { tax_slug: "pa_size-width1", term_slug: "100-sm" },
              { tax_slug: "pa_legs-height", term_slug: "10-sm" },
              { tax_slug: "pa_color", term_slug: "blue" },
          ]
      },
      {
          vid: "000003",
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
              { tax_slug: "pa_size-width1", term_slug: "100-sm" },
              { tax_slug: "pa_legs-height", term_slug: "13-sm" },
              { tax_slug: "pa_color", term_slug: "red" },
          ]
      },
      {
          vid: "000004",
          price: 82700,
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
              { tax_slug: "pa_size-width1", term_slug: "100-sm" },
              { tax_slug: "pa_legs-height", term_slug: "13-sm" },
              { tax_slug: "pa_color", term_slug: "blue" },
          ]
      },
      {
          vid: "000005",
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
          blueprint: {},
          mechanism: {},
          variation_attrs: [
              { tax_slug: "pa_size-width1", term_slug: "200-sm" },
              { tax_slug: "pa_legs-height", term_slug: "10-sm" },
              { tax_slug: "pa_color", term_slug: "red" },
          ]
      },
      {
          vid: "000006",
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
              { tax_slug: "pa_size-width1", term_slug: "200-sm" },
              { tax_slug: "pa_legs-height", term_slug: "10-sm" },
              { tax_slug: "pa_color", term_slug: "blue" },
          ]
      },
      {
          vid: "000007",
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
              { tax_slug: "pa_size-width1", term_slug: "200-sm" },
              { tax_slug: "pa_legs-height", term_slug: "13-sm" },
              { tax_slug: "pa_color", term_slug: "red" },
          ]
      },
      {
          vid: "000008",
          price: 82700,
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
              { tax_slug: "pa_size-width1", term_slug: "200-sm" },
              { tax_slug: "pa_legs-height", term_slug: "13-sm" },
              { tax_slug: "pa_color", term_slug: "blue" },
          ]
      }
  ],

  collectibles: [ // коллекционные товары
      {
          pid: '111111',
          name: 'Rio',
          slug: 'puf-rio',
          subtitle: ['пуф'],
          price: '18400', // default variation price
          image: 'https://skdesign.ru/wp-content/uploads/2020/07/%D0%BF%D1%83%D1%84-Zizi-026-263x263.jpg', // default variation main image
      },{
          pid: '222222',
          name: 'Rio',
          slug: 'kreslo-rio',
          subtitle: ['кресло'],
          price: '58800',
          image: 'https://skdesign.ru/wp-content/uploads/2020/05/RIO_chair_2_1_0006-2-263x263.jpg',
      },{
          pid: '333333',
          name: 'Rio',
          slug: 'divan-rio-trexmestnyj',
          subtitle: ['диван', 'трехместный'],
          price: '87500',
          image: 'https://skdesign.ru/wp-content/uploads/2020/05/Rio-%D1%82%D1%80%D0%B5%D1%85%D0%BC%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B9_3-263x263.jpg',
      },{
          pid: '444444',
          name: 'Rio',
          slug: 'divan-rio-uglovoj',
          subtitle: ['диван', 'угловой'],
          price: '115600',
          image: 'https://skdesign.ru/wp-content/uploads/2020/05/RIO_corner_2_0006-2-263x263.jpg',
      },{
          pid: '555555',
          name: 'Scandi',
          slug: 'krovat-scandi-na-nozhkah',
          subtitle: ['кровать', 'на ножках'],
          price: '117600',
          image: 'https://skdesign.ru/wp-content/uploads/2019/10/Scandi_2_e708_1_140.jpg',
      }
  ],

  sets: [ // комплектные товары
      {
          pid: '111111',
          name: 'Rio',
          subtitle: ['пуф'],
          price: '18400', // default variation price
          image: 'https://skdesign.ru/wp-content/uploads/2020/07/%D0%BF%D1%83%D1%84-Zizi-026-263x263.jpg', // default variation main image
      },{
          pid: '222222',
          name: 'Rio',
          subtitle: ['кресло'],
          price: '58800',
          image: 'https://skdesign.ru/wp-content/uploads/2019/10/Scandi_2_e708_1_140.jpg',
      },{
          pid: '333333',
          name: 'Rio New',
          subtitle: ['пуф'],
          price: '19600', // default variation price
          image: 'https://skdesign.ru/wp-content/uploads/2020/07/%D0%BF%D1%83%D1%84-Zizi-026-263x263.jpg', // default variation main image
      },{
          pid: '444444',
          name: 'Rio New',
          subtitle: ['кресло'],
          price: '58800',
          image: 'https://skdesign.ru/wp-content/uploads/2020/05/RIO_chair_2_1_0006-2-263x263.jpg',
      }
  ],

  interiorGallery: [ // Товар в интерьерах
      'https://skdesign.ru/wp-content/uploads/2020/05/Rio-kreslo-2.jpg',
      'https://skdesign.ru/wp-content/uploads/2019/10/Scandi_2_e708_1_140.jpg',
      'https://skdesign.ru/wp-content/uploads/2020/05/Rio-divan-3.jpg',
      'https://skdesign.ru/wp-content/uploads/2020/05/%D0%9A%D1%80%D0%B5%D1%81%D0%BB%D0%BE-Rio-118-%D1%81%D0%BC-Premier-14_cr.jpg',
      'https://skdesign.ru/wp-content/uploads/2020/05/Rio-kreslo-2.jpg',
      'https://skdesign.ru/wp-content/uploads/2020/05/Rio-divan-3.jpg',
      'https://skdesign.ru/wp-content/uploads/2020/05/%D0%9A%D1%80%D0%B5%D1%81%D0%BB%D0%BE-Rio-118-%D1%81%D0%BC-Premier-14_cr.jpg',
      'https://skdesign.ru/wp-content/uploads/2020/05/Rio-kreslo-2.jpg',
      'https://skdesign.ru/wp-content/uploads/2020/05/Rio-divan-3.jpg',
      'https://skdesign.ru/wp-content/uploads/2020/05/%D0%9A%D1%80%D0%B5%D1%81%D0%BB%D0%BE-Rio-118-%D1%81%D0%BC-Premier-14_cr.jpg',
      'https://skdesign.ru/wp-content/uploads/2020/05/Rio-kreslo-2.jpg',
      'https://skdesign.ru/wp-content/uploads/2020/05/Rio-divan-3.jpg',
      'https://skdesign.ru/wp-content/uploads/2020/05/%D0%9A%D1%80%D0%B5%D1%81%D0%BB%D0%BE-Rio-118-%D1%81%D0%BC-Premier-14_cr.jpg',
      'https://skdesign.ru/wp-content/uploads/2020/05/Rio-kreslo-2.jpg',
      'https://skdesign.ru/wp-content/uploads/2020/05/Rio-divan-3.jpg',
      'https://skdesign.ru/wp-content/uploads/2020/05/%D0%9A%D1%80%D0%B5%D1%81%D0%BB%D0%BE-Rio-118-%D1%81%D0%BC-Premier-14_cr.jpg',
  ],

  comparison: [

  ],

  fit: [
      {
          title: 'Oslo Tall',
          subtitle: ['зеркало', 'из массива дуба'],
          slug: 'oslo-tall',
          image: 'https://skdesign.ru/wp-content/uploads/2020/02/Oslo_180_2-263x263.jpg',
          price: 17200,
      },
      {
          title: 'Rio',
          subtitle: ['кресло'],
          slug: 'kreslo-rio',
          image: 'https://skdesign.ru/wp-content/uploads/2020/05/RIO_chair_2_1_0006-2-263x263.jpg',
          price: 49600,
      },
      {
          title: 'Rio',
          subtitle: ['пуф'],
          slug: 'puf-rio',
          image: 'https://skdesign.ru/wp-content/uploads/2020/07/%D0%BF%D1%83%D1%84-Zizi-026-263x263.jpg',
          price: 17500,
      },
      {
          title: 'Scandi',
          subtitle: ['кровать', 'на ножках'],
          slug: 'krovat-scandi-na-nozhkah',
          image: 'https://skdesign.ru/wp-content/uploads/2019/10/Scandi_2_e708_1_140.jpg',
          price: 32900,

      }
  ],

  crossCategories: [
      {
          title: 'Диваны',
          href: '/product-category/divany',
          image: 'https://skdesign.ru/wp-content/uploads/2020/10/sofa.png'
      },
      {
          title: 'Кровати',
          href: '/product-category/bedroom',
          image: 'https://skdesign.ru/wp-content/uploads/2020/10/bed.png'
      },
      {
          title: 'Пуфы',
          href: '/product-category/pufs',
          image: 'https://skdesign.ru/wp-content/uploads/2020/10/sofa.png'
      },
      {
          title: 'Тумбы и комобы',
          href: '/product-category/komod',
          image: 'https://skdesign.ru/wp-content/uploads/2020/10/sofa.png'
      },
      {
          title: 'Диваны2',
          href: '/product-category/divany',
          image: 'https://skdesign.ru/wp-content/uploads/2020/10/sofa.png'
      },
      {
          title: 'Диваны3',
          href: '/product-category/divany',
          image: 'https://skdesign.ru/wp-content/uploads/2020/10/sofa.png'
      }
  ],

  available: {
      stock: [{
          attrs: [
              'Цвет: серый',
              'Размер корпуса: 12х32х67',
              'Местоположение: ул. Магнитогорская, д. 30'
          ]
      },{
          attrs: [
              'Цвет: буро-малиновый',
              'Размер корпуса: 12х32х67',
              'Местоположение: ул. Магнитогорская, д. 30'
          ]
      },{
          attrs: [
              'Цвет: красный',
              'Размер корпуса: 12х32х67',
              'Местоположение: ул. Магнитогорская, д. 30'
          ]
      }],
      expo: [{
          attrs: [
              'Цвет: буро-малиновый',
              'Размер корпуса: 12х32х67',
              'Местоположение: ул. Магнитогорская, д. 30'
          ]
      },{
          attrs: [
              'Цвет: красный',
              'Размер корпуса: 12х32х67',
              'Местоположение: ул. Магнитогорская, д. 30'
          ]
      }],
      outlet: [{
          attrs: [
              'Цвет: красный',
              'Размер корпуса: 12х32х67',
              'Местоположение: ул. Магнитогорская, д. 30'
          ]
      }]
  },
}
