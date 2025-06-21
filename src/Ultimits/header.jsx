import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import { useLocation } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
const pages =
  location.pathname === "/contact"
    ? [{ name: "Home", link: "/" }]
    : [
        { name: "Home", link: "#home" },
        { name: "Skills & Tools", link: "#skills" },
        { name: "Projects", link: "#project" },
        { name: "Contact", link: "#contact" },
      ];

export default function Header({ toggleTheme, darkMode }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    const location = useLocation();
  };
  return (
    <AppBar
      position="static"
      sx={{ bgcolor: darkMode ? "#212121" : "#5c6bc0" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{ textDecoration: "none"}}
          className="font-logo "
        >
          Islam Hadaya
        </Typography>

        <IconButton
          onClick={handleOpenNavMenu}
          color="inherit"
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorElNav}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          {pages.map((page) => (
            <MenuItem key={page.name} onClick={handleCloseNavMenu}>
              <Typography
                component="a"
                href={page.link}
                sx={{ textDecoration: "none", color: "inherit" }}
                
              >
                {page.name}
              </Typography>
            </MenuItem>
          ))}
        </Menu>

        <Toolbar sx={{ display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <Typography
              key={page.name}
              component="a"
              href={page.link}
              sx={{
                color: "#ddd",
                marginX: 2,
                transition: ".5s",
                textDecoration: "none",
                "&:hover": {
                  color: "white",
                },
              }}
            
            >
              {page.name}
            </Typography>
          ))}
        </Toolbar>

        <IconButton onClick={toggleTheme} color="inherit">
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
