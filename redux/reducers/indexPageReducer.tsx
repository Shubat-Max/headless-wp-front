import { mockIndexPage } from '../../__mocks__/indexPage';
import {catalog} from '../../__mocks__/catalog'
import {IIndexPage} from "../../types/IIndexPage";

const  initialState : any = mockIndexPage;

const indexPageReducer = ( state = initialState, action ) => {
    switch( action.type ){
        // case 'ChangeVariation': {
        //     let catalog = state.catalog.map(item => {
        //         // находим нужный продукт
        //         if (item.id === action.payload.id) {
        //             // менеям активную вариацию
        //             item.activeVariation.variation_attrs.map(attr => {
        //                 if (attr.tax_slug === action.payload.slug) {
        //                     attr.term_slug = action.payload.value
        //                 }
        //             })
        //             // проходимя по вариациям
        //             item.variations.map(variation => {
        //                 // находим нужную вариацию и задаем картинку и цену
        //                 if (JSON.stringify(variation.variation_attrs) === JSON.stringify(item.activeVariation.variation_attrs)) {
        //                     item.activeVariation.price = variation.price;
        //                     item.activeVariation.general_image = variation.general_image
        //                 }
        //             })
        //         }
        //         return item
        //     })
        //     return {...state, catalog}
        // }

        default:
            return state
    }
}

export default indexPageReducer;