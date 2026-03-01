import React, { useEffect, useState } from "react";
import { Box, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Select, MenuItem, FormControl, InputLabel, Chip } from "@mui/material";
import { UilEdit, UilTrash } from "@iconscout/react-unicons";
import axios from "axios";
import toast from "react-hot-toast";

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [allPortfolios, setAllPortfolios] = useState([]);
  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({ title: { az: "", en: "" }, text: { az: "", en: "" }, demoLink: "", image: "", tools: [] });
  const [toolInput, setToolInput] = useState("");
  const [lang, setLang] = useState("az");

  const fetchPortfolios = async () => {
    const res = await axios.get(`https://portfoliobackend-bkaz.onrender.com/api/admin/portfolios/${lang}`);
    setPortfolios(res.data);
  };

  const fetchAllPortfolios = async () => {
    const res = await axios.get("https://portfoliobackend-bkaz.onrender.com/api/admin/portfolios");
    setAllPortfolios(res.data);
  };

  useEffect(() => { 
    fetchPortfolios(); 
    fetchAllPortfolios();
  }, [lang]);

  const handleOpen = (portfolio = null) => {
    if (portfolio) {
      const fullPortfolio = allPortfolios.find(p => p._id === portfolio._id);
      setEditId(portfolio._id);
      setFormData({
        title: { az: fullPortfolio?.title?.az || "", en: fullPortfolio?.title?.en || "" },
        text: { az: fullPortfolio?.text?.az || "", en: fullPortfolio?.text?.en || "" },
        demoLink: fullPortfolio?.demoLink || "",
        image: fullPortfolio?.image || "",
        tools: fullPortfolio?.tools || []
      });
    } else {
      setEditId(null);
      setFormData({ title: { az: "", en: "" }, text: { az: "", en: "" }, demoLink: "", image: "", tools: [] });
    }
    setOpen(true);
  };

  const handleAddTool = () => {
    if (toolInput.trim() && !formData.tools.includes(toolInput.trim())) {
      setFormData({ ...formData, tools: [...formData.tools, toolInput.trim()] });
      setToolInput("");
    }
  };

  const handleRemoveTool = (toolToRemove) => {
    setFormData({ ...formData, tools: formData.tools.filter(t => t !== toolToRemove) });
  };

  const handleSave = async () => {
    try {
      if (editId) {
        await axios.put(`https://portfoliobackend-bkaz.onrender.com/api/admin/portfolios/${editId}`, formData);
        toast.success("Proje yeniləndi");
      } else {
        await axios.post("https://portfoliobackend-bkaz.onrender.com/api/admin/portfolios", formData);
        toast.success("Proje əlavə edildi");
      }
      setOpen(false);
      fetchPortfolios();
      fetchAllPortfolios();
    } catch (error) {
      toast.error("Xəta baş verdi");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Silmək istəyirsiniz?")) {
      await axios.delete(`https://portfoliobackend-bkaz.onrender.com/api/admin/portfolios/${id}`);
      toast.success("Proje silindi");
      fetchPortfolios();
      fetchAllPortfolios();
    }
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Typography variant="h4">Portfolyo</Typography>
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Dil</InputLabel>
          <Select value={lang} label="Dil" onChange={(e) => setLang(e.target.value)}>
            <MenuItem value="az">Azərbaycan</MenuItem>
            <MenuItem value="en">English</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button variant="contained" sx={{ mb: 2 }} onClick={() => handleOpen()}>+ Yeni Proje</Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#1a1a2e" }}>
              <TableCell sx={{ color: "white" }}>Şəkil</TableCell>
              <TableCell sx={{ color: "white" }}>Başlıq</TableCell>
              <TableCell sx={{ color: "white" }}>Tools</TableCell>
              <TableCell sx={{ color: "white" }}>Link</TableCell>
              <TableCell sx={{ color: "white" }} align="right">Əməliyyatlar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {portfolios.map((portfolio) => (
              <TableRow key={portfolio._id}>
                <TableCell><img src={portfolio.image} alt="" style={{ width: 50, height: 50, objectFit: "cover", borderRadius: 4 }} /></TableCell>
                <TableCell>{portfolio.title}</TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {portfolio.tools?.slice(0, 3).map((tool, i) => (
                      <Chip key={i} label={tool} size="small" />
                    ))}
                    {portfolio.tools?.length > 3 && <Chip label={`+${portfolio.tools.length - 3}`} size="small" />}
                  </Box>
                </TableCell>
                <TableCell><a href={portfolio.demoLink} target="_blank" rel="noopener noreferrer">Link</a></TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleOpen(portfolio)}><UilEdit color="blue" /></IconButton>
                  <IconButton onClick={() => handleDelete(portfolio._id)}><UilTrash color="red" /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>{editId ? "Projeni yenilə" : "Yeni Proje"}</DialogTitle>
        <DialogContent>
          <TextField fullWidth label="Başlıq (AZ)" margin="dense" value={formData.title.az} onChange={(e) => setFormData({ ...formData, title: { ...formData.title, az: e.target.value } })} />
          <TextField fullWidth label="Başlıq (EN)" margin="dense" value={formData.title.en} onChange={(e) => setFormData({ ...formData, title: { ...formData.title, en: e.target.value } })} />
          <TextField fullWidth label="Mətn (AZ)" margin="dense" multiline rows={3} value={formData.text.az} onChange={(e) => setFormData({ ...formData, text: { ...formData.text, az: e.target.value } })} />
          <TextField fullWidth label="Mətn (EN)" margin="dense" multiline rows={3} value={formData.text.en} onChange={(e) => setFormData({ ...formData, text: { ...formData.text, en: e.target.value } })} />
          <TextField fullWidth label="Demo Link" margin="dense" value={formData.demoLink} onChange={(e) => setFormData({ ...formData, demoLink: e.target.value })} />
          <TextField fullWidth label="Şəkil URL" margin="dense" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} />
          
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle2" gutterBottom>Tools</Typography>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 1 }}>
              {formData.tools.map((tool, index) => (
                <Chip key={index} label={tool} onDelete={() => handleRemoveTool(tool)} />
              ))}
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField 
                size="small" 
                label="Tool əlavə et" 
                value={toolInput} 
                onChange={(e) => setToolInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTool())}
              />
              <Button variant="outlined" onClick={handleAddTool}>Əlavə et</Button>
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

export default Portfolio;
