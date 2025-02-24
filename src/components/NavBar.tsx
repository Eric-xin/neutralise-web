import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, IconButton, Button, Drawer, List, ListItem, ListItemText, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { logout, getUser } from "../service/auth";
import logo from "./../logo.png"; // Replace with your actual logo

// Define an interface for the user
interface User {
  username: string;
  // Add other properties as needed
}

function Navbar() {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    getUser()
      .then((data: User) => {
        setUser(data);
        setIsAuth(true);
      })
      .catch((error) => {
        console.warn(error.message);
      });
  }, []);

  const handleLogout = () => {
    logout();
    setIsAuth(false);
    setUser(null);
  };

  return (
    <>
      <AppBar position="fixed" className="neutralize-navbar">
        <Toolbar>
          {/* Logo */}
          <img src={logo} alt="Neutralize Logo" className="neutralize-logo-navbar" />

          {/* Navigation Links (Hidden on Mobile) */}
          {!isMobile && (
            <div className="nav-links">
              <Button href="/" className="nav-button">Home</Button>
              {/* <Button href="/features" className="nav-button">Features</Button> */}
              <Button href="/about" className="nav-button">About</Button>
              <Button href="/contact" className="nav-button">Contact</Button>
            </div>
          )}

          {/* Authentication Buttons */}
          <div className="nav-auth">
            {isAuth && user ? (
              <>
                {/* <Typography variant="body1" className="nav-user">
                  Current User: {user.username}
                </Typography> */}
                <Button className="nav-button logout-button" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button href="/signin" className="nav-button">Sign In</Button>
                <Button href="/signup" className="nav-button">Sign Up</Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton edge="end" color="inherit" onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer Navigation */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List className="nav-drawer">
          <ListItem button component="a" href="/">
            <ListItemText primary="Home" />
          </ListItem>
          {/* <ListItem button component="a" href="/features">
            <ListItemText primary="Features" />
          </ListItem> */}
          <ListItem button component="a" href="/about">
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button component="a" href="/contact">
            <ListItemText primary="Contact" />
          </ListItem>
          {isAuth ? (
            <ListItem button onClick={handleLogout}>
              <ListItemText primary="Logout" />
            </ListItem>
          ) : (
            <>
              <ListItem button component="a" href="/signin">
                <ListItemText primary="Sign In" />
              </ListItem>
              <ListItem button component="a" href="/signup">
                <ListItemText primary="Sign Up" />
              </ListItem>
            </>
          )}
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
