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
            name:"ICAT",
            desc:"La Scuola di Ingegneria Civile Ambientale e Territoriale eroga i Corsi di Studio in Ingegneria per l'Ambiente e il Territorio (campus Leonardo), Ingegneria Civile (campus Leonardo), Ingegneria Civile per la Mitigazione del Rischio/Civil Engineering for Risk Mitigation (campus Lecco) e Geoinformatics Engineering/Ingegneria Geoinformatica (campus Leonardo)."
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
                        name: "ICAT",
                        desc: "PEER TUTORING: Incentivare e approfondire l’utilizzo del peer tutoring. Nuovi collegamenti con il mondo professionale: organizzare visite in cantiere, visite in azienda e colloqui “face to face” con professionisti del settore. FISICA 1+ FISICA 2A: Spezzare l’esame annuale in due moduli, per permettere agli studenti di sostenere i due esami distaccati tra loro/ in anni accademici diversi. LABS: introduzione di laboratori ed esperienze in aula nei corsi triennali al fine di dare un riscontro pratico alla teoria.",
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
                        desc: "La scuola ICAT, visto il numero ridotto di studenti, deve investire risorse per aumentare la qualità della didattica: scaglioni più piccoli, più laboratori e esperienze personalizzate, fin dalla triennale. Inoltre, lavoreremo per aumentare le politiche di orientamente verso la magistrale e il mondo del lavoro, anche grazie all’introduzione di corsi professionalizzanti e tirocini.",
                    candidati:
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
                        desc: "Ridurre il carico degli esami aggiungendo le prove in itinere, limitando le prove con diverse modalità (scritto, orale e progetto obbligatori) e migliorando le ore di esercitazioni eliminando le ripetizioni tra i corsi. In particolare, ci impegneremo per rendere più equo il rapporto tra la valutazione del progetto e il tempo necessario per realizzarlo. Dobbiamo, e insieme possiamo, arrivare all’eliminazione delle precedenze! Ad ICAT ci impegneremo per più praticità ed esperienza sul campo, insieme ad un supporto crescente da parte del Career Service e per aver maggiormente al centro dei nostri corsi il tema della sostenibilità ambientale.",
                        candidati:
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
           	            desc: "A ICAT crediamo che i parziali debbano essere una libera scelta che non precluda il numero di appelli di una sessione. Crediamo che sia necessario aumentare il numero di laboratori che siano anche specifici ai 2 corsi di studio che compongono la scuola. La valutazione degli esami deve avere delle tempistiche certe dato che troppo spesso succede siano a discrezione del docente mettendo in difficoltà scaglioni di studenti. Crediamo sia necessario implementare delle modalità didattiche più interattive che stimolino la comprensione e la partecipazione dellз studentз.",
                        candidati:
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
