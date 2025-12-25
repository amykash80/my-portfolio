import { Box, Typography, Button, Container, Stack, Chip } from '@mui/material';
import { ArrowForward, GitHub, LinkedIn } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Box sx={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      background: 'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
      pt: 8
    }}>
      <Container maxWidth="md">
        <Stack spacing={4} alignItems="center" textAlign="center">
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Chip 
              label="Available for hire" 
              color="primary" 
              variant="outlined"
              sx={{ fontWeight: 'bold', textTransform: 'uppercase', px: 1 }} 
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Typography variant="h1" sx={{ 
              fontWeight: 900, 
              fontSize: { xs: '3.5rem', md: '5rem' },
              lineHeight: 1.1,
              letterSpacing: -2
            }}>
              Building digital products <br />
              <Box component="span" sx={{ 
                background: 'linear-gradient(45deg, #2563eb 30%, #06b6d4 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                with passion & code.
              </Box>
            </Typography>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '650px', lineHeight: 1.6 }}>
              Hi, I'm Aamir Bashir. A Full-stack Developer specializing in building high-performance 
              applications with React, Node.js, and modern UI architectures.
            </Typography>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button 
                variant="contained" 
                size="large" 
                endIcon={<ArrowForward />}
                sx={{ 
                  borderRadius: '12px', 
                  px: 5, py: 2, 
                  fontSize: '1.1rem', 
                  boxShadow: '0 10px 20px -10px rgba(37, 99, 235, 0.5)',
                  textTransform: 'none'
                }}
              >
                Explore My Work
              </Button>
              <Button 
                variant="outlined" 
                size="large" 
                startIcon={<GitHub />}
                sx={{ borderRadius: '12px', px: 5, py: 2, textTransform: 'none', color: 'text.primary', borderColor: '#e2e8f0' }}
              >
                GitHub
              </Button>
            </Stack>
          </motion.div>

        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;