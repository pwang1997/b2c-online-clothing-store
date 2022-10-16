import "./Links.css";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
function Copyright() {
  return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/pwang1997/b2c-online-clothing-store">
          B2C Online Clothing Store
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
  );
}

export default function Footer() {

  return (
      <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            <div className="container">
              <a href="https://www.tiktok.com/@julia.hsiao/video/7151188309828472070?is_copy_url=1&is_from_webapp=v1&q=zara&t=1665950520525">
                <MusicNoteIcon color="primary" fontSize="large" />
                tiktok
              </a>

              <a href="https://www.instagram.com/zara/">
                <InstagramIcon color="primary" fontSize="large" />
                instagram
              </a>

              <a href="https://twitter.com/ZARA/">
                <TwitterIcon color="primary" fontSize="large"/>
                twitter
              </a>

              <a href="https://www.youtube.com/watch?v=77aAsADzC0s">
                <YouTubeIcon color="primary" fontSize="large" />
                youtube
              </a>
            </div>
          </Typography>
          <Copyright />
        </Container>
      </Box>
  );
}