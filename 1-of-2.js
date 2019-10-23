const { of } = require('rxjs');
const { map } = require('rxjs/operators');

const of$ = of('Youhou');

const ofError$ = of$.pipe(map( () => { throw 'Aïe Aïe Aïe' }));

ofError$.subscribe(
    (stuff) => console.log(stuff),
    (error) => console.log(error),
    () => console.log("Observable terminé !")
);
