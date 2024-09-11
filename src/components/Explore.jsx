import { Container, Grid, Typography, Box} from '@mui/material';

const Explore = () => {
  return (
    <section className="explore-item">
      <Container maxWidth="lg" sx={{ marginTop: "85px" , marginBottom:"85px"}}>
        <Grid container spacing={4} sx={{ position: "relative" }}>
          <Grid item xs={12} >
            <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: "center" }}>
              Minimalistic Design for 2 Bedrooms
            </Typography>
            <Box component="img" src="explore-item-01.jpg" alt="master bedroom design" width="100%" />
            <Box sx={{ display:"flex" , justifyContent:"center" , alignItems:"center"}}>
              <Grid item xs={12} sx={{  width :"85%" , zIndex: "55" , padding:"35px 5px" , background: "white" , boxShadow:"1px 0px 18px black"}}>
                <Grid container spacing={2}>
                  {[
                    { label: 'Architect', value: 'Catherine Rose' },
                    { label: 'Client', value: 'TemplateMo' },
                    { label: 'Terms', value: '6-12 Months' },
                    { label: 'Project Type', value: 'Interior Design' },
                    { label: 'Strategy', value: 'Clean & Minimal' },
                    { label: 'Date', value: 'January 22, 2022' },
                  ].map((item, index) => (
                    <Grid item xs={12} sm={6} md={2} key={index} sx={{textAlign:"center"}}>
                      <Typography variant="subtitle2" component="h6">
                        {item.label}:
                      </Typography>
                      <Typography variant="body2">{item.value}</Typography>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Box>

          </Grid>

   
        </Grid>
      </Container>
    </section>
  );
};

export default Explore;
