import { Container, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import Grid from '@mui/material/Grid';

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "black"
    }))

    const StyledImg = styled("img")(() => ({
        width: "30%",
        borderRadius: "50%"
    }))


    return (
        <StyledHero>

            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={4} >
                        <StyledImg src={Avatar} />
                    </Grid>
                    <Grid item xs={8} >
                    <Typography color="primary">Júlia Lopes Carvalho</Typography>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
    )
}

export default Hero
