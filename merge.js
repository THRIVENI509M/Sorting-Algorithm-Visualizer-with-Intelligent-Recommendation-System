async function mergeSortStart() {
    if (elements.length === 0 ) return;
    isSorting = true;
    generatebtn.disabled = true;
    startbtn.disabled = true;
    resetMetrics();
    resetChart();
    compData = [];
    swapData = [];
    starttime();

    let comparisons = 0;
    let swaps = 0;
    let bars = document.querySelectorAll(".bar");

    async function merge(left, mid, right) {
        if (!isSorting) return;   
        let L = elements.slice(left, mid + 1);
        let R = elements.slice(mid + 1, right + 1);
        let i = 0, j = 0, k = left;

        while (i < L.length && j < R.length) {
            if (!isSorting) return;   
            comparisons++;
            comp_count.innerText = comparisons;

            bars[k].style.backgroundColor = "red";

            if (L[i] <= R[j]) {
                elements[k] = L[i];
                i++;
            } else {
                elements[k] = R[j];
                j++;
                swaps++; 
                swap_count.innerText = swaps;
            }

            bars[k].style.height = elements[k] + "px";
            bars[k].textContent = elements[k];

            let t = Date.now() - start_time;
            compData.push({ time: t, value: comparisons });
            swapData.push({ time: t, value: swaps });

            await delay(speed);
            bars[k].style.backgroundColor = "purple";
            k++;
        }

        while (i < L.length) {
            if (!isSorting) return;   
            elements[k] = L[i];
            bars[k].style.height = elements[k] + "px";
            bars[k].textContent = elements[k];
            i++;
            k++;
        }

        while (j < R.length) {
            if (!isSorting) return;   
            elements[k] = R[j];
            bars[k].style.height = elements[k] + "px";
            bars[k].textContent = elements[k];
            j++;
            k++;
        }

        for (let idx = left; idx <= right; idx++) {
            bars[idx].style.backgroundColor = "green";
        }

        await delay(speed / 2);
    }

    async function mergeSort(left, right) {
        if (!isSorting) return;   
        if (left >= right) return;

        let mid = Math.floor((left + right) / 2);

        await mergeSort(left, mid);        
        if (!isSorting) return;

        await mergeSort(mid + 1, right);        
        if (!isSorting) return;

        await merge(left, mid, right);        

    }

    await mergeSort(0, elements.length - 1);
     if (!isSorting) {
        stopTimer();
        generatebtn.disabled = false;
        startbtn.disabled = false;
        return;
    }
    compData.push({ time: Date.now() - start_time, value: comparisons });
    swapData.push({ time: Date.now() - start_time, value: swaps });
    drawGraph();
    stopTimer();
    isSorting = false;
    
    generatebtn.disabled = false;
    startbtn.disabled = false;
}
