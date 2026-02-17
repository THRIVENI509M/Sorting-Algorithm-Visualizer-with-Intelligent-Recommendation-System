async function bubbleSort() {
  if (elements.length === 0 ) return;
 
  generatebtn.disabled = true;
  startbtn.disabled = true;
  isSorting=true;
  var temp;
  resetMetrics();
  resetChart();
  compData = [];
  swapData = [];
  starttime();
  let comparisons=0;
  let swaps=0;
  let bars = document.querySelectorAll(".bar");
  const len=elements.length;
  
  for(let i=0;i<len-1;i++){
    if (!isSorting) break;  
    for(let j=0;j<len-i-1;j++){
        if(isSorting ===false){
            stopTimer();
            generatebtn.disabled = false;
            startbtn.disabled = false;    
            return;
        }
        comparisons+=1;
        let t1 = Date.now() - start_time
        compData.push({ time: t1, value: comparisons })
        comp_count.innerText=comparisons;
        bars[j].style.backgroundColor = "red";
        bars[j+1].style.backgroundColor = "red";
        await delay(speed); 

        if(elements[j]>elements[j+1]){
            temp=elements[j];
            elements[j]=elements[j+1];
            elements[j+1]=temp;
            swaps+=1;
            swap_count.innerText=swaps;

            bars[j+1].style.height = elements[j+1] + "px";
            bars[j].style.height = elements[j] + "px";
            bars[j].textContent = elements[j];
            bars[j + 1].textContent = elements[j + 1];            

        }
        let t2 = Date.now() - start_time
        swapData.push({ time: t2, value: swaps })
        await delay(speed);

        bars[j].style.backgroundColor = "purple";
        bars[j+1].style.backgroundColor = "purple";


    }
  bars[len-i-1].style.backgroundColor="green";

  } 
stopTimer();
isSorting=false; 
generatebtn.disabled = false;
startbtn.disabled = false;
drawGraph();
}