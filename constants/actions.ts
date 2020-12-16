export enum AProduct {
    INIT = '@@product/initialize',
}

export enum AVariator {
    UPDATE_OPTIONS = '@@variator/update_options',
}

export enum AModalFabric {
    FETCH_SUCCESS = '@@modal_fabric/fetch_success',
    FETCH_ERROR = '@@modal_fabric/fetch_error',
    FETCH_RETRY = '@@modal_fabric/fetch_retry',
}

export enum AModalCollection {
    FETCH_SUCCESS = '@@modal_collection/fetch_success',
    FETCH_ERROR = '@@modal_collection/fetch_error',
    FETCH_RETRY = '@@modal_collection/fetch_retry',
}

export enum AModalProduct {
    FETCH_SUCCESS = '@@modal_product/fetch_success',
    FETCH_ERROR = '@@modal_product/fetch_error',
    FETCH_RETRY = '@@modal_product/fetch_retry',
}

export enum AREVariablePolaroid {
    CHANGE_VARIATION = "@@re_variable_polaroid/change_variation"
}

export enum AModal {
    OPEN = '@@modal/open',
    CLOSE = '@@modal/close',
}

export enum ACart {
    ADD = '@@cart/add_to_cart'
}

export enum ACatalog {
    INIT = '@@catalog/init',
    CHANGE_PRICE = '@@catalog/changePrice',
    CHANGE_ACTIVE_FILTER_ATTRIBUTES = '@@catalog/chageActiveFilterAttr',
    CHANGE_ACTIVE_FILTER_ATTRIBUTES_RANGE = '@@catalog/chageActiveFilterAttrRange',
    CLEAR_ACTIVE_FILTER = '@@catalog/clearActiveFilter',
    CHANGE_SORT_TYPE = '@@catalog/changeSortType',
    CHANGE_PAGE = '@@catalog/changePage',
    CHANGE_PER_PAGE = '@@catalog/changePerPage',
    CHANGE_ACTIVE_FILTER_COLLECTION = '@@catalog/changeActiveFilrerCollection'
}

