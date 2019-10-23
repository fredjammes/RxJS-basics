const { range, forkJoin } = require('rxjs');

const timerOne$ = range(1, 10);
const timerTwo$ = range(1, 15);
const timerThree$ = range(1, 20);

const combined$ = forkJoin(timerOne$, timerTwo$, timerThree$);

combined$.subscribe((stuff) => console.log(stuff));

