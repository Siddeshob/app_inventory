import { Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Paper, Slide } from "@mui/material";
import react, { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';


const Home = () => {



    const [dialogOpen, setDialogOpen] = useState(false);
    return (

        <>
            <Carousel>
                <Carousel.Item>
                    <img src="image1.png" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="image2.png" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="image3.png" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Dialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Alert
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Please run the .exe file in the downloads folder
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDialogOpen(false)}>OK</Button>
                </DialogActions>
            </Dialog>
            <Grid container spacing={2} style={{ marginTop: "2vh", marginLeft: "18vh" }} xs={10}>
                <Grid item xs={3}>
                    <Card>
                        <div style={{ width: "100%", height: "80%" }}>
                            <img src="./image6.png" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                        </div>
                        <div>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Link to="/appDescription" state={{ desc: "This is vr application" }}><Button>VIEW</Button></Link>
                                </Grid>
                                <Grid item xs={6}>
                                    <a href="main.exe" download="ColorCheck.exe">
                                        <Button onClick={() => setDialogOpen(true)}>DOWNLOAD</Button>
                                    </a>
                                </Grid>
                            </Grid>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card>
                        <div style={{ width: "100%", height: "80%" }}>
                            <img src="./object_placement.png" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                        </div>
                        <div>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Link to="/appDescription" state={{ desc: "This is AR application" }}><Button>VIEW</Button></Link>
                                </Grid>
                                <Grid item xs={6}>
                                    <a href="main.exe" download="ColorCheck.exe">
                                        <Button onClick={() => setDialogOpen(true)}>DOWNLOAD</Button>
                                    </a>
                                </Grid>
                            </Grid>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card>
                        <div style={{ width: "100%", height: "80%" }}>
                            <img src="./pwc.png" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                        </div>
                        <div>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Link to="/appDescription"><Button>VIEW</Button></Link>
                                </Grid>
                                <Grid item xs={6}>
                                    <a href="main.exe" download="ColorCheck.exe">
                                        <Button onClick={() => setDialogOpen(true)}>DOWNLOAD</Button>
                                    </a>
                                </Grid>
                            </Grid>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card>
                        <div style={{ width: "100%", height: "80%" }}>
                            <img src="./xaudio.png" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                        </div>
                        <div>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Link to="/appDescription"><Button>VIEW</Button></Link>
                                </Grid>
                                <Grid item xs={6}>
                                    <a href="main.exe" download="ColorCheck.exe">
                                        <Button onClick={() => setDialogOpen(true)}>DOWNLOAD</Button>
                                    </a>
                                </Grid>
                            </Grid>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card>
                        <div style={{ width: "100%", height: "80%" }}>
                            <img src="./xavatar.png" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                        </div>
                        <div>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Link to="/appDescription"><Button>VIEW</Button></Link>
                                </Grid>
                                <Grid item xs={6}>
                                    <a href="main.exe" download="ColorCheck.exe">
                                        <Button onClick={() => setDialogOpen(true)}>DOWNLOAD</Button>
                                    </a>
                                </Grid>
                            </Grid>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card>
                        <div style={{ width: "100%", height: "80%" }}>
                            <img src="./xpresent.png" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                        </div>
                        <div>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Link to="/appDescription"><Button>VIEW</Button></Link>
                                </Grid>
                                <Grid item xs={6}>
                                    <a href="main.exe" download="ColorCheck.exe">
                                        <Button onClick={() => setDialogOpen(true)}>DOWNLOAD</Button>
                                    </a>
                                </Grid>
                            </Grid>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card>
                        <div style={{ width: "100%", height: "80%" }}>
                            <img src="./xreailty.png" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                        </div>
                        <div>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Link to="/appDescription"><Button>VIEW</Button></Link>
                                </Grid>
                                <Grid item xs={6}>
                                    <a href="main.exe" download="ColorCheck.exe">
                                        <Button onClick={() => setDialogOpen(true)}>DOWNLOAD</Button>
                                    </a>
                                </Grid>
                            </Grid>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card>
                        <div style={{ width: "100%", height: "80%" }}>
                            <img src="./xpresent.png" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                        </div>
                        <div>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Link to="/appDescription"><Button>VIEW</Button></Link>
                                </Grid>
                                <Grid item xs={6}>
                                    <a href="main.exe" download="ColorCheck.exe">
                                        <Button onClick={() => setDialogOpen(true)}>DOWNLOAD</Button>
                                    </a>
                                </Grid>
                            </Grid>
                        </div>
                    </Card>
                </Grid>
            </Grid></>
    );

}


export default Home;