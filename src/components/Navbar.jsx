import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import logonike from "../assets/logonike.png";
import { Badge } from "@mui/material";
import { Logout, ShoppingCart } from "@mui/icons-material";
import { clientContext } from "../context/ClientContext";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const data = React.useContext(clientContext);
  const { cartCount, authWidthGoogle, user, logOut } = data;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className="appbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            color="black"
          >
            <Link to="/">
              <img width={50} src={logonike} alt="" />
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Link to="/admin-panel">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography color="black" textAlign="center">
                    Admin Panel
                  </Typography>
                </MenuItem>
              </Link>
              <Link to="/admin-panel/add">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography color="black" textAlign="center">
                    Add Product
                  </Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            color="black"
          >
            <Link to="/">
              <img width={50} src={logonike} alt="" />
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to="/admin-panel">
              <Button sx={{ my: 2, color: "black", display: "block" }}>
                ADMIN PANEl
              </Button>
            </Link>
            <Link to="/admin-panel/add">
              <Button sx={{ my: 2, color: "black", display: "block" }}>
                ADD PRODUCT
              </Button>
            </Link>
          </Box>
          <Box
            style={{ display: "flex", alignItems: "center" }}
            sx={{ flexGrow: 0 }}
          >
            <Link to="/cart" style={{ marginRight: 10 }}>
              <Badge badgeContent={cartCount} color="error">
                <ShoppingCart />
              </Badge>
            </Link>
            {user ? (
              <>
                <Avatar
                  src={user.photoURL}
                  alt={user.displayName}
                  style={{ marginRight: 10 }}
                />
                <span>{user.email}</span>
                <Button onClick={logOut}>
                  <Logout color="error" />
                </Button>
              </>
            ) : (
              <Button
                onClick={authWidthGoogle}
                variant="outlined"
                color="error"
              >
                Войти
              </Button>
            )}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip> */}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" color="black">
                    Add Panel
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
