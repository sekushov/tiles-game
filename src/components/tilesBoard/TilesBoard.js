import './tilesBoard.css';
import Tile from '../tile/Tile';

function TilesBoard ({tilesArray, compareTiles}) {

    const tiles = tilesArray.map((tile, i) => {
        return <Tile key={i} num={i} data={tile} />
    });

    return (
        <div className="tilesBoard">
            {tiles}
        </div>
    )
}
export default TilesBoard