import React, { useEffect, useState } from "react";
import { Box, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Button, Dialog, DialogTitle, DialogContent, Chip } from "@mui/material";
import { UilTrash, UilEye } from "@iconscout/react-unicons";
import axios from "axios";
import toast from "react-hot-toast";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedMsg, setSelectedMsg] = useState(null);

  const fetchMessages = async () => {
    const res = await axios.get("https://portfoliobackend-bkaz.onrender.com/api/admin/messages");
    setMessages(res.data);
  };

  useEffect(() => { fetchMessages(); }, []);

  const handleView = (msg) => {
    setSelectedMsg(msg);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Silmək istəyirsiniz?")) {
      await axios.delete(`https://portfoliobackend-bkaz.onrender.com/api/admin/messages/${id}`);
      toast.success("Mesaj silindi");
      fetchMessages();
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Mesajlar</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#1a1a2e" }}>
              <TableCell sx={{ color: "white" }}>Ad</TableCell>
              <TableCell sx={{ color: "white" }}>Email</TableCell>
              <TableCell sx={{ color: "white" }}>Mövzu</TableCell>
              <TableCell sx={{ color: "white" }}>Tarix</TableCell>
              <TableCell sx={{ color: "white" }} align="right">Əməliyyatlar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {messages.map((msg) => (
              <TableRow key={msg._id}>
                <TableCell>{msg.name}</TableCell>
                <TableCell>{msg.email}</TableCell>
                <TableCell>{msg.subject || "-"}</TableCell>
                <TableCell>{new Date(msg.createdAt).toLocaleDateString()}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleView(msg)}><UilEye color="green" /></IconButton>
                  <IconButton onClick={() => handleDelete(msg._id)}><UilTrash color="red" /></IconButton>
                </TableCell>
              </TableRow>
            ))}
            {messages.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} align="center">Mesaj yoxdur</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Mesaj</DialogTitle>
        <DialogContent>
          {selectedMsg && (
            <Box>
              <Typography variant="subtitle2">Ad: {selectedMsg.name}</Typography>
              <Typography variant="subtitle2">Email: {selectedMsg.email}</Typography>
              <Typography variant="subtitle2">Mövzu: {selectedMsg.subject || "-"}</Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>{selectedMsg.message}</Typography>
            </Box>
          )}
        </DialogContent>
        <Button onClick={() => setOpen(false)} sx={{ m: 2 }}>Bağla</Button>
      </Dialog>
    </Box>
  );
};

export default Messages;
