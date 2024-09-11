import { Container, Grid, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';

const CallToActionContainer = styled(Container)(({ theme }) => ({
  backgroundColor: '#2a2a2a',
  marginTop: theme.spacing(15),
  padding: theme.spacing(6, 0),
  borderRadius: theme.spacing(1),
}));

const CallToActionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 700,
  textTransform: 'uppercase',
  color: '#ffffff',
  textAlign: 'center',
  marginBottom: theme.spacing(2.5),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    marginBottom: 0,
    fontSize: '35px',
  },
}));

const WhiteButton = styled(Button)(() => ({
  color: '#2a2a2a',
  backgroundColor: '#ffffff',
  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
}));

const CallToAction = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <CallToActionContainer maxWidth="lg">
      <Grid container alignItems="center">
        <Grid item xs={12} md={8}>
          <CallToActionTitle variant="h2">Looking to Work On A Project ?</CallToActionTitle>
        </Grid>
        <Grid item xs={12} md={4} container justifyContent={isMdUp ? 'flex-end' : 'center'}>
          <WhiteButton variant="contained" href="#">Contact Us Now</WhiteButton>
        </Grid>
      </Grid>
    </CallToActionContainer>
  );
};

export default CallToAction;