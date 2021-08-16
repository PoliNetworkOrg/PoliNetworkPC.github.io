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
            name:"Design",
    desc: "The School of Design of the Politecnico di Milano is today the largest international University, both for the number of students and for the number of teachers, for the training of product, communication, interior and fashion designers. It is active in Milan in a recently built campus. Some data describing its scope: about 5000 students, over 450 teachers and about 400 assistants, trainers and students of teaching aids. The training courses offered are divided into two degree levels, the Bachelor's Degree and the Master's Degree for a further two years. According to the 'QS Ranking by Subject', the School of Design is 1st in Italy, 3rd in Europe and 5th in the world. "    }
    ],

      liste: [
            {
                id: 1,
                name: "Svoltastudenti",
                imageUrlHorizontal: "/img/logo-svolta_hor.png",
                linkLista: "/lista/svoltastudenti/",
                organi: [
                    {
                        name: "Design",
                    desc: "Create spaces for the exchange of advanced materials from projects. Implement the standardization of the software used in the courses, updating them to what is now required by the world of work and creation of a Mooc library / video tutorial on the use of the various software. Introduce more workshops and passion in action in collaboration between the different addresses. Insert the possibility of choosing the bracket in the laboratory courses that have differences in the projects.     ",
                    candidati:[
                            {id:1, imgUrl: "/img/candidati/svoltastudenti/marco_tintori.jpg", name: "Tintori Marco", detto: "TINTO"},
                            {id:2, imgUrl: "/img/candidati/svoltastudenti/giulia_daleo.jpg", name: "D'Aleo Giulia", detto: "GIUS"},
                            {id:3, imgUrl: "/img/candidati/svoltastudenti/vittorio_perobelli.jpg", name: "Perobelli Vittorio", detto: "PERO"},
                            {id:4, imgUrl: "/img/candidati/svoltastudenti/eva_parenti_design.jpg", name: "Parenti Eva", detto: "EVA"}
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
                        name: "Design",
               desc: "We propose to increase relationships with companies to ensure the hybridization of the four courses of study in the workshops. We want to increase interactions with the Career Service during the lessons by asking to have a Career Point on campus. We want to review the objectives of the visual elements laboratories for all study courses, so as to increase the visual skills of the project. Finally, we propose to increase the agreements with museums: free admission for Politecnico students to the Triennale, the Castiglioni Foundation and the Kartell museo. We also ask for the possibility of obtaining passes to fairs such as the Salone del mobile. To improve our Campus, we offer a tensile structure with tables and chairs wired in the lawns between B6 and B8, and the wiring of the tables in the lawn behind the B1. ",      candidati:
                    [
						{id:1, imgUrl: "/img/candidati/listaaperta/chiara_giardiello.jpg", name: "Giardiello Chiara Edda Maria", detto: "CHIARA"},
                        {id:2, imgUrl: "/img/candidati/listaaperta/sofia_boni.jpg", name: "Boni Sofia", detto: "SOFI"},
						{id:3, imgUrl: "/img/candidati/listaaperta/maddalena_milanesi.jpg", name: "Milanesi Maddalena", detto: "MADDA"},
						{id:4, imgUrl: "/img/candidati/listaaperta/lorenzo_bressan.jpg", name: "Bressan Lorenzo", detto: "BRACE"},
						{id:5, imgUrl: "/img/candidati/listaaperta/maria_sammarini.jpg", name: "Sammarini Maria", detto: "MERY"},
						{id:6, imgUrl: "/img/candidati/listaaperta/michele_dondi.jpg", name: "Dondi Michele", detto: "MIKE"},
                        {id:7, imgUrl: "/img/candidati/listaaperta/luca_tassetto.jpg", name: "Tassetto Luca", detto: "TAX"},
                        {id:8, imgUrl: "/img/candidati/listaaperta/giacomo_maria_tomesani.jpg", name: "Tomesani Giacomo Maria", detto: "JACK"},
						{id:9, imgUrl: "/img/candidati/listaaperta/caterina_maria_grillo.jpg", name: "Grillo Caterina Maria", detto: "CATE"},
						{id:10, imgUrl: "/img/candidati/listaaperta/giovanni_clericetti.jpg", name: "Clericetti Giovanni", detto: "GIOCLE"},
						{id:11, imgUrl: "/img/candidati/listaaperta/michele_bruno.jpg", name: "Bruno Michele", detto: "MICHI"},
						{id:12, imgUrl: "/img/candidati/listaaperta/chiara_mazzeo.jpg", name: "Mazzeo Chiara", detto: ""},
						{id:13, imgUrl: "/img/candidati/listaaperta/giovanni_provesi.jpg", name: "Provesi Giovanni", detto: "GIO"},
						{id:14, imgUrl: "/img/candidati/listaaperta/chiara_anceschi.jpg", name: "Anceschi Chiara", detto: "CHIANCHI"}
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
                        name: "Design",
                     desc: "We continue our fight for the reimbursement of the costs of materials and for the stipulation of agreements with specialist shops. Guaranteeing the reimbursement of expenses means giving everyone the opportunity to experiment, regardless of the income bracket they belong to. possibility for each student to choose, within the schedule, when to take their exams. We also ask that the exam assessments be clear, with homogeneous criteria between different brackets. We want to promote a multidisciplinary project culture, open to experimentation and contamination. We propose the upgrading of the existing laboratories and the evaluation of a new Polifactory, on the existing model, open to the students. ",    candidati:
                        [
                           {id: 1 , imgUrl: "/img/candidati/ternasinistrorsa/mercedes_vitali.png", name: "Vitali Mercedes", detto: ""},
                           {id: 2 , imgUrl: "/img/candidati/ternasinistrorsa/giovanni_smoquina.png", name: "Smoquina Giovanni", detto: ""}
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
                        name: "Design",
                    desc: "We believe it is necessary to set up a fund for material projects and prototypes in order to avoid making the cost for the design student excessive. We want to enhance Poliprint by making the quality of the prints higher and the prices more popular. We want a deposit. safe for prototypes in B2 so that the models do not have to travel as well and a point to dispose of the materials that can be reused. We want to regulate the intermediate revisions so that they can be carried out with digital support. ",     candidati:
                        [
                        {id: 1 , imgUrl: "/img/candidati/studentiindipendenti/ilenia_ippolito.PNG", name: "Ippolito Ilenia", detto: ""},
                        {id: 2 , imgUrl: "/img/candidati/studentiindipendenti/laura_giordano.PNG", name: "Giordano Laura", detto: ""},
                        {id: 3 , imgUrl: "/img/candidati/studentiindipendenti/irene_la_ferla.PNG", name: "La Ferla Irene", detto: ""},
                        {id: 4 , imgUrl: "/img/candidati/studentiindipendenti/chiara_arrigoni.PNG", name: "Arrigoni Chiara", detto: ""},
                        {id: 5 , imgUrl: "/img/candidati/studentiindipendenti/federica_pompa.PNG", name: "Pompa Federica", detto: ""},
                        {id: 6 , imgUrl: "/img/candidati/studentiindipendenti/caterina_creanza.PNG", name: "Creanza Caterina", detto: ""},
                        {id: 7 , imgUrl: "/img/candidati/studentiindipendenti/andreea_ciortan.PNG", name: "Ciortan Andreea", detto: ""},
                        {id: 8 , imgUrl: "/img/sip.png", name: "Patti Lavinia", detto: ""}
                        ]
                    }
                ]
            }
        ]
    }
  }
}
</script>
