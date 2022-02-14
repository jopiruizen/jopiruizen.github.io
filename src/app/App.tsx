import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import themes from '../theme';

import PagesRoutes from './routes';
import Notes from '../pages/notes';
import store from '../store';

function App() {
  const NotesEl = Notes as React.ElementType;
  return (
    <Provider store={store}>
      <ThemeProvider theme={themes.default}>
        <BrowserRouter>
          <Routes>
              <Route path={PagesRoutes.HOME} element={<NotesEl />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
