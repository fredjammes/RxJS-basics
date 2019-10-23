const { of } = require('rxjs');
const { map, flatMap } = require('rxjs/operators');

const of$ = of(10);

function obsReturner$(n) {
    return of(n*2);
}

of$.pipe(
    map((stuff) => obsReturner$(stuff))
).subscribe(result => console.log(result));
// What is happening here ?

of$.pipe(
    flatMap((stuff) => obsReturner$(stuff))
).subscribe(result => console.log(result));
