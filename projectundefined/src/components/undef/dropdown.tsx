import { $, component$, Slot, useSignal } from '@builder.io/qwik';
import { NavButton } from './navbutton';
import "../../styling/dropdown.scss";

interface NavButtonProps { 
    text?: string;
    content?: string[];
}

export const DropDown = component$<NavButtonProps>((props)=>{
    const _content = useSignal(props.content?.concat());
   
    return (
        <button class="drop-down">
             <div>
                {_content}
             </div>
             {props.text}
            
             
             
        </button>
    );
});