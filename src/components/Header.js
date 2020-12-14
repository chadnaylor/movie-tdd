import React from "react";
import styled from "styled-components";

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const NavStyled = styled.nav`
  display: flex;
  align-items: center;
`;

const SpanStyled = styled.span`
  font-size: 1.5em;
  color: white;
  padding: 10px;
`;

const HomeLink = styled(Link)`
  margin-left: 15px;
  text-decoration: none;
  color: white;
`;

const LoginLink = styled(Link)`
  margin-left: 15px;
  text-decoration: none;
  color: #aaaaaa;
`;

const HeaderStyled = styled.header`
  background-color: #444444;
`;

const SearchStyled = styled.form`
  display: flex;
  justify-content: flex-end;
  align-content: stretch;
  flex-grow: 1;
`;

const SearchButton = styled.button`
  background-color: #424242;
  color: #caaf16;
  border-color: #caaf16;
  border-radius: 8px;
  border-width: 1px;
  padding: 5px;
  margin-right: 10px;
  margin-left: 10px;
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HeaderStyled>
        <NavStyled>
          <SpanStyled>GMDB</SpanStyled>
          <HomeLink to="/">Home</HomeLink>
          <LoginLink to="/Login">Login</LoginLink>
          <SearchStyled>
            <input type="search" id="searchText" />
            <SearchButton type="button" id="searchButton">
              Search
            </SearchButton>
          </SearchStyled>
        </NavStyled>
      </HeaderStyled>
    );
  }
}
