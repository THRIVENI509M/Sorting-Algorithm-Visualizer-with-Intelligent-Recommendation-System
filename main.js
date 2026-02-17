window.onload = function() {
    initChart();
};

const arr_container=document.getElementById("array-container");
const generatebtn=document.getElementById("generate");
const startbtn=document.getElementById("start");
const stopbtn = document.getElementById("stop");
const comp_count=document.getElementById("comp-count");
const swap_count=document.getElementById("swap-count");
const time_count=document.getElementById("time-count");
const speedcontrol=document.getElementById("speed");
const speed_val=document.getElementById("speed-val");
const resetbtn=document.getElementById("reset");
const csvUpload = document.getElementById("csv-upload");
const algorithmSelect = document.getElementById("algorithm");
const manualBtn = document.getElementById("manual");
 
let elements=[];
let speed=Number(speedcontrol.value);
let isSorting=false;
let start_time=0;
let timerInterval=null;
let compData = [];
let swapData = [];

generatebtn.addEventListener("click",()=>{
    if(isSorting) return;
    elements=[];
    let size=100;
    for(let i=0;i<20;i++){  
    let x=Math.floor(Math.random()*size+20);
    elements.push(x);
}
resetChart();
resetMetrics();
render();
document.getElementById("data-size").innerText = elements.length;
document.getElementById("status").innerText = "Random data ready";
updateRecommendationBanner();
  
});
csvUpload.addEventListener("change", handleCSVUpload);

speedcontrol.addEventListener("input",()=>{
         speed=Number(speedcontrol.value);
         speed_val.innerText=speed;
});
function render(){
    arr_container.innerHTML="";
    elements.forEach(ele=>{
        const divi=document.createElement('div');
        divi.className="bar";
        divi.style.height=ele+"px";
        divi.textContent=ele;
    arr_container.appendChild(divi);
      });
}

function delay(millisec){
    return new Promise(resolve=>setTimeout(resolve,millisec));
}

function starttime(){
    start_time=Date.now();
    timerInterval=setInterval(()=>{
        const elapsed=Date.now()-start_time;
        time_count.innerText=(elapsed / 1000).toFixed(2) + "s";
    },100);
}

function stopTimer() {
    clearInterval(timerInterval);
}

startbtn.addEventListener("click", () => {
    if (isSorting) return;
    isSorting = true;
    const algo = algorithmSelect.value;

    if (algo === "bubble") bubbleSort();
    if (algo === "insertion") insertionSort();
    if (algo === "quick") quickSortStart();
    if (algo === "merge") mergeSortStart();
});


function resetMetrics() {
    compData = [];
    swapData = [];
 
    comp_count.innerText = 0;
    swap_count.innerText = 0;
    time_count.innerText = "0s";
}
resetbtn.addEventListener("click",()=>{
     isSorting=false;
     stopTimer();
     elements=[];
     arr_container.innerHTML="";
     resetChart();
     comp_count.innerText=0;
     swap_count.innerText=0;
     resetMetrics();
     generatebtn.disabled = false;
     startbtn.disabled = false;
     csvUpload.value = "";

});


function drawGraph() {
    if (!complexityChart) return;

    complexityChart.data.labels = compData.map(d => d.time / 1000);

    complexityChart.data.datasets[0].data =
        compData.map(d => d.value);

    complexityChart.data.datasets[1].data =
        swapData.map(d => d.value);

    complexityChart.update();
}

manualBtn.addEventListener("click", createManualInputModal);

function updateRecommendationBanner() {
    if (!elements || elements.length === 0) {
        document.getElementById("recommended-algo").innerText = "-";
        document.getElementById("status").innerText = "";
        document.getElementById("suggest").innerText = "";
 
        return;
    }

    const analysis = analyzeArray(elements); 
    const recommendation = getRecommendation(analysis);
    document.getElementById("recommended-algo").innerText = recommendation.recommendedAlgorithm;
    document.getElementById("reason").innerText = recommendation.reason;
    document.getElementById("suggest").innerText =
    recommendation.recommendedAlgorithm;
}
stopbtn.addEventListener("click", () => {
    isSorting = false;
    stopTimer();
    document.getElementById("status").innerText = "Sorting stopped";
});
