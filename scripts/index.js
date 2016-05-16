import React from 'react';
import {render} from 'react-dom';
import App from './App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';



//BOILERPLATE WAS: https://github.com/vasanthk/react-es6-webpack-boilerplate


// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

render(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <App/>
    </MuiThemeProvider>,
  document.getElementById('root')
);
