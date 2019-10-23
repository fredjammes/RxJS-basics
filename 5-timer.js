const { interval, timer } = require('rxjs');

const interval$ = interval(1000);

const timer$ = timer(4000, 1000);

console.log("Something is gonna happen soon !");
interval$.subscribe((stuff) => console.log("t = " + stuff + "s"));
timer$.subscribe((stuff) => console.log(stuff));
