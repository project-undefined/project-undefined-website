import { $, component$, Slot } from '@builder.io/qwik';
import { NavButton } from './navbutton';
import "../../styling/dropdown.scss";

interface NavButtonProps { 
    text?: string;
}

export const DropDown = component$<NavButtonProps>((props)=>{
    return (
        <span class="drop-down">
            
            <NavButton text={props.text}/>
            <div class="drop-down-after"/>
            
            
        </span>
    );
});