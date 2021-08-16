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
            name:"AUIC",
            desc:"Nella scuola AUIC sono eletti 5 rappresentanti degli studenti in Giunta della scuola."
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
                        name: "AUIC",
                        desc: "Incontri, eventi culturali e convenzioni: Rendere il Politecnico stesso teatro di incontri ed eventi integrati e inerenti al percorso didattico. Verso il mondo del lavoro: introdurre supporto istituzionale alla creazione del portfolio. Implementare corsi su software di disegno, modellazione e applicazione della metodologia BIM: Implementare l’insegnamento di programmi nei primi anni del corso di studi. Inserimento laboratori annuali: 3 mesi non sono sufficienti per portare avanti progetti all’altezza.",
           	            candidati:[
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
                        desc: "In scuola Auic lavoreremo su due pilastri: didattica e diritto allo studio. Per quanto riguarda la didattica, vorremmo dotare i docenti di strumenti tecnologici e digitali per aggiornare la didattica alle nuove forme che saranno decisive per noi studenti nel mondo del lavoro. Il Diritto allo Studio per gli studenti di Auic passa inevitabilmente dai costi che si devono sostenere per stampe e modelli: proponiamo un fondo e delle convenzioni per venire incontro, almeno in parte, a tutti gli studenti.",
                    candidati:
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
                        desc: "Tutti abbiamo diritto agli stessi strumenti per la progettazione per questo richiediamo un accesso digitale alla bibliografia e un maggior numero di software gratuiti come Sketch-up pro e Lumion. Ci impegneremo anche per ridurre ulteriori costi a carico di noi studentз richiedendo la strumentazione adatta per poter svolgere revisioni in digitale. Ogni studentə vale più della sua media per questo proponiamo di essere valutati equamente per gli accessi sis ai laboratori che alle magistrali",
           	            candidati:
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
                        desc: "Chiediamo che siano implementati più corsi di software per la rappresentazione digitale per garantire una preparazione a 360 gradi. Vogliamo che ci sia una maggiore coordinazione delle consegne tra le diverse classi di laboratori per evitare la dispersione all'interno dei corsi. E' necessario istituire un fondo per il materiale didattico e garantire revisioni a distanza per assicurare a tuttз la partecipazione attiva alle lezioni e ai laboratori. Crediamo infine che si possa accettare massimo una revisione a settimana per evitare di avere periodi di eccessivo stress e sovrapposizioni.",
                        candidati:
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
