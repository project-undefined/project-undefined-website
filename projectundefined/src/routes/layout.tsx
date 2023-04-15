import { component$, useSignal, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { NavBar } from '~/components/undef/navbar';
import Routes from '.';



export default component$(() => {
  
  return (
    <div class="page">
     <NavBar />
     <Routes/>
    </div>
  );
});
