import { component$, Slot } from '@builder.io/qwik';
import "../../styling/navbar.scss";


export const NavBar = component$(()=> {
    return (
        <nav class="nav-bar">
            <img src="../../../public/favicon.svg" width="20" height="20"></img>
            <button><div/>About</button>
            <button><div/>Solutions</button>
            <button><div/>Community</button>
            <button><div/>Roadmap</button>
            <button><div/>Merchandise</button>
            <button><div/>Github</button>
        </nav>
    )
});