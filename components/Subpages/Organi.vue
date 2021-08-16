<template>
    <div class="scuoleContainer">

        <!-- Page Features -->
        <div class="row text-center">

                     <div class="col-lg-4 col-md-6 scuolaCard" style="margin: auto;">
                <a  :href="'../../' + language+'/senatocda/'">
                    <div class="card h-100">
                        <div class="listTile" style="width: 100%;">
                            <div class="divScuole">
                                <div>
                                    <div>
                                        <h1 class="scuole">

                                            <span v-if="language=='it'">
                                                Senato &amp; CDA
                                            </span>
                                            <span v-if="language=='en'">
                                                Senate &amp; CDA
                                            </span>
                                        </h1>
                                    </div>
                                </div>
                            
                            
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-lg-4 col-md-6 scuolaCard" style="margin: auto;">
                  <a  :href="'../../' + language+'/scuole/'">
                    <div class="card h-100">
                        <div class="listTile" style="width: 100%;">

                            <div class="divScuole">
                                <div>
                                    <div>
                                        <h1 class="scuole">

                                            <span v-if="language=='it'">
                                                Scuole
                                            </span>
                                            <span v-if="language=='en'">
                                                Schools
                                            </span>
                                        </h1>
                                    </div>
                                </div>    
                            </div>
                        </div>
                    </div>
                </a>
            </div>

                    <div class="col-lg-4 col-md-6 scuolaCard" style="margin: auto;">
                      <a  :href="'../../' + language+'/ccsScuole/'">
                    <div class="card h-100">
                        <div class="listTile" style="width: 100%;">

                            <div class="divScuole">
                                <div>
                                    <div>
                                        <h1 class="scuole">

                                            <span v-if="language=='it'">
                                                CCS
                                            </span>
                                            <span v-if="language=='en'">
                                                CCS
                                            </span>
                                        </h1>
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
        language:{
          type:String,
          required:true
        }
    }
}
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
