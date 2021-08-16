<template>
    <div>

        <ListeConfrontoListe :liste="liste" :organi-confronto="organiConfronto" language="it" />
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
            desc:"La scuola coordina le attività didattiche per la maggior parte delle lauree e delle lauree magistrali in Ingegneria del Politecnico di Milano. La Scuola di Ingegneria Industriale e dell’Informazione è di gran lunga la più grande delle quattro presenti al Politecnico, con circa il 60 percento degli studenti iscritti nei propri corsi di Laurea e Laurea Magistrale. La Commissione Paritetica ha il compito di monitorare l’offerta formativa, la qualità della didattica e i servizi erogati agli studenti e di esprimere pareri sull'istituzione e la soppressione dei Corsi di studio. É composta da 5 studenti e 5 professori."
        }
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
                        desc: "Creare di rete di Ambassadors con lo scopo di avvicinare le ragazze al mondo ingegneristico. Aumentare l’attività laboratoriale nei corsi a scelta in magistrale: questi corsi sono già interdipartimentali e la contaminazione sarebbe facilmente implementabile. Inserire l’bbligo di caricare una versione corretta del tema d’esame e garantire la possibilità di accedere ai temi d’esami degli anni precedenti e simulazioni, attraverso un archivio centralizzato. Introdurre un nuovo appello d’esame: introdurre un appello totale in concomitanza della seconda prova parziale.",
           	            candidati:[
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
                        desc :"Il nostro lavoro nella scuola 3I si concentrerà principalmente su 3 aspetti: valorizzare la laurea triennali, aumentare la qualità dell’esperienza didattica e costruire una didattica che tiene conto dell’esperienza digitale dell’emergenza Covid. Non si può pensare di rendere ancora più difficile l’ingresso in magistrale senza politiche di valorizzazione del percorso della laurea triennale, che sempre di più sta perdendo qualità nella didattica. Per aumentare la qualità della didattica crediamo che sia fondamentale aumentare la possibilità di personalizzare il proprio percorso di studi, a partire dalle lauree in discontinuità. Infine, ci teniamo a cogliere gli aspetti positivi del digitale, come le registrazioni, per migliorare la didattica innovativa.",
                    candidati:
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
                        desc :"I calendari d’esame ci fanno spesso storcere il naso: date troppo vicine o lontane tra loro, sovrapposizioni… Esiste qualcosa che ci tuteli? Per ora solo delle “linee guida”, per questo vogliamo un regolamento che ci garantisca i nostri diritti! Vogliamo migliorare la didattica valorizzando laboratori, realizzando nuovi spazi per permettere agli studenti di realizzare i loro progetti e aggiungere la possibilità di esprimere un giudizio anche dopo un esame.",
                    candidati:
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
                        desc :"Piano di studi personalizzabile: crediamo che ognuno debba decidere con meno vincoli possibile il proprio percorso di studi in modo che si creino figure professionali nuove e multidisciplinari. Crediamo che l'abolizione delle medie di accesso alla magistrale sia  un ulteriore incentivo a far proseguire gli studi e a combattere l'abbandono degli studi, un problema caratteristico e grave del nostro ateneo. Le differenze tra scaglioni devono essere abolite promuovendo gli esempi virtuosi. Sempre nell'ottica di aumentare la scelta tra i corsi vogliamo incrementare il numero di laboratori a scelta.",
                        candidati:
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
