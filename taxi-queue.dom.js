// write your DOM code here.


// DOM element references
const passeagerCount = document.querySelector(".passenger_queue_count");
const joinBtn = document.querySelector(".join_queue");
const leaveBtn = document.querySelector(".leave_queue");

const taxiCount = document.querySelector(".taxi_queue_count");
const jointaxiBtn = document.querySelector(".join_taxi_queue");
const departBtn = document.querySelector(".depart");

const JoinQueueMessageElem = document.querySelector(".passsuccess");
const JoinMessageElem = document.querySelector(".taxisuccess");
const errorMessageElem = document.querySelector(".error");
const successMessageElem = document.querySelector(".success");
// create Factory Function instance

let current_passeager_count = 0;
let current_taxi_count = 0;
 //localStorage.setItem('passeager_count',0);
 //localStorage.setItem('taxi_count',0);
const storedPassegerCount = localStorage.getItem('passeager_count');
if (storedPassegerCount) {
    current_passeager_count = (storedPassegerCount);
}
const storedTaxiCount = localStorage.getItem('taxi_count');
if (storedTaxiCount) {
    current_taxi_count = (storedTaxiCount);
}
const taxiQueue = TaxiQueue(current_passeager_count, current_taxi_count);

passeagerCount.innerHTML = taxiQueue.queueLength();
taxiCount.innerHTML = taxiQueue.taxiQueueLength();

// DOM events
function joinQueue() {
    taxiQueue.joinQueue();
    passeagerCount.innerHTML = taxiQueue.queueLength()
    localStorage.setItem('passeager_count', taxiQueue.queueLength())
    setTimeout(function () {
        JoinQueueMessageElem.innerHTML = "";
    }, 4000);
    JoinQueueMessageElem.innerHTML =   taxiQueue.queueLength() + " passenger's in queue"
}
joinBtn.addEventListener('click', joinQueue);

function leaveQueue() {
    taxiQueue.leaveQueue();
    passeagerCount.innerHTML = taxiQueue.queueLength()
    localStorage.setItem('passeager_count', taxiQueue.queueLength())
    setTimeout(function () {
        JoinQueueMessageElem.innerHTML = "";
    }, 4000);
    JoinQueueMessageElem.innerHTML =   taxiQueue.queueLength() + " passenger's availabe"
}
leaveBtn.addEventListener('click', leaveQueue);


function taxiJoinQueue() {
    taxiQueue.joinTaxiQueue();
    taxiCount.innerHTML = taxiQueue.taxiQueueLength();
    localStorage.setItem('taxi_count', taxiQueue.taxiQueueLength());
    setTimeout(function () {
        JoinMessageElem.innerHTML = "";
    }, 4000);
    JoinMessageElem.innerHTML =   taxiQueue.taxiQueueLength() + " taxi's availabe"
}
jointaxiBtn.addEventListener('click', taxiJoinQueue);

function taxiDepart() {
    if (taxiQueue.queueLength() > 12) {

        if (taxiQueue.taxiQueueLength() > 0) {
            taxiQueue.taxiDepart();
            taxiCount.innerHTML = taxiQueue.taxiQueueLength();
            passeagerCount.innerHTML = taxiQueue.queueLength();
            localStorage.setItem('taxi_count', taxiQueue.taxiQueueLength());
            localStorage.setItem('passeager_count', taxiQueue.queueLength());
            setTimeout(function () {
                successMessageElem.innerHTML = "";
                JoinMessageElem.innerHTML = "";
                JoinQueueMessageElem.innerHTML ="";
            }, 4000);
            successMessageElem.innerHTML = "Travel safe. Arrive alive!";
            JoinMessageElem.innerHTML =   taxiQueue.taxiQueueLength() + " taxi's availabe";
            JoinQueueMessageElem.innerHTML =   taxiQueue.queueLength() + " passenger's availabe"
        }
        else {
            setTimeout(function () {
                errorMessageElem.innerHTML = "";
            }, 4000);
            errorMessageElem.innerHTML = " Join a queue first";
        }
    }
    else {
        setTimeout(function () {
            errorMessageElem.innerHTML = "";
        }, 4000);
        errorMessageElem.innerHTML = "Sorry!, you can't laeve as yet you only have " + taxiQueue.queueLength() + " passengers. You have to wait for " + (12 - taxiQueue.queueLength()) + " more passengers";
    }

}
departBtn.addEventListener('click', taxiDepart);