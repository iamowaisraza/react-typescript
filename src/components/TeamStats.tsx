
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

export function TeamStats() {
  return (
    <Card variant="outlined">
      {/* <Box sx={{ maxWidth: 630, margin: '0 auto' }}> */}
        <Card className='stats-card'>
          <div className='stats-section'>
            <div className='stats-left'>
              <img src="https://ssl.gstatic.com/onebox/media/sports/logos/z3JEQB3coEAGLCJBEUzQ2A_96x96.png" alt="flag" className='flag' width="24" height="24" />
            </div>
            <div className='stats-center'>
              <p>TEAM STATS</p>
            </div>
            <div className='stats-right'>
              <img src="https://ssl.gstatic.com/onebox/media/sports/logos/z3JEQB3coEAGLCJBEUzQ2A_96x96.png" alt="flag" className='flag' width="24" height="24" />
            </div>
          </div>

          <div className='stats-section'>
            <div className='stats-left'>
              <p>16</p>
            </div>
            <div className='stats-center'>
              <p>Shots</p>
            </div>
            <div className='stats-right'>
              <p>12</p>
            </div>
          </div>

          <div className='stats-section'>
            <div className='stats-left'>
              <p>55%</p>
            </div>
            <div className='stats-center'>
              <p>Shots on target</p>
            </div>
            <div className='stats-right'>
              <p>33%</p>
            </div>
          </div>
        </Card>
      {/* </Box> */}
    </Card>
  );
}