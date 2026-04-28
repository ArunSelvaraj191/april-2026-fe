import { useEffect, useState } from "react";
import { TextField, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const fetchUsers = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/auth/users`,
    );
  };

  const handleSave = async () => {
    if (
      !userData.username ||
      !userData.email ||
      !userData.password ||
      !userData.confirmPassword
    ) {
      alert("Please fill in all fields!");
      return;
    }
    if (userData.password !== userData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/auth/register`,
      userData,
    );
    if (response.status == 201) {
      alert("User registered successfully!");
      navigate("/");
    }
  };
  useEffect(() => {
    console.log("Register Page Mounted");
    fetchUsers();
  }, []);
  return (
    <Box>
      <Typography variant="h4" sx={{ color: "primary.main" }}>
        Register Page
      </Typography>
      <Box>
        <Box></Box>
        <TextField
          name="username"
          label="Username"
          placeholder="Enter your username"
          variant="outlined"
          margin="normal"
          sx={{
            width: "50%",
          }}
          value={userData.username}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <TextField
          name="email"
          label="Email"
          placeholder="Enter your email"
          variant="outlined"
          margin="normal"
          sx={{
            width: "50%",
          }}
          value={userData.email}
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
          value={userData.password}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <TextField
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm your password"
          variant="outlined"
          margin="normal"
          type="password"
          sx={{
            width: "50%",
          }}
          value={userData.confirmPassword}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2, width: "50%" }}
          size="medium"
          onClick={handleSave}
        >
          Register
        </Button>
      </Box>
      <Box>
        <Button
          variant="outlined"
          color="primary"
          sx={{ mt: 2, width: "50%" }}
          size="medium"
          onClick={() => navigate("/")}
        >
          Go to Login
        </Button>
      </Box>
    </Box>
  );
};

export default RegisterPage;
