import * as React from "react"
import * as redux from 'react-redux'
import {mount} from "enzyme"
import {InstagramMainRow} from "./InstagramMain.sc";
import InstagramMain from "./InstagramMain";



const mock = {firstTextBlock: {
    icon: 'https://skdesign.ru/wp-content/uploads/2020/03/instagram-logo.png',
    text: 'Спасибо <a href="https://skdesign.ru/">@skdesign.ru</a> за такие публикации. Получаю эстетическое удовольствие от просмотра.',
    photo: 'https://instagram.fhel4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/120474596_2590949211186223_7536291759790459048_n.jpg?_nc_ht=instagram.fhel4-1.fna.fbcdn.net&_nc_ohc=EV2yqraJebgAX8okp3R&_nc_tp=25&oh=ec976ff9323f29c041219817dc17dfe6&oe=5FD98AD2',
    name: 'arhipkinasasha',
  },
  lastTextBlock: {
    icon: 'https://skdesign.ru/wp-content/uploads/2020/03/instagram-logo.png',
    text: 'Отмечайте наш профиль на ваших постах, и мы разместим самые яркие и эмоциональные фото в этом разделе на сайте.',
    address: '@skdesign.ru',
  },
  items: [
    {
      img: 'https://instagram.fhel4-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/118200303_2277857259006243_3262391532673584555_n.jpg?_nc_ht=instagram.fhel4-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=fQun9-ve4BIAX9Wgouu&tp=19&oh=9b9fa463a2dc3e2df955cbd880605e9e&oe=5FD8860E',
      url: 'https://www.instagram.com/p/CEYvSxbH8m2/'
    },
    {
      img: 'https://instagram.fhel4-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/118200303_2277857259006243_3262391532673584555_n.jpg?_nc_ht=instagram.fhel4-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=fQun9-ve4BIAX9Wgouu&tp=19&oh=9b9fa463a2dc3e2df955cbd880605e9e&oe=5FD8860E',
      url: 'https://www.instagram.com/p/CEYvSxbH8m2/'
    }]
}
const spy = jest.spyOn(redux, 'useSelector')



describe('component', () => {
  describe('when missing required values', () => {
    beforeEach(() => {
      spy.mockReturnValue({})
    })

    it('should NOT render <InstagramMainRow>', () => {
      const component = mount(<InstagramMain/>);
      expect(component.find(InstagramMainRow).exists()).toBeFalsy()
    })
  })
})
