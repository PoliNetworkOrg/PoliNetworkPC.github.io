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
            name:"Design",
            desc:"La Scuola del Design del Politecnico di Milano è oggi la più grande Università internazionale, sia per numero di studenti sia per numero di docenti, per la formazione dei progettisti di prodotto, di comunicazione, di interni e di moda. È attiva a Milano in un campus di recente costruzione. Alcuni dati che ne descrivono la portata: circa 5000 studenti, oltre 450 docenti e circa 400 tra assistenti, esercitatori e cultori della materia di ausilio alla didattica. I percorsi formativi proposti si articolano in due livelli di laurea, la Laurea di primo livello e la Laurea Magistrale di ulteriori due anni. Secondo il “QS Ranking by Subject” la Scuola del Design è 1ª in Italia, 3ª in Europa e 5ª nel mondo."
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
                        name: "Design",
                        desc : "Creare spazi per lo scambio di materiali avanzati dai progetti. Implementare l’omologazione dei software usati nei corsi, aggiornandoli a ciò che ora viene richiesto dal mondo del lavoro e creazione di una libreria di Mooc/video tutorial sull’utilizzo dei vari software. Introdurre più workshop e passion in action in collaborazione tra i diversi indirizzi. Inserire la possibilità di poter scegliere lo scaglione nei corsi di laboratorio che presentano differenze nei progetti.",
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
                    desc : "Proponiamo di aumentare i rapporti con le aziende per garantire l’ibridazione dei quattro corsi di studio nei workshop. Vogliamo aumentare le interazioni con il Career Service durante le lezioni chiedendo di poter avere un Career Point all’interno del campus. Desideriamo revisionare gli obiettivi dei laboratori di elementi visivi per tutti i corsi di studio, così da aumentare le capacità di visual del progetto. Infine, proponiamo di aumentare le convenzioni con i musei: entrata gratuita per gli studenti del Politecnico alla Triennale, alla Fondazione Castiglioni e al Kartell museo. Inoltre chiediamo la possibilità di ottenere pass a fiere come il Salone del mobile. Per migliorare il nostro Campus, proponiamo una tensostruttura con tavoli e sedie cablati nei prati tra il B6 e il B8, e il cablaggio dei tavoli del pratone dietro al B1.",
                    candidati:
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
                        desc : "Continuiamo la nostra lotta per il rimborso dei costi dei materiali e per la stipulazione di convenzioni con negozi specialistici. Garantire il rimborso spese vuol dire dare a tuttз la possibilità di sperimentare, indipendentemente dalla fascia di reddito di appartenenza. Vogliamo inoltre garantire la possibilità ad ogni studentə di scegliere, all’interno della calendarizzazione, quando sostenere i propri esami. Chiediamo inoltre che siano chiare le valutazioni d’esame, con criteri omogenei tra diversi scaglioni. Vogliamo promuovere una cultura del progetto multidisciplinare, aperta alla sperimentazione e alla contaminazione. Proponiamo il potenziamento dei laboratori già esistenti e la valutazione di un nuovo Polifactory, sul modello già esistente, di libero accesso allз studentз.",
                        candidati:
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
                        desc : "Crediamo che sia necessario istituire un fondo per il materiale progetti e prototipi così da evitare di rendere eccessivo il costo per lз studentз di design. Vogliamo potenziare il Poliprint rendendo la qualità delle stampe più più alta e i prezzi più popolari. Vogliamo un deposito sicuro per prototipi in B2 così da non dover far viaggiare pure i modellini e un punto in cui smaltire i materiali che possono essere riutilizzati. Vogliamo regolamentare le revisioni intermedie in modo che si possano effettuare con supporto digitale.",
                        candidati:
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
