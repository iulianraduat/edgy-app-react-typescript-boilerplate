import { storiesOf } from '@storybook/react';
import React from 'react';
import App from '../src/App';

const style: React.CSSProperties = {
  height: 20
};

storiesOf('App', module).add('complete', () => (
  <div style={style}>
    <App />
  </div>
));
