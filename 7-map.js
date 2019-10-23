const { timer} = require('rxjs');
const { map } = require('rxjs/operators');

const timer$ = timer(0, 1000);

mappedTimer$ = timer$.pipe(map((item) => 'item N°' + item));

timer$.subscribe((stuff) => console.log("timer : " + stuff));
mappedTimer$.subscribe((stuff) => console.log("mappedTimer : " + stuff));
