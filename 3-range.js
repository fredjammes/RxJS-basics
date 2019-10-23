const { range } = require('rxjs');

const range$ = range(0, 30);
range$.subscribe(
    (stuff) => console.log(stuff),
    (error) => console.log(error),
    () => console.log("Observable terminé !")
);
