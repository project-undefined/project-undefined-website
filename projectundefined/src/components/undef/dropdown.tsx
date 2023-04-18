import { $, component$, Slot } from '@builder.io/qwik';
import { NavButton } from './navbutton';
import "../../styling/dropdown.scss";

interface NavButtonProps { 
    text?: string;
}

export const DropDown = component$<NavButtonProps>((props)=>{
    return (
        <button class="drop-down">
             <div/>
             {props.text}
        </button>
    );
});