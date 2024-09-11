import { Container, Grid, TextField, Select, MenuItem, FormControl, InputLabel, Button, Box } from '@mui/material';

const SearchForm = () => {
    return (
        <Box className="search-form" sx={{ marginTop: '-90px', backgroundColor: 'white', boxShadow: " 2px 0px 7px 3px #dfdbdb", borderRadius: "7px" }}>
            <Container>
                <Grid container spacing={3} sx={{paddingTop:"55px"}}>
                    <Grid item xs={12}>
                        <form id="search-form" name="gs" method="submit" role="search" action="#">
                            <Grid container spacing={3}>
                                <Grid item lg={3} xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel htmlFor="searchTitle">Search Work by Title</InputLabel>
                                        <TextField id="searchTitle" name="searchTitle" variant="outlined" fullWidth />
                                    </FormControl>
                                </Grid>
                                <Grid item lg={3} xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel id="chooseCategoryLabel">Choose Category</InputLabel>
                                        <Select labelId="chooseCategoryLabel" id="chooseCategory" name="Category" label="Choose Category" fullWidth>
                                            <MenuItem value="">Choose category</MenuItem>
                                            <MenuItem value="Interior Design">Interior Design</MenuItem>
                                            <MenuItem value="Exterior Design">Exterior Design</MenuItem>
                                            <MenuItem value="New Ideas">New Ideas</MenuItem>
                                            <MenuItem value="Trendy Design">Trendy Design</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item lg={3} xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel id="choosePriceLabel">Price Range</InputLabel>
                                        <Select labelId="choosePriceLabel" id="choosePrice" name="Price" label="Price Range" fullWidth>
                                            <MenuItem value="">Choose price</MenuItem>
                                            <MenuItem value="$100 - $250">$100 - $250</MenuItem>
                                            <MenuItem value="$250 - $500">$250 - $500</MenuItem>
                                            <MenuItem value="$500 - $1000">$500 - $1000</MenuItem>
                                            <MenuItem value="$1000+">$1000+</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item lg={3} xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel id="choosePlanLabel">Pick a Plan</InputLabel>
                                        <Select labelId="choosePlanLabel" id="choosePlan" name="Plan" label="Pick a Plan" fullWidth>
                                            <MenuItem value="">Choose plan</MenuItem>
                                            <MenuItem value="Standard">Standard</MenuItem>
                                            <MenuItem value="Professional">Professional</MenuItem>
                                            <MenuItem value="Golden">Golden</MenuItem>
                                            <MenuItem value="Premium">Premium</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sx={{ padding: '55px 15px' }}>
                                    <FormControl fullWidth>
                                        <Button variant="contained" sx={{
                                            backgroundColor: 'rgb(255, 86, 91)',
                                            '&:hover': {
                                                backgroundColor: 'white',
                                                color: 'rgb(255, 86, 91)',
                                                transition: "linear"
                                            },
                                        }} type="submit">Search Now</Button>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default SearchForm;