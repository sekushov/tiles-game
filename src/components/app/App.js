import './App.css';
import TilesBoard from '../tilesBoard/TilesBoard';
import ResultsInfo from '../resultsInfo/ResultsInfo';
import InfoPanel from '../infoPanel/InfoPanel';
import * as actions from '../../actions';
import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const {closeTile, disappearTiles, countRounds, setFinish} = bindActionCreators(actions, dispatch);
  const tilesArray = useSelector(state => state.tiles);

  const compareTiles = (tiles) => {
    countRounds();

    if (tiles[0].color === tiles[1].color) {
      setTimeout(() => {
        disappearTiles(tiles[0].num);
        disappearTiles(tiles[1].num);
      }, 500);
    } else {
      setTimeout(() => {
        closeTile(tiles[0].num);
        closeTile(tiles[1].num);
      }, 500);
    }
  }

  useEffect(() => {
    const visibleTiles = () => tilesArray.filter((tile, i) => {
      if (tile.visible) tile.num = i
      return tile.visible
    })
    if (visibleTiles().length >= 2) compareTiles(visibleTiles())

    const disappearTiles = () => tilesArray.filter((tile, i) => {
      if (tile.disappear) tile.num = i
      return tile.disappear
    });
    if (disappearTiles().length === tilesArray.length) {
      setFinish()
    }
  }, [tilesArray]);


  return (
    <div className="app">
      <InfoPanel />
      <TilesBoard tilesArray={tilesArray} />
      <ResultsInfo />
    </div>
    
  );
}

export default App;
