import { $, component$, Slot } from '@builder.io/qwik';
import "../../styling/navbar.scss";
import "../../styling/navbutton.scss";
import { DropDown } from './dropdown';
import { NavButton } from './navbutton';

export const NavBar = component$(()=> {

    const toGithub = $(()=>{
        window.location.href = "https://github.com/project-undefined";
    })
    return (
        <nav class="nav-bar">
            <a href="/">
                <img src="../../../public/favicon.svg" width="40" height="40"></img>
            </a>
            <NavButton text='About'    /> 
            <DropDown text='Solutions' />
            <DropDown text='Community'/>
            <NavButton text='Roadmap'  />
            <NavButton text='Merchandise' />
            <NavButton onClick$={toGithub} text='Github' />
        </nav>
    )
});