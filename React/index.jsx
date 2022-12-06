<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>JWST</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <link rel="stylesheet" type="text/css" href="CSS/style.css"></link>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
    
      function MyApp() {
        return <h1>JWST</h1>;
      }
      <div id="tete-site">
        <div class="titre-site" align="center">
            <a href="index.php" class="nosoulignes">
                <h1 class="text9 blanc gras maj titre-site">
                    James Webb
                </h1>
            </a>
        </div>
      const container = document.getElementById('root');
      const root = ReactDOM.createRoot(container);
      root.render(<MyApp />);

    </script>
  </body>
</html>