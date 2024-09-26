const setTiles = () => {
    let tilesArray = [];
    for (let i = 0; i < 16; i++) {
        tilesArray[i] = i % 2 === 0 ? {color: 0} : {color: 1};
    }
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    shuffle(tilesArray)
    return tilesArray
}
const initialState = {tiles: setTiles(), visibleTiles: []};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_VISIBLE": {
            const differences = state.visibleTiles.filter(visible => (visible.num !== action.payload.num));
            if (differences.length === state.visibleTiles.length) {
                console.log('wtf');
                return {...state, visibleTiles: [...state.visibleTiles, action.payload]}
            } else {
                return {...state, visibleTiles: differences}
            }
            
        }
        default: return state
    }
}

export default reducer