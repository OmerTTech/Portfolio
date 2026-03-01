import React from "react";
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import { UilEstate, UilPresentation, UilBriefcaseAlt, UilCommentAltMessage, UilSignOutAlt, UilPhone, UilUserLocation } from "@iconscout/react-unicons";
import { useNavigate, Outlet } from "react-router";

const menuItems = [
  { text: "Dashboard", icon: <UilEstate />, path: "/admin/dashboard" },
  { text: "Slaytlar", icon: <UilPresentation />, path: "/admin/dashboard/slides" },
  { text: "Portfolyo", icon: <UilBriefcaseAlt />, path: "/admin/dashboard/portfolio" },
  { text: "Nitelikler", icon: <UilBriefcaseAlt />, path: "/admin/dashboard/qualifications" },
  { text: "İletişim", icon: <UilUserLocation />, path: "/admin/dashboard/contact" },
  { text: "Mesajlar", icon: <UilCommentAltMessage />, path: "/admin/dashboard/messages" },
];

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            bgcolor: "#1a1a2e",
            color: "white",
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
            Admin Panel
          </Typography>
        </Toolbar>
        <Box sx={{ overflow: "auto" }}>
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.text}
                onClick={() => navigate(item.path)}
                sx={{
                  "&:hover": { bgcolor: "#16213e" },
                  cursor: "pointer",
                }}
              >
                <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
            <ListItem button onClick={handleLogout} sx={{ "&:hover": { bgcolor: "#16213e" } }}>
              <ListItemIcon sx={{ color: "#ff6b6b" }}>
                <UilSignOutAlt />
              </ListItemIcon>
              <ListItemText primary="Çıxış" sx={{ color: "#ff6b6b" }} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: "#f5f5f5", minHeight: "100vh" }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminLayout;
