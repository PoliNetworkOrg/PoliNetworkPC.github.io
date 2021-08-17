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
            name: "Aerospaziale",
			scuolalink: "../../trei/",
			desc: ["Se vi serve un pc va bene tutto con un processore decente (evitate qualunque i3) e almeno 8gb di ram. La scheda video dedicata è un extra non essenziale, per l'uso che ne dovrete fare vanno bene anche le più recenti schede video integrate.",
			"Per la memoria d'archiviazione consiglio almeno 512GB. Quella da 256 è al limite e va bene se tenete sul pc solo i programma essenziali e salvate i file sempre su disco esterno, in questo caso va bene.",
			"Consiglio di non trascurare la comodità e la durata della batteria. Il primo anno il pc serve poco e prendere un mattone da gaming che consuma quanto l'intera casa va bene ma da metà triennale in poi il PC diventa praticamente d'uso giornaliero fino alla fine degli studi"
			],
         	imageUrl:"/img/corsi/aerospaziale.jpg",
            fasce:[
				{id:1, prezzo:"500-600€", pc:[
					{id:1, text:"Acer Intel N4120", link:"https://www.amazon.it/Notebook-portatile-Acer-display-FullHD/dp/B08FTDRZN6/", imgurl:"/img/pc/acer-intel-n4120.jpg", car:[
						"CPU 4 core",
						"12 GB RAM"
					]},
					{id: 2, text:"pc2", link:"https://example.com/", imgurl:""}
				]
				},
				{id:2, prezzo:"600-800€",
				pc:[
					{id:1, text:"pc3", link:"https://example.com/", imgurl:""},
					{id: 2, text:"pc4", link:"https://example.com/", imgurl:""}
				]}
			]
                
            
        }
    }
  }
}
</script>
