import {createSelector} from "reselect";

let getStickers = (state) =>{
    return state.stickersPage.stickers;
}

export let getIsFetchingStickers = (state) =>{
    return state.stickersPage.isFetchingStickers;
}

export let getPdfRef = (state) =>{
    return state.stickersPage.pdf;
}

export const getStickersSelector = createSelector(getStickers,
    (stickers) => {
    return stickers.filter(s => true);
})

export let getIsGeneratingPdf = (state) =>{
    return state.stickersPage.isGeneratingPdf;
}