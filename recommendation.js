function getRecommendation(analysis) {
    const { size, nearlySorted, duplicateRatio, variance } = analysis;

    let recommendedAlgorithm = "";
    let reason = "";
    if (size <= 15 && nearlySorted) {
        recommendedAlgorithm = "Insertion Sort";
        reason = "Very small and nearly sorted dataset detected";
    } else if (size <= 10 && !nearlySorted) {
        recommendedAlgorithm = "Bubble Sort";
        reason = "Very small unsorted dataset; simple comparison-based sorting is sufficient";

    } else if (duplicateRatio > 0.3) {
        recommendedAlgorithm = "Merge Sort";
        reason = "High duplicate ratio detected; stable sorting preferred";
    } else if (size > 20 && variance > 150) {
        recommendedAlgorithm = "Quick Sort";
        reason = "Large randomized dataset detected; Quick Sort is efficient";
    } else {
        recommendedAlgorithm = "Merge Sort";
        reason = "Balanced dataset; Merge Sort ensures stable and consistent performance";
    }

    return {
        recommendedAlgorithm,
        reason
    };
}
