<?php
  include 'header.php';
?>
    <!--  MAIN
    ==================================================================-->
    <main class="page-tracker main-section main-wrapper">

      <div class="mega-number__wrapper">
        <div class="mega-number">
          <strong>1,7</strong><span class="suffix">l</span>
        </div>
      </div>

      <div class="tip__wrapper">
          <q>
            Ceci est un petit conseil qui apparaît quand vous avez tout bu.
          </q>
      </div>

      
        <!-- GOOEY MENU -->
        <div class="gooey__wrapper">
          <ul class="gooey">

            <li class="gooey__open-button"/>
              <a href="#" class="gooey__item__content">
                <i class="fa fa-close"></i>
              </a>
            </li>

            <li class="gooey__item">
              <a href="#" class="gooey__item__content">
                <i class="fa fa-glass"></i>
              </a>
            </li>

            <li class="gooey__item">
              <a href="#" class="gooey__item__content">
                <i class="fa fa-beer"></i>
              </a>
            </li>

            <li class="gooey__item">
              <a href="#" class="gooey__item__content">
                <i class="fa fa-coffee"></i>
              </a>
            </li>
            
          </ul>
        </div>
        <?php include 'gooey-filter.php'; ?>
        <!-- end GOOEY MENU -->

    </main>
    <!-- end MAIN -->
  </div>
</div>

<?php
  include 'footer.php';
?>