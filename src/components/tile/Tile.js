import './tile.css';
import {setOpened} from '../../actions';
import { useDispatch } from 'react-redux';

function Tile ({num, data}) {
    const clazz = () => {
        let clazz = 'tile';
        clazz += data.visible ? ` active-${data.color}` : '';
        clazz += data.disappear ? ' disappear' : '';
        return clazz
    }
    const dispatch = useDispatch();

    return(
        <div className={clazz()} onClick={() => {if (!data.disappear) dispatch(setOpened(num));}}>
        </div>
    )
}

export default Tile