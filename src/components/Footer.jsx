import { Container, Grid, Typography, Link, TextField, Button, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';

const FooterContainer = styled('footer')(({ theme }) => ({
  marginTop: theme.spacing(10),
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    marginTop: theme.spacing(15),
  },
}));

const FooterWidget = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(6),
}));

const FooterLogo = styled('img')(({ theme }) => ({
  maxWidth: '273px',
  marginBottom: theme.spacing(6),
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  fontSize: '17px',
  fontWeight: 700,
  textTransform: 'capitalize',
  color: '#2a2a2a',
  marginBottom: theme.spacing(4),
  marginTop: theme.spacing(6),
  [theme.breakpoints.up('md')]: {
    marginTop: 0,
  },
}));

const FooterInfoList = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  padding: 0,
  margin: 0,
}));

const FooterInfoItem = styled('li')(({ theme }) => ({
  display: 'block',
  marginBottom: theme.spacing(2.5),
}));

const FooterInfoLink = styled(Link)(({ theme }) => ({
  fontSize: '15px',
  color: '#7a7a7a',
  transition: 'all 0.5s',
  '&:hover': {
    color: '#ff565b',
  },
}));

const FooterSocialLink = styled(Link)(({ theme }) => ({
  fontSize: '15px',
  color: '#7a7a7a',
  transition: 'all 0.5s',
  display: 'flex',
  alignItems: 'center',
  '& svg': {
    marginRight: theme.spacing(0.5),
  },
  '&:hover': {
    color: '#ff565b',
  },
}));

const FooterSubscribeForm = styled('form')(({ theme }) => ({
  position: 'relative',
  marginBottom: 0,
}));

const FooterSubscribeInput = styled(TextField)(({ theme }) => ({
  width: '100%',
  borderBottom: '1px solid #eeeeee',
  boxShadow: 'none',
  borderTop: 'none',
  borderLeft: 'none',
  borderRight: 'none',
  fontSize: '14px',
  height: '40px',
  position: 'relative',
  padding: '0px 10px',
}));

const FooterSubscribeButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  right: '10px',
  top: '10px',
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: '14px',
  color: '#7a7a7a',
  transition: 'all 0.5s',
  '&:hover': {
    color: '#ff565b',
  },
}));

const SubFooter = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(6),
  paddingBottom: theme.spacing(2.5),
}));

const SubFooterLink = styled(Link)(({ theme }) => ({
  color: '#ff565b',
}));

const ScrollToTopLink = styled(Link)(({ theme }) => ({
  textAlign: 'center',
  width: '100%',
  display: 'inline-block',
  fontSize: '15px',
  color: '#ff565b',
  transition: 'all 0.5s',
  [theme.breakpoints.up('md')]: {
    textAlign: 'right',
    color: '#7a7a7a',
  },
  '& svg': {
    marginLeft: theme.spacing(0.5),
  },
  '&:hover': {
    color: '#ff565b',
  },
}));

const Footer = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <FooterWidget>
              <FooterLogo src="footer-logo.png" alt="designer template by TemplateMo" />
              <Typography variant="body1">
                Designer is free Bootstrap v5.1.3 CSS template. Everyone can download the best HTML CSS templates from TemplateMo website.
              </Typography>
            </FooterWidget>
          </Grid>
          <Grid item xs={12} md={2} sx={{ marginLeft: isMdUp ? 'auto' : 0 }}>
            <FooterWidget>
              <FooterTitle variant="h4">Our Location</FooterTitle>
              <Typography variant="body1">
                Sunny Isles Beach, <br /><br />
                Florida 33160, <br />
                United States
              </Typography>
            </FooterWidget>
          </Grid>
          <Grid item xs={12} md={2}>
            <FooterWidget>
              <FooterTitle variant="h4">Customer Care</FooterTitle>
              <FooterInfoList>
                <FooterInfoItem>
                  <FooterInfoLink href="#">010-020-0340</FooterInfoLink>
                </FooterInfoItem>
                <FooterInfoItem>
                  <FooterInfoLink href="#">090-080-0760</FooterInfoLink>
                </FooterInfoItem>
                <FooterInfoItem>
                  <FooterInfoLink href="#">info@company.com</FooterInfoLink>
                </FooterInfoItem>
              </FooterInfoList>
            </FooterWidget>
          </Grid>
          <Grid item xs={12} md={2}>
            <FooterWidget>
              <FooterTitle variant="h4">Follow Us</FooterTitle>
              <FooterInfoList>
                <FooterInfoItem>
                  <FooterSocialLink href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                    Facebook
                  </FooterSocialLink>
                </FooterInfoItem>
                <FooterInfoItem>
                  <FooterSocialLink href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                    Twitter
                  </FooterSocialLink>
                </FooterInfoItem>
                <FooterInfoItem>
                  <FooterSocialLink href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                    Linkedin
                  </FooterSocialLink>
                </FooterInfoItem>
              </FooterInfoList>
            </FooterWidget>
          </Grid>
          <Grid item xs={12} md={6} sx={{ marginLeft: isMdUp ? 'auto' : 0 }}>
            <FooterTitle variant="h4">Subscribe To Our Newsletter</FooterTitle>
            <FooterSubscribeForm id="subscribe" action="" method="get">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FooterSubscribeInput
                    name="email"
                    type="text"
                    id="email"
                    placeholder="Type your email..."
                    required
                  />

                </Grid>
              </Grid>
            </FooterSubscribeForm>
          </Grid>
          <Grid item xs={12}>
            <SubFooter>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography variant="body2">
                    Copyright © 2022 Designer Co., Ltd. All Rights Reserved.
                    <br />
                    Design: <SubFooterLink rel="sponsored" href="https://templatemo.com" target="_blank">TemplateMo</SubFooterLink>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <ScrollToTopLink href="#top">
                    Go to Top
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-bar-up" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z" />
                    </svg>
                  </ScrollToTopLink>
                </Grid>
              </Grid>
            </SubFooter>
          </Grid>
        </Grid>
      </Container>
    </FooterContainer>
  );
};

export default Footer;