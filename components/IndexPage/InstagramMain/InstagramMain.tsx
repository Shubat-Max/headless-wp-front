import * as React from "react"
import {Col, Row} from "../../Grid";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import Link from "next/link";
import {
  InstagramMainRow, InstagramMainTextBlock,
  InstagramMainTextBlockAuthor, InstagramMainTextBlockHtml,
  InstagramMainTextBlockIcon,
  InstagramMainTextBlockText
} from "./InstagramMain.sc";
import InstagramMainItem from "./InstagramMainItem";


const InstagramMain = () => {
  const instagramItems = useSelector(( state: RootState ) => state.indexPage.instagramMain )

  if (!instagramItems) return null;

  instagramItems.map(item => {

  })

  return (
    <InstagramMainRow>
      <Row>
        <Col md={4}>
          <InstagramMainTextBlock>
            <span>&#8221;</span>
            <InstagramMainTextBlockHtml dangerouslySetInnerHTML={{__html: 'Спасибо <a href="https://skdesign.ru/">@skdesign.ru</a> за такие публикации. Получаю эстетическое удовольствие от просмотра.'}}/>
            <InstagramMainTextBlockAuthor>
              <img
                src='https://instagram.fhel4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/120474596_2590949211186223_7536291759790459048_n.jpg?_nc_ht=instagram.fhel4-1.fna.fbcdn.net&_nc_ohc=EV2yqraJebgAX8okp3R&_nc_tp=25&oh=ec976ff9323f29c041219817dc17dfe6&oe=5FD98AD2'
                alt='arhipkinasasha'
              />
              <div>arhipkinasasha</div>
            </InstagramMainTextBlockAuthor>
          </InstagramMainTextBlock>
        </Col>

        {instagramItems.map((item, index) => {
          return <InstagramMainItem url={item.instagramPost} key={index} />
        })}
        <Col md={4}>
          <InstagramMainTextBlock>
            <InstagramMainTextBlockIcon src='https://skdesign.ru/wp-content/uploads/2020/03/instagram-logo.png'/>
            <Link href='/' passHref>
              <a>
                @skdesign.ru
              </a>
            </Link>
            <InstagramMainTextBlockText>
              Отмечайте наш профиль на ваших постах, и мы разместим самые яркие и эмоциональные фото в этом разделе на сайте.
            </InstagramMainTextBlockText>
          </InstagramMainTextBlock>
        </Col>
      </Row>
    </InstagramMainRow>
  );
};

export default InstagramMain;