<template>
    <div class="candidatoCard">
        <a :href="urlLista">
            <div class="candidatoSV" style="text-align:center;">
                <figure class="wow animated fadeInLeft animated"
                        style="visibility: visible; animation-name: fadeInLeft;width:100%;margin-bottom: calc(0.2rem);margin-top: calc(0.3rem);">
                    <img class="border-img img-responsive center-block immagineCandidato"
                         :src="cand.imgUrl"
                         style="width:100%;" />
                </figure>
                <div class="imgcaption" style="text-align:center;">
                    <strong class="nameCandidato">
                        <div style="width:100%;">
                            <span class="nameCandidatoFull">{{cand.name}}</span>
                        </div>
                        <div style="width:100%;">
                            <span class="nameDetto">
                                {{cand.detto}}
                            </span>
                        </div>
                    </strong>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        cand:{
            type:Object,
            default : null
        },
        urlLista:{
            type:String,
            default : null
        }
    }
}
</script>

<style>
    figure {
        margin-left: auto;
        margin-right: auto;
    }

    .nameCandidatoFull {
        font-size: small;
    }

    .nameDetto {
        font-size: calc(1px + 0.5rem + 0.3vw);
        color: #009ad7;
        font-style: italic;
    }

    .candidatoCard {
        border: 1px solid black;
        border-color: rgba(0, 0, 0, 0.1);
        border-radius: calc(1px + 1rem);
        padding: calc(1px + 0.3rem);
    }
</style>
