const { timer } = require('rxjs');
const { filter } = require('rxjs/operators');


const timer$ = timer(0, 1000);

filter$ = timer$.pipe(filter((item) => item % 2 === 0));

timer$.subscribe((stuff) => console.log("timer : " + stuff));
filter$.subscribe((stuff) => console.log("filtered : " + stuff));
