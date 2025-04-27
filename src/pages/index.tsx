import React from "react";
import logo from "./../ictt.png";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Navbar from "../components/NavBar"; // Importing Navbar
import "../components/NavBar.css";
import { Typography, Box } from "@mui/material";
import { logout, getUser } from "../service/auth";

interface User {
  username: string;
  is_superuser: boolean;
}

function Index() {
  const [isAuth, setIsAuth] = React.useState(false);
  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    getUser()
      .then((data) => {
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

  // Define a shared style for buttons
  const buttonStyle = {
    borderRadius: "20px",
    px: 3,
    py: 1.5,
    textTransform: "none",
  };

  return (
    <div className="neutralize-app">
      {/* Navbar Component */}
      <Navbar />

      {/* Background Animation */}
      <div className="geographic-background" />

      {/* Main Content */}
      <header className="neutralize-header">
        <img src={logo} alt="Neutralize Logo" className="neutralize-logo" />
        <Typography
          variant="h5"
          component="h2"
          sx={{
            textAlign: "center",
            maxWidth: 600,
            mx: "auto",
            my: 3,
            fontWeight: 600,
            lineHeight: 1.4,
            letterSpacing: 0.5,
            color: "primary.dark",
            whiteSpace: "nowrap",
            overflow: "visible",
          }}
        >
          See Beyond the{" "}
          <Box
            component="span"
            sx={{
              color: "secondary.main",
              fontStyle: "italic",
              bgcolor: "secondary.light",
              px: 0.5,
              borderRadius: 0.5,
            }}
          >
            Bias
          </Box>
          . Find{" "}
          <Box
            component="span"
            sx={{
              color: "secondary.main",
              fontStyle: "italic",
              bgcolor: "secondary.light",
              px: 0.5,
              borderRadius: 0.5,
            }}
          >
            Clearity
          </Box>{" "}
          in Every Click.
        </Typography>

        {isAuth && user ? (
          <>
            <Typography variant="h5" align="center" gutterBottom>
              Welcome back, {user.username}!
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              sx={{ mt: 2 }}
            >
              <Button
                variant="contained"
                size="large"
                color="primary"
                onClick={handleLogout}
                sx={buttonStyle}
              >
                Logout
              </Button>
              {user.is_superuser && (
                <Button
                  variant="outlined"
                  size="large"
                  color="secondary"
                  href="/dashboard"
                  sx={buttonStyle}
                >
                  Admin Dashboard
                </Button>
              )}
              {user.is_superuser && (
                <Button
                  variant="outlined"
                  size="large"
                  color="secondary"
                  href="/neutral"
                  sx={buttonStyle}
                >
                  Client
                </Button>
              )}
            </Stack>
          </>
        ) : (
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ mt: 2 }}
          >
            <Button
              variant="contained"
              size="large"
              color="success"
              href="/signin"
              sx={buttonStyle}
            >
              Sign In
            </Button>
            <Button
              variant="contained"
              size="large"
              color="info"
              href="/signup"
              sx={buttonStyle}
            >
              Sign Up
            </Button>
          </Stack>
        )}

        <a
          href="./about"
          target="_blank"
          rel="noopener noreferrer"
          className="neutralize-link"
        >
          Learn More About Neutralize
        </a>
      </header>
    </div>
  );
}

export default Index;
