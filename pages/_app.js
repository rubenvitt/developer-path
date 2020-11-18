import React from 'react';
import '../styles/index.css';
import { Container } from '../components/pages/container.component';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
    return (
        <>
            <Container>
                <Component {...pageProps} />
            </Container>
        </>
    );
}

export default MyApp;
