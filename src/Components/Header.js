import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import routes from '../constants/routes.json'

const Header = () => {

  return (
    <HeaderWrapper>
      <Container>
        <Link to={routes.HOME}>
          <Logo>FakeSwiggy</Logo>
        </Link>
        <Navbar>
          <NavbarLink to={routes.HOME}>Home</NavbarLink>
          <NavbarLink to={routes.CONTACT}>Contact</NavbarLink>
        </Navbar>
      </Container>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.light};
  // box-shadow: 0 5px 10px -2px #888;
  width:100%;
  top:0;
  position:fixed;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.widths.content};
  margin: 0 auto;
  padding: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4rem;
  }
`

const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.swiggy};
  font-size: 5rem;
  font-family:ProximaNova,arial,Helvetica Neue,sans-serif
`

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 7rem;
  font-size: 2rem;

  @media (max-width: 480px) {
    gap: 0;
    width: 100%;
  }
`

const NavbarLink = styled(Link)`
  padding: 1rem;
  color: ${({ theme }) => theme.colors.dark};
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`

const ButtonContainer = styled.div`
  position: relative;
  cursor: pointer;
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1.02);
  }
`

const Quantity = styled.div`
  position: absolute;
  top: 4rem;
  right: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.red};
  font-size: 2rem;
  font-weight: bold;
`

export default Header
