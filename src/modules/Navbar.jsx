import {
  AppBar,
  IconButton,
  Button,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const username = JSON.parse(localStorage.getItem("users"))?.username;

  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));

  console.log("theme :::", theme);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("users");
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box>
            <Typography variant="h6">Portfolio</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {isAuthenticated && (
              <>
                <Typography variant="body1" sx={{ ml: 2 }}>
                  Welcome, {username}!
                </Typography>
                <Button
                  variant="outlined"
                  color="white"
                  sx={{ ml: 2 }}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
                <IconButton onClick={toggleTheme} sx={{ ml: 2 }}>
                  {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
                </IconButton>
              </>
            )}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
