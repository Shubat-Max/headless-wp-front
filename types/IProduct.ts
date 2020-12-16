export interface IProduct {
    id: number;
    name: string;
    subtitle?: string;
    slug: string;
    static_attributes: any;
    default_attributes: any;
    variable_attributes: any;
    variations: any;
    interior_gallery: any;
    recommended_categories: any;
}

export interface ISingleAttribute {
    taxonomy_slug: string;
    taxonomy_name: string;
    term_slug: string;
    term_name: string;
}

/**
 * @typedef {object} IAttribute
 * @property {string} IAttribute.taxonomy_slug - Bias: bias_text[rating.bias[0]],
 * @property {string} IAttribute.taxonomy_name - Bias: bias_text[rating.bias[0]],
 * @property {ITerm} IAttribute.tax_options - Bias: bias_text[rating.bias[0]],
 */
export interface IAttribute {
    taxonomy_slug: string;
    taxonomy_name: string;
    taxonomy_position?: number;
    taxonomy_options: ITerm[];
}

export interface ITerm {
    term_slug: string;
    term_name: string;
    image?: string;
}

export interface IProductSide {
    id: number;
    slug: string;
    name: string;
    subtitle: string | string[];
    static_attributes: {
        taxonomy_slug: string;
        taxonomy_name: string;
        term_slug: string;
        term_name: string;
    }[];
    default_attributes: {
        taxonomy_slug: string;
        taxonomy_name: string;
        term_slug: string;
        term_name: string;
    }[];
    variable_attributes: {
        taxonomy_slug: string;
        taxonomy_name: string;
        options: {
            term_slug: string;
            term_name: string;
        }[]
    };
    variations: {
        id: number;
        price: number;
        general_image: string;
        gallery: string[];
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
        drawing?: string;
        variation_attributes: {
            taxonomy_slug: string;
            term_slug: string;
        }[]
    }[]
}