<?php
  include 'header.php';
?>


    <section class="main-section">
<!--  MAIN
==================================================================-->
      <main class="main_profil">
        <div class="row intro">
          <div class="small-12 small-centered text-left columns">
            <h1>Hello !</h1>
            <p>Bienvenue sur Guly, ton coach personnel en matière d’hydratation !</p>
          </div>
        </div>

        <form class="profil_form">
        <!-- First name input -->
          <div class="row">
            <div class="small-12 small-centered text-center columns">

              <div class="row">
                <div class="small-2 columns">
                  <label><img src="img/icon_profil.png" height="38" width="38" alt=""></label>
                </div>
                <div class="small-10 columns">
                  <input type="text" id="nickname" name="nickname" placeholder="Prénom" required>
                </div>
              </div>

            <!-- Weight select -->
              <div class="row">
                <div class="small-12 text-left columns">
                  <label>Poids
                    <?php
                        // variables
                        $selected = '';

                        // loop for weight
                        echo '<select name="poids" id="poids" required>',"\n";
                            for($i=0; $i<=200; $i++) {

                                // Affichage de la ligne
                                 echo "\t",'<option value="', $i ,'"', $selected ,'>', $i ,'</option>',"\n";
                            }
                        echo '</select>',"\n";
                    ?>
                  </label>
                </div>
              </div>

          <!-- Section buttons switch -->
            <div class="switch_section">
              <!-- Notifications switch button -->
              <div class="row">
                    <div class="small-2 text-left columns">
                        <img src="img/icon_notif.jpg" height="149" width="150" alt="">
                    </div>
                    <div class="small-7 text-left columns">
                        <p>Notifications</p>
                    </div>
                    <div class="small-3 text-left columns">
                        <div class="switch round small">
                            <input id="notif" type="checkbox">
                            <label for="notif">Notifications</label>
                        </div>
                    </div>
              </div>

              <!-- Bouchon intelligent switch button -->
              <div class="row">
                    <div class="small-2 text-left columns">
                        <img src="img/icon_smartcap.png" height="55" width="55" alt="">
                    </div>
                    <div class="small-7 text-left columns">
                        <p>Bouchon intelligent</p>
                    </div>
                    <div class="small-3 text-left columns">
                        <div class="switch round small">
                            <input id="smart_cap" type="checkbox">
                            <label for="smart_cap">Bouchon intelligent</label>
                        </div>
                    </div>
              </div>
            </div>

            </div>
          </div>
          <a role="button" aria-label="submit form" href="#" class="button expand action_btn" id="submit_objectif">Calculer mon objectif</a>
        </form>

      </main>

      <div class="lightbox_objectif_off text-center">
          <div class="result_section">
            <h2 class="result_nickname"></h2>
            <p>Guly te conseille de boire en moyenne</p>
            <p class="BH"></p>
            <p>d'eau par jour</p>
            <i class="fa fa-arrow-left return_btn"></i>
          </div>
          <a role="button" href="index.php" class="button expand action_btn">Commencer</a>
      </div>
    </section>

  <a class="exit-off-canvas"></a>
  </div>
</div>
<!-- end MAIN -->

<?php
  include 'footer.php';
?>
