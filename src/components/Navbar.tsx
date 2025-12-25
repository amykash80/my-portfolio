import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Box, Container, useScrollTrigger } from '@mui/material';
import { Menu as MenuIcon, Code as CodeIcon, Close as CloseIcon } from '@mui/icons-material';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });

  const navLinks = [
    { name: 'Home', path: 'home' },
    { name: 'Projects', path: 'projects' },
    { name: 'Skills', path: 'skills' },
    { name: 'Contact', path: 'contact' },
  ];

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          bgcolor: trigger ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
          backdropFilter: 'blur(12px)',
          boxShadow: trigger ? 1 : 0,
          transition: '0.3s all ease-in-out',
          borderBottom: trigger ? '1px solid rgba(0,0,0,0.05)' : 'none'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ py: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, gap: 1 }}>
              <CodeIcon sx={{ color: 'primary.main', fontSize: 32 }} />
              <Typography variant="h5" sx={{ fontWeight: 800, color: 'text.primary', letterSpacing: -1 }}>
                DevPortfolio
              </Typography>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
              {navLinks.map((link) => (
                <Button 
                  key={link.name} 
                  href={link.path} 
                  sx={{ 
                    color: 'text.primary', 
                    fontWeight: 600, 
                    textTransform: 'none',
                    fontSize: '1rem',
                    '&:hover': { color: 'primary.main', bgcolor: 'transparent' }
                  }}
                >
                  {link.name}
                </Button>
              ))}
            </Box>

            <IconButton sx={{ display: { md: 'none' }, color: 'text.primary' }} onClick={() => setMobileOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <Box sx={{ width: 250, pt: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2 }}>
            <IconButton onClick={() => setMobileOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.name} disablePadding>
                <ListItemButton component="a" href={link.path} onClick={() => setMobileOpen(false)}>
                  <ListItemText primary={link.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;