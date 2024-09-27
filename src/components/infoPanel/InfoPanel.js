import './infoPanel.css';
import {setTime} from '../../actions';
import { useSelector, useDispatch } from 'react-redux';
import {useEffect, useRef} from 'react';

function InfoPanel () {
    const rounds = useSelector(state => state.rounds);
    const startTime = useSelector(state => state.startTime);
    const isFinish = useSelector(state => state.isFinish);
    const timeRef = useRef();
    const dispatch = useDispatch();

    const timeFormat = (time) => {
        const minutes = (time / 60 < 10) ? ('0' + parseInt(time / 60)) : (parseInt(time / 60));
        const seconds = (time % 60 < 10) ? ('0' + time % 60) : (time % 60) ;
        return minutes + ':' + seconds
    }

    useEffect(() => {
        let timeInterval;
        if (startTime) {
            timeInterval = setInterval(() => {
                const time = parseInt((new Date().getTime() - startTime.getTime()) / 1000);
                timeRef.current.innerText = 'Time: ' + timeFormat(time);
            }, 1000);
        }
        if (isFinish) {
            clearInterval(timeInterval);
            const time = parseInt((new Date().getTime() - startTime.getTime()) / 1000);
            dispatch(setTime(timeFormat(time)));
        }
        return() => clearInterval(timeInterval);
    }, [startTime, isFinish]);

    return (
        <div className="info-panel">
            <div className="info-panel__block">
                Rounds: {rounds}
            </div>
            <div className="info-panel__block" ref={timeRef}>
                Time: 00:00
            </div>
        </div>
    )
}

export default InfoPanel