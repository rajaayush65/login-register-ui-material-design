import React, { useContext, useState } from "react";
import { AuthContext } from "../context/auth";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeckIcon from "@material-ui/icons/Deck";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Box from "@material-ui/core/Box";
import { Backdrop, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  progressBar: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  button: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function MenuBar() {
  const { user, logout } = useContext(AuthContext);
  const pathname = window.location.pathname;
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    logout();
    setOpen(!open);
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <DeckIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Avos Media
          </Typography>

          {user ? (
            <div>
              <FormGroup>
                <Box display="flex">
                  <Box display="flex" mt={1} mr={2}>
                    <Box mr={1}>
                      <AccountCircle />
                    </Box>
                    <Typography variant="body1" className={classes.title}>
                      Welcome {user.username}
                    </Typography>
                  </Box>
                  <div>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={true}
                          onChange={handleToggle}
                          aria-label="login switch"
                        />
                      }
                      label="Logout"
                    />
                    <Backdrop
                      className={classes.backdrop}
                      open={open}
                      onClick={handleClose}
                    >
                      <CircularProgress color="inherit" />
                    </Backdrop>
                  </div>
                </Box>
              </FormGroup>
            </div>
          ) : (
            <div>
              <Typography variant="h6" className={classes.title}>
                <div>
                  <Box display="flex">
                    <Box mx={1}>
                      <Button
                        className="button"
                        variant="contained"
                        color="secondary"
                        href="/Login"
                      >
                        <VpnKeyIcon />
                        Login
                      </Button>
                    </Box>
                    <Box mx={1}>
                      <Button
                        className="button"
                        variant="contained"
                        color="secondary"
                        href="/Register"
                      >
                        <AccountCircle />
                        Register
                      </Button>
                    </Box>
                  </Box>
                </div>
              </Typography>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MenuBar;
