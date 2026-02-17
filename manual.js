function createManualInputModal() {
    const overlay = document.createElement("div");
    overlay.id = "manual-overlay";
    overlay.className = "manual-overlay"; 
    const modal = document.createElement("div");
    modal.className = "manual-modal"; 

    const title = document.createElement("h3");
    title.innerText = "Enter Numbers (comma, space, or newline separated)";
    modal.appendChild(title);

    const textarea = document.createElement("textarea");
    textarea.className = "manual-textarea";
    textarea.rows = 8;
    modal.appendChild(textarea);

    const btnContainer = document.createElement("div");
    btnContainer.className = "manual-btn-container";

    const submitBtn = document.createElement("button");
    submitBtn.className = "manual-submit";
    submitBtn.innerText = "Submit";
    submitBtn.onclick = () => {
        const input = textarea.value.trim();
        if (!input) return alert("Please enter numbers!");
        const values = input.split(/[\s,]+/).map(v => v.trim()).filter(v => v !== "" && !isNaN(v));
        if (values.length === 0) return alert("No valid numbers entered!");
        elements = values.map(Number);
        resetChart();
        resetMetrics();
        render();
        document.getElementById("data-size").innerText = elements.length;
        document.getElementById("status").innerText = "Manual input ready";
         updateRecommendationBanner();
       
        document.body.removeChild(overlay);
    };
    btnContainer.appendChild(submitBtn);

    const cancelBtn = document.createElement("button");
    cancelBtn.className = "manual-cancel";
    cancelBtn.innerText = "Cancel";
    cancelBtn.onclick = () => document.body.removeChild(overlay);
    btnContainer.appendChild(cancelBtn);

    modal.appendChild(btnContainer);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
}
