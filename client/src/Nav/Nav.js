import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = (props) => {

    return (
        <Navbar home={props.home}>
            <Link to="/about">about</Link>
            <Link to="/tutorials">tutorials</Link>
            <Link to="/community">community</Link>
            <Link to="/auth/login"><Login>log in</Login></Link>
            <Link to="/auth/signup"><Signup>sign up</Signup></Link>
        </Navbar>
    );
};

export default Nav;


let navbarAnimation = keyframes`
    0% {top: -80px;}
    50% {top: -80px;}
    100% {top: 0px;}
`

let Navbar = styled.div`
    position: fixed;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    font-weight: 500;
    animation-name: ${props => props.home? navbarAnimation : ''};
    animation-duration: 2s;
    animation-iteration-count: 1;
    & > * {
        margin: 10px 5px;
        padding: 10px;
        color: white;
        text-decoration: none;
        &:hover {
            color: #bbb;
        }
    }
`
let Login = styled.div`
    background-color: white;
    border-radius: 10px;
    color: #6e6e6e;
    padding: 10px;
    &:hover {
        background-color: #ddd;
    }
    
`

let Signup = styled.div`
    border-radius: 10px;
    background-color: deeppink;
    color: white;
    padding: 10px;
    &:hover {
        background-color: darkmagenta;
    }
`

