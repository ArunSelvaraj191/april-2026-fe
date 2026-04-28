import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = async () => {
    if (!loginData.email || !loginData.password) {
      alert("Please fill in all fields!");
      return;
    }
    await axios
      .post(`${import.meta.env.VITE_BASE_URL}/auth/login`, loginData)
      .then((response) => {
        if (response.status === 200) {
          alert("Login successful!");
          console.log("Login response:", response.data);
          localStorage.setItem("users", JSON.stringify(response.data.user));
          localStorage.setItem("isAuthenticated", "true");
          localStorage.setItem("token", response.data.token);
          // navigate to dashboard or home page
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        alert("Login failed! Please check your credentials.");
      });
  };

  // useEffect(() => {
  //   console.log("Count changed:", count);
  // }, [count]);

  // const fetUser = async () => {
  //   // const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //   // const data = await response.json();
  //   // console.log("Fetched users:", data);
  //   // fetch("https://jsonplaceholder.typicode.com/users")
  //   //   .then((response) => response.json())
  //   //   .then((data) => {
  //   //     console.log("Fetched users:", data);
  //   //   });
  //   const response = await axios.get(
  //     "https://jsonplaceholder.typicode.com/users",
  //   );
  //   console.log("Fetched users:", response.data);
  // };

  useEffect(() => {
    console.log("Login Page Mounted");
    // fetUser();

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
            label="Email"
            name="email"
            placeholder="Enter your email"
            variant="outlined"
            margin="normal"
            sx={{
              width: "50%",
            }}
            value={loginData.email}
            onChange={handleChange}
          />
        </Box>
        <Box>
          <TextField
            name="password"
            label="Password"
            placeholder="Enter your password"
            variant="outlined"
            margin="normal"
            type="password"
            sx={{
              width: "50%",
            }}
            value={loginData.password}
            onChange={handleChange}
          />
        </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2, width: "50%" }}
            size="medium"
            onClick={handleLogin}
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
