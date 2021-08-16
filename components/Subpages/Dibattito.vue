<template>
    <div>

        <div style="width:100%;text-align:center;display:block;" class="container2">

            <div class="container8">
                <span class="lead">

                    <div class="tabDibattito3">
                        <div class="tabDibattito2">
                            <table class="tabDibattito">
                                <tr class="trDibattito">
                                    <td class="tdDibattito">
                                                       <div class="giornoDibattito">
                                        <span v-if="language=='it'">13 Maggio</span>
                                        <span v-if="language=='en'">13 May</span>
                                                       </div>
                                    </td>
                                    <td class="tdDibattito">
                                        <table style="width:100%;" class="tabDibattito4">
                                            <tr>
                                                <td class="tdDibattito2">
                                                    10:00-11:30
                                                </td>
                                                <td class="tdDibattito2">
                                                    <a href="https://www.youtube.com/watch?v=Z7Cykl6twec">
                                                          <div class="descrizioneDibattito">
                                                    <span v-if="language=='it'">Sostenibilità e spazi</span>
                                                    <span v-if="language=='en'">Sustainability and spaces</span>
                                                          </div>
                                                          </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="tdDibattito2">
                                                    16:00-17:30
                                                </td>
                                                <td class="tdDibattito2">
                                                    <a href="https://www.youtube.com/watch?v=5SnYA7X42YQ">
                                                          <div class="descrizioneDibattito">
                                                    <span v-if="language=='it'">Didattica e Università</span>
                                                    <span v-if="language=='en'">Didactics and universities</span>
                                                          </div>
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr class="trDibattito">
                                    <td class="tdDibattito">
                                                       <div class="giornoDibattito">
                                        <span v-if="language=='it'">14 Maggio</span>
                                        <span v-if="language=='en'">14 May</span>
                                                       </div>
                                    </td>
                                    <td class="tdDibattito">
                                        <table style="width:100%;" class="tabDibattito4">
                                            <tr>
                                                <td class="tdDibattito2 orarioDibattito">
                                                    10:00-11:30
                                                </td>
                                                <td class="tdDibattito2">
                                                    <a href="https://www.youtube.com/watch?v=2BVNg3Z5UgU">
                                                          <div class="descrizioneDibattito">
                                                    <span v-if="language=='it'">Tasse, accessibilità, DSU</span>
                                                    <span v-if="language=='en'">Taxes, accessibility, DSU</span>
                                                          </div>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="tdDibattito2 orarioDibattito">
                                                    16:00-17:30
                                                </td>
                                                <td class="tdDibattito2">
                                                    <a href="https://www.youtube.com/watch?v=fYvQl0m-9D4">
                                                    <div class="descrizioneDibattito">
                                                    <span v-if="language=='it'">Tematiche sociali, internazionalizzazione, welfare &amp; varie</span>
                                                    <span v-if="language=='en'">Social issues, internationalization, welfare &amp; various</span>
                                                    </div>
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr class="trDibattito">
                                    <td class="tdDibattito">
                            
                                        <div class="giornoDibattito">
                                            <span v-if="language=='it'">15 Maggio</span>
                                            <span v-if="language=='en'">15 May</span>
                                        </div>
                         
                                    </td>
                           
                                    <td class="tdDibattito">


                                        <table style="width:100%;" class="tabDibattito4">
                                            <tr>
                                                <td class="tdDibattito2 orarioDibattito">
                                                    16:00-17:30
                                                </td>
                                                <td class="tdDibattito2">
                                                                             <a href="https://www.youtube.com/watch?v=gzWetZmfZwQ">
                                              <div class="descrizioneDibattito">
                                     
                                                <span v-if="language=='it'">Dibattito finale</span>
                                        <span v-if="language=='en'">Final debate</span>
                                 
                                              </div>
                                                                    </a>
                                               </td>
                                            </tr>
                                        </table>

                                
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </span>
            </div>
        </div>
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
    .dibattito {
        font-size: calc(12px + 0.4rem + 0.7vw);
    }

    .tdDibattito {
        padding: calc(3px + 0.25vw);
        border: 1px solid rgba(0, 0, 0, 0.153);
    }

    .tdDibattito2 {
        padding: calc(4px + 0.25vw);
        font-size: calc(1px + 0.6rem + 0.55vw);
        border: 1px solid rgba(0, 0, 0, 0.143);
    }


    .giornoDibattito{
        padding:calc(4px + 0.25vw);
        font-size: calc(1px + 0.6rem + 0.55vw);
    }


    .tabDibattito {
        width: 100%;
        margin: auto;
        border-collapse: collapse;
        border-style: hidden;
    }

    .tabDibattito4 {
        border-collapse: collapse;
        border-style: hidden;
    }

    .tabDibattito2 {
        width: 100%;
        margin: auto;
        border: 1px solid rgba(0, 0, 0, 0.178);
        border-radius: calc(1rem + 1vw + 10px);
        padding-left: calc(3px + 0.25vw);
        padding-right: calc(3px + 0.25vw);
        padding-bottom: calc(5px + 0.1vw);
        padding-top: calc(2px + 0.1vw);
    }

    .tabDibattito3 {
        width: 100%;
        margin: auto;
        max-width: calc(28rem + 7.45vw + 95px);
        padding-top: 1rem;
    }

    .orarioDibattito{
        padding:calc(5px + 0.25vw);
        padding-right: calc(10px + 0.25vw);
        padding-left: calc(10px + 0.25vw);
    }

    .descrizioneDibattito{
        padding:calc(2px + 0.4vw);
    }
</style>
