import { useLang, useMeta, useTitle } from 'hoofd/preact';

const App = (() => {
  useLang('en');
  useTitle('Rate My Stuff');
  useMeta({name: 'author', content: 'Jarek Zgoda'});

  return (
    <div class="container grid-sm">
      <h1>Rate My Stuff</h1>
      <p>How do you like my stuff?</p>
    </div>
  )
});

export { App };
