import './App.css';
import TilesBoard from '../tilesBoard/TilesBoard';
import * as actions from '../../actions';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const {toggleVisible} = bindActionCreators(actions, dispatch);
  
  const tilesArray = useSelector(state => state.tiles);
  const visibleTiles = useSelector(state => state.visibleTiles);

  const compareTiles = (tiles) => {
      console.log(tiles);
      if (tiles[0].color === tiles[1].color) {
          console.log('congratulations')
      } else {
          setTimeout(() => {
              toggleVisible(tiles[1].num);
              toggleVisible(tiles[0].num);
          }, 1000);
      }
  }
  if (visibleTiles.length >= 2) compareTiles(visibleTiles)


  return (
    <TilesBoard tilesArray={tilesArray} compareTiles={compareTiles} />
  );
}

export default App;
