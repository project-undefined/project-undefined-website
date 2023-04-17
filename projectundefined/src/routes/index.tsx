import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import "../styling/index.scss";

export default component$(() => {
  return (
    <div>
      <div id="banner">
        <h1 id="title">Engineering the future of <br/></h1>
      </div>

      <body>
        <div class="section">
          <h2>Ditch big tech.</h2>

        </div>
          
        <div class="section">
          <h2>Stay Green</h2>

        </div>

        <div class="section">
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
