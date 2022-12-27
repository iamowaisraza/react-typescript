import { useNavigate } from 'react-router-dom';

export interface Team { name: string, flag: string, winner: boolean, score: number }
export type CardProps = {
    date: string,
    ft: string,
    videoImg: string,
    team1: Team,
    team2: Team,
}

export const Card = ({ date, ft, videoImg, team1, team2 }: CardProps) => {
    const navigate = useNavigate();

    const cardClickHandler = () => {
        navigate('/detail')
    }

    return (
        <div className="match-card" onClick={cardClickHandler}>
            <h5>Round of 16</h5>
            <div className="row">
                <div className="col-left">
                    <div className="team lose">
                        <div>
                            <img src={team1.flag} />
                            <span>{team1.name}</span>
                        </div>
                        <span className="lose">1({team1.score})</span>
                    </div>

                    <div className="team win">
                        <div>
                            <img src={team2.flag} />
                            <span>{team2.name}</span>
                        </div>
                        <span className="win">1({team2.score})</span>
                    </div>
                </div>
                <div className="col-right">
                    <p>{ft}</p>
                    <p className="date">{date}</p>
                    <img src={videoImg} />
                </div>
            </div>
        </div>
    );
}