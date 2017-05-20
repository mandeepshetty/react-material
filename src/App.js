import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

const App = () => (


    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
            <AppBar title="CSL Management Dashboard" style={ {marginLeft: '140px'} }/>
            <Drawer width={200} >
                <div >
                    <MenuItem style={ {marginTop: '100px'} }>Jobs</MenuItem>
                    <Divider />
                    <MenuItem>Nodes</MenuItem>
                </div>
            </Drawer>

            <RaisedButton label="Default" />
        </div>
    </MuiThemeProvider>
);

export default App;