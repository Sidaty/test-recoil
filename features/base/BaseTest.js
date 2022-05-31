import {useFontSizeLabelState, useFontSizeState} from "./base.test.state";
import {Box, Button, styled, Typography} from "@mui/material";

function BaseTest() {
    return (
        <Box style={{paddingLeft: 20}}>
            <Typography variant={"h1"}>Test Recoil</Typography>
            <FontSizeText/>
            <FontSizeLabel/>
            <FontSizeButton/>
        </Box>
    );
}

export default BaseTest;

const ButtonStyled = styled(Button)(({theme}) => {
    return {
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(1),
        // backgroundColor: "red",
        // ":hover": {
        //     backgroundColor: "#CC1111",
        // }
    }
})

function FontSizeButton() {
    const {increment, decrement} = useFontSizeState();

    return (
        <>
            <ButtonStyled color={"success"} variant={"contained"} onClick={increment}>Augmenter la taille</ButtonStyled>
            <ButtonStyled color={"success"} variant={"contained"} onClick={decrement}>Diminuer la taille</ButtonStyled>
        </>
    )
}

function FontSizeText() {
    const {fontSize} = useFontSizeState();

    return (
        <>
            <Typography fontSize={fontSize}>Bonjour</Typography>
        </>
    )
}

function FontSizeLabel() {

    const {fontSizeLabel} = useFontSizeLabelState();

    return (
        <>
            <Typography>Font Size: {fontSizeLabel}</Typography>
        </>
    )
}
