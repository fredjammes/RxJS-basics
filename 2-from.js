const { from } = require('rxjs');

const arr = [
    'valeur 1',
    'valeur 2',
    'valeur 3',
    'valeur 4'
];
const from$ = from(arr);
from$.subscribe(
    (stuff) => console.log(stuff),
    (error) => console.log(error),
    () => console.log("Observable terminé !")
);

