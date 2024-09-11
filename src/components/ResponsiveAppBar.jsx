import { AppBar, Toolbar, Button, Box, useMediaQuery, useTheme, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const pages = ['Home', 'Service', 'Types', 'Team', 'Contact'];

const NavBar = styled(AppBar)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  padding: 0,
  transition: 'all 0.3s',
  '&.nav-scrolled': {
    position: 'fixed',
    zIndex: 222,
    backgroundColor: '#2a2a2a',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
    padding: '10px 0px',
  },
  [theme.breakpoints.up('lg')]: {
    '& .navbar-nav': {
      backgroundColor: 'transparent',
      borderRadius: 0,
      padding: 0,
      marginTop: 0,
    },
  },
}));

const NavList = styled('ul')(({ theme }) => ({
  backgroundColor: '#2a2a2a',
  borderRadius: '7.5px',
  padding: '10px 20px',
  marginTop: '10px',
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  width: '100%',
  [theme.breakpoints.up('lg')]: {
    backgroundColor: 'transparent',
    borderRadius: 0,
    padding: 0,
    marginTop: 0,
    flexDirection: 'row',
  },
}));

const NavItem = styled('li')(({ theme }) => ({
  marginLeft: 0,
  textAlign: 'center',
  borderBottom: '1px solid rgba(250, 250, 250, 0.1)',
  '&:last-child': {
    borderBottom: 'none',
  },
  [theme.breakpoints.up('lg')]: {
    marginLeft: '20px',
    borderBottom: 'none',
  },
}));

const NavLink = styled(Button)(({ theme }) => ({
  color: '#ffffff',
  fontSize: '15px',
  fontWeight: 400,
  padding: '12px 20px',
  borderTop: '2px solid transparent',
  transition: 'all 0.5s',
  width: '100%',
  justifyContent: 'center',
  '&:hover': {
    color: '#ff565b',
  },
  '&.active': {
    fontWeight: 400,
    color: '#ff565b',
    backgroundColor: 'transparent',
    borderTop: 'none',
    [theme.breakpoints.up('lg')]: {
      backgroundColor: '#ffffff',
      borderBottomLeftRadius: '7px',
      borderBottomRightRadius: '7px',
      borderTop: '2px solid #ff565b',
    },
  },
}));

const MainNavigation = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <header id="#top">
      <NavBar className="main-navigation navbar navbar-expand-lg navbar-light" sx={{background:'transparent'}}>
        <Toolbar >
          <Box sx={{ flexGrow: 1 }}>
            <a className="navbar-brand" href="index.html">
              <img src="assets/images/white-logo.png" alt="" />
            </a>
          </Box>
          <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', lg: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} sx={{ listStyleType: 'none' }}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', lg: 'flex' } }}>
            <NavList className="navbar-nav">
              {pages.map((page, index) => (
                <NavItem key={index} className="nav-item">
                  <NavLink className={`nav-link ${page === 'Home' ? 'active' : ''}`} href={`${page.toLowerCase()}.html`}>
                    {page}
                  </NavLink>
                </NavItem>
              ))}
            </NavList>
          </Box>
        </Toolbar>
      </NavBar>
    </header>
  );
};

export default MainNavigation;