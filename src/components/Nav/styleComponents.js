import styled from "styled-components";

export const NavContainer = styled.div`
width: 100%;

`
export const NavOptions = styled.h4``

export const NavLargeDevices = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
padding: 10px;
width: 100%;
@media (max-width: 768px){
    display: none;
}
`

export const NavSmallDevices = styled.div`
@media (min-width: 768px){
    display: none;
}
`

export const MenuButton = styled.button`
font-size: 1.5rem;
border: none;
background-color: transparent;

`

export const NavSideBar = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`