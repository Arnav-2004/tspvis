---
type: heuristic-construction
order: 3
solverKey: nearestInsertion
friendlyName: Nearest Insertion
defaults:
  evaluatingDetailLevel: 1
  maxEvaluatingDetailLevel: 1
---

# Nearest Insertion

This construction algorithm builds a TSP route by always incorporating the closest available point next, making locally optimal decisions at each step. While simple, it often produces decent solutions quickly.

## How It Works

1. **Start with a Seed Route**

   - Begins at your selected starting point
   - Adds the single closest point to form an initial two-point path

2. **Iterative Expansion**

   - Identifies the unvisited point closest to any point on the current path
   - Finds the optimal position to insert this point where it increases the total distance the least
   - Adds the point at this calculated position

3. **Completion**
   - Repeats the process until all points are included in the route
   - Returns to the starting point to complete the circuit

## Key Characteristics

- **Greedy Approach**: Makes the locally optimal choice at each step
- **Computationally Efficient**: Runs in O(n²) time, practical for medium-sized problems
- **Simple Implementation**: Easy to understand and code
- **Tends to Create Compact Routes**: By focusing on nearby points

## Strengths and Limitations

✔ **Fast Execution** - Handles hundreds of points efficiently  
✔ **Deterministic** - Always produces the same result for the same input  
✔ **Low Memory Usage** - Only needs to track current path and available points

✘ **Suboptimal Results** - Can miss better global solutions  
✘ **Chain Effect** - Early choices constrain later options  
✘ **Sensitive to Starting Point** - Different starts yield different solutions

## When To Use This Method

- For quick approximations when optimality isn't critical
- As a baseline for comparing more advanced algorithms
- In situations where computation time is more important than perfect accuracy
- When implementing a simple initial solution for later refinement

_Implementation Note: The algorithm's simplicity makes it popular for educational purposes and as a component in more sophisticated hybrid approaches._
