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
            name:"3I",
    desc: "The school coordinates the teaching activities for most of the degrees and master's degrees in Engineering of the Politecnico di Milano. The School of Industrial and Information Engineering is by far the largest of the four present at the Politecnico, with about 60 percent of students enrolled in their Bachelor's and Master's Degree courses. The Joint Commission has the task of monitoring the educational offer, the quality of teaching and the services provided to students and expressing opinions on the establishment and cancellation of studio. It is made up of 5 students and 5 professors. "    }
    ],

      liste: [
            {
                id: 1,
                name: "Svoltastudenti",
                imageUrlHorizontal: "/img/logo-svolta_hor.png",
                linkLista: "/lista/svoltastudenti/",
                organi: [
                    {
                        name: "3I",
                       desc: "Create a network of Ambassadors with the aim of bringing girls closer to the engineering world. Increase laboratory activity in elective courses in the master's degree: these courses are already interdepartmental and the contamination would be easily implemented. Insert the obligation to upload a correct version of the exam topic and guarantee the possibility of accessing the exam topics of previous years and simulations, through a centralized archive. Introduce a new exam session: introduce a total session in conjunction with the second partial test. ",   candidati:[
                            {id:1, imgUrl: "/img/candidati/svoltastudenti/marsona_panci.jpg", name: "Panci Marsona", detto: "MARS"},
                            {id:2, imgUrl: "/img/candidati/svoltastudenti/raif_muhammad.jpg", name: "Muhammad Raif", detto: "RAIF"},
                            {id:3, imgUrl: "/img/candidati/svoltastudenti/mercedes_alazraki.jpg", name: "Alazraki Mercedes", detto: "MERCY AMG"},
                            {id:4, imgUrl: "/img/candidati/svoltastudenti/eric_diluca.jpg", name: "Di Luca Eric Alexandro", detto: "CARLO CRACCO"},
                            {id:5, imgUrl: "/img/candidati/svoltastudenti/yousef_elgohary.jpg", name: "Elgohary Yousef", detto: "YOUS"},
                            {id:6, imgUrl: "/img/candidati/svoltastudenti/lorenzo_lione.jpg", name: "Lione Lorenzo", detto: "LYON"},
                            {id:7, imgUrl: "/img/candidati/svoltastudenti/filiberto_canino.jpg", name: "Canino Filiberto", detto: "FIL"},
                            {id:8, imgUrl: "/img/candidati/svoltastudenti/martina_legnani.jpg", name: "Legnani Martina", detto: "LEGNA"},
                            {id:9, imgUrl: "/img/candidati/svoltastudenti/simone_rapella.jpg", name: "Rapella Simone", detto: "MOMO"},
                            {id:10, imgUrl: "/img/candidati/svoltastudenti/mattia_marinoni.jpg", name: "Marinoni Mattia", detto: "TIA"},
                            {id:11, imgUrl: "/img/candidati/svoltastudenti/anuar_mancini.jpg", name: "Mancini Anuar", detto: "DOPPIO MALTO"},
                            {id:12, imgUrl: "/img/candidati/svoltastudenti/alessandro_baserga.jpg", name: "Baserga Alessandro", detto: "BASE"},
                            {id:13, imgUrl: "/img/candidati/svoltastudenti/alessio_rocca.jpg", name: "Rocca Alessio", detto: "IL PRESIDENTE"},
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
                        name: "3I",
                   desc: "Our work in the 3I school will mainly focus on 3 aspects: enhancing the three-year degree, increasing the quality of the teaching experience and building a teaching that takes into account the digital experience of the Covid emergency. even more difficult to enter the master's without policies to enhance the course of the three-year degree, which is increasingly losing quality in teaching. To increase the quality of teaching, we believe that it is essential to increase the possibility of personalizing one's own course of study, to starting from graduate degrees in discontinuity. Finally, we want to grasp the positive aspects of digital, such as recordings, to improve innovative teaching. ",   candidati:
                    [
						{id:1, imgUrl: "/img/candidati/listaaperta/alessandro_alladio.jpg", name: "Alladio Alessandro", detto: "LALO"},
                        {id:2, imgUrl: "/img/candidati/listaaperta/emanuela_dotti.jpg", name: "Dotti Emanuela", detto: "MANU"},
						{id:3, imgUrl: "/img/candidati/listaaperta/giovanni_cavassi.jpg", name: "Cavassi Giovanni", detto: "CAVA"},
						{id:4, imgUrl: "/img/candidati/listaaperta/letizia_maria_perri.jpg", name: "Perri Letizia Maria", detto: "LETI"},
						{id:5, imgUrl: "/img/candidati/listaaperta/john_powell.jpg", name: "Powell John Edgar", detto: "JOHN.JE"},
						{id:6, imgUrl: "/img/candidati/listaaperta/lorenzo_petullicchio.jpg", name: "Petullicchio Lorenzo", detto: "PETU"},
                        {id:7, imgUrl: "/img/candidati/listaaperta/francesca_castellotti.jpg", name: "Castellotti Francesca", detto: "FRANCI"},
                        {id:8, imgUrl: "/img/candidati/listaaperta/matteo_crivellari.jpg", name: "Crivellari Matteo", detto: "CRIVE"},
						{id:9, imgUrl: "/img/candidati/listaaperta/gloria_lopiano.jpg", name: "Lopiano Gloria", detto: ""},
						{id:10, imgUrl: "/img/candidati/listaaperta/luca_mandelli.jpg", name: "Mandelli Luca", detto: "MANDO"},
						{id:11, imgUrl: "/img/candidati/listaaperta/stefano_garavaglia.jpg", name: "Garavaglia Stefano", detto: "IZ"},
						{id:12, imgUrl: "/img/candidati/listaaperta/giuliano_gemmani.jpg", name: "Gemmnani Giuliano", detto: "GEMMA"},
						{id:13, imgUrl: "/img/candidati/listaaperta/marco_gandolla.jpg", name: "Gandolla Marco", detto: "QUAGLIA"},
						{id:14, imgUrl: "/img/candidati/listaaperta/francesco_boldrini.jpg", name: "Boldrini Francesco", detto: "BOLD"},
						{id:15, imgUrl: "/img/candidati/listaaperta/marco_guerini.jpg", name: "Guerini Marco", detto: "GUERO"}
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
                        name: "3I",
                  desc: "Exam calendars often make us turn up our noses: dates too close or far from each other, overlaps ... Is there something that protects us? For now only 'guidelines', so we want a regulation that guarantees us our rights! We want to improve teaching by enhancing laboratories, creating new spaces to allow students to carry out their projects and add the possibility of expressing an opinion even after an exam. ",    candidati:
                    [
                      {id: 1 , imgUrl: "/img/candidati/ternasinistrorsa/clarissa_pasculli.png", name: "Pasculli Clarissa", detto: ""},
                      {id: 2 , imgUrl: "/img/candidati/ternasinistrorsa/pedro_bossi.png", name: "Bossi Pedro", detto: ""}

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
                        name: "3I",
                 desc: "Customizable study plan: we believe that everyone should decide their own study path with as few constraints as possible so that new and multidisciplinary professional figures are created. We believe that the abolition of access to the master's is a further incentive to continue their studies and fight dropping out of studies, a characteristic and serious problem of our University. The differences between brackets must be abolished by promoting virtuous examples. Always with a view to increasing the choice between courses, we want to increase the number of laboratories to choice.",        candidati:
                        [
                        {id: 1 , imgUrl: "/img/candidati/studentiindipendenti/edoardo_marcucci.PNG", name: "Marcucci Edoardo", detto: ""},
                        {id: 2 , imgUrl: "/img/candidati/studentiindipendenti/alice_portentoso.PNG", name: "Portentoso Alice", detto: ""},
                        {id: 3 , imgUrl: "/img/candidati/studentiindipendenti/elena_fiorani.PNG", name: "Fiorani Elena", detto: ""},
                        {id: 4 , imgUrl: "/img/candidati/studentiindipendenti/marco_zamboni.PNG", name: "Zamboni Marco", detto: "ZAMBO"},
                        {id: 5 , imgUrl: "/img/candidati/studentiindipendenti/jonathan_wolff.PNG", name: "Wolff Jonathan", detto: "JONNY"},
                        {id: 6 , imgUrl: "/img/candidati/studentiindipendenti/francesca_benatti.PNG", name: "Benatti Francesca", detto: ""},
                        {id: 7 , imgUrl: "/img/candidati/studentiindipendenti/mario_spiniello.PNG", name: "Spiniello Mario", detto: ""},
                        {id: 8 , imgUrl: "/img/candidati/studentiindipendenti/gaia_carbone.PNG", name: "Carbone Gaia", detto: ""},
                        {id: 9 , imgUrl: "/img/candidati/studentiindipendenti/davide_stramare.PNG", name: "Stramare Davide", detto: "DADO"},
                        {id: 10 , imgUrl: "/img/sip.png", name: "Truvolo Federica", detto: ""},
                        {id: 11 , imgUrl: "/img/candidati/studentiindipendenti/sara_ehetagegnehu_finardi.PNG", name: "Finardi Sara Ehetagegnehu", detto: "FES"},
                        {id: 12 , imgUrl: "/img/candidati/studentiindipendenti/francesco_puddu.PNG", name: "Puddu Francesco", detto: ""},
                        {id: 13 , imgUrl: "/img/candidati/studentiindipendenti/pietro_contardi.PNG", name: "Contardi Pietro", detto: ""},
                        {id: 14 , imgUrl: "/img/candidati/studentiindipendenti/roberto_serino.PNG", name: "Serino Roberto", detto: ""},
                        {id: 15 , imgUrl: "/img/candidati/studentiindipendenti/alice_oppizzii.PNG", name: "Oppizzii Alice", detto: ""}
                        ]
                    }
                ]
            }
        ]
    }
  }
}
</script>
