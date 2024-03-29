import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from "../logo.png";
import {ButtonContainer} from './Button';
import styled from "styled-components";
class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
            <Link to="/">
                <img src={logo} alt="Store" className="navbar-brand"/><p className="navbar-text nav-link font-weight-bolder mx-auto pl-0 ">STORE</p>
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                        Ürünler
                    </Link>
                </li>
                <li className="nav-item ml-5">
                    <Link to="/aboutus" className="nav-link">
                        hakkımızda
                    </Link>
                </li>
            </ul>
            <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2">
                        <i className="fas fa-cart-plus"></i>
                    </span>
                    Sepetim
                </ButtonContainer>
            </Link>
            </NavWrapper>
        );
    }
}

export default Navbar;
const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color: var(--mainWhite) !important ;
    font-size: 1.3rem;
    text-transform: capitalize;
}
`;