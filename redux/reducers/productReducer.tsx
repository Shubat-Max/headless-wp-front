import {AProduct, AVariator} from "../../constants/actions";
import {IProduct} from "../../types/IProduct";

interface IProductReducer {
  entity: IProduct,
  variator: {
    taxonomy_slug: string;
    taxonomy_name: string;
    term_slug: string;
    term_name: string;
  }[] | {}[];
  variation: {
    id: number;
    price: number;
    general_image: string;
    gallery?: string[];
    fabric?: {
      slug: string;
      name: string;
      collection: string;
      category: {
        name: string | number;
        rate: number;
        material: string;
      };
      image: string;
    };
    drawing?: string[];
    variation_attributes: {
      taxonomy_slug: string;
      term_slug: string;
    }[];
  } | {};
  collectibles?: {
    index: number;
    entities: {
      id: number;
      name: string;
      slug: string;
      subtitle: string | string[];
      price: number;
      image: string;
    }[];
  };
  gallery?: {
    index: number
  };
  fabric?: false | null;
  loading: boolean;
  loaded: boolean;
}

const initialState:any = {
  entity: {},
  variator: [],
  variation: {},
  collectibles: {
    index: 1,
    entities: []
  },
  gallery: {
    index: 0
  },
  fabric: false,
  loading: false,
  loaded: false
}

const ProductReducer = (state = initialState, action) => {

  switch (action.type) {
    case AProduct.INIT: {

      let variations:any = Object.values(action.payload.product.variations);
      const default_attributes = action.payload.product.default_attributes;

      /* search for default variation */
      default_attributes.map(dAttr => {
        variations = variations.filter((v:any) => {
          return v.variation_attributes.reduce((acc, vAttr) => {
            if (acc) return acc;
            if (dAttr.taxonomy_slug === vAttr.taxonomy_slug)
              if (dAttr.term_slug === vAttr.term_slug) acc = true;
            return acc;
          }, false)
        })
      })

      return {
        ...state,
        entity: action.payload.product,
        variator: action.payload.product.default_attributes,
        variation: variations[0],
        fabric: variations[0]?.fabric ? variations[0].fabric : undefined,
      }
    }

    case AVariator.UPDATE_OPTIONS: {
      let selection = state.variator.map(s => s.taxonomy_slug === action.payload.taxonomy_slug ? {...s, ...action.payload} : s)
      let variations:any = Object.values(state.entity.variations);

      selection.map(dAttr => {

        if (dAttr.taxonomy_slug === 'pa_fabric-selector') return;

        variations = variations.filter((v:any) => {
          return v.variation_attributes.reduce((acc, vAttr) => {
            if (acc) return acc;
            if (dAttr.taxonomy_slug === vAttr.taxonomy_slug)
              if (dAttr.term_slug === vAttr.term_slug) acc = true;
            return acc;
          }, false)
        })
      })

      return {
        ...state,
        variator: selection,
        variation: variations[0],
        fabric: variations[0]?.fabric ? variations[0].fabric : false,
      }
    }

    case '@@MODAL_FABRIC/SELECT_FABRIC': {
      return {
        ...state,
        fabric: action.payload
      }
    }

    case 'change_gallery_slide': {
      return {
        ...state,
        gallery: {
          ...state.gallery,
          ...action.payload
        }
      }
    }

    default:
      return state
  }
}

export default ProductReducer;