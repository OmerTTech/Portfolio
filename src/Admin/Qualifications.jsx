import React, { useEffect, useState } from "react";
import { Box, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Select, MenuItem, FormControl, InputLabel, Tabs, Tab } from "@mui/material";
import { UilEdit, UilTrash } from "@iconscout/react-unicons";
import axios from "axios";
import toast from "react-hot-toast";

const Qualifications = () => {
  const [qualfs, setQualfs] = useState([]);
  const [allQualfs, setAllQualfs] = useState([]);
  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({ title: { az: "", en: "" }, company: { az: "", en: "" }, years: "", category: "education" });
  const [lang, setLang] = useState("az");
  const [category, setCategory] = useState("all");

  const fetchQualfs = async () => {
    let url = `https://portfoliobackend-bkaz.onrender.com/api/admin/qualfs/${lang}`;
    if (category !== "all") {
      url = `https://portfoliobackend-bkaz.onrender.com/api/admin/qualfs/${category}/${lang}`;
    }
    const res = await axios.get(url);
    setQualfs(res.data);
  };

  const fetchAllQualfs = async () => {
    const res = await axios.get("https://portfoliobackend-bkaz.onrender.com/api/admin/qualfs");
    setAllQualfs(res.data);
  };

  useEffect(() => { 
    fetchQualfs(); 
    fetchAllQualfs();
  }, [lang, category]);

  const handleOpen = (qualf = null) => {
    if (qualf) {
      const fullQualf = allQualfs.find(q => q._id === qualf._id);
      setEditId(qualf._id);
      setFormData({
        title: { az: fullQualf?.title?.az || "", en: fullQualf?.title?.en || "" },
        company: { az: fullQualf?.company?.az || "", en: fullQualf?.company?.en || "" },
        years: fullQualf?.years || "",
        category: fullQualf?.category || "education"
      });
    } else {
      setEditId(null);
      setFormData({ title: { az: "", en: "" }, company: { az: "", en: "" }, years: "", category: "education" });
    }
    setOpen(true);
  };

  const handleSave = async () => {
    try {
      if (editId) {
        await axios.put(`https://portfoliobackend-bkaz.onrender.com/api/admin/qualfs/${editId}`, formData);
        toast.success("Nitelik yeniləndi");
      } else {
        await axios.post("https://portfoliobackend-bkaz.onrender.com/api/admin/qualfs", formData);
        toast.success("Nitelik əlavə edildi");
      }
      setOpen(false);
      fetchQualfs();
      fetchAllQualfs();
    } catch (error) {
      toast.error("Xəta baş verdi");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Silmək istəyirsiniz?")) {
      await axios.delete(`https://portfoliobackend-bkaz.onrender.com/api/admin/qualfs/${id}`);
      toast.success("Nitelik silindi");
      fetchQualfs();
      fetchAllQualfs();
    }
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3, alignItems: "center" }}>
        <Typography variant="h4">Nitelikler</Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <FormControl size="small" sx={{ minWidth: 140 }}>
            <InputLabel>Kateqoriya</InputLabel>
            <Select value={category} label="Kateqoriya" onChange={(e) => setCategory(e.target.value)}>
              <MenuItem value="all">Hamısı</MenuItem>
              <MenuItem value="education">Təhsil</MenuItem>
              <MenuItem value="workExperience">İş təcrübəsi</MenuItem>
            </Select>
          </FormControl>
          <FormControl size="small" sx={{ minWidth: 100 }}>
            <InputLabel>Dil</InputLabel>
            <Select value={lang} label="Dil" onChange={(e) => setLang(e.target.value)}>
              <MenuItem value="az">Azərbaycan</MenuItem>
              <MenuItem value="en">English</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Button variant="contained" sx={{ mb: 2 }} onClick={() => handleOpen()}>+ Yeni Nitelik</Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#1a1a2e" }}>
              <TableCell sx={{ color: "white" }}>Başlıq</TableCell>
              <TableCell sx={{ color: "white" }}>Şirkət</TableCell>
              <TableCell sx={{ color: "white" }}>İllər</TableCell>
              <TableCell sx={{ color: "white" }}>Kateqoriya</TableCell>
              <TableCell sx={{ color: "white" }} align="right">Əməliyyatlar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {qualfs.map((qualf) => (
              <TableRow key={qualf._id}>
                <TableCell>{qualf.title}</TableCell>
                <TableCell>{qualf.company}</TableCell>
                <TableCell>{qualf.years}</TableCell>
                <TableCell>{qualf.category === "education" ? "Təhsil" : "İş təcrübəsi"}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleOpen(qualf)}><UilEdit color="blue" /></IconButton>
                  <IconButton onClick={() => handleDelete(qualf._id)}><UilTrash color="red" /></IconButton>
                </TableCell>
              </TableRow>
            ))}
            {qualfs.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} align="center">Məlumat yoxdur</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>{editId ? "Nitelik yenilə" : "Yeni Nitelik"}</DialogTitle>
        <DialogContent>
          <TextField fullWidth label="Başlıq (AZ)" margin="dense" value={formData.title.az} onChange={(e) => setFormData({ ...formData, title: { ...formData.title, az: e.target.value } })} />
          <TextField fullWidth label="Başlıq (EN)" margin="dense" value={formData.title.en} onChange={(e) => setFormData({ ...formData, title: { ...formData.title, en: e.target.value } })} />
          <TextField fullWidth label="Şirkət (AZ)" margin="dense" value={formData.company.az} onChange={(e) => setFormData({ ...formData, company: { ...formData.company, az: e.target.value } })} />
          <TextField fullWidth label="Şirkət (EN)" margin="dense" value={formData.company.en} onChange={(e) => setFormData({ ...formData, company: { ...formData.company, en: e.target.value } })} />
          <TextField fullWidth label="İllər" margin="dense" value={formData.years} onChange={(e) => setFormData({ ...formData, years: e.target.value })} />
          <FormControl fullWidth margin="dense">
            <InputLabel>Kateqoriya</InputLabel>
            <Select value={formData.category} label="Kateqoriya" onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
              <MenuItem value="education">Təhsil</MenuItem>
              <MenuItem value="workExperience">İş təcrübəsi</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Ləğv et</Button>
          <Button variant="contained" onClick={handleSave}>Yadda saxla</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Qualifications;
