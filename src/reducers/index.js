import { combineReducers } from 'redux';
import { VIEW_ITEM, ENTER_SEARCH_TERM } from '../actions/constants';

const viewItemReducer = (viewedItem = null, action) => {
    switch (action.type) {
        case VIEW_ITEM:
            return action.viewedItem;
        default:
            return viewedItem;
    }
};

const searchTermReducer = (searchTerm = "", action) => {
    switch (action.type) {
        case ENTER_SEARCH_TERM:
            return action.searchTerm;
        default:
            return searchTerm;
    }
}

export default combineReducers({
    viewedItem: viewItemReducer,
    searchTerm: searchTermReducer
});