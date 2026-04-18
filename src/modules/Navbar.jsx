import { AppBar, IconButton, Toolbar, Typography, Box } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log("theme :::", theme);

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
          <Typography variant="h6">Portfolio</Typography>
          <IconButton onClick={toggleTheme}>
            {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
