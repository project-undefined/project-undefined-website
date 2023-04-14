import { component$, Slot } from '@builder.io/qwik';
import "../../styling/index.scss";


export const NavBar = component$(()=> {
    return (
        <nav class="nav-bar">
            <button>About</button>
            <button>Products</button>
            <button>Community</button>
            <button>Roadmap</button>
            <button>Github</button>
        </nav>
    )
});