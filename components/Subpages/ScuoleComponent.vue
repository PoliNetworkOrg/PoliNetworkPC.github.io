<template>
  <div class="scuoleContainer">
    <!-- Page Features -->
    <div class="row text-center">
      <div class="col-lg-3 col-md-6 scuolaCard" style="">
        <a :href="scuoleLink.auic">
          <div class="card h-100">
            <div class="listTile" style="width: 100%">
              <div class="divScuole">
                <div>
                  <div>
                    <h1 class="scuole">
                      <span>
                        {{ $t("Scuola AUIC") }}
                      </span>
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h5 class="scuoleTitolo">
                      <span>
                        {{
                          $t(
                            "ARCHITETTURA URBANISTICA INGEGNERIA DELLE COSTRUZIONI"
                          )
                        }}
                      </span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="col-lg-3 col-md-6 scuolaCard">
        <a :href="scuoleLink.trei">
          <div class="card h-100">
            <div class="listTile" style="width: 100%">
              <div class="divScuole">
                <div>
                  <div>
                    <h1 class="scuole">
                      <span> {{ $t("Scuola 3I") }} </span>
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h5 class="scuoleTitolo">
                      <span>
                        {{ $t("INGEGNERIA INDUSTRIALE E DELL' INFORMAZIONE") }}
                      </span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div class="col-lg-3 col-md-6 scuolaCard" style="">
        <a :href="scuoleLink.icat">
          <div class="card h-100">
            <div class="listTile" style="width: 100%">
              <div class="divScuole">
                <div>
                  <div>
                    <h1 class="scuole">
                      <span> {{ $t("Scuola ICAT") }} </span>
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h5 class="scuoleTitolo">
                      <span>
                        {{ $t("INGEGNERIA CIVILE, AMBIENTALE E TERRITORIALE") }}
                      </span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div class="col-lg-3 col-md-6 scuolaCard" style="">
        <a :href="scuoleLink.design">
          <div class="card h-100">
            <div class="listTile" style="width: 100%">
              <div class="divScuole">
                <div>
                  <div>
                    <h1 class="scuole">
                      <span> {{ $t("Scuola Design") }} </span>
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h5 class="scuoleTitolo">
                      <span>
                        {{ $t("MODA, INTERNI, COMUNICAZIONE, PRODOTTO") }}
                      </span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <!-- /.row -->
  </div>
</template>


<script>
export default {
  props: {
    scuoleLink: {
      type: Object,
      default: null,
    },
  },
};
</script>
<style>
.scuoleTitolo {
  font-size: calc(1px + 0.4rem + 0.95vw);
  width: 100%;
  text-align: center;
  word-break: break-word;
}

.scuole {
  font-size: calc(3px + 0.9rem + 1.1vw);
  width: 100%;
  text-align: center;
  word-break: break-word;
}

.scuolaCard {
  padding: calc(1px + 0.1rem + 1vw);
}

.scuoleContainer {
  margin: auto;
  max-width: calc(30px + 65vw + 3rem);
}
</style>
