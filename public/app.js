import { useLang, useMeta, useTitle } from 'hoofd/preact';

const App = (() => {
  useLang('en');
  useTitle('Rate My Stuff');
  useMeta({name: 'author', content: 'Jarek Zgoda'});

  return (
    <div class="container">
      <h1>Hello, WMR!</h1>
    </div>
  )
});

export { App };
