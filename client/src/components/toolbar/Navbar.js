import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
// import AccountCircle from "@material-ui/icons/AccountCircle";
import DrawerRight from "../SideDrawer/DrawerRight";
// import Switch from "@material-ui/core/Switch";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormGroup from "@material-ui/core/FormGroup";
// import MenuItem from "@material-ui/core/MenuItem";
// import Menu from "@material-ui/core/Menu";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    funfact: [{
      
 
      
    }]
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth } = this.state;
    // const open = Boolean(anchorEl);
// removing anchorEl from const above as defined and not used
    
    // Ternary variable solving the async backend issue
    // the find will get me an element without the array. So in render {userFunfacts.text} {userFunfacts.image}
    // const userFunFacts = this.props.currentUser.id ? this.state.funfacts.find(element => element.id === this.props.currentUser.id) : null
    // console.log("SHOW ME THIS", userFunFacts)


    return (
      <div className={classes.root}>
        {/* <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={auth}
                onChange={this.handleChange}
                aria-label="LoginSwitch"
              />
            }
            label={auth ? "Logout" : "Login"}
          />
        </FormGroup> */}
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h8" color="inherit" className={classes.grow}>
              {(this.props.currentUser) ? this.props.currentUser.email : "Not logged in!" }
           
                {/* {userFunfacts.text}
                {userFunfacts.image} */}
              
               Funfact: Your baby is 20 weeks old ! Equivalent to an Artichoke
              <img src="http://placekitten.com/25/25" alt="Kitten" height="25" width="25" />
            </Typography>
            <Typography variant="h6" color="inherit" className={classes.grow} />
            {auth && <DrawerRight />}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuAppBar);
