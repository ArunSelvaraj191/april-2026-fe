import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editedUsername, setEditedUsername] = useState("");
  const fetchUsers = async () => {
    const token = localStorage.getItem("token");
    console.log("token :::", token);
    await axios
      .get(`${import.meta.env.VITE_BASE_URL}/auth/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Response users", response);
        setUserList(response.data);
      })
      .catch((error) => {
        console.log("Error users", error);
        navigate("/");
      });
    // const response = await axios.get(
    //   `${import.meta.env.VITE_BASE_URL}/auth/users`,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   },
    // );
    // if (!response) {
    //   navigate("/");
    // }
    // if (response.status === 200) {
    //   setUserList(response.data);
    // } else {
    //   navigate("/");
    //   alert("Failed to fetch users!");
    //   setUserList([]);
    // }
  };

  const handleEdit = (id) => {
    setEditId(id);
    // Implement edit functionality here
  };
  const handleUsernameChange = (event) => {
    const newUsername = event.target.value;
    setEditedUsername(newUsername);
    // setUserList((prevList) =>
    //   prevList.map((user) =>
    //     user._id === editId ? { ...user, username: newUsername } : user,
    //   ),
    // );
  };

  const handleUpdate = async () => {
    console.log(
      "Update user with ID:",
      editId,
      "New username:",
      editedUsername,
    );
    const response = await axios.put(
      `${import.meta.env.VITE_BASE_URL}/auth/users/${editId}`,
      { username: editedUsername },
    );
    console.log("Update response:", response);
    if (response.status === 200) {
      alert("User updated successfully!");
      setEditId(null);
      fetchUsers();
    } else {
      alert("Failed to update user!");
    }
  };

  const handleDelete = async (id) => {
    console.log("Delete user with ID:", id);
    const response = await axios.delete(
      `${import.meta.env.VITE_BASE_URL}/auth/users/${id}`,
    );
    console.log("Delete response:", response);
    if (response.status === 200) {
      alert("User deleted successfully!");
      fetchUsers();
    } else {
      alert("Failed to delete user!");
    }
  };
  useEffect(() => {
    console.log(
      "Dashboard Mounted",
      JSON.parse(localStorage.getItem("isAuthenticated")),
    );
    fetchUsers();
  }, []);
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard - User List
      </Typography>
      <Grid container spacing={2}>
        {userList.map((user, index) => (
          <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={user.id}>
            <Card>
              <CardContent>
                {editId === user._id ? (
                  <TextField
                    label="Username"
                    defaultValue={user.username}
                    // value={editedUsername}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={handleUsernameChange}
                  />
                ) : (
                  <Typography variant="h6">{user.username}</Typography>
                )}
                <Typography variant="body2" color="text.secondary">
                  {user.email}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={
                    editId === user._id
                      ? handleUpdate
                      : () => handleEdit(user._id)
                  }
                >
                  {editId === user._id ? "Update" : "Edit"}
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
