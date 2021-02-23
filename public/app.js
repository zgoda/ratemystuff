import { useLang, useMeta, useTitle } from 'hoofd/preact';

const App = (() => {
  useLang('en');
  useTitle('Rate My Stuff');
  useMeta({name: 'author', content: 'Jarek Zgoda'});

  return (
    <div class="container grid-md">
      <h1>Hello, WMR!</h1>
      <p>It's been loong time!</p>
    </div>
  )
});

export { App };
