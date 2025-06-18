---
type: exhaustive
order: 4
solverKey: branchAndBoundOnCostAndCross
friendlyName: Branch and Bound (Cost + Crossings)
defaults:
  evaluatingDetailLevel: 2
  maxEvaluatingDetailLevel: 2
---

# Branch and Bound (Cost + Crossings)

This method improves upon the basic Branch and Bound (Cost) approach by adding an extra rule to eliminate bad paths even faster.

## How It Works

1. **Same Smart Path Exploration as Before**

   - Like the basic version, it builds routes step by step, keeping track of the shortest complete path found so far.
   - If a partial path becomes longer than the best known route, it stops exploring that path further.

2. **Avoids Paths That Cross Over Themselves**
   - If adding a new city to the path causes the route to intersect (cross) itself, the algorithm immediately discards that path.
   - This is because the **shortest possible route will never cross itself**—it’s always better to go around without overlaps.

## Why It’s Even Better

- **Faster Elimination of Bad Paths**: By rejecting self-crossing routes early, it skips many unnecessary calculations.
- **Still Guarantees the Best Solution**: Just like the basic version, this method will always find the shortest possible route.
- **Works Well for Medium-Sized Problems**: While not the fastest for huge numbers of cities, it’s much more efficient than checking every possible path.

This makes it a smarter and quicker way to solve the Traveling Salesperson Problem while still ensuring the optimal solution.

_Note: The no-crossing rule helps speed things up, but for very large city sets, even this method can take time._
