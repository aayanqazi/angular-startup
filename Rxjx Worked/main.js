let obs = Rx.Observable
.interval(1000)
.take(5)
.map((v) => 
Date.now());

obs.subscribe(value => console.log("Subscriber: "+value))