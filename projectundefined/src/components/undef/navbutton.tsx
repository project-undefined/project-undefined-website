import { QRL, component$ } from "@builder.io/qwik";

interface NavButtonProps {
    text?: string;
    onClick$?: QRL<()=>void>; 
}
export const NavButton = component$<NavButtonProps>((props)=> {
    return (
        <button onClick$={props.onClick$} class="nav-button">
            <div/>
            {props.text}
        </button>
    );
});