import { Provider } from '@teo0098/ui';
import React from 'react';

import { Registration } from '~components/Registration';

export function App() {
  return (
    <Provider withGlobalStyles withNormalizeCSS>
      <Registration />
    </Provider>
  );
}

export default App;
