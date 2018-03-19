import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Avatar from 'material-ui/Avatar';
import { green, red } from 'material-ui/colors';


const styles = theme => ({
  root: {

  },
  avatar: {
    margin: 10,

  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  listItem: {
      
  },
  checked: {
    color: green[500],
  },
});

class CheckboxListSecondary extends React.Component {
  
  state = {
    devices: [],
  };

  componentDidMount(){
    fetch('http://52.229.31.185:8091/getdevices')
        .then((result) => {
            return result.json();
        }).then((data) => {
            this.setState({ devices: data.devices})
        });
  }

  render() {
    const { classes } = this.props;
    const devices = this.state.devices.map((item, i) => (
            <ListItem key={i} dense button className={classes.listItem}>
                <Avatar className={classes.avatar}>{item.DeviceId}</Avatar>
                <ListItemText primary={item.Name} />
                <ListItemSecondaryAction>
                    <Checkbox 
                        checked={Boolean(item.Status)} 
                        classes={{checked: classes.checked}}
                        />
                </ListItemSecondaryAction>
            </ListItem>
        )
    );

    return (
      <div className={classes.root}>
        <List>
          {devices}
        </List>
      </div>
    );
  }
}

CheckboxListSecondary.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxListSecondary);