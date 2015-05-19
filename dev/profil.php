<?php
  include 'header.php';
?>

<main class="main_profil">
    <div class="intro">
        <h1>Hello !</h1>
        <p>Bienvenue sur Guly, ton coach personnel en matière d’hydratation !</p>
    </div><!-- end of .intro -->

    <form class="profil_form">
        <!-- Nickname input -->
        <label for="nickname" class="nickname"></label>
        <input type="text" id="nickname" name="nickname" placeholder="Prénom" required>

        <!-- Weight select -->

        <label for="poids">Poids</label>

        <?php
            // variables
            $selected = '';

            // loop for weight
            echo '<select name="poids" id="poids">',"\n";
                for($i=0; $i<=250; $i++) {

                    // Affichage de la ligne
                     echo "\t",'<option value="', $i ,'"', $selected ,'>', $i ,'</option>',"\n";
                }
            echo '</select>',"\n";
        ?>

        <div class="switch_section">
            <!-- Notifications switch button -->
            <img src="img/icon_notif.jpg" height="149" width="150" alt="">
            <div class="onoffswitch">
                <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="notifications" checked>
                <label class="onoffswitch-label" for="notifications">
                    <span class="onoffswitch-inner"></span>
                    <span class="onoffswitch-switch"></span>
                </label>
            </div>

            <!-- Bouchon intelligent switch button -->
            <img src="img/icon_smartcap.png" height="55" width="55" alt="">
            <div class="onoffswitch">
                <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="smartCap" checked>
                <label class="onoffswitch-label" for="smartCap">
                    <span class="onoffswitch-inner"></span>
                    <span class="onoffswitch-switch"></span>
                </label>
            </div>
        </div><!-- end of .switch_section -->

        <a role="button" href="#" class="button action_btn" id="submit_objectif">Calculer mon objectif</a>

    </form>
</main>


<div class="display_none">
    <div id="push_connexion">
        <h3>Notifications</h3>
        <p>La connexion avec le Guly SmartCap est établie</p>
    </div><!-- end of .push_connexion -->

    <div class="lightbox_objectif_off">
        <div class="result_section">
            <h2 class="result_nickname"></h2>
            <p>Guly te conseille de boire en moyenne</p>
            <p class="BH"></p>
            <p>d'eau par jour</p>
            <i class="fa fa-arrow-left return_btn"></i>
        </div><!-- end of .result_section -->
        <a role="button" href="index.php" class="button action_btn .notif">Commencer</a>
    </div><!-- end of .lightbox_objectif_off -->

</div><!-- end of .display_none -->

<?php
  include 'footer.php';
?>
