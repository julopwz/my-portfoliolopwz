import { Button, Container, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import EmailIcon from '@mui/icons-material/Email';
import Grid from '@mui/material/Grid2';


const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        height: "100vh"
    }))

    const StyledImg = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%"
    }))

    return (
        <StyledHero>
            <Container>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 4 }} >
                    <StyledImg src={Avatar} />
                    </Grid>
                    <Grid size={{ xs: 12, md: 8 }}>
            
                    <Typography color="primary" variant="h1" textAlign="center">Júlia Lopes Carvalho</Typography>
                        <Typography color="primary" variant="h2" textAlign="center">I'm a Librarian | Information Specialist | Front-end Developer</Typography>
                        <Button>
                            <FileDownloadIcon />
                            Download CV</Button>
                        <Button>
                            <EmailIcon />
                            Contact me</Button>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
    )
}

export default Hero
