// HTML template file
// Return a template string from this function

const Html = ({ body, styles, title, initialState }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>  
        ${styles}
        <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>
      </head> 
      <body style="margin:0">
        <div id="app">${body}</div>
      </body>
    </html>
  `
};

export default Html
