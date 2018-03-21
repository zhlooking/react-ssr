import express from 'express';
import React from 'react';
import ReactDomServer from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';
import routes from './src/routes';
import App from './src/App';
import Html from './src/Html';

const port = 3000;
const server = express();

server.get('*', (req, res) => {
  const sheet = new ServerStyleSheet();
  const currentRoute = routes.find(route => matchPath(req.url, route))
  const requestInitialData =
    currentRoute.component.requestInitialData && currentRoute.component.requestInitialData()

  Promise.resolve(requestInitialData)
    .then(initialState => {
      const context = { initialState }
      const body = ReactDomServer.renderToString(
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      );
      const styles = sheet.getStyleTags();
      const title = 'Server Side Rendering with Styled Components';

      res.send(
        Html({
          body,
          styles,
          title,
          initialState
        })
      );
    })

});

server.listen(port, () => {
  console.log(`Serving at http://localhost:${port}`);
});
