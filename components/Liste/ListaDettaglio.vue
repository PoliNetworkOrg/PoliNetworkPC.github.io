<template>
    <div>
        <LayoutNavigationBar :language="language" />

        <br />
        <br />

        <div class="intro white" style="text-align: center;">
            <div style="width:100%;">
                <img :src="dataLista.imageUrl" style="width:calc(15px + 4vw + 5rem); padding:10px;text-align:center;">
            </div>
            <div class="container2 wow animated fadeInUp">
                <h2 style="color:black; font-size:calc(10px + 3vw + 0.5rem); ">{{this.dataLista.name}}</h2>

                <div class="buttonContainerDiv">
                    <a :href=this.dataLista.mainWebsiteUrl class="buttonLista">
                        <LayoutButton>
                            <span v-if="language=='it'">&nbsp;Sito ufficiale 🌐&nbsp;</span>
                            <span v-if="language=='en'">&nbsp;Official website 🌐&nbsp;</span>
                        </LayoutButton>
                    </a>

                    <a :href="this.dataLista.mainProgrammaUrl" class="buttonLista">

                        <LayoutButton>
                            <span v-if="language=='it'">&nbsp;Programma elettorale - PDF🗳&nbsp;</span>
                            <span v-if="language=='en'">&nbsp;Electoral program - PDF🗳&nbsp;</span>
                        </LayoutButton>
                    </a>

                    <a :href="this.dataLista.instagram" class="buttonLista">
                        <LayoutButton>
                            <span v-if="language=='it'">&nbsp;Instagram 📷&nbsp;</span>
                            <span v-if="language=='en'">&nbsp;Instagram 📷&nbsp;</span>
                        </LayoutButton>
                    </a>
                </div>

                <LayoutFrame v-for="descItem in dataLista.desc"
                             :key="descItem">
                    <p id="office-place" class="office-place descrizioneLista">
                        {{descItem}}
                    </p>
                </LayoutFrame>
            </div><!-- /.container -->
        </div><!-- /.intro -->

        <div class="section" id="our-info">
            <div class="container2" style="max-width: 100%;margin:auto; width:100%;">
                <h2 class="container2 programmaElettorale">
                           <span v-if="language=='it'">Programma elettorale 📝</span>
                            <span v-if="language=='en'">Electoral program 📝</span>
                    
                </h2>
                <hr />
                <h3 style="text-align:center;font-size:calc(8px + 1.5vw + 0.2rem);font-variant: petite-caps;-webkit-text-stroke: 1px #0c013587;-webkit-text-fill-color: black;">
                    {{dataLista.programmaSottotitolo}}
                </h3>
                <div style="padding:5px;"></div>
                <div class="row container4">
                    <LayoutFrame class-param="col-sm-3 wow animated fadeInLeft"
                                 v-for="item in dataLista.programma"
                                 :key="item.id"
                                 style-param="min-width:calc(150px + 6rem + 2vw);display:flex;flex: 1 1 25%;padding:5px;max-width: 100%;">
                        <div style="border:1px solid #0000003c;padding: calc(3px + 0.5rem);margin: 0px; border-radius:calc(10px + 1rem);width: 100%;">
                            <figure>
                                <img class="z-hover img-responsive" :src="item.url" style="max-width: calc(100px + 2rem + 2vw + 2vh);width: 100%;padding:2px; border-radius: calc(10px + 1rem);">
                            </figure>
                            <h4 style="padding-top:3px;text-align:center;">{{item.title}}</h4>
                            <p class="function-text" style="text-align:left;padding:calc(0.5vw); margin-bottom:0.2rem;">
                                {{item.desc}}
                            </p>
                        </div>
                    </LayoutFrame>
                </div>
            </div>
        </div><!-- our-info -->

        <LayoutHorizontalLine />

        <div class="section members">
            <div class="container2">
                <h2>
                    <span v-if="language=='it'">Senato 💬</span>
                    <span v-if="language=='en'">Senate 💬</span>
                </h2>
                <hr>
                <p class="lead-creative-banner">
                    {{dataLista.senato.desc}}
                </p>
                <div id="includedContentSenato" style="display:flex;flex-wrap: wrap;">

                    <LayoutFrame class-param="col-md-3 col-md-2"
                                 v-for="candsenato in dataLista.senato.candidati"
                                 :key="candsenato.id"
                                 style-param="display:flex;margin: auto;">
                        <ListeCandidato :cand="candsenato" url-lista="" />
                    </LayoutFrame>
                </div>
            </div>
        </div><!-- members -->

        <LayoutHorizontalLine />
        <div class="section members">
            <div class="container2">
                <h2>CdA 💶</h2>
                <hr>
                <p class="lead-creative-banner">
                    {{dataLista.CdA.desc}}
                </p>
                <div id="includedContentSenato" style="display:flex;flex-wrap: wrap;">

                    <LayoutFrame class-param="col-md-3 col-md-2"
                                 v-for="candCdA in dataLista.CdA.candidati"
                                 :key="candCdA.id"
                                 style-param="display:flex;margin: auto;">
                        <ListeCandidato :cand="candCdA" url-lista="" />
                    </LayoutFrame>
                </div>
            </div>
        </div><!-- members -->

        <LayoutHorizontalLine />

        <div class="section members" style="background-color:white">
            <div class="container2">
                <h2>
                    <span v-if="language=='it'">Scuole</span>
                    <span v-if="language=='en'">Schools</span>
                </h2>
                <hr>
                <p class="lead-creative-banner">{{dataLista.scuole.desc}}</p>
                <ul style="list-style:none;">
                    <li class="liScuola">
                        <span class="titleScuole">AUIC 📐</span>
                        <div class="spacerScuole"></div>
                        <div class="descrizioneScuola">
                            {{dataLista.scuole.auic.desc}}
                        </div>
                        <div id="includedContentScuoleAUIC" style="display:flex;flex-wrap: wrap;">
                            <LayoutFrame class-param="col-md-3 col-md-2"
                                         v-for="candCdA in dataLista.scuole.auic.candidati"
                                         :key="candCdA.id"
                                         style-param="display:flex;margin: auto;">
                                <ListeCandidato :cand="candCdA" url-lista="" />
                            </LayoutFrame>
                        </div>
                    </li>
                    <li class="liScuola">
                        <span class="titleScuole">3I 🔧</span>
                        <div class="spacerScuole"></div>
                        <div class="descrizioneScuola">
                            {{dataLista.scuole.trei.desc}}
                        </div>
                        <div id="includedContentScuole3I" style="display:flex;flex-wrap: wrap;">
                            <LayoutFrame class-param="col-md-3 col-md-2"
                                         v-for="candCdA in dataLista.scuole.trei.candidati"
                                         :key="candCdA.id"
                                         style-param="display:flex;margin: auto;">
                                <ListeCandidato :cand="candCdA" url-lista="" />
                            </LayoutFrame>
                        </div>
                    </li>
                    <li class="liScuola">
                        <span class="titleScuole">ICAT 🚧</span>
                        <div class="spacerScuole"></div>
                        <div class="descrizioneScuola">
                            {{dataLista.scuole.icat.desc}}
                        </div>
                        <div id="includedContentScuoleICAT" style="display:flex;flex-wrap: wrap;">
                            <LayoutFrame class-param="col-md-3 col-md-2"
                                         v-for="candCdA in dataLista.scuole.icat.candidati"
                                         :key="candCdA.id"
                                         style-param="display:flex;margin: auto;">
                                <ListeCandidato :cand="candCdA" url-lista="" />
                            </LayoutFrame>
                        </div>
                    </li>
                    <li class="liScuola">
                        <span class="titleScuole">DESIGN ✏️</span>
                        <div class="spacerScuole"></div>
                        <div class="descrizioneScuola">
                            {{dataLista.scuole.design.desc}}
                        </div>
                        <div id="includedContentScuoleDESIGN" style="display:flex;flex-wrap: wrap;">
                            <LayoutFrame class-param="col-md-3 col-md-2"
                                         v-for="candCdA in dataLista.scuole.design.candidati"
                                         :key="candCdA.id"
                                         style-param="display:flex;margin: auto;">
                                <ListeCandidato :cand="candCdA" url-lista="" />
                            </LayoutFrame>
                        </div>
                    </li>
                </ul>
            </div>
        </div><!-- members -->

        <div style="padding:1.6rem;"></div>
        <LayoutHorizontalLine />
        <div style="padding:1.7rem;"></div>

        <div class="container6">
            <div class="container3">
                <div class="lead container3" style="text-align:center;width:100%;padding-bottom:1.5rem;font-size:calc(1rem + 1vw);">
                    <span v-if="language == 'it'">Visita anche le pagine dedicate alle altre liste</span>
                    <span v-if="language == 'en'">Also visit the pages dedicated to the other lists</span>
                </div>
                <SubpagesQuadratiListe :language="language" />
            </div>
        </div>

        <LayoutFooter :language="language" />
    </div>
