function handleCSVUpload(event){
    if (isSorting) return;

    const file=event.target.files[0];
    if(!file) return;

    const reader=new FileReader();
    reader.onload=function(e){
            const text = e.target.result;
            let values = text.split(/[\n,]+/);
            elements = values
                .map(v => Number(v.trim()))
                .filter(v => !isNaN(v));
                if (elements.length === 0) {
                    alert("No valid numbers found in CSV.");
                    return;
        }
        resetChart();
        resetMetrics();
        render();
        document.getElementById("data-size").innerText = elements.length;
        document.getElementById("status").innerText = "CSV data loaded";
        updateRecommendationBanner();
        
    };

    reader.readAsText(file);
}
