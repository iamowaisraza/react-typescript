import { FC, useContext } from 'react';
import Card from '@mui/material/Card';
import { MatchesContext } from '../context/MatchesContext';
import { StatsType } from '../types';

export const TeamStats: FC = () => {
  const { matchData } = useContext(MatchesContext);

  return (
    <Card variant="outlined">
      <Card className='stats-card'>
        <div className='stats-section'>
          <div className='stats-left'>
            <img src={matchData?.team1.flag} alt="flag" className='flag' width="24" height="24" />
          </div>
          <div className='stats-center'>
            <p>TEAM STATS</p>
          </div>
          <div className='stats-right'>
            <img src={matchData?.team2.flag} alt="flag" className='flag' width="24" height="24" />
          </div>
        </div>
        {matchData?.stats?.map((el: StatsType, i: number) => (
          <div className='stats-section' key={`stats-${i}`}>
            <div className='stats-left'>
              <p>{el.team1}</p>
            </div>
            <div className='stats-center'>
              <p>{el.detail}</p>
            </div>
            <div className='stats-right'>
              <p>{el.team2}</p>
            </div>
          </div>
        ))}
      </Card>
    </Card>
  );
}