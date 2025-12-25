import React from 'react';
import { Box, Container, Typography, Paper, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database/ORM';
}

const skills: Skill[] = [
  { name: '.NET Core', category: 'Backend' },
  { name: 'NodeJS', category: 'Backend' },
  { name: 'NestJS', category: 'Backend' },
  { name: 'React', category: 'Frontend' },
  { name: 'Angular', category: 'Frontend' },
  { name: 'Material UI', category: 'Frontend' },
  { name: 'EF Core', category: 'Database/ORM' },
];

const Skills: React.FC = () => {
  return (
    <Box component="section" id="skills" sx={{ py: 12, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Stack spacing={2} sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="h3" sx={{ fontWeight: 800, color: 'text.primary' }}>
            Technical Expertise
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            My professional toolkit for building scalable full-stack applications.
          </Typography>
        </Stack>

        {/* Skills Container using Flexbox via Box */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 3, // Spacing between items
          }}
        >
          {skills.map((skill, index) => (
            <Box
              key={skill.name}
              sx={{
                width: {
                  xs: '100%',     // 1 per row on mobile
                  sm: 'calc(50% - 24px)', // 2 per row on small screens
                  md: 'calc(25% - 24px)', // 4 per row on desktop
                },
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    border: '1px solid',
                    borderColor: 'divider',
                    textAlign: 'center',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'primary.main',
                      boxShadow: '0 10px 30px -10px rgba(37, 99, 235, 0.2)',
                    },
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {skill.name}
                  </Typography>
                  <Chip
                    label={skill.category}
                    size="small"
                    color={skill.category === 'Backend' ? 'primary' : 'secondary'}
                    sx={{ fontWeight: 600, fontSize: '0.7rem' }}
                  />
                </Paper>
              </motion.div>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;