import { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MatchDataType, MatchCardProps } from '../types';
import { MatchesContext } from '../context/MatchesContext';

export const MatchCard: FC<MatchCardProps> = ({ data }) => {
    const { date, title, ft, videoImg, team1, team2 } = data;
    const navigate = useNavigate();
    const { setMatchData } = useContext(MatchesContext);

    const cardClickHandler = (detail: MatchDataType) => {
        setMatchData(detail);
        window.scrollTo(0,0);
        navigate('/detail');
    }

    return (
        <div className="match-card" onClick={() => cardClickHandler(data)}>
            <h5>{title}</h5>
            <div className="row">
                <div className="col-left">
                    <div className={`team ${team1.winner ? 'win' : 'lose'}`}>
                        <div>
                            <img src={team1.flag} alt="flag" />
                            <span>{team1.name}</span>
                        </div>
                        <span className={`${team1.winner ? 'win' : 'lose'}`}>{team1.score} {team1.penalties !== false && `(${team1.penalties})`}</span>
                    </div>

                    <div className={`team ${team2.winner ? 'win' : 'lose'}`}>
                        <div>
                            <img src={team2.flag} alt="flag" />
                            <span>{team2.name}</span>
                        </div>
                        <span className={`${team2.winner ? 'win' : 'lose'}`}>{team2.score} {team1.penalties !== false && `(${team1.penalties})`}</span>
                    </div>
                </div>
                <div className="col-right">
                    <p>{ft}</p>
                    <p className="date">{date}</p>
                    <img src={videoImg} alt="thumbnail" />
                </div>
            </div>
        </div>
    );
}