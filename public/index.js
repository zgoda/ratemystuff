import hydrate from 'preact-iso/hydrate';
import { App } from './app';

import './style/main.scss';

hydrate(<App />);

export async function prerender(data) {
  const { default: prerender } = await import('preact-iso/prerender');
  return await prerender(<App {...data} />);
}
