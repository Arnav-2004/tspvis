---
type: heuristic-improvement
order: 1
solverKey: twoOptInversion
friendlyName: Two Opt Inversion
defaults:
  evaluatingDetailLevel: 1
  maxEvaluatingDetailLevel: 1
---

# Two-Opt inversion

This improvement heuristic (also called 2-opt) efficiently refines existing TSP routes by systematically eliminating path crossings. It's one of the most effective and widely-used local search methods for route optimization.

## How It Works

1. **Start with an Existing Route**

   - Takes any valid TSP tour as input (can be random or from another algorithm)

2. **Identify Crossings**

   - Examines all possible pairs of edges in the current path
   - Checks if "uncrossing" them would shorten the route

3. **Perform Optimizing Swaps**

   - When a crossing is found, reverses the segment between two points
   - This operation is called a "2-opt move"
   - Keeps the change only if it reduces total distance

4. **Iterative Refinement**
   - Repeats the process until no more improving swaps can be found
   - Guarantees the final path has no self-intersections

## Key Advantages

✔ **Effective Improvement**: Typically reduces path length by 10-20% over initial solutions  
✔ **Guaranteed No Crossings**: Produces visually clean, logical routes  
✔ **Computationally Efficient**: O(n²) complexity makes it practical for medium-sized problems  
✔ **Simple Implementation**: Easy to code and understand  
✔ **Versatile**: Can be combined with other algorithms

## Performance Characteristics

- **Local Optima**: May get stuck in good-but-not-perfect solutions
- **Deterministic Outcome**: Same input always produces same output
- **Best as Refinement Step**: Often used after construction heuristics

## When To Use

- To polish solutions from other algorithms (like Nearest Neighbor)
- When you need to quickly improve an existing route
- As a component in more sophisticated optimization procedures
- For problems where eliminating path crossings is important

_Implementation Insight: The 2-opt move is the simplest case of the k-opt heuristic family, but provides most of the benefit with minimal computational overhead._
