<?php
  include 'header.php';
?>


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
                <div class="large-12 columns">
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

              <!-- Notifications switch button -->
              <div class="row">
                    <div class="small-2 text-left columns">
                        <img src="img/icon_notif.jpg" height="149" width="150" alt="">
                    </div>
                    <div class="small-6 text-left columns">
                        <p>Notifications</p>
                    </div>
                    <div class="small-3 text-right columns">
                        <div class="switch round large">
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
                    <div class="small-6 text-left columns">
                        <p>Bouchon intelligent</p>
                    </div>
                    <div class="small-3 text-right columns">
                        <div class="switch round large">
                            <input id="smart_cap" type="checkbox">
                            <label for="smart_cap">Bouchon intelligent</label>
                        </div>
                    </div>
              </div>

            </div>
          </div>
          <a role="button" aria-label="submit form" href="#" class="button expand" id="submit_objectif">Calculer mon objectif</a>
        </form>

      </main>

      <div class="lightbox_objectif_off">
            <h2><?php echo "localStorageNickname"; ?></h1>
            <p>Guly te conseille de boire...</p>
            <i class="fa fa-times close_btn"></i>
      </div>
    </section>

  <a class="exit-off-canvas"></a>

  </div>
</div>
<!-- end MAIN -->

<?php
  include 'footer.php';
?>
