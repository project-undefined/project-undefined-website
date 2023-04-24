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
          <span>
          Project Undefined projects are decentralized, user-friendly, and privacy-centric. 
          </span>
        </div>
          
        <div class="section">
          <h2>Stay Green</h2>
          <span>
          Project Undefined is dedicated to an eco-friendly ecosystem, and uses the IOTA network to 
          maximize energy efficiency whilst keeping things decentralized. 
          </span>        
        </div>

        <div class="section">
          <h2>Protect your data</h2>
          Project Undefined utilizes technology such as post-quantum encryption to 
          ensure the privacy and protection of user data.
        </div>

        <div class="section">
          <h2>Be. you.</h2>
          Project Undefined seeks to develop projects that encourage customization and expression. 
        </div>

        <div>
          <h2>Support us</h2>
          iota1qzd8tgz65ttyfvr6rqze3de4nvm73vcet9qpkmwq7nph6k6jd6mh288rw67
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
