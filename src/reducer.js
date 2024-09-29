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
const initialState = () => ({tiles: setTiles(), rounds: 0});


const reducer = (state = initialState(), action) => {
    switch (action.type) {
        case "OPEN_TILE": {
            return {...state, tiles: state.tiles.map((tile, i) => {
                if (i === action.payload) tile.visible = true
                return tile
            })}
        }
        case "CLOSE_TILE": {
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
        case "COUNT_ROUNDS": {
            return {...state, rounds: state.rounds + 1}
        }
        case "START_TIMER": {
            return {...state, startTime: action.payload}
        }
        case "FINISH": {
            return {...state, isFinish: true}
        }
        case "TIME": {
            return {...state, time: action.payload}
        }
        case "RETURN_STATE": {
            return initialState()
        }
        default: return state
    }
}

export default reducer