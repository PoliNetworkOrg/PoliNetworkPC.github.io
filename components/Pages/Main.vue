<template>
  <div>
    <!-- Page Content -->
    <div class="container3">
      <!-- Jumbotron Header -->
      <header
        class="my-4 testoCentrale"
        style="
          max-width: 100%;
          border: none;
          margin-top: 10px;
          margin-bottom: 10px;
          padding-bottom: calc(10px + 1rem);
          padding-top: calc(2px + 5rem);
        "
      >
        <div style="text-align: center">
          <h2 style="font-size: calc(4px + 1.27rem + 0.77vw)">
            <span>{{ $t("Consigli acquisto PC") }}</span>
          </h2>
          <h5 style="font-size: calc(1px + 1.1rem + 0.6vw)">
            <a v-if="$i18n.locale == 'it'" href="https://polinetwork.org/it/">
              by PoliNetwork
            </a>
            <a v-if="$i18n.locale == 'en'" href="https://polinetwork.org/en/">
              by PoliNetwork
            </a>
          </h5>
          <div></div>

          <br />

          <div class="container8">
            <div class="container6">
              <p
                class="lead"
                style="
                  padding-left: calc(5px + 0.5rem + 0.6vw);
                  padding-right: calc(5px + 0.5rem + 0.6vw);
                  text-align: center;
                "
              >
                <span>
                  📌
                  {{
                    $t(
                      "Questo sito mira ad essere il più possibile di aiuto agli studenti che si affacciano all'acquisto di un computer per i propri studi (e non solo)"
                    )
                  }}
                </span>
              </p>
            </div>
          </div>
        </div>
      </header>

      <p>{{ $t("Scegli la tua scuola:") }}</p>
      <SubpagesScuoleComponent :scuole-link="scuole" />
    </div>
    <!-- /.container -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      scuole: {
        auic: "./auic/",
        trei: "./trei/",
        icat: "./icat/",
        design: "./design/",
      },
    };
  },
};
</script>
