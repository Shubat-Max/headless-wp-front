const FormatPrice = ( price ) => {
    if( !price || isNaN(price) ) return 'NaN';

    return new Intl.NumberFormat('ru-RU', {style: 'currency', currency: 'RUB', minimumFractionDigits: 0, maximumFractionDigits: 0}).format(price);
};

export default FormatPrice;