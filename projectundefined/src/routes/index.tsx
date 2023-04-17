import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';


export default component$(() => {
  return (
    <div>
      <div id="banner">
        <h1 id="title">Engineering the future of <br/></h1>
      </div>

      <body>
        <div>
          <h2>Ditch big tech.</h2>

        </div>
          
        <div>
          <h2>Stay Green</h2>

        </div>

        <div>
          <h2>Protect your data</h2>
          
        </div>


      </body>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Project Undefined',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
