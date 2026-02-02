import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Avatar,
  Button,
  AppBar,
  Toolbar,
  Paper,
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
} from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

/* ===================== THEME ===================== */
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#0A0A0A' },
    secondary: { main: '#0066FF' },
    background: {
      default: '#FFFFFF',
      paper: '#F5F5F7',
    },
    text: {
      primary: '#1D1D1F',
      secondary: '#6E6E73',
    },
  },
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Inter", "SF Pro Display", "Segoe UI", Roboto, Arial, sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.04em',
    },
    h2: {
      fontWeight: 600,
      letterSpacing: '-0.03em',
    },
    body1: {
      lineHeight: 1.7,
    },
  },
});

/* ===================== APP ===================== */
function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const githubUsername = 'BrunoKolombia';

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* ===================== NAVBAR ===================== */}
      <AppBar position="fixed" sx={{ bgcolor: 'rgba(10, 10, 10, 0.95)', backdropFilter: 'blur(10px)' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700, color: 'white' }}>
            Bruno Kolombia
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Button
              color={currentTab === 'home' ? 'secondary' : 'inherit'}
              onClick={() => setCurrentTab('home')}
              sx={{
                fontWeight: currentTab === 'home' ? 600 : 400,
                borderBottom: currentTab === 'home' ? '2px solid #0066FF' : 'none',
                paddingBottom: '8px',
              }}
            >
              Home
            </Button>
            <Button
              color={currentTab === 'about' ? 'secondary' : 'inherit'}
              onClick={() => setCurrentTab('about')}
              sx={{
                fontWeight: currentTab === 'about' ? 600 : 400,
                borderBottom: currentTab === 'about' ? '2px solid #0066FF' : 'none',
                paddingBottom: '8px',
              }}
            >
              About Me
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* ===================== HOME TAB ===================== */}
      {currentTab === 'home' && (
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            bgcolor: '#FAFAFA',
            textAlign: 'center',
            marginTop: '64px',
          }}
        >
          <Container maxWidth="md">
            <Avatar
              src="/IMG_5573.JPG"
              alt="Bruno Kolombia"
              sx={{
                width: 150,
                height: 150,
                mx: 'auto',
                mb: 3,
                boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
              }}
            />

            <Typography variant="h1" gutterBottom>
              Bruno Kolombia
            </Typography>

            <Typography
              variant="h6"
              sx={{ color: 'text.secondary', mb: 3 }}
            >
              Computer Engineering • Class of 2029
            </Typography>

            <Typography
              variant="body1"
              sx={{
                maxWidth: 600,
                mx: 'auto',
                mb: 5,
                color: 'text.secondary',
              }}
            >
              I approach every problem with intention, precision, and a commitment
              to perfection.
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <Button
                variant="contained"
                startIcon={<GitHub />}
                href={`https://github.com/${githubUsername}`}
              >
                View GitHub
              </Button>
              <Button
                variant="outlined"
                startIcon={<LinkedIn />}
                href="https://www.linkedin.com/in/bruno-kolombia"
              >
                LinkedIn
              </Button>
            </Box>
          </Container>
        </Box>
      )}

      {/* ===================== ABOUT ME TAB ===================== */}
      {currentTab === 'about' && (
        <Box
          sx={{
            minHeight: '100vh',
            bgcolor: '#FAFAFA',
            py: 10,
            marginTop: '64px',
          }}
        >
          <Container maxWidth="md">
            <Typography variant="h2" gutterBottom sx={{ mb: 4 }}>
              About Me
            </Typography>

            <Paper
              sx={{
                p: 4,
                bgcolor: 'white',
                borderRadius: '20px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
              }}
            >
              <Typography variant="body1" sx={{ mb: 3 }}>
                I'm a Computer Engineering student at the University of Florida with a strong interest in building technical solutions that scale and make an impact. My academic focus combines hardware-aware problem solving with software development, and I enjoy applying engineering principles to real-world systems.
              </Typography>

              <Typography variant="body1" sx={{ mb: 3 }}>
                I have hands-on experience working with Python, Arduino, CAD, and 3D printing, alongside strong proficiency in tools like Microsoft Office 365, Google Workspace, and PyCharm. Through coursework and projects, I've developed a solid foundation in logical reasoning, structured programming, and technical documentation.
              </Typography>

              <Typography variant="body1" sx={{ mb: 3 }}>
                Professionally, I've worked as a Development Intern at the Hillsborough Education Foundation, where I supported operational systems by entering and managing data in Blackbaud Raiser's Edge, coordinating large-scale donor communications, and assisting with volunteer recruitment. This role strengthened my attention to detail, data accuracy, and ability to work within established software systems used by large organizations.
              </Typography>

              <Typography variant="body1" sx={{ mb: 3 }}>
                On campus, I'm actively involved in leadership and technical development programs. As a member of NSBE's Trailblazers Program, I collaborate with peers on academic growth, professional development, and community initiatives while engaging with industry professionals and alumni through mentorship and career workshops. I also participate in structured leadership programs such as the ASU Leadership Program, where I help organize events, lead meetings, and coordinate team-based initiatives.
              </Typography>

              <Typography variant="body1">
                I'm particularly interested in opportunities that allow me to combine engineering, leadership, and problem-solving, whether through internships, research, or collaborative projects. I value continuous learning and enjoy working in environments that challenge me technically while making a meaningful impact.
              </Typography>
            </Paper>
          </Container>
        </Box>
      )}

      {/* ===================== FOOTER ===================== */}
      <Box
        component="footer"
        sx={{
          bgcolor: '#0A0A0A',
          color: 'white',
          py: 6,
          textAlign: 'center',
        }}
      >
        <Typography variant="body2" sx={{ opacity: 0.7 }}>
          © 2026 Bruno Kolombia
        </Typography>

        {/* Instagram bottom-right */}
        <a
          href="https://www.instagram.com/bossmanbruno_/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link-bottom"
          aria-label="Instagram"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.265-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
          </svg>
        </a>
      </Box>
    </ThemeProvider>
  );
}

export default App;

