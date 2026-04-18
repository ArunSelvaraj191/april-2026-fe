import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log("Count changed:", count);
  // }, [count]);

  const fetUser = async () => {
    // const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // const data = await response.json();
    // console.log("Fetched users:", data);
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Fetched users:", data);
    //   });
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    console.log("Fetched users:", response.data);
  };

  useEffect(() => {
    console.log("Login Page Mounted");
    fetUser();

    return () => {
      console.log("Login Page Unmounted");
    };
  }, []);
  return (
    <>
      <Typography variant="h4" sx={{ color: "primary.main" }}>
        Login Page
      </Typography>
      <Box>
        <Box>
          <TextField
            label="Username"
            placeholder="Enter your username"
            variant="outlined"
            margin="normal"
            sx={{
              width: "50%",
            }}
          />
        </Box>
        <Box>
          <TextField
            label="Password"
            placeholder="Enter your password"
            variant="outlined"
            margin="normal"
            type="password"
            sx={{
              width: "50%",
            }}
          />
        </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2, width: "50%" }}
            size="medium"
          >
            Login
          </Button>
        </Box>
        <Button
          variant="outlined"
          color="primary"
          sx={{ mt: 2, width: "50%" }}
          size="medium"
          onClick={() => navigate("/register")}
        >
          Register
        </Button>
      </Box>
    </>
  );
};

export default LoginPage;
