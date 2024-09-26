import './App.css';
import TilesBoard from '../tilesBoard/TilesBoard';
import * as actions from '../../actions';
import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const {setClosed, disappearTiles} = bindActionCreators(actions, dispatch);
  
  const tilesArray = useSelector(state => state.tiles);

  useEffect(() => {
    const compareTiles = (tiles) => {
      if (tiles[0].color === tiles[1].color) {
        setTimeout(() => {
          disappearTiles(tiles[0].num);
          disappearTiles(tiles[1].num);
        }, 500);
      } else {
        setTimeout(() => {
          setClosed(tiles[0].num);
          setClosed(tiles[1].num);
        }, 500);
      }
    }
    const visibleTiles = () => tilesArray.filter((tile, i) => {
      if (tile.visible) tile.num = i
      return tile.visible
    })
    if (visibleTiles().length >= 2) compareTiles(visibleTiles())
  }, [tilesArray]);


  return (
    <TilesBoard tilesArray={tilesArray} />
  );
}

export default App;
