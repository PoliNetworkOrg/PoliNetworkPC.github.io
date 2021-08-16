<template>
    <div>

        <PagesSenatoCda language="en" :organi-confronto="organiConfronto" :liste="liste" />
    </div>
</template>

<script>
export default {

    data () {
    return {

organiConfronto:[
        {
            id:1,
            name:"Senate",
      desc: "THE SENATE GUIDES AND PROGRAMS THE DEVELOPMENT OF THE UNIVERSITY, WITH PARTICULAR REGARD TO TEACHING AND RESEARCH, AND SUPERVISES THE OVERALL FUNCTIONING OF THE INSTITUTION."  },
        {
            id:2,
         name: "Board of Directors",
      desc: "THE BOARD OF DIRECTORS DEFINES THE LONG-TERM ECONOMIC PLANNING BASED ON THE PROPOSALS AND OPINIONS OF THE ACADEMIC SENATE."   }
    ],

      liste: [
            {
                id: 1,
                name: "Svoltastudenti",
                imageUrlHorizontal: "/img/logo-svolta_hor.png",
                linkLista: "/lista/svoltastudenti/",
                organi:[
                    {
                   name: "Senate",
                         desc: "In the Senate it is essential for us to carry forward student-friendly ideas, in a way that is unrelated to party and confessional influences. We carry on the dialogue with the institutions requesting mutual respect, in order to bring the choices of the University more and more in favor of the students. ",     candidati:[
                            {id: 1, imgUrl: "/img/candidati/svoltastudenti/marco_cesaro.jpg", name: "Cesaro Marco", detto: "SOMMELIER"},
                            { id: 2, imgUrl: "/img/candidati/svoltastudenti/lorenzo_ghettini.jpg", name: "Ghettini Lorenzo", detto: "LO SPEAKER"},
                            { id: 3, imgUrl: "/img/candidati/svoltastudenti/davide_diceglie.jpg", name: "Di Ceglie Davide", detto: "REFLASH"},
                            { id: 4, imgUrl: "/img/candidati/svoltastudenti/matteo_reda.jpg", name: "Reda Matteo", detto: ""},
                            { id: 5, imgUrl: "/img/candidati/svoltastudenti/alessia_bove.jpg", name: "Bove Alessia", detto: "ALESSIA"},
                            { id: 6, imgUrl: "/img/candidati/svoltastudenti/lorenzo_macovei.jpg", name: "Macovei Lorenzo", detto: "MACOSSS"},
                            { id: 7, imgUrl: "/img/candidati/svoltastudenti/elena_zannotti.jpg", name: "Zannotti Elena", detto: "ELLE"},
                            { id: 8, imgUrl: "/img/candidati/svoltastudenti/klaudio_luku.jpg", name: "Luku Klaudio", detto: "KLAUDIO CON LA K"}
                        ]
                    },
                    {
                        name: "CdA",
                 desc: "We strive every year to maintain the policy of SUITABLE = BENEFICIARIES, and in the Board of Directors we want to continue working to reduce the gaps between students of different groups, to ensure that the opportunities with tenders increase more and more and to protect students the weakest and their families. ",       candidati:[
                            { id: 1, imgUrl: "/img/candidati/svoltastudenti/antonino_sgroi.jpg", name: "Sgroi Antonino", detto: "LILLO"},
                            { id: 2, imgUrl: "/img/candidati/svoltastudenti/eva_parenti.jpg", name: "Parenti Eva", detto: "EVA"},
                            { id: 3, imgUrl: "/img/candidati/svoltastudenti/giacomo_schiavone.jpg", name: "Schiavone Giacomo", detto: "GIACK"},
                            { id: 4, imgUrl: "/img/candidati/svoltastudenti/lorenzo_dionigi.jpg", name: "Dionigi Lorenzo", detto: ""}
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
                   name: "Senate",
                         desc: "In the Senate we will work to ensure quality teaching open to innovative forms to enhance the attitudes of each student. In addition, it is a fundamental issue for us to encourage internationalization both at the Polytechnic and with experiences abroad.",     candidati:[
                            {id: 1, imgUrl: "/img/candidati/listaaperta/marta_ghidoli.jpg", name: "Ghidoli Marta", detto: "MARTA"},
                            {id: 2, imgUrl: "/img/candidati/listaaperta/alessandro_alladio.jpg", name: "Alladio Alessandro", detto: "LALO"},
                            {id: 3, imgUrl: "/img/candidati/listaaperta/andrea_mandelli.jpg", name: "Mandelli Andrea", detto: "ZAC"},
                            {id: 4, imgUrl: "/img/candidati/listaaperta/chiara_giardiello.jpg", name: "Giardiello Chiara Edda Maria", detto: "CHIARA"},
                            {id: 5, imgUrl: "/img/candidati/listaaperta/francesco_bugo.jpg", name: "Bugo Francesco Maria", detto: "BUGO"},
                            {id: 6, imgUrl: "/img/candidati/listaaperta/maria_zini.jpg", name: "Zini Maria", detto: "MERI"},
                            {id: 7, imgUrl: "/img/candidati/listaaperta/alessandro_maestri.jpg", name: "Maestri Alessandro", detto: "BOBBI"},
                            {id: 8, imgUrl: "/img/candidati/listaaperta/elisabetta_alberton.jpg", name: "Alberton Elisabetta", detto: "BETTA"}
                        ]
                    },
                    {
                        name: "CdA",
                      desc: "In the Board of Directors we will fight for the Right to Education: a decisive battle to allow all students to be able to fully experience the University! Furthermore, we will always strive to guarantee the right funding to develop our campuses more and more like places of meeting and quality. ",  candidati:[
                            {id:1, imgUrl: "/img/candidati/listaaperta/daniele_redaelli.jpg", name: "Radaelli Daniele", detto: "REDA"},
                            {id:2, imgUrl: "/img/candidati/listaaperta/emanuela_dotti.jpg", name: "Dotti Emanuela", detto: "MANU"},
                            {id:3, imgUrl: "/img/candidati/listaaperta/tommaso_sanese.jpg", name: "Sanese Tommaso", detto: "TOMMI"},
                            {id:4, imgUrl: "/img/candidati/listaaperta/sofia_boni.jpg", name: "Boni Sofia", detto: "SOFI"}
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
                    name: "Senate",
                         desc: "Those who study are not just a number: We are more than the grades we get, so access to master's degrees should not be limited only to our average. The right to education must be guaranteed and extended to all people who have it need, for this we propose the raising of the total NO TAX area to at least 30,000€ of ISEE and a progressive and continuous taxation that eliminates the current division into bands. We ask for a Polytechnic that is more accessible architecturally and economically, with canteens at lower prices and free sanitary pads in the bathrooms. A Polytechnic that pays attention to sustainability and disabilities. ",     candidati:[
                            {id: 1 , imgUrl: "/img/candidati/ternasinistrorsa/ada_bacigalupo.png", name: "Bacigalupo Ada", detto: ""}
                        ]
                    },
                    {
                        name: "CdA",
                desc: "Free universities are built from below! Taxation fairer: truly continuous and progressive. We want to raise the maximum threshold of ISEE for the reduction of the contribution so that the taxation is fairer even for those who are above the current We will fight, inside and outside the University, for more state funds in order to always reduce the burden on students and bring the total NO TAX AREA to € 30,000 of ISEE. ",         candidati:[
                            {id: 1 , imgUrl: "/img/candidati/ternasinistrorsa/davide_luzzini.png", name: "Luzzini Davide", detto: ""}
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
                   name: "Senate",
                         desc: "For us in the Senate it is important to discuss political decisions, really opening up the possibility of bringing the issues of the student without the filter of compromise in order to dialogue with the other University members having a clear opinion of everyone.",      candidati:[
                        {id: 1 , imgUrl: "/img/candidati/studentiindipendenti/jonathan_wolff_sen.PNG", name: "Wolff Jonathan", detto: "JONNY"},
                        {id: 2 , imgUrl: "/img/candidati/studentiindipendenti/andrea_iodice.PNG", name: "Iodice Andrea", detto: ""},
                        {id: 3 , imgUrl: "/img/candidati/studentiindipendenti/maria_nicole_deluca_sen.PNG", name: "Deluca Maria Nicole", detto: ""},
                        {id: 4 , imgUrl: "/img/candidati/studentiindipendenti/milagros_magaz.PNG", name: "Magaz Milagros", detto: "MILI"},
                        {id: 5 , imgUrl: "/img/candidati/studentiindipendenti/marco_zamboni_sen.PNG", name: "Zamboni Marco", detto: "ZAMBO"},
                        {id: 6 , imgUrl: "/img/candidati/studentiindipendenti/edoardo_marcucci_sen.PNG", name: "Marcucci Edoardo", detto: ""},
                        {id: 7 , imgUrl: "/img/candidati/studentiindipendenti/mario_spiniello_sen.PNG", name: "Spiniello Mario", detto: ""},
                        {id: 8 , imgUrl: "/img/candidati/studentiindipendenti/davide_stramare_sen.PNG", name: "Stramare Davide", detto: "DADO"}
                        ]
                    },
                    {
                        name: "CdA",
                  desc: "We want to increase the management of funds, turning it towards making the Politecnico an avant-garde University in terms of liveability in the spaces, support and protection of study paths and to guarantee everyone, regardless of academic career, the possibility of doing dignified and valid path. ",      candidati:[
                        {id: 1 , imgUrl: "/img/candidati/studentiindipendenti/gloria_maria_crisogianni_cda.PNG", name: "Crisogianni Gloria Maria", detto: ""},
                        {id: 2 , imgUrl: "/img/candidati/studentiindipendenti/anita_clara_notarianni.PNG", name: "Notarianni Anita Clara", detto: ""},
                        {id: 3 , imgUrl: "/img/candidati/studentiindipendenti/chiara_arrigoni_cda.PNG", name: "Arrigoni Chiara", detto: ""},
                        {id: 4 , imgUrl: "/img/candidati/studentiindipendenti/gaia_carbone_cda.PNG", name: "Carbone Gaia", detto: ""}
                        ]
                    }
                ]
            }
        ]

}
}

}
</script>
