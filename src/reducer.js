const setTiles = () => {
    let tilesArray = [];
    for (let i = 0; i < 16; i++) {
        tilesArray[i] = {color: (i % 8)}
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
const initialState = {tiles: setTiles()};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_OPENED": {
            return {...state, tiles: state.tiles.map((tile, i) => {
                if (i === action.payload) tile.visible = true
                return tile
            })}
        }
        case "SET_CLOSED": {
            return {...state, tiles: state.tiles.map((tile, i) => {
                if (i === action.payload) tile.visible = false
                return tile
            })}
        }
        case "DISAPPEAR_TILES": {
            return {...state, tiles: state.tiles.map((tile, i) => {
                if (i === action.payload) {
                    tile.disappear = true;
                    tile.visible = false;
                }
                return tile
            })}
        }
        default: return state
    }
}

export default reducer