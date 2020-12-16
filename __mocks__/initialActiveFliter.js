const initialActiveFilter  = {
  priceRange: [0, 100],
  collection: [],
  attributeFilter: [
    {taxonomy_slug: "pa_overall-width",taxonomy_name: 'Габаритная ширина',  term_slug: [], type: 'range'},
    {taxonomy_slug: "pa_color",taxonomy_name: 'Цвет',  term_slug: [], type: 'checkbox'},
    {taxonomy_slug: "pa_seat-depth",taxonomy_name: 'Глубина сиденья', term_slug: [], type: 'checkbox'},
    {taxonomy_slug: "pa_seat-width",taxonomy_name: 'Ширина сиденья',  term_slug: [], type: 'checkbox'},
    {taxonomy_slug: "pa_armrest-width",taxonomy_name: 'Ширина подлокотника',  term_slug: [], type: 'checkbox'},
    {taxonomy_slug: "pa_legs-height",taxonomy_name: 'Высота ножек',  term_slug: [], type: 'checkbox'},
    {taxonomy_slug: "pa_seat-height",taxonomy_name: 'Высота сиденья',  term_slug: [], type: 'checkbox'},

  ]
  // tabFilter: [
  //   {
  //     taxonomy_slug: 'subcategory',
  //     taxonomy_name: 'по категории',
  //     term_slug: ''
  //   },
  //   {
  //     taxonomy_slug: 'collection',
  //     taxonomy_name: 'по коллекции',
  //     term_slug: ''
  //   },
  //   {
  //     taxonomy_slug: 'mechanism',
  //     taxonomy_name: 'по механизму',
  //     term_slug: ''
  //   }
  // ],
}

export default initialActiveFilter