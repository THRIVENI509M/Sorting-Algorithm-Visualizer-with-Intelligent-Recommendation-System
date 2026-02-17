# Sorting-Algorithm-Visualizer-with-Intelligent-Recommendation-System
A modern, interactive Sorting Algorithm Visualizer built using HTML, CSS, and JavaScript. This project not only visualizes sorting algorithms in real time but also analyzes dataset characteristics to recommend the most suitable algorithm automatically.
#Features
Real-time sorting visualization
Intelligent algorithm recommendation system
Performance tracking:
  - Comparisons
  - Swaps
  - Execution time
 Live performance graphs (Comparisons vs Time, Swaps vs Time)
CSV file upload support
Manual data input
Adjustable speed control
Start / Stop / Reset functionality
Clean and responsive UI

#Intelligent Recommendation Logic

The system analyzes the dataset using:

- Array size
- Nearly sorted detection
- Duplicate ratio
- Variance calculation

Based on these metrics, it recommends:

- **Insertion Sort** → Small & nearly sorted datasets  
- **Bubble Sort** → Very small unsorted datasets  
- **Merge Sort** → High duplicate ratio / balanced datasets  
- **Quick Sort** → Large randomized datasets

#Tech Stack

- HTML5
- CSS3 (Flexbox, modern UI styling)
- Vanilla JavaScript (Async/Await, DOM Manipulation, Data Analysis)
- Chart-based performance visualization

#How to Run

1. Clone the repository
2. Open `index.html` in your browser
3. Upload a CSV file, enter manual input, or generate random data
4. Start sorting and observe performance metrics

Author

**Thriveni M**
