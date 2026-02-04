import React, { useState, useEffect } from 'react';
import { Octokit } from '@octokit/rest';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Avatar,
  IconButton,
  Paper,
  Divider,
  CircularProgress,
  Alert,
  useTheme,
  useMediaQuery,
  CardMedia
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Email,
  AcUnit,
  Star,
  CallSplit,
  Launch,
  Code,
  Work,
  Person,
  Grass,
  School,
  Groups,
  EmojiEvents
} from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

// Modern minimalist theme inspired by Apple and startups
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0A0A0A',
      light: '#1A1A1A',
    },
    secondary: {
      main: '#0066FF',
      light: '#3384FF',
    },
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
    fontFamily: '-apple-system, BlinkMacSystemFont, "Inter", "SF Pro Display", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '4.5rem',
      letterSpacing: '-0.04em',
      lineHeight: 1.1,
      color: '#1D1D1F',
    },
    h2: {
      fontWeight: 600,
      fontSize: '3rem',
      letterSpacing: '-0.03em',
      lineHeight: 1.2,
      color: '#1D1D1F',
      marginBottom: '3rem',
    },
    h4: {
      fontWeight: 600,
      letterSpacing: '-0.02em',
      fontSize: '2rem',
    },
    h6: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
      fontSize: '1.125rem',
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.7,
      color: '#1D1D1F',
    },
    body2: {
      fontSize: '0.95rem',
      lineHeight: 1.6,
      color: '#6E6E73',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(0, 0, 0, 0.06)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.08)',
            borderColor: 'rgba(0, 102, 255, 0.2)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 12,
          fontSize: '1rem',
          fontWeight: 500,
          padding: '12px 28px',
          letterSpacing: '-0.01em',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
          fontSize: '0.875rem',
          letterSpacing: '-0.01em',
        },
      },
    },
  },
});

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [displayedText, setDisplayedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

  const githubUsername = 'JuniaCelestin';
  
  // Roles to cycle through
  const roles = [
    'an Engineer',
    'a Researcher',
    'a Scholar',
    'a Leader',
    'a Developer',
    'an Innovator'
  ];

  const experienceData = [
    {
      title: "Undergraduate Researcher",
      company: "Gator Glaciology Lab",
      period: "August 2025 - Present",
      description: "Using novel geophysical and geostastical machine learning techniques to map the bedrock beneath Antarctica's ice shelves. Exploring stochastic approaches by combining Markov chain Monte Carlo with Sequential Gaussian Simulation to generate realistic topography that combines mass conservation geophysics with glaciological realism. These approaches allow for climate scientist to more effectively quantify uncertainty in ice sheet models to better predict sea level rise.",
      icon: <AcUnit/>,
    },
    {
      title: "Undergraduate Researcher",
      company: "GatorSense - The Machine Learning and Sensing Lab",
      period: "June 2025 - Present",
      description: "Developing a computer vision application for estimating the phenotypes of plant roots from minirhizotron images. Utilizing scikit-learn, OpenCV, and NumPy for algorithmic analysis through classicical machine learning approaches. Accelerating training through Linux commands ran on the HiPerGator supercomputer. Contributing to greater deep learning pipeline for switchgrass root analysis to allow for plant scientists to better understand the effects of root phenotypes on biomass production.",
      icon: <Grass/>,
    }
  ];

  const leadershipData = [
    {
      title: "Pre-Professional Director",
      company: "Trailblazers Initiative",
      period: "April 2025 - Present",
      description: "Supporting 33 underrepresented first-year students through the Trailblazers Intitiative of the National Society of Black Engineers. Exposing students to career opportunities, fellowships, internships, and scholarships and helping them navigate the professional development process through resume reviews, mock interviews, and networking events with industry professionals and alumni, resulting in students gaining internship offers at companies such as NextEra Energy and Amazon.",
      icon: <School/>,
    },
    {
      title: "General Body Member",
      company: "National Society of Black Engineers",
      period: "August 2024 - Present",
      description: "General body member of NSBE. Have helped conduct and organize various volunteering events and initiatives, such as volunteering at Gainesville's Porter's Quarters community farm, and setting up a food drive with Food4Kids.",
      icon: <Groups/>,
    }
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const octokit = new Octokit();
        
        const response = await octokit.rest.repos.listForUser({
          username: githubUsername,
          sort: 'updated',
          per_page: 6,
        });

        const filteredProjects = response.data
          .filter(repo => !repo.fork && repo.description)
          .sort((a, b) => b.stargazers_count - a.stargazers_count);

        const projectsWithDetails = await Promise.all(
          filteredProjects.map(async (project) => {
            try {
              const languagesResponse = await octokit.rest.repos.listLanguages({
                owner: githubUsername,
                repo: project.name,
              });

              let projectImage = null;
              let defaultBranch = 'main';
              
              try {
                const repoResponse = await octokit.rest.repos.get({
                  owner: githubUsername,
                  repo: project.name,
                });
                defaultBranch = repoResponse.data.default_branch;
                
                const contentsResponse = await octokit.rest.repos.getContent({
                  owner: githubUsername,
                  repo: project.name,
                  path: '',
                });

                const imageFiles = contentsResponse.data.filter(file => 
                  file.name.toLowerCase().endsWith('.png') && 
                  file.type === 'file'
                );

                if (imageFiles.length > 0) {
                  projectImage = `https://raw.githubusercontent.com/${githubUsername}/${project.name}/${defaultBranch}/${imageFiles[0].name}`;
                }
              } catch (imageError) {
                const branchesToTry = defaultBranch === 'main' ? ['master'] : ['main'];
                
                for (const branch of branchesToTry) {
                  try {
                    const contentsResponse = await octokit.rest.repos.getContent({
                      owner: githubUsername,
                      repo: project.name,
                      path: '',
                      ref: branch
                    });

                    const imageFiles = contentsResponse.data.filter(file => 
                      file.name.toLowerCase().endsWith('.png') && 
                      file.type === 'file'
                    );

                    if (imageFiles.length > 0) {
                      projectImage = `https://raw.githubusercontent.com/${githubUsername}/${project.name}/${branch}/${imageFiles[0].name}`;
                      break;
                    }
                  } catch (branchError) {
                    continue;
                  }
                }
                
                if (!projectImage) {
                  console.log(`No image found for ${project.name} in any branch`);
                }
              }

              return {
                ...project,
                languages: languagesResponse.data,
                projectImage
              };
            } catch (detailError) {
              console.error(`Error fetching details for ${project.name}:`, detailError);
              return {
                ...project,
                languages: {},
                projectImage: null
              };
            }
          })
        );

        setProjects(projectsWithDetails);
      } catch (err) {
        setError('Failed to fetch GitHub projects. Please check the username and try again.');
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [githubUsername]);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    if (!isDeleting && displayedText === currentRole) {
      // Pause before deleting
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayedText === '') {
      // Move to next role
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    // Type or delete character
    const timeout = setTimeout(() => {
      setDisplayedText(prev => {
        if (isDeleting) {
          return currentRole.substring(0, prev.length - 1);
        } else {
          return currentRole.substring(0, prev.length + 1);
        }
      });
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: '#F7DF1E',
      Python: '#3776AB',
      TypeScript: '#3178C6',
      Java: '#ED8B00',
      'C++': '#00599C',
      React: '#61DAFB',
      Vue: '#4FC08D',
      HTML: '#E34F26',
      CSS: '#1572B6',
      Go: '#00ADD8',
      Rust: '#DEA584',
      Swift: '#FA7343',
      Kotlin: '#7F52FF',
      'C#': '#239120',
      PHP: '#777BB4',
      Ruby: '#CC342D',
      Dart: '#0175C2',
      Scala: '#DC322F',
      Shell: '#89E051',
      Dockerfile: '#384D54'
    };
    return colors[language] || '#0066FF';
  };

  const getTopLanguages = (languages) => {
    const entries = Object.entries(languages);
    const total = entries.reduce((sum, [, bytes]) => sum + bytes, 0);
    
    return entries
      .sort((a, b) => b[1] - a[1])
      .slice(0, 4)
      .map(([name, bytes]) => ({
        name,
        percentage: ((bytes / total) * 100).toFixed(1)
      }));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: '#FFFFFF' }}>
        {/* Fixed Header Navigation */}
        <Box
          component="nav"
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bgcolor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
            zIndex: 1000,
            py: 2,
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 700,
                  color: '#1D1D1F',
                  cursor: 'pointer',
                  position: 'absolute',
                  left: 0,
                }}
                onClick={scrollToTop}
              >
                JC
              </Typography>
              <Box sx={{ display: 'flex', gap: { xs: 2, md: 4 } }}>
                <Button
                  onClick={() => scrollToSection('about')}
                  sx={{
                    color: '#1D1D1F',
                    textTransform: 'none',
                    fontWeight: 500,
                    fontSize: { xs: '0.875rem', md: '1rem' },
                    '&:hover': {
                      bgcolor: 'rgba(0, 102, 255, 0.04)',
                      color: '#0066FF',
                    },
                  }}
                >
                  About
                </Button>
                <Button
                  onClick={() => scrollToSection('experience')}
                  sx={{
                    color: '#1D1D1F',
                    textTransform: 'none',
                    fontWeight: 500,
                    fontSize: { xs: '0.875rem', md: '1rem' },
                    '&:hover': {
                      bgcolor: 'rgba(0, 102, 255, 0.04)',
                      color: '#0066FF',
                    },
                  }}
                >
                  Experience
                </Button>
                <Button
                  onClick={() => scrollToSection('projects')}
                  sx={{
                    color: '#1D1D1F',
                    textTransform: 'none',
                    fontWeight: 500,
                    fontSize: { xs: '0.875rem', md: '1rem' },
                    '&:hover': {
                      bgcolor: 'rgba(0, 102, 255, 0.04)',
                      color: '#0066FF',
                    },
                  }}
                >
                  Projects
                </Button>
                <Button
                  onClick={() => scrollToSection('leadership')}
                  sx={{
                    color: '#1D1D1F',
                    textTransform: 'none',
                    fontWeight: 500,
                    fontSize: { xs: '0.875rem', md: '1rem' },
                    '&:hover': {
                      bgcolor: 'rgba(0, 102, 255, 0.04)',
                      color: '#0066FF',
                    },
                  }}
                >
                  Leadership
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Scroll to Top Button */}
        <IconButton
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: 32,
            right: 32,
            bgcolor: '#0A0A0A',
            color: 'white',
            width: 56,
            height: 56,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
            opacity: showScrollTop ? 1 : 0,
            visibility: showScrollTop ? 'visible' : 'hidden',
            transition: 'all 0.3s ease',
            zIndex: 999,
            '&:hover': {
              bgcolor: '#1A1A1A',
              transform: 'translateY(-4px)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
            },
          }}
        >
          <Box
            component="svg"
            sx={{ width: 24, height: 24 }}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </Box>
        </IconButton>

        {/* Hero Section */}
        <Box
          sx={{
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            bgcolor: '#FAFAFA',
          }}
        >
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, textAlign: 'center', py: { xs: 8, md: 0 } }}>
            <Typography 
              variant="h1" 
              component="h1" 
              gutterBottom
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                mb: 3,
                minHeight: { xs: '120px', sm: '140px', md: '160px' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box component="span">
                Junia Celestin is{' '}
                <Box 
                  component="span" 
                  sx={{ 
                    color: '#500123ff',
                    position: 'relative',
                    '&::after': {
                      content: '"|"',
                      position: 'absolute',
                      right: '-8px',
                      animation: 'blink 1s step-end infinite',
                    },
                    '@keyframes blink': {
                      '0%, 100%': { opacity: 1 },
                      '50%': { opacity: 0 },
                    },
                  }}
                >
                  {displayedText}
                </Box>
              </Box>
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 5, 
                maxWidth: '600px', 
                mx: 'auto',
                color: 'text.secondary',
                fontSize: { xs: '1rem', md: '1.125rem' },
              }}
            >
              Computer Science Student • Future Tech Leader • Machine Learning Researcher • Full-Stack Developer • AI Enthusiast 
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                href={`https://github.com/${githubUsername}`}
                sx={{ 
                  bgcolor: '#0A0A0A',
                  color: 'white',
                  '&:hover': { 
                    bgcolor: '#1A1A1A',
                    transform: 'scale(1.02)',
                  },
                  transition: 'all 0.3s ease',
                }}
                startIcon={<GitHub />}
              >
                View GitHub
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="https://www.linkedin.com/in/junia-celestin"
                sx={{ 
                  borderColor: '#0A0A0A',
                  color: '#0A0A0A',
                  '&:hover': { 
                    borderColor: '#0066FF',
                    color: '#0066FF',
                    bgcolor: 'rgba(0, 102, 255, 0.04)',
                  },
                  transition: 'all 0.3s ease',
                }}
                startIcon={<LinkedIn />}
              >
                Connect on LinkedIn
              </Button>
            </Box>
          </Container>
        </Box>

        {/* About Section */}
        <Container id="about" maxWidth="md" sx={{ py: { xs: 8, md: 12 } }}>
          <Typography 
            variant="h2" 
            component="h2" 
            textAlign="center" 
            gutterBottom
            sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
          >
            About Me
          </Typography>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              textAlign: 'center',
              bgcolor: 'transparent',
              borderRadius: 0,
            }}
          >
            <Typography 
              variant="body1" 
              sx={{ 
                lineHeight: 1.8, 
                color: 'text.secondary',
                fontSize: { xs: '1rem', md: '1.125rem' },
              }}
            >
