import React, { useEffect, useState } from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import { UilEstate, UilPresentation, UilBriefcaseAlt, UilCommentAltMessage, UilPlus } from "@iconscout/react-unicons";
import axios from "axios";
import toast from "react-hot-toast";

const StatCard = ({ title, count, icon, color }) => (
  <Paper sx={{ p: 3, display: "flex", alignItems: "center", gap: 2, flex: "1 1 200px" }}>
    <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: color, color: "white" }}>
      {icon}
    </Box>
    <Box>
      <Typography variant="h4" fontWeight="bold">{count}</Typography>
      <Typography variant="body2" color="text.secondary">{title}</Typography>
    </Box>
  </Paper>
);

const Dashboard = () => {
  const [stats, setStats] = useState({ slides: 0, portfolios: 0, qualfs: 0, messages: 0 });
  const [loading, setLoading] = useState(false);

  const fetchStats = async () => {
    try {
      const [slidesRes, portfoliosRes, qualfsRes, messagesRes] = await Promise.all([
        axios.get("https://portfoliobackend-bkaz.onrender.com/api/admin/slides/az"),
        axios.get("https://portfoliobackend-bkaz.onrender.com/api/admin/portfolios/az"),
        axios.get("https://portfoliobackend-bkaz.onrender.com/api/admin/qualfs/az"),
        axios.get("https://portfoliobackend-bkaz.onrender.com/api/admin/messages"),
      ]);
      setStats({
        slides: slidesRes.data.length,
        portfolios: portfoliosRes.data.length,
        qualfs: qualfsRes.data.length,
        messages: messagesRes.data.length,
      });
    } catch (error) {
      console.error("Stat fetch error:", error);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const handleSeed = async () => {
    setLoading(true);
    try {
      await axios.post("https://portfoliobackend-bkaz.onrender.com/api/seed");
      toast.success("Test məlumatları əlavə edildi!");
      fetchStats();
    } catch (error) {
      toast.error("Xəta baş verdi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography variant="h4">Dashboard</Typography>
        <Button 
          variant="contained" 
          color="success" 
          startIcon={<UilPlus />}
          onClick={handleSeed}
          disabled={loading}
        >
          {loading ? "Əlavə edilir..." : "Test Verisi Əlavə Et"}
        </Button>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        <StatCard title="Slaytlar" count={stats.slides} icon={<UilPresentation />} color="#4CAF50" />
        <StatCard title="Projeler" count={stats.portfolios} icon={<UilBriefcaseAlt />} color="#2196F3" />
        <StatCard title="Nitelikler" count={stats.qualfs} icon={<UilEstate />} color="#FF9800" />
        <StatCard title="Mesajlar" count={stats.messages} icon={<UilCommentAltMessage />} color="#E91E63" />
      </Box>
    </Box>
  );
};

export default Dashboard;
