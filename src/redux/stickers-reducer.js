const UPDATE_PDF = 'UPDATE_PDF';
const UPDATE_STICKERS = 'UPDATE_STICKERS';

const stickersReducer = (state, action) => {
    switch (action) {
        case UPDATE_PDF:
            state.pdf = action.newPdf;
            return state;
        case UPDATE_STICKERS:
            state.stickers = action.newStickers;
            return state;
        default:
            return state;
    }
}

export const updatePdfActionCreator = (newPdf) => ({ type: UPDATE_PDF, newPdf: newPdf });
export const updateStickersActionCreator = (newStickers) => ({ type: UPDATE_STICKERS, newStickers: newStickers });

export default stickersReducer;