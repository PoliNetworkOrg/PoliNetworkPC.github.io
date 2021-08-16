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
            name:"ICAT",
      desc: "The School of Civil, Environmental and Territorial Engineering provides study courses in Engineering for the Environment and the Territory (Leonardo campus), Civil Engineering (Leonardo campus), Civil Engineering for Risk Mitigation / Civil Engineering for Risk Mitigation (Lecco campus) and Geoinformatics Engineering / Geoinformatics Engineering (Leonardo campus). "   }
    ],

      liste: [
            {
                id: 1,
                name: "Svoltastudenti",
                imageUrlHorizontal: "/img/logo-svolta_hor.png",
                linkLista: "/lista/svoltastudenti/",
                organi: [
                    {
                        name: "ICAT",
                desc: "PEER TUTORING: Encourage and deepen the use of peer tutoring. New connections with the professional world: organize site visits, company visits and 'face to face' interviews with professionals in the sector. PHYSICS 1+ PHYSICS 2A: Breaking the annual exam in two modules, to allow students to take the two exams separated from each other / in different academic years. LABS: introduction of laboratories and classroom experiences in the three-year courses in order to give practical feedback to the theory. ",
                    candidati:[
                            {id:1, imgUrl: "/img/candidati/svoltastudenti/eleonora_pietrobelli.jpg", name: "Pietrobelli Eleonora", detto: ""},
                            {id:2, imgUrl: "/img/candidati/svoltastudenti/antonino_sgroi_icat.jpg", name: "Sgroi Antonino", detto: "LILLO"},
                            {id:3, imgUrl: "/img/candidati/svoltastudenti/fabrizio_murillo.jpg", name: "Murillo Fabrizio Roldos Jose", detto: ""},
                            {id:4, imgUrl: "/img/candidati/svoltastudenti/henry_andrade.jpg", name: "Andrade Henry", detto: ""},
                            {id:5, imgUrl: "/img/candidati/svoltastudenti/elena_zannotti_icat.jpg", name: "Zannotti Elena", detto: "ELLE"}
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
                        name: "ICAT",
                  desc: "The ICAT school, given the small number of students, must invest resources to increase the quality of teaching: smaller groups, more workshops and personalized experiences, starting from the three-year period. In addition, we will work to increase the policies of orienting towards the master's and the world of work, also thanks to the introduction of vocational courses and internships. ",   candidati:
                    [
						{id:1, imgUrl: "/img/candidati/listaaperta/andrea_mandelli.jpg", name: "Mandelli Andrea", detto: "ZAC"},
						{id:2, imgUrl: "/img/candidati/listaaperta/francesco_bugo.jpg", name: "Bugo Francesco Maria", detto: "BUGO"},
						{id:3, imgUrl: "/img/candidati/listaaperta/pietro_perego.jpg", name: "Perego Pietro", detto: "PIE"},
						{id:4, imgUrl: "/img/candidati/listaaperta/camilla_macchini.jpg", name: "Macchini Camilla", detto: "CAMI"},
						{id:5, imgUrl: "/img/candidati/listaaperta/francesco_cannerozzi.jpg", name: "Cannerozzi Francesco", detto: "CANNE"},
						{id:6, imgUrl: "/img/candidati/listaaperta/davide_zini.jpg", name: "Zini Davide", detto: "ZINZAN"},
						{id:7, imgUrl: "/img/candidati/listaaperta/giovanni_abbenda.jpg", name: "Abbenda Giovanni", detto: "GIO"}
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
                        name: "ICAT",
                        desc: "Reduce the burden of exams by adding ongoing tests, limiting the tests with different modalities (written, oral and project mandatory) and improving the hours of exercises by eliminating repetitions between courses. In particular, we want to make more equitable the relationship between the evaluation of the project and the time needed to carry it out. We must, and together we can, get to the elimination of priorities! At ICAT we will strive for more practicality and experience in the field, together with a growing support from the Career Service and to have environmental sustainability at the center of our courses. ",  candidati:
                    [
                      {id: 4 , imgUrl: "/img/candidati/ternasinistrorsa/luca_lo_bosco.png", name: "Lo Bosco Luca", detto: ""},
                      {id: 5 , imgUrl: "/img/candidati/ternasinistrorsa/andrea_collini.png", name: "Collini Andrea", detto: ""}

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
                        name: "ICAT",
           	    desc: "At ICAT we believe that partials must be a free choice that does not preclude the number of exam sessions in a session. We believe that it is necessary to increase the number of laboratories that are also specific to the 2 study courses that make up the school. of the exams must have certain timings as it happens too often at the discretion of the teacher putting in difficulty groups of students. We believe it is necessary to implement more interactive teaching methods that stimulate the understanding and participation of the student. ",         candidati:
                        [
                        {id: 1 , imgUrl: "/img/candidati/studentiindipendenti/matteo_chiavegato.PNG", name: "Chiavegato Matteo", detto: ""},
                        {id: 2 , imgUrl: "/img/candidati/studentiindipendenti/davide_varotto.PNG", name: "Varotto Davide", detto: ""},
                        {id: 3 , imgUrl: "/img/candidati/studentiindipendenti/francesco_labanca.PNG", name: "Labanca Francesco", detto: ""},
                        {id: 4 , imgUrl: "/img/candidati/studentiindipendenti/davide_stucchi.PNG", name: "Stucchi Davide", detto: ""},
                        {id: 5 , imgUrl: "/img/candidati/studentiindipendenti/alessia_ippolito.PNG", name: "Ippolito Alessia", detto: ""}
                        ]
                    }
                ]
            }
        ]
    }
  }
}
</script>
