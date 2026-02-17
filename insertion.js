async function insertionSort() {
    if (elements.length === 0 ) return;
    isSorting = true;
    compData = [];
    swapData = [];
    resetMetrics();
    resetChart();
    starttime();

    let comparisons = 0;
    let swaps = 0;
    let bars = document.querySelectorAll(".bar");
    const len = elements.length;

    for (let i = 1; i < len; i++) {
        if (!isSorting) return;

        let key = elements[i];
        let j = i - 1;

        while (j >= 0) {
            if (!isSorting) return;

            comparisons++;
            comp_count.innerText = comparisons;
            let swapped = false;

            if (elements[j] > key) {
                elements[j + 1] = elements[j];
                bars[j + 1].style.height = elements[j + 1] + "px";
                bars[j + 1].textContent = elements[j + 1];
                swaps++;
                swap_count.innerText = swaps;
                swapped = true;
            }
            bars[j].style.backgroundColor = "red";
            bars[j + 1].style.backgroundColor = "red";

            let t = (Date.now() - start_time);
            compData.push({ time: t, value: comparisons });
            swapData.push({ time: t, value: swaps }); 
            await delay(speed);

            bars[j].style.backgroundColor = "purple";
            bars[j + 1].style.backgroundColor = "purple";

            if (!swapped) break; 
            j--;
        }

        elements[j + 1] = key;
        bars[j + 1].style.height = key + "px";
        bars[j + 1].textContent = key;

        for (let k = 0; k <= i; k++) {
            bars[k].style.backgroundColor = "green";
        }

        await delay(speed / 2);
    }

    let t = Date.now() - start_time;
    compData.push({ time: t, value: comparisons });
    swapData.push({ time: t, value: swaps });
    drawGraph();

    stopTimer();
    isSorting = false;
}
