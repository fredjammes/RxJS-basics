const { interval } = require('rxjs');

const interval$ = interval(1000);
interval$.subscribe((stuff) => console.log(stuff));
