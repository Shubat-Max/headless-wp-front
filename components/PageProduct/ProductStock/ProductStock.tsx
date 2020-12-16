import * as React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {
  Head,
  HeadArrow,
  HeadDot,
  HeadTitle, List, StockItem,
  StockItemAttribute,
  StockItemAttributes,
  StockItemShow,
  StockList,
  Tab
} from "./ProductStock.sc";

const mock = {
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
}

const ProductStock = () => {

  const available = useSelector((state:RootState) => state.product.entity?.available )
  // const available = mock

  if( ! available ) return null
  // if( ! available ) return <StockList style={{color: '#e3e3e3'}}>Отсутствуют на складах</StockList>

  const [activeTab, setActiveTab] = React.useState( null )

  return (
    <StockList>

      { Object.keys(available).map((key, o) => {

        if( ! mock[key].length ) return null;

        let dotColor = '#e3e3e3';
        let title = 'Представленные товары'
        switch( key ){
          case 'stock': {
            dotColor = '#84E296'; title = 'В наличии'; break;
          }
          case 'expo': {
            dotColor = '#FFE55F'; title = 'На экспозиции'; break;
          }
          case 'outlet': {
            dotColor = '#EB5E55'; title = 'OUTLET'; break;
          }
        }

        const isTabActive = activeTab === key;

        return (
          <Tab key={`t-${o}`}>
            <Head onClick={() => { activeTab === key ? setActiveTab(null) : setActiveTab(key)}}>
              <HeadDot color={dotColor} />
              <HeadTitle>{title} ({mock[key].length})</HeadTitle>
              <HeadArrow active={isTabActive} />
            </Head>
            <List active={isTabActive}>
              {mock[key].map((item, i) =>
                <StockItem key={`i-${i}`}>
                  <StockItemAttributes>
                    {
                      item.attrs ? item.attrs.map((attr, j) => <StockItemAttribute key={`a-${j}`}>{attr}</StockItemAttribute>) : null
                    }
                  </StockItemAttributes>
                  <StockItemShow onClick={() => { console.log('@@ACTION/LOAD_STOCK') }}>Посмотреть</StockItemShow>
                </StockItem>
              )}
            </List>
          </Tab>
        )
      })}

    </StockList>
  );
};



export default ProductStock;