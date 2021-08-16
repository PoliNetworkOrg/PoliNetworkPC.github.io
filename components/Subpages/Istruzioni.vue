<template>
    <div>

        <LayoutNavigationBar :language="language" />

        <!-- Page Content -->
        <div class="container2">

            <!-- Jumbotron Header -->
            <header class=" my-4 ">
                <div style="text-align:center;">
                    <span class="contattiTitle">
                        <span v-if="language == 'it'">Istruzioni al voto</span>
                        <span v-if="language == 'en'">Voting instructions</span>
                    </span>
                    <br />
                    <br />
                </div>

                <div style="margin:3px; padding-top:1rem;">
                    <div>
                        <a class="linkEligo" href="../piattaformavoto">
                            <span v-if="language == 'it'">🌐 Link alla piattaforma di voto 'Eligo'</span>
                            <span v-if="language == 'en'">🌐 'Eligo' voting platform link</span>
                        </a>
                    </div>
                    <div>
                        <a class="linkEligo" href="https://youtu.be/lX5bhxXr_fI">
                            <span v-if="language == 'it'">📽 Video con istruzioni al voto</span>
                            <span v-if="language == 'en'">📽 Video instructions for voting (in italian)</span>
                        </a>
                    </div>
                </div>

                <br />
                <div style="text-align:left;">

                    <ul style="list-style: none;padding-left:0px;">
                        <li class="li">
                            <div style="display:none;">
                                <span class="questionSpan">Supporting signatures:</span>
                                <br class="spacerQuestion" />
                                <span class="answerSpan">
                                    <ul>
                                        <li> 350 for the Senate and Board of Directors, at the end of the collection the list is removed from the portal </li>
                                        <li> 50 for each school, the same for achievement </li>
                                        <li> 20 for each candidate in CCS (unlike the other organs, here the system allows you to collect more, which however are not needed) </li>
                                        <li> You can only support one list / candidate for each body, you cannot support yourself </li>
                                        <li> In the courses of Geoinformatics Engineering, Nuclear Engineering, Music &amp; Acoustic Engineering requires fewer signatures for the CCS (respectively: 9, 19, 18) </li>
                                        <li> There are 10 supporting signatures for the Reference Councils of the Territorial Poles </li>
                                        <li> Once support is given, it cannot be changed </li>
                                        <li> Who supports someone is on the list of supports </li>
                                    </ul>
                                </span>
                            </div>
                        </li>
                        <li class="li">
                            <span class="questionSpan">

                                <span v-if="language == 'it'">Posti disponibili e preferenze</span>
                                <span v-if="language == 'en'">Available places and preferences</span>
                            </span>
                            <br class="spacerQuestion" />
                            <span class="answerSpan">

                                <table cellspacing="0" border="0">
                                    <colgroup width="459"></colgroup>
                                    <colgroup width="39"></colgroup>
                                    <colgroup width="141"></colgroup>
                                    <colgroup width="64"></colgroup>
                                    <colgroup width="73"></colgroup>
                                    <tr>
                                        <td height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
                                        <td align="left" valign=bottom><font color="#000000"><br></font></td>
                                        <td align="center" valign=bottom><font color="#000000"><br></font></td>
                                        <td style="border-top: 2px solid #000000; border-left: 2px solid #000000" align="left" valign=bottom>
                                            <font face="Arial">
                                                <span v-if="language == 'it'">posti</span>
                                                <span v-if="language == 'en'">seats</span>
                                            </font>
                                        </td>
                                        <td style="border-top: 2px solid #000000; border-right: 2px solid #000000" align="left" valign=bottom>
                                            <font color="#000000">
                                                <span v-if="language == 'it'">preferenze</span>
                                                <span v-if="language == 'en'">preferences</span>
                                            </font>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 0px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@">
                                            <b>
                                                <font face="Arial" size=1 color="#000000">

                                                    <span v-if="language == 'it'">Senato Accademico</span>
                                                    <span v-if="language == 'en'">Academic Senate</span>
                                                </font>
                                            </b>
                                        </td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000;" align="left" valign=bottom><font color="#000000"><br></font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000;" align="center" valign=bottom><font color="#000000"><br></font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;0"><b><font face="Arial" size=1 color="#000000">4</font></b></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdnum="1033;0;0"><b><font face="Arial" size=1 color="#000000">3</font></b></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 0px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><b><font face="Arial" size=1 color="#000000">CDA</font></b></td>
                                        <td align="left" valign=bottom><font color="#000000"><br></font></td>
                                        <td align="center" valign=bottom><font color="#000000"><br></font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;0"><b><font face="Arial" size=1 color="#000000">2</font></b></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdnum="1033;0;0"><b><font face="Arial" size=1 color="#000000">2</font></b></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 2px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><b><font face="Arial" size=1 color="#000000">AUIC</font></b></td>
                                        <td style="border-top: 2px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><b><font face="Arial" size=1 color="#000000"><br></font></b></td>
                                        <td style="border-top: 2px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><b><font face="Arial" size=1 color="#000000">MI - Leo</font></b></td>
                                        <td style="border-top: 2px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;0"><b><font face="Arial" size=1 color="#000000">5</font></b></td>
                                        <td style="border-top: 2px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdnum="1033;0;0"><b><font face="Arial" size=1 color="#000000">5</font></b></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Urbanistica:Citt&agrave; Ambiente Paesaggio</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">LT</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Leo</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="4" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">4</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="1" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">1</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Ing edile e delle costruzioni</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">LT</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Leo</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="4" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">4</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="1" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">1</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Progettazione dell'Architettura</font></td>
                                        <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">LT</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Leo, Mantova, Piacenza</font></td>
                                        <td style="border-top: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="28" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">28</font></td>
                                        <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="9" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">9</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Ingegneria Edile - Architettura</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">U</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">Lecco</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="4" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">4</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="1" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">1</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Architectural Design and History &ndash; Progettazione Architettonica e Storia</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">LM</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">Mantova</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="2" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">2</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="1" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">1</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Architettura delle Costruzioni</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">LM</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Leo</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="6" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">6</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="2" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">2</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Urban Planning and Policy Design - Pianificazione Urbana e Politiche Territoriali</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">LM</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Leo</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="3" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">3</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="1" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">1</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Architettura e Disegno Urbano - Architecture and Urban Design</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">LM</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Leo</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="14" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">14</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="5" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">5</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Sustainable Architecture and Landscape Design &ndash; Architettura Sostenibile e Progetto del Paesaggio</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">LM</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">Piacenza</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="2" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">2</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="1" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">1</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Landscape Architecture - Land Landscape Heritage</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">LM</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Leo</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="3" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">3</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="1" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">1</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Building and Architectural Engineering</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">LM</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Leo, Lecco</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="4" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">4</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="1" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">1</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Ingegneria dei sistemi edilizi  </font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">LM</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Leo</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="2" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">2</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="1" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">1</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Management of Built Environment - Gestione del Costruito</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">LM</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Leo</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="2" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">2</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="1" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">1</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 2px double #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Architettura - Ambiente Costruito - Interni - Architecture - Built Environment &ndash; Interiors</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 2px double #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">LM</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 2px double #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Leo</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 2px double #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="13" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">13</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 2px double #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="4" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">4</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=middle sdnum="1033;0;@"><b><font face="Arial" size=1 color="#000000">DESIGN</font></b></td>
                                        <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><b><font face="Arial" size=1 color="#000000"><br></font></b></td>
                                        <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle><b><font face="Arial" size=1 color="#000000">MI - Bov</font></b></td>
                                        <td style="border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;0"><b><font face="Arial" size=1 color="#000000">5</font></b></td>
                                        <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdnum="1033;0;0"><b><font face="Arial" size=1 color="#000000">5</font></b></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Design del Prodotto Industriale</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">U</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Bov</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="9" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">9</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="3" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">3</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Design degli Interni</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">U</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Bov</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="8" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">8</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="3" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">3</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Design della Comunicazione</font></td>
                                        <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">U</font></td>
                                        <td style="border-top: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Bov</font></td>
                                        <td style="border-top: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="5" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">5</font></td>
                                        <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="2" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">2</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Design della Moda</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">U</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Bov</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="6" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">6</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="2" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">2</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Product Service System Design - Design per il Sistema Prodotto Servizio</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">LM</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Bov</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="3" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">3</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="1" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">1</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Design &amp; Engineering-Progetto e Ingegnerizzazione del Prodotto Industriale</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">LM</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Bov</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="3" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">3</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="1" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">1</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 2px double #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Digital and Interaction Design</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 2px double #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">LM</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 2px double #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Bov</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 2px double #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="4" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">4</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 2px double #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="1" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">1</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=middle sdnum="1033;0;@"><b><font face="Arial" size=1 color="#000000">ICAT</font></b></td>
                                        <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><b><font face="Arial" size=1 color="#000000"><br></font></b></td>
                                        <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle><b><font face="Arial" size=1 color="#000000">MI - Leo</font></b></td>
                                        <td style="border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;0"><b><font face="Arial" size=1 color="#000000">5</font></b></td>
                                        <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdnum="1033;0;0"><b><font face="Arial" size=1 color="#000000">5</font></b></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Ingegneria per l'Ambiente e il Territorio  </font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">U</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Leo</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="9" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">9</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="3" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">3</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Ingegneria Civile  </font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">U</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Leo</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="12" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">12</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="4" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">4</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Ingegneria Civile e Ambientale</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">LT</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">Como, Lecco</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">/</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">/</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Geoinformatics Engineering - Ingegneria Geoinformatica</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">LM</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Leo</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="5" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">5</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="2" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">2</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 2px double #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Civil engineering for risk mitigation</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 2px double #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">LM</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 2px double #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">Lecco</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 2px double #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="6" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">6</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 2px double #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="2" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">2</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=middle sdnum="1033;0;@"><b><font face="Arial" size=1 color="#000000">3I</font></b></td>
                                        <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><b><font face="Arial" size=1 color="#000000"><br></font></b></td>
                                        <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle><b><font face="Arial" size=1 color="#000000">MI - Leo, MI Bov</font></b></td>
                                        <td style="border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;0"><b><font face="Arial" size=1 color="#000000">5</font></b></td>
                                        <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdnum="1033;0;0"><b><font face="Arial" size=1 color="#000000">5</font></b></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Ingegneria Aerospaziale</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">U</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Bov</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="18" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">18</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="8" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">8</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Ingegneria dell'Automazione</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">U</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Leo</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="15" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">15</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="5" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">5</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Ingegneria Biomedica  </font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">U</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Leo</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="22" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">22</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="7" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">7</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Ingegneria Chimica  </font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">U</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Leo</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="12" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">12</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="4" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">4</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Ingegneria Elettrica  </font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">U</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Leo</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="12" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">12</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="4" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">4</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Ingegneria Elettronica  </font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">U</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Leo</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="13" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">13</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="4" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">4</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Ingegneria Energetica</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">U</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Bov</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="23" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">23</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="8" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">8</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Ingegneria Fisica</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">U</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Leo</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="11" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">11</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="4" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">4</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Ingegneria Gestionale  </font></td>
                                        <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">U</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Bov, Cremona</font></td>
                                        <td style="border-top: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="25" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">25</font></td>
                                        <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="8" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">8</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Ingegneria Informatica  </font></td>
                                        <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">U</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Leo, Como, Cremona</font></td>
                                        <td style="border-top: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="26" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">26</font></td>
                                        <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="9" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">9</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Ingegneria Matematica</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">U</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Leo</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="15" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">15</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="5" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">5</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Ingegneria dei Materiali e delle Nanotecnologie </font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">U</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Leo</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="14" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">14</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="5" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">5</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Ingegneria Meccanica</font></td>
                                        <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">U</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Bov, Piacenza</font></td>
                                        <td style="border-top: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="27" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">27</font></td>
                                        <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="9" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">9</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Ingegneria della Produzione Industriale</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">LT</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">Lecco</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="3" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">3</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="1" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">1</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Music and Acoustic Engineering</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">LM</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">Cremona</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="6" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">6</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="2" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">2</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Ingegneria Nucleare</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">LM</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Bov</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="8" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">8</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="3" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">3</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Ingegneria delle Telecomunicazioni  </font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">LM</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Leo</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="10" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">10</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="3" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">3</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Food Engineering</font></td>
                                        <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">LM</font></td>
                                        <td style="border-top: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Leo</font></td>
                                        <td style="border-top: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="4" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">4</font></td>
                                        <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="1" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">1</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 2px double #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">Mobility Engineering</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 2px double #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000">LM</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 2px double #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">MI - Bov</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 2px double #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="3" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">3</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 2px double #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="1" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">1</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-left: 1px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=middle sdnum="1033;0;@">
                                            <font face="Arial" size=1 color="#000000">
                                                <span v-if="language == 'it'">Consiglio di Riferimento del Polo Territoriale di Como</span>
                                                <span v-if="language == 'en'">Reference Council of the Territorial Pole of Como</span>
                                            </font>
                                        </td>
                                        <td style="border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000"><br></font></td>
                                        <td style="border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">Como</font></td>
                                        <td style="border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">/</font></td>
                                        <td style="border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">/</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@">
                                            <font face="Arial" size=1 color="#000000">
                                                <span v-if="language == 'it'">Consiglio di Riferimento del Polo Territoriale di Cremona</span>
                                                <span v-if="language == 'en'">Reference Council of the Territorial Pole of Cremona</span>
                                            </font>
                                        </td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000"><br></font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">Cremona</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="1" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">1</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="1" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">1</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@">
                                            <font face="Arial" size=1 color="#000000">

                                                <span v-if="language == 'it'">Consiglio di Riferimento del Polo Territoriale di Lecco</span>
                                                <span v-if="language == 'en'">Reference Council of the Territorial Pole of Lecco</span>
                                            </font>
                                        </td>
                                        <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000"><br></font></td>
                                        <td style="border-top: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">Lecco</font></td>
                                        <td style="border-top: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="1" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">1</font></td>
                                        <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="1" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">1</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="19" align="left" valign=middle sdnum="1033;0;@">
                                            <font face="Arial" size=1 color="#000000">

                                                <span v-if="language == 'it'">Consiglio di Riferimento del Polo Territoriale di Mantova</span>
                                                <span v-if="language == 'en'">Reference Council of the Territorial Pole of Mantova</span>
                                            </font>
                                        </td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000"><br></font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">Mantova</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="1" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">1</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="1" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">1</font></td>
                                    </tr>
                                    <tr>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=middle sdnum="1033;0;@">
                                            <font face="Arial" size=1 color="#000000">

                                                <span v-if="language == 'it'">Consiglio di Riferimento del Polo Territoriale di Piacenza</span>
                                                <span v-if="language == 'en'">Reference Council of the Territorial Pole of Piacenza</span>
                                            </font>
                                        </td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdnum="1033;0;@"><font face="Arial" size=1 color="#000000"><br></font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=middle><font face="Arial" size=1 color="#000000">Piacenza</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" align="center" valign=middle sdval="1" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">1</font></td>
                                        <td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=middle sdval="1" sdnum="1033;0;0"><font face="Arial" size=1 color="#000000">1</font></td>
                                    </tr>
                                </table>
                                <!-- ************************************************************************** -->
                            </span>
                        </li>
                        <br />
                        <li>
                            <span class="questionSpan">

                                <span v-if="language == 'it'">Infografica rappresentanza studentesca</span>
                                <span v-if="language == 'en'">Student Representation Infographics</span>
                            </span>
                            <br class="spacerQuestion" />
                            <span class="answerSpan">
                                <ul>
                                    <li>

                                        <a v-if="language == 'it'" href="https://www.polimi.it/fileadmin/user_upload/Studenti/Rappresentanti_e_associazioni/infografica_rappresentanza_studentesca.pdf">

                                            <span v-if="language == 'it'">Infografica rappresentanza studentesca</span>
                                        </a>

                                        <a v-if="language == 'en'" href="https://www.polimi.it/fileadmin/user_upload/Studenti/Rappresentanti_e_associazioni/infografica_elezioni_2017_ENGLISH.pdf">

                                            <span v-if="language == 'en'">Student Representation Infographics</span>
                                        </a>
                                    </li>
                                </ul>
                            </span>
                        </li>

                        <li class="li">
                            <span class="questionSpan">

                                <span v-if="language == 'it'">Ho ulteriori dubbi</span>
                                <span v-if="language == 'en'">I have further doubts</span>
                            </span>
                            <br class="spacerQuestion" />
                            <span class="answerSpan">
                                <ul>
                                    <li>

                                        <span v-if="language == 'it'">

                                            Visita il <a href="https://www.polimi.it/en/the-politecnico/organization/university-bodies/student-representatives/university-student-elections/"> sito ufficiale </a> dedicato alle elezioni studentesche del Politecnico di Milano
                                        </span>
                                        <span v-if="language == 'en'">

                                            Visit the <a href="https://www.polimi.it/en/the-politecnico/organization/university-bodies/student-representatives/university-student-elections/"> official site </a> dedicated to the students elections of the Politecnico di Milano
                                        </span>
                                    </li>
                                    <li>

                                        <span v-if="language == 'it'">

                                            Visita la nostra pagina <a href="../contatti/">contatti</a>
                                        </span>
                                        <span v-if="language == 'en'">

                                            Visit our <a href="../contatti/"> contacts </a>  page
                                        </span>
                                    </li>
                                </ul>
                            </span>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
        <!-- /.container -->

        <LayoutFooter :language="language" />
    </div>
