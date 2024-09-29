import './infoPanel.css';
import about from '../../img/about.png';
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
        } else {
            timeRef.current.innerText = 'Time: ' + timeFormat(0);
        }
        if (isFinish) {
            clearInterval(timeInterval);
            const time = parseInt((new Date().getTime() - startTime.getTime()) / 1000);
            dispatch(setTime(timeFormat(time)));
        }
        return() => clearInterval(timeInterval);
    }, [startTime, isFinish]);

    const aboutRef = useRef();
    const showAbout = () => aboutRef.current.classList.add('active')
    const hideAbout = () => aboutRef.current.classList.remove('active')

    return (
        <div className="info-panel">
            <div className="info-panel__block">
                Rounds: {rounds}
            </div>
            <div className="info-panel__block" ref={timeRef}>
                Time: 00:00
            </div>
            <img src={about} alt="about" className="info-panel__about-trigger" onClick={showAbout} />
            
            <div className="info-panel__about-wrapper" ref={aboutRef}>
                <div className="info-panel__about">
                    The gameplay is the sequence of rounds. In each round the user should select 2 tiles with the same color to make them disappear. If he selects 2 tiles with different colors then they are flipped to "closed" state, and the user proceeds with the next round. The game is considered to be over when all of the tiles are opened.
                    <div className="info-panel__about-close" onClick={hideAbout}>×</div>
                </div>
            </div>
        </div>
    )
}

export default InfoPanel