import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TeamStats } from './TeamStats';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
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

export default function DetailNavTab() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box className="navbar">
        <Tabs textColor="inherit" centered value={value} onChange={handleChange}>
          <Tab disabled label="TIMELINE" {...a11yProps(0)} />
          <Tab disabled label="LINEUPS" {...a11yProps(1)} />
          <Tab label="STATS" {...a11yProps(2)} />
          <Tab disabled label="NEWS" {...a11yProps(3)} />
          <Tab disabled label="COMMENTS" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={2}>
        <TeamStats />
      </TabPanel>
      {/* <TabPanel value={value} index={1}>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
    </Box>
  );
}