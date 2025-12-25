import React from 'react';
import { Box, Container, Typography, TextField, Button, Stack, Paper } from '@mui/material';
import { Phone, Email, LocationOn, Send, GitHub, LinkedIn, Twitter } from '@mui/icons-material';

const Contact = () => {
  return (
    <Box id="contact" sx={{ py: 12, backgroundColor: '#f0f7ff' }}> {/* Very light blue page background */}
      <Container maxWidth="lg">
        <Paper 
          elevation={0}
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            borderRadius: 10, 
            overflow: 'hidden', 
            boxShadow: '0 40px 80px rgba(2, 44, 102, 0.15)',
            border: '1px solid rgba(255,255,255,0.8)'
          }}
        >
          {/* Left Side: Deep Sapphire Gradient */}
          <Box 
            sx={{ 
              flex: { md: '0 0 42%' },
              background: 'linear-gradient(135deg, #004e92 0%, #000428 100%)', // Deep Blue Gradient
              color: 'white',
              p: { xs: 5, md: 8 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <Box>
              <Typography variant="overline" sx={{ color: '#60a5fa', fontWeight: '800', letterSpacing: 3 }}>
                GET IN TOUCH
              </Typography>
              <Typography variant="h3" fontWeight="900" sx={{ mt: 2, mb: 3, lineHeight: 1.1, fontSize: { xs: '2.5rem', md: '3rem' } }}>
                Ready to start <br /> something <br /> big?
              </Typography>
              <Typography variant="body1" sx={{ color: '#cbd5e1', fontSize: '1.1rem', mb: 6 }}>
                Let's connect and build a digital experience that stands out.
              </Typography>
            </Box>

            <Stack spacing={4}>
              <Stack direction="row" alignItems="center" spacing={3}>
                <Box sx={{ p: 1.5, borderRadius: 3, backgroundColor: 'rgba(96, 165, 250, 0.2)', color: '#60a5fa' }}>
                  <Phone fontSize="small" />
                </Box>
                <Typography variant="body1" fontWeight="600">+91 7889857479</Typography>
              </Stack>
              
              <Stack direction="row" alignItems="center" spacing={3}>
                <Box sx={{ p: 1.5, borderRadius: 3, backgroundColor: 'rgba(96, 165, 250, 0.2)', color: '#60a5fa' }}>
                  <Email fontSize="small" />
                </Box>
                <Typography variant="body1" fontWeight="600">daramir164@gmail.com</Typography>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={3}>
                <Box sx={{ p: 1.5, borderRadius: 3, backgroundColor: 'rgba(96, 165, 250, 0.2)', color: '#60a5fa' }}>
                  <LocationOn fontSize="small" />
                </Box>
                <Typography variant="body1" fontWeight="600">Drabgam, Pulwama, Kashmir</Typography>
              </Stack>
            </Stack>
          </Box>

          {/* Right Side: Beautiful Modern Form */}
          <Box sx={{ flex: 1, p: { xs: 5, md: 8 }, backgroundColor: '#ffffff' }}>
            <Typography variant="h4" fontWeight="800" sx={{ mb: 1, color: '#0f172a' }}>
              Send Message
            </Typography>
            <Typography variant="body2" sx={{ mb: 5, color: '#64748b', fontSize: '1rem' }}>
              Fill out the form below and I'll get back to you shortly.
            </Typography>
            
            <Stack component="form" spacing={3}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                <TextField 
                  fullWidth 
                  label="Name" 
                  variant="outlined" 
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: 4 } }}
                />
                <TextField 
                  fullWidth 
                  label="Email" 
                  variant="outlined" 
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: 4 } }}
                />
              </Stack>

              <TextField 
                fullWidth 
                label="Subject" 
                variant="outlined" 
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 4 } }}
              />
              
              <TextField 
                fullWidth 
                label="Your Message" 
                multiline 
                rows={5} 
                variant="outlined" 
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 4 } }}
              />

              <Box sx={{ pt: 2 }}>
                <Button 
                  variant="contained" 
                  fullWidth
                  endIcon={<Send />}
                  sx={{ 
                    py: 2.2,
                    borderRadius: 4,
                    backgroundColor: '#004e92',
                    fontSize: '1.1rem',
                    fontWeight: '800',
                    textTransform: 'none',
                    boxShadow: '0 15px 30px rgba(0, 78, 146, 0.3)',
                    '&:hover': {
                      backgroundColor: '#003a6d',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 20px 40px rgba(0, 78, 146, 0.4)',
                    },
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Stack>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;