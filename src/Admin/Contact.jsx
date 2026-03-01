import React, { useEffect, useState } from "react";
import { Box, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";
import { UilEdit, UilTrash, UilPlus } from "@iconscout/react-unicons";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    MyPhone: "",
    MyPhoneLink: "",
    MyEmail: "",
    MyEmailLink: "",
    MyLocation: { az: "", en: "" },
    MyGithub: "",
    MyLinkedin: "",
  });

  const fetchContacts = async () => {
    try {
      const res = await axios.get("https://portfoliobackend-bkaz.onrender.com/api/admin/contacts");
      setContacts(res.data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => { fetchContacts(); }, []);

  const handleOpen = (contact = null) => {
    if (contact) {
      setEditId(contact._id);
      setFormData({
        MyPhone: contact.MyPhone || "",
        MyPhoneLink: contact.MyPhoneLink || "",
        MyEmail: contact.MyEmail || "",
        MyEmailLink: contact.MyEmailLink || "",
        MyLocation: contact.MyLocation || { az: "", en: "" },
        MyGithub: contact.MyGithub || "",
        MyLinkedin: contact.MyLinkedin || "",
      });
    } else {
      setEditId(null);
      setFormData({
        MyPhone: "",
        MyPhoneLink: "",
        MyEmail: "",
        MyEmailLink: "",
        MyLocation: { az: "", en: "" },
        MyGithub: "",
        MyLinkedin: "",
      });
    }
    setOpen(true);
  };

  const handleSave = async () => {
    try {
      if (editId) {
        await axios.put(`https://portfoliobackend-bkaz.onrender.com/api/admin/contacts/${editId}`, formData);
        toast.success("İletişim yeniləndi");
      } else {
        await axios.post("https://portfoliobackend-bkaz.onrender.com/api/admin/contacts", formData);
        toast.success("İletişim əlavə edildi");
      }
      setOpen(false);
      fetchContacts();
    } catch (error) {
      toast.error("Xəta baş verdi");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Silmək istəyirsiniz?")) {
      try {
        await axios.delete(`https://portfoliobackend-bkaz.onrender.com/api/admin/contacts/${id}`);
        toast.success("İletişim silindi");
        fetchContacts();
      } catch (error) {
        toast.error("Xəta baş verdi");
      }
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>İletişim Bilgileri</Typography>
      <Button variant="contained" sx={{ mb: 2 }} onClick={() => handleOpen()} startIcon={<UilPlus />}>
        Yeni İletişim
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#1a1a2e" }}>
              <TableCell sx={{ color: "white" }}>Telefon</TableCell>
              <TableCell sx={{ color: "white" }}>Email</TableCell>
              <TableCell sx={{ color: "white" }}>Konum (AZ)</TableCell>
              <TableCell sx={{ color: "white" }}>Konum (EN)</TableCell>
              <TableCell sx={{ color: "white" }} align="right">Əməliyyatlar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow key={contact._id}>
                <TableCell>{contact.MyPhone}</TableCell>
                <TableCell>{contact.MyEmail}</TableCell>
                <TableCell>{typeof contact.MyLocation === 'object' ? contact.MyLocation?.az : contact.MyLocation}</TableCell>
                <TableCell>{typeof contact.MyLocation === 'object' ? contact.MyLocation?.en : ''}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleOpen(contact)}><UilEdit color="blue" /></IconButton>
                  <IconButton onClick={() => handleDelete(contact._id)}><UilTrash color="red" /></IconButton>
                </TableCell>
              </TableRow>
            ))}
            {contacts.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} align="center">Məlumat yoxdur</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>{editId ? "İletişimi yenilə" : "Yeni İletişim"}</DialogTitle>
        <DialogContent>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
            <Box sx={{ flex: "1 1 45%", minWidth: 200 }}>
              <TextField fullWidth label="Telefon" margin="dense" value={formData.MyPhone} onChange={(e) => setFormData({ ...formData, MyPhone: e.target.value })} />
            </Box>
            <Box sx={{ flex: "1 1 45%", minWidth: 200 }}>
              <TextField fullWidth label="Telefon Link (wa.me)" margin="dense" value={formData.MyPhoneLink} onChange={(e) => setFormData({ ...formData, MyPhoneLink: e.target.value })} />
            </Box>
            <Box sx={{ flex: "1 1 45%", minWidth: 200 }}>
              <TextField fullWidth label="Email" margin="dense" value={formData.MyEmail} onChange={(e) => setFormData({ ...formData, MyEmail: e.target.value })} />
            </Box>
            <Box sx={{ flex: "1 1 45%", minWidth: 200 }}>
              <TextField fullWidth label="Email Link (mailto:)" margin="dense" value={formData.MyEmailLink} onChange={(e) => setFormData({ ...formData, MyEmailLink: e.target.value })} />
            </Box>
            <Box sx={{ flex: "1 1 45%", minWidth: 200 }}>
              <TextField fullWidth label="Konum (AZ)" margin="dense" value={formData.MyLocation.az} onChange={(e) => setFormData({ ...formData, MyLocation: { ...formData.MyLocation, az: e.target.value } })} />
            </Box>
            <Box sx={{ flex: "1 1 45%", minWidth: 200 }}>
              <TextField fullWidth label="Konum (EN)" margin="dense" value={formData.MyLocation.en} onChange={(e) => setFormData({ ...formData, MyLocation: { ...formData.MyLocation, en: e.target.value } })} />
            </Box>
            <Box sx={{ flex: "1 1 45%", minWidth: 200 }}>
              <TextField fullWidth label="GitHub URL" margin="dense" value={formData.MyGithub} onChange={(e) => setFormData({ ...formData, MyGithub: e.target.value })} />
            </Box>
            <Box sx={{ flex: "1 1 45%", minWidth: 200 }}>
              <TextField fullWidth label="LinkedIn URL" margin="dense" value={formData.MyLinkedin} onChange={(e) => setFormData({ ...formData, MyLinkedin: e.target.value })} />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Ləğv et</Button>
          <Button variant="contained" onClick={handleSave}>Yadda saxla</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Contact;
