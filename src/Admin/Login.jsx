import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Box, TextField, Button, Typography, Paper, Alert } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("https://portfoliobackend-bkaz.onrender.com/api/login", formData);
      if (response.data.success) {
        localStorage.setItem("adminToken", response.data.token);
        navigate("/admin/dashboard");
      }
    } catch (err) {
      setError("İstifadəçi adı və ya şifrə yanlışdır");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f5f5f5",
      }}
    >
      <Paper
        elevation={3}
        sx={{ p: 4, width: 400, textAlign: "center" }}
      >
        <Typography variant="h5" gutterBottom>
          Admin Giriş
        </Typography>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        <form onSubmit={handleSubmit} autoComplete="off">
          <TextField
            fullWidth
            label="İstifadəçi adı"
            name="username"
            value={formData.username}
            onChange={handleChange}
            margin="normal"
            required
            autoComplete="off"
          />
          <TextField
            fullWidth
            label="Şifrə"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            required
            autoComplete="off"
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ mt: 3 }}
            disabled={loading}
          >
            {loading ? "Giriş edilir..." : "Daxil ol"}
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
