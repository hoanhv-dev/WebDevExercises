import { useRoutes } from 'react-router-dom';

import { AppRoutes } from '@features/index';
import LoadingIndicator from '@shared/components/LoadingIndicator';
import NoMatch from '@shared/views/NoMatch';

// Import fonts for material UI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Import global css
import '@assets/scss/app.scss';

function App() {
  return (
    <>
      {useRoutes([
        ...AppRoutes,
        {
          path: '*',
          element: <NoMatch />,
        },
      ])}
      <LoadingIndicator />
    </>
  );
}

export default App;
