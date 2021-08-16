<template>
    <div>

        <ListeConfrontoListe :liste="liste" :organi-confronto="organiConfronto" :language="language" />
    </div>
</template>

<script>
export default {
    props: {
        language:{
            type:String,
            default : 'it',
            required:true
        },
        organiConfronto:{
            type:Array,
            required: true
        },
        liste:
            {
            type:Array,
            required: true
        }
    },

}
</script>
