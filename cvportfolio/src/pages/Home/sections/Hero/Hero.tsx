import { Box, Container, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import EmailIcon from '@mui/icons-material/Email';
import Grid from '@mui/material/Grid2';
import StyledButton from "../../../../componentes/StyledButton/StyledButton";
import theme from "../../../../theme";
import { AnimatedBackground } from "../../../../componentes/AnimatedBackground/AnimatedBackground";


function Hero() {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
    }));

    const StyledImg = styled("img")(() => ({
        width: "80%",
        borderRadius: "10%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }));

    return (
        <StyledHero>
            <Container>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Box position={"relative"}>
                            <Box position="absolute" width={"150%"} top={-100} right={0}>
                                <AnimatedBackground />
                            </Box>
                            <Box position="relative" textAlign="center">
                                <StyledImg src={Avatar} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }}>

                        <Typography color="secondary" variant="h1" textAlign="center">Júlia Lopes Carvalho</Typography>
                        <Typography color="secondary" variant="h2" textAlign="center">I'm a Librarian | Information Specialist | Front-end Developer</Typography>
                        <Grid container display={"flex"} justifyContent={"center"} spacing={3}>
                            <Grid size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"}>
                                <StyledButton>
                                    <FileDownloadIcon />
                                    <Typography>
                                        Download CV
                                    </Typography>
                                </StyledButton>
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"}>
                                <StyledButton>
                                    <EmailIcon />
                                    <Typography>
                                        Contact me
                                    </Typography>
                                </StyledButton>
                            </Grid>
                        </Grid>



                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
    );
}

export default Hero
