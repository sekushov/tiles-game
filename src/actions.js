export const openTile = (num) => ({type: "OPEN_TILE", payload: num});
export const closeTile = (num) => ({type: "CLOSE_TILE", payload: num});
export const disappearTiles = (num) => ({type: "DISAPPEAR_TILES", payload: num});
export const countRounds = () => ({type: "COUNT_ROUNDS"});
export const startTimer = (time) => ({type: "START_TIMER", payload: time});
export const setFinish = () => ({type: "FINISH"});
export const setTime = (time) => ({type: "TIME", payload: time});