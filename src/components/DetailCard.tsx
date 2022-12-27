import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
);


export function DetailCard() {
  return (
    <Card variant="outlined" sx={{ padding: '15px' }}>
      <div className='d-card-head'>
        <p className='fifa'>FIFA World Cup 2022™ <span>{bull} 4 Dec</span></p>
        <p>Full-time</p>
      </div>
      <div className='score-section'>
        <div className='team-data'>
          <img src="https://ssl.gstatic.com/onebox/media/sports/logos/z3JEQB3coEAGLCJBEUzQ2A_96x96.png" alt="flag" className='flag' />
          <p>France</p>
        </div>
        <div className='team-score'>3</div>
        <div className='team-score'>-</div>
        <div className='team-score'>1</div>
        <div className='team-data'>
          <img src="https://ssl.gstatic.com/onebox/media/sports/logos/yTS_Piy3M1wUBnqU0n5aAw_96x96.png" alt="flag" className='flag' />
          <p>Poland</p>
        </div>
      </div>
      <div className='card-round'>Round of 16</div>
      <div className='players-score-section'>
        <div className='players-score-left'>
          <p>Olivier Giroud 44'</p>
          <p>Kylian Mbappé 74', 90+1'</p>
        </div>
        <div className='players-score-center'>
          <img src='https://ssl.gstatic.com/onebox/sports/game_feed/goal_icon.svg' />
        </div>
        <div className='players-score-right'>
          <p>Robert Lewandowski 90+9' (P)</p>
        </div>
      </div>
      <div className="recap-section">
        <img src="https://ssl.gstatic.com/onebox/media/sports/videos/vita/nVzJ3o1T58aHQ-oT_768x432.jpg" alt="recap video" />
        <img src="https://ssl.gstatic.com/onebox/media/sports/videos/vita/4G6Wb6ybn2g_QgxQ_768x432.jpg" alt="recap video" />
      </div>
    </Card>
  );
}