/* Lingua del sito: italiano (predefinita) / inglese. La scelta si ricorda nel browser. */
(function(){
const UI={
 'Contiene luci lampeggianti, rumori forti e jumpscare. Meglio al buio e con le cuffie.':'Contains flashing lights, loud noises and jump scares. Best experienced in the dark, with headphones.',
 'Accendi la TV':'Turn on the TV',
 '23:47. Una villa nel mezzo del bosco. Piove da ore. Sei qui con loro, come staff. Nessuno sa che la casa è abbandonata da 27 anni. Alle 00:00, tutte le uscite si chiudono.':'23:47. A villa in the middle of the woods. It has been raining for hours. You are here with them, as staff. No one knows the house has been abandoned for 27 years. At 00:00, all the exits close.',
 '«Potete uscire tutti. Ma la casa deve tenere qualcuno.»':'“You can all leave. But the house must keep someone.”',
 'Entra nella villa':'Enter the villa',
 'Scegli con attenzione. La casa ricorda.':'Choose carefully. The house remembers.',
 'Le fotografie':'The photographs',
 'Qualcuno le ha girate verso il muro. Toccale, se hai il coraggio.':'Someone turned them to face the wall. Touch them, if you dare.',
 'foto':'photo',
 'Le registrazioni':'The recordings',
 'Cinque episodi. Cinque finali. Uno solo ti lascia uscire.':'Five episodes. Five endings. Only one lets you out.',
 'Introduzione · La notte comincia':'Introduction · The night begins',
 'Episodio 1 · Il primo passo':'Episode 1 · The first step',
 'Episodio 2 · La casa vi conosce':'Episode 2 · The house knows you',
 'Episodio 3 · Non aprire la porta':"Episode 3 · Don't open the door",
 'Episodio 4 · Il prezzo della fuga':'Episode 4 · The price of escape',
 'Episodio 5 · Chi esce per primo?':'Episode 5 · Who leaves first?',
 'Finali scoperti: N su 5':'Endings discovered: N of 5',
 'Progetto fan non ufficiale, creato per Halloween. Non è affiliato ai CORTIS né alla loro agenzia. Tutti i fatti raccontati qui sono inventati.':'Unofficial fan project, made for Halloween. Not affiliated with CORTIS or their agency. Everything told here is fictional.',
 'SEGNALE ASSENTE · EPISODIO 1 NON ANCORA TRASMESSO':'NO SIGNAL · EPISODE 1 NOT BROADCAST YET',
 "GUARDA PRIMA L'INTRODUZIONE":'WATCH THE INTRODUCTION FIRST',
 'CORTIS: Introduzione':'CORTIS: Introduction',
 'Contiene luci lampeggianti, rumori forti e jumpscare. Meglio al buio e con le cuffie. Clicca, tocca o premi spazio per far andare avanti il dialogo.':'Contains flashing lights, loud noises and jump scares. Best in the dark, with headphones. Click, tap or press space to advance the dialogue.',
 'Avvia la registrazione':'Start the recording',
 'FINE REGISTRAZIONE':'END OF RECORDING',
 "Alle 00:00 la casa ha chiuso le porte. Ora tocca a te trovare l'uscita.":'At 00:00 the house locked the doors. Now it is up to you to find the way out.',
 'esci':'exit','‹ indietro':'‹ back','salta ››':'skip ››',
 "Rivedi dall'inizio":'Watch again from the start',
 'CORTIS: Episodio 1 · 00:00':'CORTIS: Episode 1 · 00:00','EPISODIO 1':'EPISODE 1',
 '00:00. Le porte sono chiuse. Contiene luci lampeggianti, rumori forti e jumpscare. Clicca, tocca o premi spazio per andare avanti.':'00:00. The doors are locked. Contains flashing lights, loud noises and jump scares. Click, tap or press space to continue.',
 'FINE EPISODIO 1':'END OF EPISODE 1',
 'Non avete trovato niente di utile. Ma la casa vi ha lasciato qualcosa.':'You found nothing useful. But the house left you something.',
 'Episodio 2':'Episode 2',"Rigioca l'episodio":'Replay the episode',
 'CORTIS: Episodio 2 · La casa vi conosce':'CORTIS: Episode 2 · The house knows you','EPISODIO 2':'EPISODE 2',
 '01:00. La casa vi conosce. Contiene luci lampeggianti, rumori forti e jumpscare. Clicca, tocca o premi spazio per andare avanti.':'01:00. The house knows you. Contains flashing lights, loud noises and jump scares. Click, tap or press space to continue.',
 'FINE EPISODIO 2':'END OF EPISODE 2',
 'La casa vi conosce. E ora conosce anche i vostri sospetti.':'The house knows you. And now it knows your suspicions too.',
 'Episodio 3':'Episode 3',
 'CORTIS: Episodio 3 · Non aprire la porta':"CORTIS: Episode 3 · Don't open the door",'EPISODIO 3':'EPISODE 3',
 '00:38. Non aprire la porta. Contiene luci lampeggianti, rumori forti e jumpscare. Clicca, tocca o premi spazio per andare avanti.':"00:38. Don't open the door. Contains flashing lights, loud noises and jump scares. Click, tap or press space to continue.",
 'FINE EPISODIO 3':'END OF EPISODE 3',
 'Qualcosa ha lasciato un segno sulla porta. Con sei dita.':'Something left a mark on the door. With six fingers.',
 'Episodio 4':'Episode 4',
 'CORTIS: Episodio 4 · Il prezzo della fuga':'CORTIS: Episode 4 · The price of escape','EPISODIO 4':'EPISODE 4',
 '03:10. Il prezzo della fuga. Contiene luci lampeggianti, rumori forti e jumpscare. Clicca, tocca o premi spazio per andare avanti.':'03:10. The price of escape. Contains flashing lights, loud noises and jump scares. Click, tap or press space to continue.',
 'FINE EPISODIO 4':'END OF EPISODE 4',
 'La notte sta finendo. E la casa non ha ancora preso niente.':'The night is ending. And the house has not taken anything yet.',
 'Episodio 5':'Episode 5',
 'CORTIS: Episodio 5 · Chi esce per primo?':'CORTIS: Episode 5 · Who leaves first?','EPISODIO 5':'EPISODE 5',
 '04:59. Chi esce per primo? Contiene luci lampeggianti, rumori forti e jumpscare. Clicca, tocca o premi spazio per andare avanti.':'04:59. Who leaves first? Contains flashing lights, loud noises and jump scares. Click, tap or press space to continue.',
 'FINE':'THE END',
 'La casa ha deciso. Ora scopri cosa è successo.':'The house has decided. Now find out what happened.',
 'Vedi il finale':'See the ending',
 'I FINALI':'THE ENDINGS','FINALE (n)':'ENDING (n)',
 "Non l'hai ancora scoperto.":"You haven't discovered this one yet.",
 "Torna all'inizio":'Back to the start','Rigioca con scelte diverse':'Play again with different choices',
 'TU':'YOU','VOCE':'VOICE'
};
const EN=Object.assign({},UI,window.EN_STORY||{});
window.EN_DICT=EN;
let lang='it';
try{const s=localStorage.getItem('cortis_lang');lang=s?(s==='en'?'en':'it'):((navigator.language||'').toLowerCase().startsWith('en')?'en':'it')}catch(e){}
window.LANG=()=>lang;
window.T=s=>(lang==='en'&&EN[s])||s;
const SKIP='script,style,#lang,#txt,#name,#ct,#cs,#ch,#typed,#toast,#mute,#clock,#chap,#fcount,#cnt,#opts,#tm,.ph,#face,#js,#scare,#bg,#list';
function walk(){
 document.querySelectorAll('body *').forEach(el=>{
  if(el.children.length||el.closest(SKIP))return;
  const t0=el.dataset.it!==undefined?el.dataset.it:el.textContent.trim();
  if(!t0)return;
  if(el.dataset.it===undefined)el.dataset.it=t0;
  const out=(lang==='en'&&EN[t0])||t0;
  if(el.textContent!==out)el.textContent=out;
 });
 if(window._t0===undefined)window._t0=document.title;
 document.title=(lang==='en'&&EN[window._t0])||window._t0;
 document.documentElement.lang=lang;
 document.querySelectorAll('#lang').forEach(b=>b.textContent=lang==='en'?'IT':'EN');
}
window.setLang=l=>{lang=l;try{localStorage.setItem('cortis_lang',l)}catch(e){}walk();window.onLang&&window.onLang()};
walk();
document.addEventListener('click',e=>{const b=e.target.closest&&e.target.closest('#lang');if(b){e.stopPropagation();setLang(lang==='en'?'it':'en')}},true);
})();
