import {createSelector} from "reselect";

let getStickers = (state) =>{
    return state.stickersPage.stickers;
}

export let getIsFetchingStickers = (state) =>{
    return state.stickersPage.isFetchingStickers;
}

export let getStickersAreFetched = (state) =>{
    return state.stickersPage.stickersAreFetched;
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

export let getIsShowIframe = (state) =>{
    return state.stickersPage.isShowIframe;
}

export let getPdfOutput = (state) =>{
    return state.stickersPage.pdfOutput;
}