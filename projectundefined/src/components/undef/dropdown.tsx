import { $, component$, Slot } from '@builder.io/qwik';
import { NavButton } from './navbutton';

interface NavButtonProps { 
    text?: string;
}

export const DropDown = component$<NavButtonProps>((props)=>{
    return (
        <span class="drop-down">
            <NavButton text={props.text}/>
            
        </span>
    );
});