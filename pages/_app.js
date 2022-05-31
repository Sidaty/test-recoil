import '../styles/globals.css';
import {RecoilRoot} from 'recoil';
import AppHeader from "../features/commons/components/AppHeader";
import {Container} from "@mui/material";

function MyApp({Component, pageProps}) {
    return (
        <RecoilRoot>
            <AppHeader/>
            <Container maxWidth={"lg"}>
                <Component {...pageProps} />
            </Container>
        </RecoilRoot>
    )
}

export default MyApp
