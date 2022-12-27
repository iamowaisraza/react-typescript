import React, { FC } from 'react';
import { Tabs, Tab, Typography, Box } from '@mui/material';
import { TabPanelProps, TabsObjType, TabsProp } from '../types';

export const NavTabs: FC<TabsProp> = ({ tabs, styling, active }) => {
  const [value, setValue] = React.useState(active);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box className={`${styling}-navbar`}>
        <Box sx={{ width: styling === 'main' ? '750px' : '100%', margin: '0 auto' }}>
          <Tabs textColor="inherit" centered value={value} onChange={handleChange} variant="fullWidth">
            {tabs.map((el: TabsObjType, i: number) => (
              <Tab label={el.title} {...a11yProps(i)} disabled={el.disable} key={`tabs-${i}`}/>
            ))}
          </Tabs>
        </Box>
      </Box>

      {tabs.map((el: TabsObjType, i: number) => (
        <TabPanel value={value} index={i} key={`panel-${i}`}>
          {el.component}
        </TabPanel>
      ))}
    </Box>
  );
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