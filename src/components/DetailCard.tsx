import { FC, useContext } from 'react';
import Card from '@mui/material/Card';
import { MatchesContext } from '../context/MatchesContext';

export const DetailCard: FC = () => {
  const { matchData } = useContext(MatchesContext);

  return (
    <Card variant="outlined" sx={{ padding: '15px' }}>
      <div className='d-card-head'>
        <p className='fifa'>FIFA World Cup 2022™ <span> • {matchData?.date}</span></p>
        <p>Full-time</p>
      </div>
      <div className='score-section'>
        <div className='team-data'>
          <img src={matchData?.team1.flag} alt="flag" className='flag' />
          <p>{matchData?.team1.name}</p>
        </div>
        <div className='team-score'>{matchData?.team1.score}</div>
        <div className='team-score'>-</div>
        <div className='team-score'>{matchData?.team2.score}</div>
        <div className='team-data'>
          <img src={matchData?.team2.flag} alt="flag" className='flag' />
          <p>{matchData?.team2.name}</p>
        </div>
      </div>
      <div className='card-round penalties'>{matchData?.team1.penalties !== false && `Penalties: ${matchData?.team1.penalties}-${matchData?.team2.penalties}`}</div>
      <div className='card-round'>{matchData?.title}</div>
      <div className='players-score-section'>
        <div className='players-score-left'>
          <p>Olivier Giroud 44'</p>
          <p>Kylian Mbappé 74', 90+1'</p>
        </div>
        <div className='players-score-center'>
          <img src='https://ssl.gstatic.com/onebox/sports/game_feed/goal_icon.svg' alt="icon" />
        </div>
        <div className='players-score-right'>
          <p>Robert Lewandowski 90+9' (P)</p>
        </div>
      </div>
      <div className="recap-section">
        {matchData?.recaps?.map(el => (
          <img src={el} alt="recap video" key={el} />
        ))}
      </div>
    </Card>
  );
}