---
type: heuristic-construction
order: 4
solverKey: furthestInsertion
friendlyName: Furthest Insertion
defaults:
  evaluatingDetailLevel: 1
  maxEvaluatingDetailLevel: 1
---

# Furthest Insertion

This heuristic construction method builds efficient TSP routes by prioritizing distant points first, creating a good overall structure before optimizing local details. It often produces better solutions than nearest-neighbor approaches while remaining computationally efficient.

## How It Works

1. **Initialization Phase**

   - Starts at your chosen origin point
   - Adds the closest neighboring point to begin forming the route

2. **Iterative Expansion**

   - Identifies the point furthest from any point currently in the route
   - Determines where inserting this point would increase the total distance the least
   - Adds the point at this optimal position

3. **Completion**
   - Repeats the process until all points are included
   - Returns to the starting point to complete the circuit

## Key Advantages

- **Better Global Structure**: By incorporating distant points early, avoids creating isolated clusters
- **Computationally Efficient**: Runs in polynomial time (O(n²))
- **Balanced Growth**: Builds both the skeleton and details of the route simultaneously
- **Often Outperforms Nearest Insertion**: Typically finds shorter overall routes

## Practical Considerations

- **Not Optimal**: Doesn't guarantee the absolute shortest path
- **Insertion Order Matters**: Final solution depends on point selection sequence
- **Works Best When**: Points have varied spatial distribution

## When To Use

- For medium-sized problems (dozens to hundreds of points)
- When you need a good solution faster than exact methods can provide
- As an initialization step for more advanced optimization algorithms

_Implementation Insight: The algorithm smartly balances global and local optimization - first establishing the route's overall shape by incorporating distant points, then refining the path through optimal insertions._
