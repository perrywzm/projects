import { VIEW_ITEM, ENTER_SEARCH_TERM } from "./constants";

export const viewItem = (viewedItem) => {
    return {
        type: VIEW_ITEM,
        viewedItem
    };
}

export const enterSearchTerm = (searchTerm) => {
    return {
        type: ENTER_SEARCH_TERM,
        searchTerm
    }
}