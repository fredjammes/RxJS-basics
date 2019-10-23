const { BehaviorSubject } = require('rxjs');

const obs$ = new BehaviorSubject("C'est un Kangourou qui rentre dans un bar...");
obs$.subscribe((stuff) => console.log("Observer 1 : " + stuff));
obs$.next('il commande un gin fizz');

obs$.subscribe((stuff) => console.log("Observer 2 : " + stuff));
obs$.next("le barman lui dit, c'est 20€");

obs$.subscribe((stuff) => console.log("Observer 3 : " + stuff));
