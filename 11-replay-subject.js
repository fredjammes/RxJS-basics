const { ReplaySubject } = require('rxjs');

const replaySubject$ = new ReplaySubject();
replaySubject$.next("C'est un Kangourou qui rentre dans un bar...");
replaySubject$.subscribe((stuff) => console.log("Observer 1 : " + stuff));

replaySubject$.next('il commande un gin fizz');
replaySubject$.subscribe((stuff) => console.log("Observer 2 : " + stuff));

replaySubject$.next("le barman lui sert et dit : \"c'est 20€\"");
replaySubject$.subscribe((stuff) => console.log("Observer 3 : " + stuff));

replaySubject$.next("Intrigué, il lui dit : \"C'est pas souvent qu'on voit des kangourous dans mon bar\"")
replaySubject$.subscribe((stuff) => console.log("Observer 4 : " + stuff));
