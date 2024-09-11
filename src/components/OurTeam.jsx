import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Grid } from '@mui/material';



export default function OurTeam() {



    return (

        <Grid container columns={12} spacing={3} sx={{ marginTop: "15px" }}>

            <Grid item xs={12} md={12} lg={12} sx={{ textAlign: "center" }}>
                <Typography variant="h3" href="" component="h3">  Meet Our Team  </Typography>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
                <Card sx={{ padding: "5px", margin: "5px" }}>
                    <CardMedia
                        component="img"
                        height="320"
                        image="/cat1.png"
                        alt="Paella dish"
                    />
                    <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography
                            variant="body2"
                            color="#ac3b61"
                            sx={{
                                fontSize: "23px",
                                textAlign: "center",
                                flex: 1
                            }}
                        >
                            يعقوب قمر الدين دبياز
                        </Typography>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon sx={{ color: 'red' }} />
                        </IconButton>
                    </CardContent>


                </Card>
            </Grid>



            <Grid item xs={12} md={4} lg={3}>
                <Card sx={{ padding: "5px", margin: "5px" }}>
                    <CardMedia
                        component="img"
                        height="320"
                        image="/KINKALOW2.jpg"
                        alt="Paella dish"
                    />
                    <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography
                            variant="body2"
                            color="#ac3b61"
                            sx={{
                                fontSize: "23px",
                                textAlign: "center",
                                flex: 1
                            }}
                        >
                            خالد قشميري
                        </Typography>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon sx={{ color: 'red' }} />
                        </IconButton>
                    </CardContent>


                </Card>
            </Grid>

            <Grid item xs={12} md={4} lg={3}>
                <Card sx={{ padding: "5px", margin: "5px" }}>
                    <CardMedia
                        component="img"
                        height="320"
                        image="cat8.jpg"
                        alt="Paella dish"
                    />
                    <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography
                            variant="body2"
                            color="#ac3b61"
                            sx={{
                                fontSize: "23px",
                                textAlign: "center",
                                flex: 1
                            }}
                        >
                            خضر كراويته
                        </Typography>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon sx={{ color: 'red' }} />
                        </IconButton>
                    </CardContent>


                </Card>
            </Grid>

            <Grid item xs={12} md={4} lg={3}>
                <Card sx={{ padding: "5px", margin: "5px" }}>
                    <CardMedia
                        component="img"
                        height="320"
                        image="Persian1.jpg"
                        alt="Paella dish"
                    />
                    <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography
                            variant="body2"
                            color="#ac3b61"
                            sx={{
                                fontSize: "23px",
                                textAlign: "center",
                                flex: 1
                            }}
                        >
                            محمد سمبل
                        </Typography>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon sx={{ color: 'red' }} />
                        </IconButton>
                    </CardContent>


                </Card>
            </Grid>

        </Grid>


    );
}