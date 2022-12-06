var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <title>Recursos |&nbsp;James Webb</title>
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
                      <a href="photo.html"><img src="IMG/images.png" className="nav-icon" alt="Photo" /></a>
                    </li>
                    <li className="btn">
                      <a href="ressources.html"><img src="IMG/ressources-active.png" className="nav-icon" alt="Ressource" /></a>
                    </li>
                  </ul>
                </nav>
              </nav></div>
          </header>
          <main>
            <div id="contenu-site">
              <h2 className="autotextressources maj text9 blanc gras">Recursos e notícias </h2>
              {/* Menu da página de recursos */}
              <nav className="menupage">
                <ul>
                  <li><a href="#sitesreferences">Sites de referências</a></li>
                  <li><a href="#audiovideos">Audio / Vídeos </a> </li>
                  <li><a href="#noticias">Notícias</a> </li>
                  <li><a href="#coisaslegais">Coisas legais</a></li>
                  <li><a href="#redessociais">Redes sociais</a></li>
                </ul>
              </nav>
              {/* Seção de Recursos  */}
              <div className="ressources">
                {/* sites de referência  */}
                <section className="essaibox">
                  <h3 id="sitesreferences">sites de referência</h3>
                  {/* 1 */}
                  <a href="https://webb.nasa.gov/index.html" target="_blank">
                    <article className="noticias">
                      <img src="IMG/imgPageRessources/sites referencia/JamesWebbSpaceTelescope_1.jpeg" alt="site da nasa" />
                      <p className="txtimg">WEBB Space Telescope</p>
                      <p className="txtimg">Site oficial NASA</p>
                    </article>
                  </a>
                  {/* 2 */}
                  <a href="https://webbtelescope.org/" target="_blank">
                    <article className="noticias">
                      <img src="IMG/imgPageRessources/sites referencia/WebbSpaceTelescope_4.jpeg" alt="site do telescopio" />
                      <p className="txtimg">WEBB Space Telescope</p>
                      <p className="txtimg"> Site oficial do telescópio </p>
                    </article>
                  </a>
                  {/* 3 */}
                  <a href="https://spaceplace.nasa.gov/james-webb-space-telescope/en/" target="_blank">
                    <article className="noticias">
                      <img src="IMG/imgPageRessources/sites referencia/Space-place3.jpeg" alt="Miniature site Space Place NASA" />
                      <p className="txtimg">Space Place</p>
                      <p className="txtimg">Space place da nasa</p>
                    </article>
                  </a>
                  {/* 4 */}
                  <a href="https://webb.nasa.gov/content/webbLaunch/whereIsWebb.html" target="_blank">
                    <article className="noticias">
                      <img src="IMG/imgPageRessources/sites referencia/WhereisWebb_2.jpeg" alt="Miniature site Where is James Webb ?" />
                      <p className="txtimg">Onde tá o JWST</p>
                      <p className="txtimg">tempo real em 3D</p>
                    </article>
                  </a>
                </section>
                {/* Notícias */}
                <section className="essaibox">
                  <h3 id="noticias">Notícias</h3>
                  {/* 5 */}
                  <a href="https://www.cnnbrasil.com.br/tecnologia/telescopio-james-webb-observa-duas-das-galaxias-mais-distantes-ja-encontradas/" target="_blank">
                    <article className="noticias">
                      <img src="/IMG/imgPageRessources/noticias/noticia-cnn-2022.png" alt="artigo cnn" />
                      <p className="txtimg">Artigo da cnn</p>
                      <p className="txtimg">notícia 1</p>
                    </article>
                  </a>
                  {/* 6 */}
                  <a href="https://gauchazh.clicrbs.com.br/tecnologia/noticia/2022/11/james-webb-encontra-agua-em-exoplaneta-clau5zss2001f01704rfbsat9.html" target="_blank">
                    <article className="noticias">
                      <img src="/IMG/imgPageRessources/noticias/agua-exoplaneta.png
                                  alt=" agua em exoplanetas" />
                      <p className="txtimg">Agua em explanetas</p>
                      <p className="txtimg">James Webb já detectou agua em exoplanetas
                      </p>
                    </article>
                  </a>
                  {/* 7 */}
                  <a href="https://g1.globo.com/ciencia/noticia/2022/07/12/james-webb-maior-telescopio-espacial-ja-lancado-divulga-novos-registros-do-universo.ghtml" target="_blank">
                    <article className="noticias">
                      <img src="/IMG/imgPageRessources/noticias/lancamento.png" alt="" />
                      <p className="txtimg">Lançamento</p>
                      <p className="txtimg">Primeiras notícias do AJmes Webb</p>
                    </article>
                  </a>
                </section>
                {/* Audio / Videos */}
                <section className="essaibox">
                  <h3 id="audiovideos">Áudios e vídeos</h3>
                  {/* 9 */}
                  <a href="https://soundcloud.com/nasa" target="_blank">
                    <article className="noticias">
                      <img src="IMG/imgPageRessources/AudioVideos/Soundcloud.jpeg" alt="Image du soundcloud de la NASA" />
                      <p className="txtimg">Soundcloud da NASA</p>
                      <p className="txtimg">Sons gravados pelo telescópio James Webb e podcasts sobre o assunto
                      </p>
                    </article>
                  </a>
                  {/* 10 */}
                  <a href="https://www.youtube.com/c/NASAWebbTelescope" target="_blank">
                    <article className="noticias">
                      <img src="IMG/imgPageRessources/AudioVideos/YouTubeJWST.jpeg" alt="YouTube de JWST" />
                      <p className="txtimg">Canal do JWST no Youtube </p>
                      <p className="txtimg">Vídeos sobre o design, produção e missões do telescópio</p>
                    </article>
                  </a>
                </section>
                {/* Cool stuff */}
                <section className="essaibox">
                  <h3 id="coisaslegais">Coisas legais</h3>
                  {/* 11 */}
                  <a href="https://jwst.nasa.gov/content/features/educational/buildItYourself/game/index.html" target="_blank">
                    <article className="noticias">
                      <img src="/IMG/imgPageRessources/Cools Stuff/BuildYourOwn.jpeg" />
                      <p className="txtimg">Criatividade</p>
                      <p className="txtimg">FAça você mesmo</p>
                    </article>
                  </a>
                  {/* 12  */}
                  <a href="https://www.jwst.nasa.gov/education/jwst_lego_assembly_instructions.pdf" target="_blank">
                    <article className="noticias">
                      <img src="/IMG/imgPageRessources/Cools Stuff/legoJWST.jpeg" />
                      <p className="txtimg">James Webb em Lego</p>
                      <p className="txtimg">Totalmetne aleatório</p>
                    </article>
                  </a>
                  {/* 13  */}
                  <a href="https://giphy.com/gifs/nasa-nasagif-jwst-xUOxeYaNG8yUo5Ob0k" target="_blank">
                    <article className="noticias">
                      <img src="/IMG/imgPageRessources/Cools Stuff/giphy.gif" />
                      <p className="txtimg">Giphy</p>
                      <p className="txtimg">Gifs espaciais</p>
                    </article>
                  </a>
                  <a href="https://store.steampowered.com/app/891960/WebbVR_The_James_Webb_Space_Telescope_Virtual_Experience/" target="_blank">
                    <article className="noticias">
                      <img src="/IMG/imgPageRessources/Cools Stuff/WEBBVR.jpeg" />
                      <p className="txtimg">Virtual</p>
                      <p className="txtimg">Experiencia virtual com o JWST</p>
                    </article>
                  </a>
                </section>
                {/* redes sociais*/}
                <section className="reseaubox">
                  <h3 id="redessociais">Redes sociais</h3>
                  <article className="reseau">
                    <a href="https://twitter.com/NASAWebb" target="_blank">
                      <i className="fa-brands fa-twitter" />
                    </a>
                    <a href="https://www.facebook.com/NASAWebb/" target="_blank">
                      <i className="fa-brands fa-facebook" />
                    </a>
                    <a href="https://www.flickr.com/photos/nasawebbtelescope/sets/" target="_blank">
                      <i className="fa-brands fa-flickr" />
                    </a>
                    <a href="https://www.instagram.com/nasawebb/" target="_blank">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </article>
                </section>
              </div>
            </div></main>
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