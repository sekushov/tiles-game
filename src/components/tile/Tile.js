import './tile.css';
import {openTile, startTimer} from '../../actions';
import { useSelector, useDispatch } from 'react-redux';

function Tile ({num, data}) {
    const getClass = () => {
        let clazz = 'tile';
        clazz += data.visible ? ` active-${data.color}` : '';
        clazz += data.disappear ? ' disappear' : '';
        return clazz
    }
    const dispatch = useDispatch();
    const startTime = useSelector(state => state.startTime)

    const onClick = () => {
        if (!data.disappear) dispatch(openTile(num));
        if (!startTime) dispatch(startTimer(new Date()));
    }

    return(
        <div className={getClass()} onClick={onClick}>
        </div>
    )
}

export default Tile