Hi my name is Junia Celestin and I am a student from the University of Florida.
            </Typography>
          </Paper>
        </Container>

        {/* Experience Section */}
        <Box id="experience" sx={{ bgcolor: '#FAFAFA', py: { xs: 8, md: 12 } }}>
          <Container maxWidth="lg">
            <Typography 
              variant="h2" 
              component="h2" 
              textAlign="center" 
              gutterBottom
              sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
            >
              Experience
            </Typography>
            <Grid container spacing={3}>
              {experienceData.map((exp, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flexGrow: 1, p: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                        <Avatar 
                          sx={{ 
                            bgcolor: '#0066FF', 
                            mr: 2,
                            width: 48,
                            height: 48,
                          }}
                        >
                          {exp.icon}
                        </Avatar>
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="h6" component="h3" sx={{ mb: 0.5 }}>
                            {exp.title}
                          </Typography>
                          <Typography color="text.secondary" variant="body2" sx={{ fontWeight: 500 }}>
                            {exp.company}
                          </Typography>
                        </Box>
                      </Box>
                      <Chip
                        label={exp.period}
                        size="small"
                        sx={{ 
                          mb: 2,
                          bgcolor: 'rgba(0, 0, 0, 0.04)',
                          color: 'text.secondary',
                          border: 'none',
                        }}
                      />
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                        {exp.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Projects Section */}
        <Container id="projects" maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
          <Typography 
            variant="h2" 
            component="h2" 
            textAlign="center" 
            gutterBottom
            sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
          >
            Featured Projects
          </Typography>
          
          {loading && (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
              <CircularProgress size={48} sx={{ color: '#0A0A0A' }} />
            </Box>
          )}
          
          {error && (
            <Alert 
              severity="error" 
              sx={{ 
                mb: 4,
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'error.light',
              }}
            >
              {error}
            </Alert>
          )}
          
          {!loading && !error && (
            <Grid container spacing={3}>
              {projects.map((project) => {
                const topLanguages = getTopLanguages(project.languages);
                
                return (
                  <Grid item xs={12} md={6} lg={4} key={project.id}>
                    <Card sx={{ 
                      height: '100%', 
                      display: 'flex', 
                      flexDirection: 'column',
                    }}>
                      {project.projectImage && (
                        <CardMedia
                          component="img"
                          image={project.projectImage}
                          alt={`${project.name} preview`}
                          sx={{
                            objectFit: 'cover',
                            bgcolor: '#F5F5F7',
                          }}
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      )}
                      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                        <Typography variant="h6" component="h3" gutterBottom sx={{ mb: 1.5 }}>
                          {project.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ 
                            mb: 2.5, 
                            lineHeight: 1.6,
                            flexGrow: 1,
                          }}
                        >
                          {project.description || 'No description available'}
                        </Typography>
                        
                        {topLanguages.length > 0 && (
                          <Box sx={{ mb: 2 }}>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                              {topLanguages.map((lang) => (
                                <Chip
                                  key={lang.name}
                                  size="small"
                                  label={lang.name}
                                  sx={{
                                    bgcolor: getLanguageColor(lang.name),
                                    color: 'white',
                                    fontWeight: 600,
                                    fontSize: '0.75rem',
                                    border: 'none',
                                    transition: 'transform 0.2s ease',
                                    '&:hover': {
                                      transform: 'scale(1.1)',
                                    },
                                  }}
                                />
                              ))}
                            </Box>
                          </Box>
                        )}
                        
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 'auto' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
                            <Star fontSize="small" sx={{ fontSize: 18 }} />
                            <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                              {project.stargazers_count}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
                            <CallSplit fontSize="small" sx={{ fontSize: 18 }} />
                            <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                              {project.forks_count}
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>
                      <CardActions sx={{ p: 3, pt: 0 }}>
                        <Button
                          size="medium"
                          sx={{ 
                            color: '#0A0A0A',
                            '&:hover': { 
                              bgcolor: 'rgba(0, 0, 0, 0.04)',
                            },
                          }}
                          startIcon={<Launch />}
                          href={project.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          )}
        </Container>

        {/* Leadership & Involvement Section */}
        <Box id="leadership" sx={{ bgcolor: '#FAFAFA', py: { xs: 8, md: 12 } }}>
          <Container maxWidth="lg">
            <Typography 
              variant="h2" 
              component="h2" 
              textAlign="center" 
              gutterBottom
              sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
            >
              Leadership & Involvement
            </Typography>
            <Grid container spacing={3}>
              {leadershipData.map((item, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flexGrow: 1, p: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                        <Avatar 
                          sx={{ 
                            bgcolor: '#0066FF', 
                            mr: 2,
                            width: 48,
                            height: 48,
                          }}
                        >
                          {item.icon}
                        </Avatar>
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="h6" component="h3" sx={{ mb: 0.5 }}>
                            {item.title}
                          </Typography>
                          <Typography color="text.secondary" variant="body2" sx={{ fontWeight: 500 }}>
                            {item.company}
                          </Typography>
                        </Box>
                      </Box>
                      <Chip
                        label={item.period}
                        size="small"
                        sx={{ 
                          mb: 2,
                          bgcolor: 'rgba(0, 0, 0, 0.04)',
                          color: 'text.secondary',
                          border: 'none',
                        }}
                      />
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Contact Footer */}
        <Box
          component="footer"
          sx={{
            bgcolor: '#0A0A0A',
            color: 'white',
            py: { xs: 6, md: 8 },
            textAlign: 'center',
          }}
        >
          <Container maxWidth="lg">
            <Typography 
              variant="h4" 
              component="h3" 
              gutterBottom
              sx={{ 
                fontSize: { xs: '1.75rem', md: '2.125rem' },
                fontWeight: 600,
                mb: 2,
              }}
            >
              Let's Connect
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 4, 
                color: 'rgba(255, 255, 255, 0.7)',
                maxWidth: '500px',
                mx: 'auto',
              }}
            >
              Feel free to connect with me on LinkedIn or check out my projects on GitHub!
            </Typography>
            
            {/* Footer Navigation Links */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 4, flexWrap: 'wrap' }}>
              <Button
                onClick={() => scrollToSection('about')}
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  textTransform: 'none',
                  fontWeight: 400,
                  fontSize: '0.95rem',
                  '&:hover': {
                    color: 'white',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                About
              </Button>
              <Button
                onClick={() => scrollToSection('experience')}
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  textTransform: 'none',
                  fontWeight: 400,
                  fontSize: '0.95rem',
                  '&:hover': {
                    color: 'white',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                Experience
              </Button>
              <Button
                onClick={() => scrollToSection('projects')}
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  textTransform: 'none',
                  fontWeight: 400,
                  fontSize: '0.95rem',
                  '&:hover': {
                    color: 'white',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                Projects
              </Button>
              <Button
                onClick={() => scrollToSection('leadership')}
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  textTransform: 'none',
                  fontWeight: 400,
                  fontSize: '0.95rem',
                  '&:hover': {
                    color: 'white',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                Leadership
              </Button>
            </Box>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 5 }}>
              <IconButton
                href={`https://github.com/${githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                size="large"
                sx={{ 
                  color: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': { 
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                    transform: 'scale(1.1)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <GitHub />
              </IconButton>
              <IconButton
                href="https://linkedin.com/in/bakari-kerr"
                target="_blank"
                rel="noopener noreferrer"
                size="large"
                sx={{ 
                  color: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': { 
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                    transform: 'scale(1.1)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <LinkedIn />
              </IconButton>
            </Box>
            <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', mb: 3 }} />
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
              © 2025 Bakari Kerr
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;





/*import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Junia Celestin</h1>
        <p>Computer Science Student | Web Developer | Problem Solver</p>
      </header>

      <main className="main-content">
        <section className="about" id="about">
          <h2>About Me</h2>
          <p>
            Hello! I am student studying Computer Science at The University of Florida.
            I'm passionate about creating web applications that solve real-world 
            problems. In my free time, I enjoy hiking, reading sci-fi novels, 
            and contributing to open-source projects.
          </p>
        </section>

        <section className="projects" id="projects">
          <h2>Projects</h2>
          <div className="project-item">
            <h3>Weather Dashboard</h3>
            <p>
              A React application that displays real-time weather data for 
              multiple cities. Uses OpenWeather API and includes 5-day forecasts.
            </p>
          </div>
          <div className="project-item">
            <h3>Task Manager</h3>
            <p>
              A full-stack to-do list application built with React and Node.js. 
              Features include user authentication and cloud storage.
            </p>
          </div>
        </section>

        <section className="experience" id="experience">
          <h2>Experience</h2>
          <div className="experience-item">
            <h3>Software Engineering Intern</h3>
            <p className="company">Tech Company Inc. | Summer 2024</p>
            <p>
              Developed new features for the company's web platform using React 
              and Python. Collaborated with a team of 5 engineers using Agile methodology.
            </p>
          </div>
          <div className="experience-item">
            <h3>Teaching Assistant</h3>
            <p className="company">State University | Fall 2023 - Present</p>
            <p>
              Assist in teaching Introduction to Programming. Hold office hours 
              and grade assignments for a class of 50 students.
            </p>
          </div>
        </section>

        <section className="involvement" id="involvement">
          <h2>Involvement</h2>
          <div className="involvement-item">
            <h3>President, Computer Science Club</h3>
            <p>
              Lead a team organizing workshops and hackathons. Grew membership 
              from 20 to 80 students in one year.
            </p>
          </div>
          <div className="involvement-item">
            <h3>Volunteer, Code for Good</h3>
            <p>
              Teach basic programming to high school students from underserved 
              communities. Dedicate 4 hours per week.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Jane Doe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;*/