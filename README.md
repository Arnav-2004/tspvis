# Traveling Salesperson Problem (TSP) Visualizer

This interactive visualization tool demonstrates various algorithms for solving the classic Traveling Salesperson Problem (TSP). Watch as different approaches construct and optimize routes between points, with real-time performance metrics and visual feedback.

## Features

- **Multiple Algorithm Implementations**:

  - Exhaustive search methods
  - Construction heuristics
  - Improvement heuristics

- **Interactive Visualization**:

  - Adjustable animation speeds
  - Step-by-step execution
  - Algorithm comparisons

- **Performance Metrics**:

  - Real-time path cost calculations
  - Operation counts
  - Execution time tracking

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/arnav-2004/tspvis.git
   ```

2. Navigate to the project directory:

   ```bash
   cd tsp-visualizer
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run develop
   ```

5. Open your browser to:
   ```
   http://localhost:3000
   ```

## Available Algorithms

### Construction Heuristics

1. **Arbitrary Insertion** - Randomly selects a point and inserts it optimally into the current path
2. **Convex Hull** - Builds outer hull first, then inserts interior points
3. **Furthest Insertion** - Starts with two farthest points, then adds nearest unvisited point
4. **Nearest Insertion** - Greedy insertion of nearest unvisited point into current path
5. **Nearest Neighbor** - Greedy approach always moving to closest unvisited point
6. **Simulated Annealing** - Probabilistic optimization inspired by metalworking

### Improvement Heuristics

1. **2-opt Inversion** - Eliminates path crossings by segment reversal
2. **2-opt Reciprocal Exchange** - Swaps two edges to reduce path length

### Exact Algorithms

1. **Branch and Bound on Cost** - Systematically explores paths with cost pruning
2. **Branch and Bound on Cost and Cross** - Similar to cost but also considers path crossings
3. **Depth First Search** - Brute-force with recursive backtracking
4. **Random** - Randomly generates paths and selects the best one

## Customization Options

- Adjust point set size (10-25 points recommended)
- Modify animation speed
- Create custom point layouts
- Compare multiple algorithms side-by-side
