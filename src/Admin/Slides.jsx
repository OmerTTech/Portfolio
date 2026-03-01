import React, { useEffect, useState } from "react";
import { Box, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { UilEdit, UilTrash } from "@iconscout/react-unicons";
import axios from "axios";
import toast from "react-hot-toast";

const Slides = () => {
  const [slides, setSlides] = useState([]);
  const [allSlides, setAllSlides] = useState([]);
  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({ title: { az: "", en: "" }, text: { az: "", en: "" }, image: "" });
  const [lang, setLang] = useState("az");

  const fetchSlides = async () => {
    const res = await axios.get(`https://portfoliobackend-bkaz.onrender.com/api/admin/slides/${lang}`);
    setSlides(res.data);
  };

  const fetchAllSlides = async () => {
    const res = await axios.get("https://portfoliobackend-bkaz.onrender.com/api/admin/slides");
    setAllSlides(res.data);
  };

  useEffect(() => { 
    fetchSlides(); 
    fetchAllSlides();
  }, [lang]);

  const handleOpen = (slide = null) => {
    if (slide) {
      const fullSlide = allSlides.find(s => s._id === slide._id);
      setEditId(slide._id);
      setFormData({
        title: { az: fullSlide?.title?.az || "", en: fullSlide?.title?.en || "" },
        text: { az: fullSlide?.text?.az || "", en: fullSlide?.text?.en || "" },
        image: fullSlide?.image || ""
      });
    } else {
      setEditId(null);
      setFormData({ title: { az: "", en: "" }, text: { az: "", en: "" }, image: "" });
    }
    setOpen(true);
  };

  const handleSave = async () => {
    try {
      if (editId) {
        await axios.put(`https://portfoliobackend-bkaz.onrender.com/api/admin/slides/${editId}`, formData);
        toast.success("Slayt yeniləndi");
      } else {
        await axios.post("https://portfoliobackend-bkaz.onrender.com/api/admin/slides", formData);
        toast.success("Slayt əlavə edildi");
      }
      setOpen(false);
      fetchSlides();
      fetchAllSlides();
    } catch (error) {
      toast.error("Xəta baş verdi");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Silmək istəyirsiniz?")) {
      await axios.delete(`https://portfoliobackend-bkaz.onrender.com/api/admin/slides/${id}`);
      toast.success("Slayt silindi");
      fetchSlides();
      fetchAllSlides();
    }
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Typography variant="h4">Slaytlar</Typography>
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Dil</InputLabel>
          <Select value={lang} label="Dil" onChange={(e) => setLang(e.target.value)}>
            <MenuItem value="az">Azərbaycan</MenuItem>
            <MenuItem value="en">English</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button variant="contained" sx={{ mb: 2 }} onClick={() => handleOpen()}>+ Yeni Slayt</Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#1a1a2e" }}>
              <TableCell sx={{ color: "white" }}>Şəkil</TableCell>
              <TableCell sx={{ color: "white" }}>Başlıq</TableCell>
              <TableCell sx={{ color: "white" }}>Mətn</TableCell>
              <TableCell sx={{ color: "white" }} align="right">Əməliyyatlar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {slides.map((slide) => (
              <TableRow key={slide._id}>
                <TableCell>
                  {slide.image ? (
                    <img src={slide.image} alt="" style={{ width: 50, height: 50, objectFit: "cover", borderRadius: 4 }} />
                  ) : (
                    <Box sx={{ width: 50, height: 50, bgcolor: "#ccc", borderRadius: 1 }} />
                  )}
                </TableCell>
                <TableCell>{slide.title}</TableCell>
                <TableCell>{slide.text?.substring(0, 50)}...</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleOpen(slide)}><UilEdit color="blue" /></IconButton>
                  <IconButton onClick={() => handleDelete(slide._id)}><UilTrash color="red" /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>{editId ? "Slaytı yenilə" : "Yeni Slayt"}</DialogTitle>
        <DialogContent>
          <TextField fullWidth label="Şəkil URL" margin="dense" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} />
          <TextField fullWidth label="Başlıq (AZ)" margin="dense" value={formData.title.az} onChange={(e) => setFormData({ ...formData, title: { ...formData.title, az: e.target.value } })} />
          <TextField fullWidth label="Başlıq (EN)" margin="dense" value={formData.title.en} onChange={(e) => setFormData({ ...formData, title: { ...formData.title, en: e.target.value } })} />
          <TextField fullWidth label="Mətn (AZ)" margin="dense" multiline rows={3} value={formData.text.az} onChange={(e) => setFormData({ ...formData, text: { ...formData.text, az: e.target.value } })} />
          <TextField fullWidth label="Mətn (EN)" margin="dense" multiline rows={3} value={formData.text.en} onChange={(e) => setFormData({ ...formData, text: { ...formData.text, en: e.target.value } })} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Ləğv et</Button>
          <Button variant="contained" onClick={handleSave}>Yadda saxla</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Slides;
