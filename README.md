- Run the `build` script. The `console.log` on the onRenderBody prints:
  ```bash
  { pathname: '/about/', length: 0 }
  { pathname: '/contact/', length: 23972 }
  { pathname: '/', length: 23972 }
  ```
- Start the server with the `serve` script.
- curl the index page `curl http://localhost:9000/ > index.html`. Open the new file with a text editor. It contains styles from the contact page (because it's built last?)