</template>

<script>
export default {
    props: {
        dataLista:{
            type:Object,
            default : null
        },
        language:{
            type:String,
			required:true
        }
    }
}
</script>

<style scoped>
    img[src$=".gif"], img[src$=".png"] {
        image-rendering: -moz-crisp-edges;
        image-rendering: -o-crisp-edges;
        image-rendering: -webkit-optimize-contrast;
        -ms-interpolation-mode: nearest-neighbor;
    }

    img {
        border: 0;
    }

    img {
        vertical-align: middle;
    }

    .office-place {
        color: #4b4228;
        font: 16px/1.5 "Novecento Sans Wide Medium", Helvetica, Arial, sans-serif;
        letter-spacing: .2em;
        margin: 25px auto 0 auto;
    }

    .descrizioneLista {
        font-size: calc(15px + 0.17vw + 0.08rem);
    }

    .img-responsive, .thumbnail > img, .thumbnail a > img, .carousel-inner > .item > img, .carousel-inner > .item > a > img {
        display: block;
        width: 100% \9;
        max-width: 90%;
        height: auto;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 0px;
    }

    .imgcaption {
        margin-bottom: calc(1.3rem + 3px);
    }

    figure {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: calc(0.2rem);
    }

    .buttonContainerDiv {
        display: flex;
        margin: auto;
        text-align: center;
        align-content: center;
        align-items: center;
        align-self: center;
        width: 100%;
        max-width: calc(20vw + 30rem + 100px);
        padding-top: 1rem;
        flex-wrap: wrap;
    }

    .buttonLista {
        display: flex;
        margin: auto;
        font-size: calc(0.6rem + 0.5vw);
        text-align: center;
        align-self: center;
        align-content: center;
        align-items: center;
    }

    .programmaElettorale {
        font-size: calc(10px + 1.5vw + 0.3rem);
        padding-top: 4.5rem;
        text-align: left;
    }
</style>

