import React, { useState } from 'react'
import { IoMenuSharp } from "react-icons/io5";
import { NavContainer, NavOptions, NavLargeDevices, NavSmallDevices, MenuButton, NavSideBar } from './styleComponents'
export default function Nav() {
    const [showMenu, setShowMenu] = useState(false);
    const handleMenu = () => {
        setShowMenu(!showMenu);
    }
    return (
        <NavContainer>
            <NavLargeDevices>
                <NavOptions>LOGO</NavOptions>
                <NavOptions>Home</NavOptions>
                <NavOptions>Quiz</NavOptions>
                <NavOptions>Result</NavOptions>
            </NavLargeDevices>
            <NavSmallDevices>
                <MenuButton onClick={handleMenu}  >
                    <IoMenuSharp />
                </MenuButton>
                {showMenu && <NavSideBar>
                    <NavOptions>LOGO</NavOptions>
                    <NavOptions>Home</NavOptions>
                    <NavOptions>Quiz</NavOptions>
                    <NavOptions>Result</NavOptions>
                </NavSideBar>}
            </NavSmallDevices>
        </NavContainer>
    )
}
