import { Container, Typography, Button, Box } from '@mui/material';

const Landing = () => {
    return (
        <Box
            className="main-banner"
            sx={{
                backgroundColor: '#333',
                backgroundImage: 'url(/banner-bg.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                padding: { xs: '170px 0px 270px 0px' }, // Removed sm breakpoint
                textAlign: 'center',
                margin: '0px -8px 10px',
                height: '375px;',
                display:'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Container>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: '20px',
                            color: '#ffffff',
                            textTransform: 'uppercase',
                            fontWeight: 700,
                            letterSpacing: '2.5px',
                        }}
                    >
                        We Provide Everything
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            color: '#ffffff',
                            fontSize: '50px',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            marginTop: '15px',
                            marginBottom: '25px',
                        }}
                    >
                        <em style={{ fontStyle: 'normal', color: '#ff565b' }}>Interior</em> Designer
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#ffffff',
                            color: '#ff565b',
                            '&:hover': {
                                backgroundColor: '#ff565b',
                                color: '#fff',
                                transition :"linear"
                            },
                        }}
                    >
                        Discover More
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Landing;