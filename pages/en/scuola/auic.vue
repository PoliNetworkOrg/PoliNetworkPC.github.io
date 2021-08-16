<template>
    <div>

        <ListeConfrontoListe :liste="liste" :organi-confronto="organiConfronto" language="en" />
    </div>
</template>

<script>
export default {
    data () {
    return {

    organiConfronto:[
        {
            id:1,
            name:"AUIC",
      desc: "In the AUIC school 5 student representatives are elected in the school board."   }
    ],

      liste: [
            {
                id: 1,
                name: "Svoltastudenti",
                imageUrlHorizontal: "/img/logo-svolta_hor.png",
                linkLista: "/lista/svoltastudenti/",
                organi: [
                    {
                        name: "AUIC",
                      desc: "Meetings, cultural events and conventions: Making the Politecnico itself the scene of integrated meetings and events related to the educational path. Towards the world of work: introducing institutional support to the creation of the portfolio. Implementing courses on design, modeling and application software of the BIM methodology: Implement the teaching of programs in the first years of the course of study. Insertion of annual workshops: 3 months are not enough to carry out projects that are up to standard. ",   candidati:[
                            {id:1, imgUrl: "/img/candidati/svoltastudenti/elena_picchetti.jpg", name: "Picchetti Elena", detto: ""},
                            {id:2, imgUrl: "/img/candidati/svoltastudenti/davide_diceglie_auic.jpg", name: "Di Ceglie Davide", detto: "REFLASH"},
                            {id:3, imgUrl: "/img/candidati/svoltastudenti/ian_fernandez.jpg", name: "Fernàndez Nava Ian Anthony Alloxis", detto: "IANF"},
                            {id:4, imgUrl: "/img/candidati/svoltastudenti/giacomo_schiavone_auic.jpg", name: "Schiavone Giacomo", detto: "GIACK"},
                            {id:5, imgUrl: "/img/candidati/svoltastudenti/dalila_melotti.jpg", name: "Melotti Dalila", detto: "DIDI"}
					    ]
                    }
                ]
            },
            {
                id: 2,
                name: "Lista aperta",
                imageUrlHorizontal: "/img/logo-listaaperta_hor.png",
                linkLista: "/lista/listaaperta/",
                organi:[
                    {
                        name: "AUIC",
              desc: "In the Auic school we will work on two pillars: teaching and the right to study. As regards teaching, we would like to equip teachers with technological and digital tools to update teaching to new forms that will be decisive for us students in the world of work. The Right to Education for Auic students inevitably depends on the costs that must be incurred for prints and models: we propose a fund and agreements to meet, at least in part, all students. ",       candidati:
                    [
						{id:1, imgUrl: "/img/candidati/listaaperta/tommaso_sanese.jpg", name: "Sanese Tommaso", detto: "TOMMI"},
                        {id:2, imgUrl: "/img/candidati/listaaperta/maria_zini.jpg", name: "Zini Maria", detto: "MERI"},
						{id:3, imgUrl: "/img/candidati/listaaperta/sara_galli.jpg", name: "Galli Sara", detto: "SARA"},
						{id:4, imgUrl: "/img/candidati/listaaperta/issa_tallawi.jpg", name: "Tallawi Issa", detto: "ISSA"},
						{id:5, imgUrl: "/img/candidati/listaaperta/maria_veronica_cantale.jpg", name: "Cantale Maria Veronica", detto: ""},
						{id:6, imgUrl: "/img/candidati/listaaperta/elisabetta_alberton.jpg", name: "Alberton Elisabetta", detto: "BETTA"},
                        {id:7, imgUrl: "/img/candidati/listaaperta/elisabetta_taffa.png", name: "Taffa Elisabetta", detto: "ELI"},
                        {id:8, imgUrl: "/img/candidati/listaaperta/marco_galbiati.jpg", name: "Galbiati Marco", detto: "CALI"},
						{id:9, imgUrl: "/img/candidati/listaaperta/marta_de_fre.jpg", name: "De fre Marta", detto: "MARTA"},
						{id:10, imgUrl: "/img/candidati/listaaperta/pietro_rabaioli.jpg", name: "Rabaioli Pietro", detto: "RABA"},
						{id:11, imgUrl: "/img/candidati/listaaperta/isaac_young.jpg", name: "Young Isaac Jason", detto: "ISAAC"},
						{id:12, imgUrl: "/img/candidati/listaaperta/marco_stringhetti.jpg", name: "Stringhetti Marco", detto: "STRINGO"},
						{id:13, imgUrl: "/img/candidati/listaaperta/sara_baldelli.jpg", name: "Baldelli Sara Micol", detto: ""}
                    ]
                    }
                ]
            },
            {
                id: 3,
                name: "Terna sinistrorsa",
                imageUrlHorizontal: "/img/logo-terna_hor.png",
                linkLista: "/lista/ternasinistrorsa/",
                organi:[
                    {
                        name: "AUIC",
                  desc: "We all have the right to the same design tools for this we require digital access to the bibliography and a greater number of free software such as Sketch-up pro and Lumion. We will also strive to reduce further costs for us students by requesting the instrumentation suitable to be able to carry out digital reviews. Each student is worth more than his average for this reason we propose to be evaluated equally for sis access to laboratories than to master's. ",       candidati:
                        [
                           {id: 1 , imgUrl: "/img/candidati/ternasinistrorsa/chiara_nardelli.png", name: "Nardelli Chiara", detto: ""},
                           {id: 2 , imgUrl: "/img/candidati/ternasinistrorsa/letizia_guido.png", name: "Guido Letizia", detto: ""}

                        ]
                    }
                ]
            },
            {
                id: 4,
                name: "Studenti indipendenti",
                imageUrlHorizontal: "/img/logo-sip_hor.png",
                linkLista: "/lista/studentiindipendenti/",
                organi:[
                    {
                        name: "AUIC",
                   desc: "We ask that more digital representation software courses be implemented to ensure a 360 degree preparation. We want there to be greater coordination of deliveries between the different classes of laboratories to avoid dispersion within the courses. It is necessary to set up a fund for the teaching material and guarantee remote reviews to ensure that everyone actively participates in the lessons and workshops. Finally, we believe that a maximum of one review per week can be accepted to avoid periods of excessive stress and overlaps. ",      candidati:
                        [
                        {id: 1 , imgUrl: "/img/candidati/studentiindipendenti/tommasopaolo_bertolini.PNG", name: "Bertolini Tommasopaolo", detto: "TOMMI"},
                        {id: 2 , imgUrl: "/img/candidati/studentiindipendenti/debora_maurelli.PNG", name: "Maurelli Debora", detto: ""},
                        {id: 3 , imgUrl: "/img/candidati/studentiindipendenti/giulia_cantatore.PNG", name: "Cantatore Giulia", detto: ""},
                        {id: 4 , imgUrl: "/img/candidati/studentiindipendenti/emily_lawrence.PNG", name: "Lawrence Emily", detto: ""},
                        {id: 5 , imgUrl: "/img/candidati/studentiindipendenti/gloria_maria_crisogianni.PNG", name: "Crisogianni Gloria Maria", detto: ""},
                        {id: 6 , imgUrl: "/img/candidati/studentiindipendenti/maria_nicole_deluca.PNG", name: "Deluca Maria Nicole", detto: ""},
                        {id: 7 , imgUrl: "/img/candidati/studentiindipendenti/luca_francioli.PNG", name: "Francioli Luca", detto: ""},
                        {id: 8 , imgUrl: "/img/candidati/studentiindipendenti/miranda_valeria_margarita_gonzalez.PNG", name: "Gonzàlez Miranda Valeria Margarita", detto: ""},
                        {id: 9 , imgUrl: "/img/candidati/studentiindipendenti/gabriele_haardt.PNG", name: "Haardt Gabriele", detto: ""},
                        {id: 10 , imgUrl: "/img/candidati/studentiindipendenti/ilaria_masciarelli.PNG", name: "Masciarelli Ilaria", detto: ""},
                        {id: 11 , imgUrl: "/img/candidati/studentiindipendenti/chiara_berti.PNG", name: "Berti Chiara", detto: ""},
                        {id: 12 , imgUrl: "/img/candidati/studentiindipendenti/pietro_buongiorno.PNG", name: "Buongiorno Pietro", detto: ""}
                        ]
                    }
                ]
            }
        ]
    }
  }
}
</script>
