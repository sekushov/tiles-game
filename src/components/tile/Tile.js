import './tile.css';
import * as actions from '../../actions';
import { useSelector, useDispatch } from 'react-redux';
import {bindActionCreators} from 'redux';

function Tile ({num, data}) {
    const visibleTiles = useSelector(store => store.visibleTiles);
    const dispatch = useDispatch();
    const clazz = () => (visibleTiles.filter(visible => (visible.num === num))).length ? `tile active-${data.color}` : 'tile';
    const {toggleVisible} = bindActionCreators(actions, dispatch);

    return(
        <div className={clazz()} onClick={() => toggleVisible({num, color: data.color})}>
        </div>
    )
}

export default Tile