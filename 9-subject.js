const { Subject } = require('rxjs');

const subject$ = new Subject();
const subscription1 = subject$.subscribe(
    (stuff) => console.log("Observer 1 : " + stuff),
    () => {},
    () => console.log("Observer 1 AFK")
);

subject$.next("C'est un Kangourou qui rentre dans un bar...");

const subscription2 = subject$.subscribe(
    (stuff) => console.log("Observer 2 : " + stuff),
    () => {},
    () => console.log("Observer 2 AFK")
);
subject$.next('il commande un gin fizz');
//subject$.complete();
subscription1.unsubscribe();
subject$.next("Am I alive ?");
subscription2.unsubscribe();
subject$.next("Is someone still listening ?");
