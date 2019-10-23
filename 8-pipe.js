const { timer } = require('rxjs');
const { map, filter } = require('rxjs/operators');

const timer$ = timer(0, 1000);
const mappedAndFilteredTimer$ = timer$.pipe(
    filter((item) => item % 2 === 0),
    map((item) => 'item N°' + item)
);

timer$.subscribe((stuff) => console.log("timer : " + stuff));
mappedAndFilteredTimer$.subscribe((stuff) => console.log("mappedAndFilteredTimer : " + stuff));
