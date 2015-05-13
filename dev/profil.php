<!doctype html>
<html lang="fr">
<head>
    <meta charset="utf-8" />
    <title>Titre</title>

    <link rel="stylesheet" href="styles/styles.css">
</head>
<body>
<div class="off-canvas-wrap" data-offcanvas>
  <div class="inner-wrap">

    <nav class="tab-bar">
      <section class="left-small">
        <a class="left-off-canvas-toggle menu-icon" href="#"><span></span></a>
      </section>
    </nav>

    <aside class="left-off-canvas-menu">
      <ul class="off-canvas-list">
        <li><label>Guly Menu</label></li>
        <li>Profil
        <li>Objectif
        <li>Statistiques
        <li>Badges
        <li>Astuces
        <li>FAQ
        <li>Boutique
      </ul>
    </aside>


    <section class="main-section">
<!--  MAIN
==================================================================-->
      <main>
        <div class="row">
          <div class="small-12 small-centered text-left columns">
            <h1>Hello !</h1>
            <p>Bienvenue sur Guly, ton coach personnel en matière d’hydratation !</p>
          </div>
        </div>

        <form>
          <div class="row">
            <div class="small-12 small-centered text-center columns">

              <div class="row">
                <div class="small-2 columns">
                  <label><img src="img/icon_profil.png" height="38" width="38" alt=""></label>
                </div>
                <div class="small-10 columns">
                  <input type="text" id="right-label" placeholder="Prénom">
                </div>
              </div>

              <div class="row">
                <div class="large-12 columns">
                  <label>Poids
                    <select id="weight">
                      <option value="50">50</option>
                      <option value="51">51</option>
                      <option value="52">52</option>
                      <option value="53">53</option>
                      <option value="54">54</option>
                      <option value="55">55</option>
                      <option value="56">56</option>
                      <option value="56">56</option>
                      <option value="57">57</option>
                      <option value="58">58</option>
                      <option value="59">59</option>
                      <option value="60">60</option>
                      <option value="61">61</option>
                      <option value="62">62</option>

                    </select>
                  </label>
                </div>
              </div>

            </div>
          </div>
        </form>

      </main>
    </section>

  <a class="exit-off-canvas"></a>

  </div>
</div>
<!-- end MAIN -->


<!--  FOOTER
==================================================================-->
<footer>
  
</footer>
<!-- end FOOTER -->

<!--  SCRIPTS
==================================================================-->
	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<script>
	  window.jQuery || document.write('<script src="scripts/vendor/jquery-2.1.3.min.js"><\/script>')
	</script>
  <script src="scripts/vendor/foundation.min.js"></script>
  <script src="scripts/main.min.js"></script>

<!-- end SCRIPTS -->

</body>
</html>
