import { useEffect } from "react";
import { TextField, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log("Register Page Mounted");
  }, []);
  return (
    <Box>
      <Typography variant="h4" sx={{ color: "primary.main" }}>
        Register Page
      </Typography>
      <Box>
        <Box></Box>
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
          label="Email"
          placeholder="Enter your email"
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
        <TextField
          label="Confirm Password"
          placeholder="Confirm your password"
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
