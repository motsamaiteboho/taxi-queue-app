// write your DOM code here.


// DOM element references
const passeagerCount = document.querySelector(".passenger_queue_count");
const joinBtn = document.querySelector(".join_queue");
const leaveBtn = document.querySelector(".leave_queue");

const taxiCount = document.querySelector(".taxi_queue_count");
const jointaxiBtn = document.querySelector(".join_taxi_queue");
const departBtn = document.querySelector(".depart");

// create Factory Function instance

let current_passeager_count = 0;
let current_taxi_count = 0;

const storedPassegerCount = localStorage.getItem('passeager_count');
if(storedPassegerCount){
    current_passeager_count = (storedPassegerCount);
}
const storedTaxiCount = localStorage.getItem('taxi_count');
if(storedTaxiCount){
    current_taxi_count = (storedTaxiCount);
}
const taxiQueue = TaxiQueue(current_passeager_count, current_taxi_count);

passeagerCount.innerHTML = taxiQueue.queueLength();
taxiCount.innerHTML = taxiQueue.taxiQueueLength();

// DOM events

