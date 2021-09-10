import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Routes from './routes'
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          {Routes.map((routeProps, key) => (
              <Route
                key={key}
                path={routeProps.path}
                render={(renderProps: unknown)=> <routeProps.render key={key} {...renderProps} />}
              />
          ))}
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
