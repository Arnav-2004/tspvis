---
type: heuristic-construction
order: 1
solverKey: nearestNeighbor
friendlyName: Nearest Neighbor
defaults:
  evaluatingDetailLevel: 1
  maxEvaluatingDetailLevel: 1
---

# Nearest Neighbor

This simple heuristic builds a TSP route by always moving to the closest unvisited point, creating a complete circuit quickly. While not optimal, it provides a reasonable solution with minimal computation.

## How It Works

1. **Start at the Origin**

   - Begins at your selected starting city

2. **Iterative Closest-Point Selection**

   - From the current location, identifies the nearest unvisited city
   - Moves directly to that city
   - Marks it as visited

3. **Completion**
   - Repeats until all cities are visited
   - Returns to the starting city to complete the loop

## Key Characteristics

- **Greedy Approach**: Always makes the locally optimal choice
- **Extremely Fast**: One of the quickest TSP algorithms (O(n²))
- **Low Memory Usage**: Only needs to track current position and unvisited points
- **Deterministic**: Same input always produces same output

## Performance Considerations

✔ **Speed Advantage**: Can handle thousands of points efficiently  
✔ **Simple Implementation**: Easy to understand and program  
✔ **Reasonable Results**: Often within 20-30% of optimal solution

✘ **Suboptimal Paths**: Can create obvious inefficiencies in the route  
✘ **Chain Effect**: Early choices may force later long-distance jumps  
✘ **Starting Point Sensitivity**: Different starts yield different solutions

## Practical Applications

- When you need any valid solution quickly
- For initial route planning where perfection isn't required
- As a benchmark for comparing more sophisticated algorithms
- In situations where computational resources are limited

_Implementation Note: The algorithm's speed and simplicity make it popular for real-time applications and as a building block in more complex TSP solvers._
