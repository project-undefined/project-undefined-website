import { component$, Slot } from '@builder.io/qwik';
import "../../styling/navbar.scss";


export const NavBar = component$(()=> {
    return (
        <nav class="nav-bar">
            <img src="../../../public/favicon.svg" width="20" height="20"></img>
            <button>About</button>
            <button>Solutions</button>
            <button>Community</button>
            <button>Roadmap</button>
            <button>Merchandise</button>
            <button>Github</button>
        </nav>
    )
});