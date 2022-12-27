import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Matches } from './Matches';
import { TeamStats } from './TeamStats';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface TabsProp {
  tabs: string[],
  styling: string,
  active: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function NavTabs({ tabs, styling, active }: TabsProp) {
  const [value, setValue] = React.useState(active);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box className={`${styling}-navbar`}>
        <Tabs textColor="inherit" centered value={value} onChange={handleChange}>
          {tabs.map((el: string, i: number) => (
            <Tab label={el} {...a11yProps(i)} disabled={el != 'MATCHES' && el != 'STATS'}/>
          ))}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Matches />
      </TabPanel>

      <TabPanel value={value} index={2}>
        <TeamStats />
      </TabPanel>
    </Box>
  );
}