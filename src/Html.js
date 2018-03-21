// HTML template file
// Return a template string from this function
import serialize from 'serialize-javascript';

const Html = ({ body, styles, title, initialState }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>  
        ${styles}
        <script>window.__INITIAL_STATE__ = ${serialize(initialState)}</script>
      </head> 
      <body style="margin:0">
        <div id="app">${body}</div>
      </body>
    </html>
  `
};

export default Html
