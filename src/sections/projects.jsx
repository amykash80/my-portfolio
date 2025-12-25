import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button, 
  Chip, 
  Stack,
  IconButton
} from '@mui/material';
import { GitHub, Launch, Code } from '@mui/icons-material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "AI Image Dashboard",
    description: "A full-stack application that generates images using DALL-E API and allows users to share them in a community gallery.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "MongoDB", "OpenAI"],
    github: "#",
    demo: "#"
  },
  {
    title: "E-Commerce Experience",
    description: "Modern shopping platform with Stripe integration, real-time inventory tracking, and a sleek Material UI checkout flow.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "Stripe", "PostgreSQL", "MUI"],
    github: "#",
    demo: "#"
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <Box component="section" id="projects" sx={{ py: 12, bgcolor: '#f8fafc' }}>
      <Container maxWidth="lg">
        <Stack spacing={2} sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="h3" sx={{ fontWeight: 800, color: 'text.primary' }}>
            Featured Projects
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            A collection of my recent work, ranging from web applications to creative experiments.
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card sx={{ 
                  borderRadius: 4, 
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  border: '1px solid rgba(0,0,0,0.05)'
                }}>
                  <CardMedia
                    component="img"
                    height="240"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent sx={{ p: 4 }}>
                    <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                      {project.tags.map(tag => (
                        <Chip key={tag} label={tag} size="small" sx={{ fontWeight: 600, bgcolor: 'rgba(37, 99, 235, 0.1)', color: 'primary.main' }} />
                      ))}
                    </Stack>
                    
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
                      {project.title}
                    </Typography>
                    
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3, minHeight: '3em' }}>
                      {project.description}
                    </Typography>

                    <Stack direction="row" spacing={2}>
                      <Button 
                        variant="contained" 
                        startIcon={<Launch />} 
                        href={project.demo}
                        sx={{ borderRadius: 2, textTransform: 'none', fontWeight: 600 }}
                      >
                        Live Demo
                      </Button>
                      <IconButton href={project.github} sx={{ border: '1px solid', borderColor: 'divider' }}>
                        <GitHub />
                      </IconButton>
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;