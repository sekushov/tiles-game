import './resultsInfo.css';
import { useSelector } from 'react-redux';

function ResultsInfo () {
    const isFinish = useSelector(state => state.isFinish);
    const rounds = useSelector(state => state.rounds);
    const time = useSelector(state => state.time);
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
            </div>
        </div>
        
    )
}

export default ResultsInfo