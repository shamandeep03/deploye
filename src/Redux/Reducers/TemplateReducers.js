export const templatesReducers =  (state = { data: null, cdns: [] }, action) => {
    switch (action.type) {
        case 'GET_PAGE':
            return { ...state, data: null }
        case 'GET_PAGE_SUCCESS':
            return { ...state, data: action.payload.data, cdns: action.payload.cdns };
        default:
            return state
    }
}