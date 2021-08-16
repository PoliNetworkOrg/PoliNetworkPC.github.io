<template>
    <div>
        <ListeListaDettaglio :data-lista="items" language="it" />
    </div>
</template>

<script>
export default {
    data () {
    return {
      items: {
            name: "La Terna Sinistrorsa",
            mainWebsiteUrl: "https://www.ternasinistrorsa.it/",
            mainProgrammaUrl: "https://www.polimi.it/fileadmin/user_upload/il_Politecnico/votazioni-studenti/Votazioni_2021/programmi-elettorali/La_Terna_Sinistrorsa.pdf",
            desc: ["Siamo La Terna Sinistrorsa, una lista di rappresentanza studentesca del Politecnico di Milano. Da 25 anni lottiamo per un’Università basata sul diritto allo studio e senza disuguaglianze. Inclusione, parità ed equità sono i notri valori fondanti: scopri il nostro programma e i nostri candidati!"],
            imageUrl:"/img/terna.png",
            instagram:"https://www.instagram.com/la_terna_sinistrorsa/",
            programmaSottotitolo:"Siamo più di un numero",
            programma:
                [
                    {
                        id : 1,
                        title: 'Hasta la gratuità',
                        url: '/img/programmi/ternasinistrorsa/1.png',
                        desc: "Assorbenti gratuiti nei bagni dell’Ateneo! Continuiamo a lottare per la gratuità degli assorbenti: che siano accessibili a tutta la componente femminile del Politecnico. La situazione attuale è una scelta politica, non dettata dalla mancanza di soldi. A fronte di un disavanzo di bilancio di 39 milioni, non è mai stata presa in considerazione la proposta che abbiamo sviluppato in due anni di lavoro: con il vostro supporto vogliamo dare un segnale concreto per appianare le disparità di genere e tenere fede ai valori universitari. Non ci sono scuse per non farlo."
                    },
                    {
                        id: 2,
                        title: 'Accessibilità e Inclusione',
                        url: '/img/programmi/ternasinistrorsa/2.png',
                        desc: "L’inclusività è uno dei valori cardine dell’Ateneo, facciamo sì che lo sia anche nella prassi di tutti i giorni. Inclusione e accessibilità, due punti chiave del nostro programma. Dobbiamo superare un sistema basato solamente sulla media, o sul voto di laurea, che rispecchia una meritocrazia finta, che non esprime realmente l’impegno e l’interessamento dellз studentз. Vogliamo impegnarci per abbattere le barriere architettoniche e assicurare maggiore sensibilità per le disabilità."
                    },
                    {
                        id: 3,
                        title: 'Tasse',
                        url: '/img/programmi/ternasinistrorsa/4.png',
                        desc: "Riteniamo indispensabile che i nostri sforzi e progetti di rappresentanza riguardino il diritto allo studio e l’abbassamento delle tasse per coloro che necessitano di un aiuto economico, al fine di minimizzare le disparità tra gli studenti e permettere loro di raggiungere al meglio i propri obiettivi. Ti sembra giusto pagare le tasse per un ISEE che non è il tuo? Secondo noi non lo è. Vogliamo riformare il sistema di tassazione abolendo la divisione in fasce: la tassazione continua permetterebbe di far pagare ad ogni studentз tasse eque secondo le proprie disponibilità economiche."
                    },
                    {
                        id: 4,
                        title: 'Pendolari, Fuorisede e Poli Territoriali',
                        url: '/img/programmi/ternasinistrorsa/3.png',
                        desc: "E' fondamentale un'attenzione maggiore per le categorie poco rappresentate. Per noi è necessario fornire nuove tutele ai pendolari permettendo giustificazioni per assenze o ritardi causati da Trenord, garantire orari compatibili con un rientro in sicurezza ed estendere lo sportello furti non solo agli spazi dell'ateneo. Per i fuorisede dobbiamo ottenere lo spostamento del medico di base in Lombardia, oltre il covid e garantire sconti o rimborsi per il rientro a casa. Nel nostro programma abbiamo dedicato un'intera sezione per i Poli Territoriali, ognuno con le sue problematiche: dalla riduzione quanto più possibile le differenze di tassi di promozione tra sedi di Milano e Poli Territoriali all'aumentare il numero dei rappresentanti. Leggi il nostro programma per saperne di più!"
                    }
                ],
            senato:
            {
                desc: "Chi studia non è solo un numero: Siamo più dei voti che prendiamo, per questo l’accesso alle lauree magistrali non dovrebbe essere vincolato solo alla nostra media. Il diritto allo studio va garantito ed esteso a tutte le persone che ne hanno bisogno, per questo proponiamo l’innalzamento della NO TAX area totale ad almeno 30mila euro di ISEE  e una tassazione progressiva e continua che elimini l’attuale divisione in fasce. Chiediamo un Politecnico più accessibile architettonicamente ed economicamente, con mense a prezzi più bassi e assorbenti gratuiti nei bagni. Un Politecnico attento alla sostenibilità e alle disabilità. ",
                candidati:[
                  {id: 1 , imgUrl: "/img/candidati/ternasinistrorsa/ada_bacigalupo.png", name: "Bacigalupo Ada", detto: ""}
                ]
            },
            CdA:{
                desc: "L’Università gratuita si costruisce dal basso! Tassazione più equa: veramente continua e progressiva. Vogliamo innalzare la soglia massima di ISEE per la riduzione del contributo di modo che la tassazione sia più equa anche per coloro che sono sopra l’attuale massimale. Lotteremo, dentro e fuori l’ateneo, per maggiori fondi statali in modo di ridurre sempre il carico agli studenti e portare la NO TAX AREA totale a 30.000 € di ISEE.",
                candidati:[
                  {id: 1 , imgUrl: "/img/candidati/ternasinistrorsa/davide_luzzini.png", name: "Luzzini Davide", detto: ""}
                ]
            },
            scuole:{
              desc: "Nelle quattro scuole ci impegneremo per una didattica più giusta, per un maggiore rispetto dei nostri diritti, e per eliminare ostacoli retaggio del passato. Ogni scuola ha le sue peculiarità e problematiche, abbiamo studiato molto attentamente quali proposte mettere in campo. Insieme, possiamo ambire a un'Università sempre più a misura di studentə partendo dal basso, dal quotidiano svolgersi di lezioni ed esami",
                auic:{
                    desc: "Tutti abbiamo diritto agli stessi strumenti per la progettazione per questo richiediamo un accesso digitale alla bibliografia e un maggior numero di software gratuiti come Sketch-up pro e Lumion. Ci impegneremo anche per ridurre ulteriori costi a carico di noi studentз richiedendo la strumentazione adatta per poter svolgere revisioni in digitale. Ogni studentə vale più della sua media per questo proponiamo di essere valutati equamente per gli accessi sis ai laboratori che alle magistrali",
                    candidati:
                    [
                      {id: 1 , imgUrl: "/img/candidati/ternasinistrorsa/chiara_nardelli.png", name: "Nardelli Chiara", detto: ""},
                      {id: 2 , imgUrl: "/img/candidati/ternasinistrorsa/letizia_guido.png", name: "Guido Letizia", detto: ""}

                    ]
                },
                trei:{
                    desc :"I calendari d’esame ci fanno spesso storcere il naso: date troppo vicine o lontane tra loro, sovrapposizioni… Esiste qualcosa che ci tuteli? Per ora solo delle “linee guida”, per questo vogliamo un regolamento che ci garantisca i nostri diritti! Vogliamo migliorare la didattica valorizzando laboratori, realizzando nuovi spazi per permettere agli studenti di realizzare i loro progetti e aggiungere la possibilità di esprimere un giudizio anche dopo un esame.",
                    candidati:
                    [
                      {id: 1 , imgUrl: "/img/candidati/ternasinistrorsa/clarissa_pasculli.png", name: "Pasculli Clarissa", detto: ""},
                      {id: 2 , imgUrl: "/img/candidati/ternasinistrorsa/pedro_bossi.png", name: "Bossi Pedro", detto: ""}

                    ]
                },
                icat:{
                    desc: "Ridurre il carico degli esami aggiungendo le prove in itinere, limitando le prove con diverse modalità (scritto, orale e progetto obbligatori) e migliorando le ore di esercitazioni eliminando le ripetizioni tra i corsi. In particolare, ci impegneremo per rendere più equo il rapporto tra la valutazione del progetto e il tempo necessario per realizzarlo. Dobbiamo, e insieme possiamo, arrivare all’eliminazione delle precedenze! Ad ICAT ci impegneremo per più praticità ed esperienza sul campo, insieme ad un supporto crescente da parte del Career Service e per aver maggiormente al centro dei nostri corsi il tema della sostenibilità ambientale.",
                    candidati:
                    [
                      {id: 4 , imgUrl: "/img/candidati/ternasinistrorsa/luca_lo_bosco.png", name: "Lo Bosco Luca", detto: ""},
                      {id: 5 , imgUrl: "/img/candidati/ternasinistrorsa/andrea_collini.png", name: "Collini Andrea", detto: ""}

                    ]
                },
                design:{
                    desc : "Continuiamo la nostra lotta per il rimborso dei costi dei materiali e per la stipulazione di convenzioni con negozi specialistici. Garantire il rimborso spese vuol dire dare a tuttз la possibilità di sperimentare, indipendentemente dalla fascia di reddito di appartenenza. Vogliamo inoltre garantire la possibilità ad ogni studentə di scegliere, all’interno della calendarizzazione, quando sostenere i propri esami. Chiediamo inoltre che siano chiare le valutazioni d’esame, con criteri omogenei tra diversi scaglioni. Vogliamo promuovere una cultura del progetto multidisciplinare, aperta alla sperimentazione e alla contaminazione. Proponiamo il potenziamento dei laboratori già esistenti e la valutazione di un nuovo Polifactory, sul modello già esistente, di libero accesso allз studentз.",
                    candidati:
                    [
                      {id: 1 , imgUrl: "/img/candidati/ternasinistrorsa/mercedes_vitali.png", name: "Vitali Mercedes", detto: ""},
                      {id: 2 , imgUrl: "/img/candidati/ternasinistrorsa/giovanni_smoquina.png", name: "Smoquina Giovanni", detto: ""}
                    ]
                }
            }
        }
    }
  }
}
</script>
