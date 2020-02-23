export let getStickersSelector = (state) =>{
    return state.stickersPage.stickers;
}

export let getIsFetchingStickers = (state) =>{
    return state.stickersPage.isFetchingStickers;
}

export let getPdfRef = (state) =>{
    return state.stickersPage.pdf;
}