<template>
    <div>

        <div class="lead"
             style="padding:calc(5px + 0.1rem);border: 1px solid #0000002b;border-radius: calc(10px + 0.2rem);max-width:calc(9rem + 9vw + 150px);text-align:center;margin:auto;">
            <div style="padding-left:5px;padding-right:5px;">
                <table style="width:100%;margin:auto;padding-left:0px;padding-right:0px;">
                    <tr>
                        <td style="padding-right:0.1rem;text-align:center;">
                            🗓
                        </td>
                        <td>
                            <table style="text-align:center;width:100%;">
                                <tr>
                                    <td class="calendarioTD" style="padding-left:calc(6px + 0.1rem);padding-right:calc(6px + 0.1rem);">
                                        <span v-if="language=='it'">Lunedì 24/05/2021</span>
                                        <span v-if="language=='en'">Monday 24/05/2021</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="calendarioTD" style="padding-left:calc(6px + 0.1rem);padding-right:calc(6px + 0.1rem);">
                                        <span v-if="language=='it'">ore 09.00</span>
                                        <span v-if="language=='en'">at 09.00</span>
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            -
                        </td>
                        <td>
                            <table style="text-align:center;width:100%;">
                                <tr>
                                    <td class="calendarioTD" style="padding-left:calc(6px + 0.1rem);padding-right:calc(6px + 0.1rem);">

                                        <span v-if="language=='it'">Giovedì 27/05/2021</span>
                                        <span v-if="language=='en'">Thursday 27/05/2021</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="calendarioTD" style="padding-left:calc(6px + 0.1rem);padding-right:calc(6px + 0.1rem);">

                                        <span v-if="language=='it'">ore 23.59</span>
                                        <span v-if="language=='en'">at 23.59</span>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<style>
    .calendarioTD {
        font-size: calc(1.1rem + 0.12vw);
    }
</style>

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