</template>

<script>
export default {
    props: {
        language:{
            type:String,

			required:true
        }
    }
}
</script>

<style scoped>
    :root {
        --mainColor: #ff9800;
    }

    .containerNavBar {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: justify;
        justify-content: space-between;
        width: 100%;
        color: #545454;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        background-color: #fff;
        padding-right: 15px;
        padding-left: 15px;
    }

    .nav-link {
        text-align: center;
    }

    .nav-item {
        padding-right: 50px;
        padding-left: 50px;
        font-size: 1.2em;
    }

    .navbar {
        border-bottom: 1px solid #545454;
    }

    .testoCentrale {
        max-width: 60%;
        margin-left: auto;
        margin-right: auto;
    }

    table, thead, tbody, tfoot, tr, th, td {
        font-family: "Calibri";
        font-size: x-small
    }

    a.comment-indicator:hover + comment {
        background: #ffd;
        position: absolute;
        display: block;
        border: 1px solid black;
        padding: 0.5em;
    }

    a.comment-indicator {
        background: red;
        display: inline-block;
        border: 1px solid black;
        width: 0.5em;
        height: 0.5em;
    }

    comment {
        display: none;
    }

    .listTile {
        width: 450px;
        height: 200px;
        display: flex;
        padding-left: calc(1px + 0.5rem);
        padding-right: calc(1px + 0.5rem);
    }

    .contattiTitle {
        font-size: calc(0.30vw + 2.0rem + 5px);
    }

    .li {
        padding-top: calc(15px + 0.2rem);
        padding-bottom: calc(15px + 0.2rem);
    }

    .linkEligo {
        font-size: calc(0.16vw + 0.95rem + 4px);
    }

    .questionSpan {
        font-size: calc(0.16vw + 0.95rem + 4px);
        -webkit-text-stroke: 1px black;
        -webkit-text-fill-color: black;
        margin-top: calc(3px + 0.1rem);
        margin-bottom: calc(3px + 0.1rem);
        padding-top: calc(3px + 0.1rem);
        padding-bottom: calc(3px + 0.1rem);
    }

    .answerSpan {
        font-size: calc(0.16vw + 0.70rem + 3px);
        margin-top: calc(3px + 0.1rem);
        margin-bottom: calc(3px + 0.1rem);
        padding-top: calc(3px + 0.1rem);
        padding-bottom: calc(3px + 0.1rem);
    }

    .spacerQuestion {
        margin-top: calc(3px + 0.2rem);
        margin-bottom: calc(3px + 0.2rem);
        padding-top: calc(3px + 0.2rem);
        padding-bottom: calc(3px + 0.2rem);
    }

    .tableScuole {
        color: black;
        height: 100%;
        vertical-align: middle;
        width: 100%;
    }

    .scuole {
        margin: auto;
    }

    a {
        text-decoration: none;
    }

        a:hover {
            text-decoration: none;
        }

    h1 {
        background: linear-gradient( to bottom, var(--mainColor) 0%, var(--mainColor) 100% ) repeat-x 0 100%;
        background-size: 0px 0px;
        color: #000;
        text-decoration: none;
        transition: background-size .2s;
    }

        h1:hover {
            background-size: 4px 50px;
        }

    .imageList {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    /* SLIDER ON LIST IMAGE */
    .cap-left {
        padding: 1px 1px 1px 1px;
        height: 100%;
        display: block;
        position: relative;
        float: left;
        overflow: hidden;
        margin: 0;
    }

    figcaption {
        position: absolute;
        background: white;
        background: rgba(0,0,0,0.75);
        color: white;
        padding: 10px 20px;
        opacity: 0.6;
        -webkit-transition: all 0.6s ease;
        -moz-transition: all 0.6s ease;
        -o-transition: all 0.6s ease;
        height: 100%;
        width: 100%;
    }

    figure:hover figcaption {
        opacity: 1;
    }

    figure:before {
        position: absolute;
        font-weight: 800;
        background: black;
        background: rgba(255,255,255,0.75);
        text-shadow: 0 0 5px white;
        color: black;
        width: 24px;
        height: 24px;
        -webkit-border-radius: 12px;
        -moz-border-radius: 12px;
        border-radius: 12px;
        text-align: center;
        font-size: 14px;
        line-height: 24px;
        -moz-transition: all 0.6s ease;
        opacity: 0.75;
    }

    figure:hover:before {
        opacity: 0;
    }

    .cap-left:before {
        bottom: 10px;
        left: 10px;
    }

    .cap-left figcaption {
        bottom: 0;
        left: -100%;
    }

    .cap-left:hover figcaption {
        left: 0;
    }

    .cap-right:before {
        bottom: 10px;
        right: 10px;
    }

    .cap-right figcaption {
        bottom: 0;
        right: -30%;
    }

    .cap-right:hover figcaption {
        right: 0;
    }

    .cap-top:before {
        top: 10px;
        left: 10px;
    }

    .cap-top figcaption {
        left: 0;
        top: -30%;
    }

    .cap-top:hover figcaption {
        top: 0;
    }

    .cap-bot:before {
        bottom: 10px;
        left: 10px;
    }

    .cap-bot figcaption {
        left: 0;
        bottom: -30%;
    }

    .cap-bot:hover figcaption {
        bottom: 0;
    }

    @media (max-width: 768px) {
        .testoCentrale {
            max-width: 100% !important;
        }

        ul {
            padding-left: 5px;
        }
    }
</style>
