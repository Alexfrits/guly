<?php include 'header.php'; ?>
    <!--  MAIN
    ==================================================================-->
    <main class="page-orientation main-section main-wrapper">

      <div class="main">
        <h2>Device Orientation</h2>
        <table>
          <tr>
            <td>Event Supported</td>
            <td id="doEvent"></td>
          </tr>
          <tr>
            <td>Tilt Left/Right [gamma]</td>
            <td id="doTiltLR"></td>
          </tr>
          <tr>
            <td>Tilt Front/Back [beta]</td>
            <td id="doTiltFB"></td>
          </tr>
          <tr>
            <td>Direction [alpha]</td>
            <td id="doDirection"></td>
          </tr>
         </table>
      </div>

      <div class="container" style="perspective: 300;">
        <div class="moving-img" id="moving-block"></div>
      </div>

    </main>
    <!-- end MAIN -->

  <a class="exit-off-canvas"></a>
  </div>
</div>
<?php include 'footer.php'; ?>