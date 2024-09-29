import './resultsInfo.css';
import returnBtn from '../../img/return.png';
import { useSelector, useDispatch } from 'react-redux';
import {returnState} from '../../actions';

function ResultsInfo () {
    const isFinish = useSelector(state => state.isFinish);
    const rounds = useSelector(state => state.rounds);
    const time = useSelector(state => state.time);
    const dispatch = useDispatch();
    const clazz = () => isFinish ? 'results-info__wrapper active' : 'results-info__wrapper';


    return (
        <div className={clazz()}>
            <div className="results-info">
                Results
                <div className="results-info__results">
                    <div className="results-info__block">
                        <div className="results-info__block-title">Rounds</div>
                        <div>{rounds}</div>
                    </div>
                    <div className="results-info__block">
                        <div className="results-info__block-title">Time</div>
                        <div>{time}</div>
                    </div>
                </div>
                <img src={returnBtn} alt="return game" className="results-info__return-btn" onClick={() => dispatch(returnState())} />
            </div>
        </div>
        
    )
}

export default ResultsInfo