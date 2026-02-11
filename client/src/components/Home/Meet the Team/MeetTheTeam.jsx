import React from 'react';
import { Box, Container, Typography, Grid, useTheme } from '@mui/material';
import TeamMemberCard from './TeamMemberCard';

const TEAM_DATA = [
  {
    name: "Sagnick Dey",
    role: "Executive",
    image: "https://res.cloudinary.com/dauf7v7uz/image/upload/v1769764933/WhatsApp_Image_2026-01-30_at_14.50.51_jimen1.jpg", 
    linkedin: "https://www.linkedin.com/in/sagnick-dey-712017334/",
    github: "https://github.com/SagnickDey427"
  },
  {
    name: "Divyanshu Shukla",
    role: "Graphic Designer",
    image: "https://res.cloudinary.com/dauf7v7uz/image/upload/v1770262044/Divyanshu_img_gywj9m.jpg",
    linkedin: "https://www.linkedin.com/in/kumar-divyanshu-shuka-81b08131b/",
    github: "#"
  },
  {
    name: "Sagnick Dey",
    role: "Executive",
    image: "https://res.cloudinary.com/dauf7v7uz/image/upload/v1769764933/WhatsApp_Image_2026-01-30_at_14.50.51_jimen1.jpg", 
    linkedin: "https://www.linkedin.com/in/sagnick-dey-712017334/",
    github: "https://github.com/SagnickDey427"
  }
];

const MeetTheTeam = () => {
  const theme = useTheme();
  return (
    <Box component="section" sx={{ py: 12, backgroundImage: `radial-gradient(at 0% 0%, ${theme.palette.primary.main}10 0, transparent 50%)` }}>
      <Container>
        <Typography variant="h3" align="center" sx={{ fontWeight: 900, mb: 2 }}>
          Meet the Core
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 8, maxWidth: 600, mx: 'auto' }}>
          The dedicated students working behind the scenes to bring you the best events and technical resources at MANIT.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {TEAM_DATA.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <TeamMemberCard {...member} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MeetTheTeam;