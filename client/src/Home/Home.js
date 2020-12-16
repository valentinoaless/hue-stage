import React from 'react';
import styled, { keyframes } from 'styled-components';
import Nav from '../Nav/Nav';

let Landing = styled.div`
    color: white;
`

let Page = styled.div``

const Home = () => {
    return (
        <Page>
            <Nav home={true}/>
            <Landing>
            </Landing>
        </Page>
    );
};

export default Home;
