<template>
    <div>
        <ListeListaDettaglio :data-lista="items" language="en" />
    </div>
</template>

<script>
export default {
    data () {
    return {
      items: {
            name: "Svoltastudenti",
            mainWebsiteUrl: "https://elezioni2021.svoltastudenti.it",
            mainProgrammaUrl: "https://www.polimi.it/fileadmin/user_upload/il_Politecnico/votazioni-studenti/Votazioni_2021/programmi-elettorali/Svoltastudenti_-_Inglese.pdf",
           desc: ["Born in 2008 to involve all students in the training and decision-making processes of the University that we experience every day. Opportunities, ideas and representatives completely independent from parties: we are non-partisan, secular and multicultural."],  imageUrl:"/img/svolta.png",
            instagram:"https://www.instagram.com/svoltastudenti/",
            programmaSottotitolo:"StudentsMakePolimi",
            programma:
                [
                    {
                        id : 1,
                    title: "MORE STUDENT-FRIENDLY EDUCATION",
                        url : '/img/programmi/svoltastudenti/1.jpg',
                         desc: "We want to expand the choice of degree theses, including the possibility of sharing them with other courses of study, create an online platform that facilitates collaboration between students, set up aid networks between students for international mobility, set up a post-exam questionnaire for the evaluation of the methods of administration, and create ultra short mobility programs."
                    },
                    {
                        id: 2,
    title: 'COST REDUCTION AND FINANCIAL SUPPORT',
             url : '/img/programmi/svoltastudenti/2.jpg',
                  desc: "We will continue to fight to maintain the policy of SUITABLE = BENEFICIARIES, to guarantee discounts for students who carry out complementary activities (sport, work), lower the price of menus in canteens and expand agreements for students for events, fairs and theaters"   },
                    {
                        id : 3,
                  title: "EQUAL OPPORTUNITIES",
                     url : '/img/programmi/svoltastudenti/4.jpg',
                desc: "We will ask for the inclusion of courses on Diversity & Inclusion in all degree courses, and we will promote the relaunch of the psychological help desk and the POLIPSI service, also implementing peer-to-peer action."      },
                    {
                        id: 4,
                   title: 'CAMPUS LIFE AND ENVIRONMENT',
                        url : '/img/programmi/svoltastudenti/3.jpg',
                desc: "We want to make the Politecnico the first totally Carbon Neutral Italian University by 2040, engage the University in the implementation of the UN 2030 Agenda and the respective Sustainable Development Goals, and develop an ethical and humanistic footprint in all degree courses."     },
                ],
            senato:
            {
             desc: "In the Senate it is essential for us to carry forward student-friendly ideas, in a way that is unrelated to party and confessional influences. We carry on the dialogue with the institutions requesting mutual respect, in order to bring the choices of the University more and more in favor of the students. ",   candidati:[
                    { id: 1, imgUrl: "/img/candidati/svoltastudenti/marco_cesaro.jpg", name: "Cesaro Marco", detto: "SOMMELIER"},
                    { id: 2, imgUrl: "/img/candidati/svoltastudenti/lorenzo_ghettini.jpg", name: "Ghettini Lorenzo", detto: "LO SPEAKER"},
                    { id: 3, imgUrl: "/img/candidati/svoltastudenti/davide_diceglie.jpg", name: "Di Ceglie Davide", detto: "REFLASH"},
                    { id: 4, imgUrl: "/img/candidati/svoltastudenti/matteo_reda.jpg", name: "Reda Matteo", detto: ""},
                    { id: 5, imgUrl: "/img/candidati/svoltastudenti/alessia_bove.jpg", name: "Bove Alessia", detto: "ALESSIA"},
                    { id: 6, imgUrl: "/img/candidati/svoltastudenti/lorenzo_macovei.jpg", name: "Macovei Lorenzo", detto: "MACOSSS"},
                    { id: 7, imgUrl: "/img/candidati/svoltastudenti/elena_zannotti.jpg", name: "Zannotti Elena", detto: "ELLE"},
                    { id: 8, imgUrl: "/img/candidati/svoltastudenti/klaudio_luku.jpg", name: "Luku Klaudio", detto: "KLAUDIO CON LA K"}
                ]
            },
            CdA:{
             desc: "We strive every year to maintain the policy of SUITABLE = BENEFICIARIES, and in the Board of Directors we want to continue working to reduce the gaps between students of different groups, to ensure that the opportunities with tenders increase more and more and to protect students the weakest and their families. ",   candidati:[
                    { id: 1, imgUrl: "/img/candidati/svoltastudenti/antonino_sgroi.jpg", name: "Sgroi Antonino", detto: "LILLO"},
                    { id: 2, imgUrl: "/img/candidati/svoltastudenti/eva_parenti.jpg", name: "Parenti Eva", detto: "EVA"},
                    { id: 3, imgUrl: "/img/candidati/svoltastudenti/giacomo_schiavone.jpg", name: "Schiavone Giacomo", detto: "GIACK"},
                    { id: 4, imgUrl: "/img/candidati/svoltastudenti/lorenzo_dionigi.jpg", name: "Dionigi Lorenzo", detto: ""}
                ]
            },
            scuole:{
             desc: "In schools we fight for the distribution of credits to be more and more uniform, for the exams to be unified, thus eliminating the differences by bracket, and to create more choice within the courses. create an important student network of peer tutoring and project sharing, and we try to increase the laboratory opportunities more and more, for a more technical polytechnic. ",    auic:{
                  desc: "Meetings, cultural events and conventions: Making the Politecnico itself the scene of integrated meetings and events related to the educational path. Towards the world of work: introducing institutional support to the creation of the portfolio. Implementing courses on design, modeling and application software of the BIM methodology: Implement the teaching of programs in the first years of the course of study. Insertion of annual workshops: 3 months are not enough to carry out projects that are up to standard. ",	candidati:[
                        { id: 1, imgUrl: "/img/candidati/svoltastudenti/elena_picchetti.jpg", name: "Picchetti Elena", detto: ""},
                        { id: 2, imgUrl: "/img/candidati/svoltastudenti/davide_diceglie_auic.jpg", name: "Di Ceglie Davide", detto: "REFLASH"},
                        { id: 3, imgUrl: "/img/candidati/svoltastudenti/ian_fernandez.jpg", name: "Fernàndez Nava Ian Anthony Alloxis", detto: "IANF"},
                        { id: 4, imgUrl: "/img/candidati/svoltastudenti/giacomo_schiavone_auic.jpg", name: "Schiavone Giacomo", detto: "GIACK"},
                        { id: 5, imgUrl: "/img/candidati/svoltastudenti/dalila_melotti.jpg", name: "Melotti Dalila", detto: "DIDI"}
					]
                },
                trei:{
               desc: "Create a network of Ambassadors with the aim of bringing girls closer to the engineering world. Increase laboratory activity in elective courses in the master's degree: these courses are already interdepartmental and the contamination would be easily implemented. Insert the obligation to upload a correct version of the exam topic and guarantee the possibility of accessing the exam topics of previous years and simulations, through a centralized archive. Introduce a new exam session: introduce a total session in conjunction with the second partial test. ",		candidati:[
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
                },
                icat:{
               desc: "PEER TUTORING: Encourage and deepen the use of peer tutoring. New connections with the professional world: organize site visits, company visits and 'face to face' interviews with professionals in the sector. PHYSICS 1+ PHYSICS 2A: Breaking the annual exam in two modules, to allow students to take the two exams separated from each other / in different academic years. LABS: introduction of laboratories and classroom experiences in the three-year courses in order to give practical feedback to the theory. ",	candidati:[
						{id:1, imgUrl: "/img/candidati/svoltastudenti/eleonora_pietrobelli.jpg", name: "Pietrobelli Eleonora", detto: ""},
                        {id:2, imgUrl: "/img/candidati/svoltastudenti/antonino_sgroi_icat.jpg", name: "Sgroi Antonino", detto: "LILLO"},
						{id:3, imgUrl: "/img/candidati/svoltastudenti/fabrizio_murillo.jpg", name: "Murillo Fabrizio Roldos Jose", detto: ""},
						{id:4, imgUrl: "/img/candidati/svoltastudenti/henry_andrade.jpg", name: "Andrade Henry", detto: ""},
						{id:5, imgUrl: "/img/candidati/svoltastudenti/elena_zannotti_icat.jpg", name: "Zannotti Elena", detto: "ELLE"}
                    ]
                },
                design:{
                  desc: "Create spaces for the exchange of advanced materials from projects. Implement the standardization of the software used in the courses, updating them to what is now required by the world of work and creation of a Mooc library / video tutorial on the use of the various software. Introduce more workshops and passion in action in collaboration between the different addresses. Insert the possibility of choosing the bracket in the laboratory courses that have differences in the projects.",
                  	candidati:[
						{id:1, imgUrl: "/img/candidati/svoltastudenti/marco_tintori.jpg", name: "Tintori Marco", detto: "TINTO"},
                        {id:2, imgUrl: "/img/candidati/svoltastudenti/giulia_daleo.jpg", name: "D'Aleo Giulia", detto: "GIUS"},
						{id:3, imgUrl: "/img/candidati/svoltastudenti/vittorio_perobelli.jpg", name: "Perobelli Vittorio", detto: "PERO"},
						{id:4, imgUrl: "/img/candidati/svoltastudenti/eva_parenti_design.jpg", name: "Parenti Eva", detto: "EVA"}
                    ]
                }
            }
        }
    }
  }
}
</script>
