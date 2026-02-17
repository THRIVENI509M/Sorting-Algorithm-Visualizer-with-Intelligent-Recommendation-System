async function quickSortStart() {
    if (elements.length === 0 ) return;
    isSorting = true;

    resetMetrics();
    resetChart();
    compData = [];
    swapData = [];
    starttime();

    let comparisons = 0;
    let swaps = 0;
    let bars = document.querySelectorAll(".bar");

    async function partition(low, high) {
        if (!isSorting) return ; 
        let pivot = elements[high];
        let i = low - 1;

        for (let j = low; j < high; j++) {
            if (!isSorting) return; 
            comparisons++;
            let t = Date.now() - start_time;
            compData.push({ time: t, value: comparisons });

            comp_count.innerText = comparisons;

            bars[j].style.backgroundColor = "red";
            bars[high].style.backgroundColor = "yellow"; // pivot

            await delay(speed);

            if (elements[j] < pivot) {
                i++;
                [elements[i], elements[j]] = [elements[j], elements[i]];
                swaps++;
                let t = Date.now() - start_time;
                swapData.push({ time: t, value: swaps });

                swap_count.innerText = swaps;

                bars[i].style.height = elements[i] + "px";
                bars[i].textContent = elements[i];
                bars[j].style.height = elements[j] + "px";
                bars[j].textContent = elements[j];
            }
            bars[j].style.backgroundColor = "purple";
            bars[high].style.backgroundColor = "purple";
        }
        if (!isSorting) return ; 
        [elements[i + 1], elements[high]] = [elements[high], elements[i + 1]];
        swaps++;
        swap_count.innerText = swaps;

        bars[i + 1].style.height = elements[i + 1] + "px";
        bars[i + 1].textContent = elements[i + 1];
        bars[high].style.height = elements[high] + "px";
        bars[high].textContent = elements[high];

        return i + 1;
    }

    async function quickSort(low, high) {
        if (!isSorting) return ; 
        if (low < high) {
            let pi = await partition(low, high);
            if (!isSorting || pi === undefined) return;

            await quickSort(low, pi - 1);
            await quickSort(pi + 1, high);
        }
    }

    await quickSort(0, elements.length - 1);
     if (!isSorting) {
        stopTimer();
        generatebtn.disabled = false;
        startbtn.disabled = false;
        return;
    }
    bars.forEach(bar => (bar.style.backgroundColor = "green"));

    stopTimer();
    isSorting = false;
    compData.push({ time: Date.now() - start_time, value: comparisons });
    swapData.push({ time: Date.now() - start_time, value: swaps });

    drawGraph();
    comp_count.innerText = comparisons;
    swap_count.innerText = swaps;
     generatebtn.disabled = false;
    startbtn.disabled = false;
}
