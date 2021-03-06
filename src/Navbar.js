import React from 'react';
import App from './App';
import Solver from './Solver';
import Error from './Error';

import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography} from '@material-ui/core';

import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  appBarOption: {
    marginLeft: theme.spacing(6),
    marginTop: theme.spacing(1),
  },

  a: {
    textDecoration: 'none',
    color: 'white',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <Router>
      <AppBar position="sticky">
        <Toolbar>
          <Typography className={classes.appBarMain} variant="h5" color="inherit">
              Vigenère Variants Tool
          </Typography>
          <Typography className={classes.appBarOption} variant="h6" color="inherit">
            <Link className={classes.a} to="/">Encipher / Decipher</Link>
          </Typography>
          <Typography className={classes.appBarOption} variant="h6" color="inherit">
            <Link className={classes.a} to="/solver">Solver</Link>
          </Typography>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/solver" component={Solver}/>
        <Route path="/*" component={Error} status={404}/>
      </Switch>
    </Router>
  );
}

export default Navbar;
