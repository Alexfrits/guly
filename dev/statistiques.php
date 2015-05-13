<?php include 'header.php'; ?>
    <!--  MAIN
    ==================================================================-->
    <main class="main-section main-wrapper">
      <div class="row">
        <div class="small-12 small-centered text-center columns">
          <h1>Statistiques</h1>
        </div>
      </div>

      <div class="graphe__wrapper row">
        <div class="graphe__img__frame">
          <div class="graphes">
            <canvas id="chart-bar" width="2000" height="270"></canvas>
            <canvas id="chart-line" width="2000" height="270"></canvas>
          </div>
        </div>
      </div>

      <div class="row month-display">
        <div class="small-12 small-centered text-center columns">
          <ul>
            <li><h3>MAI 2015</h3>
            <!-- <li><a href="#" class="update button-tiny">Update</a> -->
          </ul>
        </div>
      </div>

      <div class="row success-display__title">
        <div class="small-12 small-centered text-center columns">
          <h3>Derniers trophées</h3>
        </div>
      </div>
      <ul class="row success-display__trophies">
        <li class="small-6 text-center columns">
          <i class="fa fa-trophy"></i>
          <h4>Success Name</h4>
        <li class="small-6 text-center columns">
          <i class="fa fa-trophy"></i>
          <h4>Success Name</h4>
      </ul>

    </main>
    <!-- end MAIN -->

  <a class="exit-off-canvas"></a>
  </div>
</div>

<?php include 'footer.php'; ?>