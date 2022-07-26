<template>
    <div>
        <ListePCSingolo :data-lista="items" language="it" />
    </div>
</template>

<script>
export default {
    data () {
    return {
      items: {
            notFound: true,
			scuolalink: "../../trei/",     
            buttons:[
                {
                    id:1, text:"Informatica",
                    linkpage: "./../informatica/", 
                    linkimage:["/static/img/corsi/pc.png"]
                },
                {
                    id:2,
                    text: "Areospaziale, Energetica, Meccanica",
                    linkpage: "./../aero-energ-mecc/", 
                    linkimage:["/static/img/corsi/aerospaziale.jpg","/static/img/corsi/energetica.png","/static/img/corsi/meccanica.png"]
                }
            ]
        }
    }
  }
}
</script>
