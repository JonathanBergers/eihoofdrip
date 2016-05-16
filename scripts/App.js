import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Lessons from './Lessons';



var database= require('json!./../database.json');
export default class App extends Component {



    constructor(props) {
        super(props);
        this.state = {drawer_open: false, current_course : 0, courses: database};

    }

    toggle_drawer = () => this.setState({drawer_open: !this.state.drawer_open});

    on_menu_item_click = (index) => {
        console.log('on_item_click index: ', index)

        //alles is imutable, drm huidige state kopieren en dan setState
        const new_state = this.state;
        new_state['drawer_open'] = false;
        new_state['current_course'] = index

        this.setState(new_state)
    }
  render() {
      //itereer over courses en maak een collectie van menu items .
      // de this.onmenu,... BIND zorgt ervoor dat de context (this, ) en de index meegegeven wordt als parameter aan de on menu click functie
      var menu_items = this.state.courses.map((course, index)=> {
          return <MenuItem onTouchTap={this.on_menu_item_click.bind(this, index,)} >{course.title}</MenuItem>
      });
      
      
      // geef de huidige course als prop mee aan de lessons, zie ook proptype in de lessons class
    return (
        <div>
                <AppBar
                    title="Egghead R.I.P"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap = {this.toggle_drawer}
                />
                <Drawer open={this.state.drawer_open}>
                    {menu_items}
                </Drawer>
                
                <Lessons course = {this.state.courses[this.state.current_course]}/>
                



            </div>



    );
  }
}
