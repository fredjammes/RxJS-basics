const { of } = require('rxjs');

const of$ = of('Youhou');
const sub = of$.subscribe(
    (stuff) => console.log(stuff),
    (error) => console.log(error),
    () => console.log("Observable terminé !")
);
