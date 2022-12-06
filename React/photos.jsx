var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <title>Galeria de fotos |&nbsp;James Webb</title>
          <link rel="apple-touch-icon" href="IMG/favicon.png" />
          <link rel="icon" href="IMG/favicon.png" />
          <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet" />
          <link rel="stylesheet" type="text/css" href="CSS/style.css" />
          <meta charSet="utf-8" />
          <header>
            <div id="tete-site">
              <div className="titre-site" align="center">
                <a href="index.html" className="nosoulignes">
                  <h1 className="text9 blanc gras maj titre-site">
                    James Webb
                  </h1>
                </a>
              </div>
              <nav className="menu-nav" align="center">
                <nav className="menu-nav" align="center">
                  <ul>
                    <li className="btn">
                      <a href="index.html"><img src="IMG/home.png" className="nav-icon" alt="Accueil" /></a>
                    </li>
                    <li className="btn">
                      <a href="info.html"><img src="IMG/info.png" className="nav-icon" alt="Info" /></a>
                    </li>
                    <li className="btn">
                      <a href="photo.html"><img src="IMG/images-active.png" className="nav-icon" alt="Photo" /></a>
                    </li>
                    <li className="btn">
                      <a href="ressources.html"><img src="IMG/ressources.png" className="nav-icon" alt="Ressource" /></a>
                    </li>
                  </ul>
                </nav>
              </nav></div>
          </header>
          <div id="contenu-site">
            <div className="contenu-mobile">
              <div className="box">
                <h2 className="autotextphoto maj text9 blanc gras">Les plus beaux clichés</h2>
              </div>
              <div className="container">
                <div className="box">
                  <img src="photo/21059af_1662557550099-000-32ea8t3.jpeg" />
                  <p>NEbulosa de Carina</p>
                </div>
                <div className="box">
                  <img src="photo/Orion_bar_JWST.webp" />
                  <p>A Nebulosa de Órion</p>
                </div>
                <div className="box">
                  <img src="photo/311fc59_1662557550077-000-32ea8jz.jpeg" />
                  <p>Nebulosa Planetária do Anel</p>
                </div>
                <div className="box">
                  <img src="photo/28903357.jpeg" />
                  <p>Júpiter</p>
                </div>
              </div>
              <div className="gallery-container">
                <div className="thumbnails" />
                <div className="slides">
                  <div className="image"><img src="photo/JWST_2022-07-27_Jupiter.png" /></div>
                  <div className="image"><img src="photo/univers-cliche-telescope-james-webb-409967-0@1x.jpeg" /></div>
                  <div className="image"><img src="photo/STScI-01GCVNBND6RJ9360JKJ1G86Q0V.png" /></div>
                  <div className="image"><img src="photo/STScI-01GA76N47MR44PNWZ4NAYZBKG5.png" /></div>
                  <div className="image"><img src="photo/ngc628-m74-james-webb-1ed768-0@1x.jpeg" /></div>
                  <div className="image"><img src="photo/Images_release.007-1.png" /></div>
                  <div className="image"><img src="photo/Images_release.005-1.png" /></div>
                  <div className="image"><img src="photo/Images_release.003-1.png" /></div>
                  <div className="image"><img src="photo/e18ad21_1662557550085-000-32ea8ny.jpeg" /></div>
                  <div className="image"><img src="photo/5b879d1_6d3d1be1e7104804bb72067124776c7f-6d3d1be1e7104804bb72067124776c7f-0.jpeg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <div id="pied-site" className="reveal">
              <div className="copyright reveal-1" align="center">
                <p className="blanc">
                  Site criado por João Vítor Meirelles para o curso de Progrmação para web da prof. Joyce.
                </p>
              </div>
            </div>
          </footer>
        </div>
      );
    }
  });