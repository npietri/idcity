import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
  }

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

/* <TabCustom onglets={tabArray}></TabCustom> */

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1
    },
}));

function TabCustom(props : any)
{
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  
  const printOnglet = props.onglets.map((onglet:any) =>
    <div className="Onglet">
      <Tabs value={onglet} onChange={handleChange}>
        <Tab label={onglet}/>
      </Tabs>
    </div>
  )

  return (
    <div className={classes.root}>
      <AppBar position="static">
        {printOnglet}
      </AppBar>
      <TabPanel value={value} index={1}>
        {printOnglet}
      </TabPanel>
    </div>
  );
}

export default TabCustom;