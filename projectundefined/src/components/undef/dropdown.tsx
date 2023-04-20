import { $, component$, Slot, useSignal } from '@builder.io/qwik';
import { NavButton } from './navbutton';
import "../../styling/dropdown.scss";

interface NavButtonProps { 
    text?: string;
    content?: string[];
}

export const DropDown = component$<NavButtonProps>((props)=>{
   
    
    return (
        <button class="drop-down">
             <div class="dd-child">
                
                {
                    props.content?.map((v, i)=>(
                        <div key={v}>
                            {v}
                        </div>
                    ))
                }
             </div>
             {props.text}
            
             
             
        </button>
    );
});