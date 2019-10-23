const { timer, forkJoin } = require('rxjs');

const timerOne$ = timer(1000, 4000);
const timerTwo$ = timer(2000, 4000);
const timerThree$ = timer(3000, 4000);

const combined$ = forkJoin(timerOne$, timerTwo$, timerThree$);

combined$.subscribe((stuff) => console.log(stuff));
// nothing happens
