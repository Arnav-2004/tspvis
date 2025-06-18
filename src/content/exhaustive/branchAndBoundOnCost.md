---
type: exhaustive
order: 3
solverKey: branchAndBoundOnCost
friendlyName: Branch and Bound (Cost)
defaults:
  evaluatingDetailLevel: 2
  maxEvaluatingDetailLevel: 2
---

# Branch and Bound on Cost

This approach is a smart way to find the **shortest possible route** that visits all cities exactly once and returns to the starting point. It works by exploring possible paths while eliminating unnecessary ones early, saving time and effort.

## How It Works

1. **Explore Paths Step by Step**

   - The algorithm starts from the first city and tries different routes one by one, keeping track of the total distance traveled.

2. **Compare with the Best Known Path**

   - If, at any point, the current path becomes longer than the best complete route found so far, the algorithm stops exploring further from that path. This avoids wasting time on routes that can't possibly be better.

3. **Keep Track of the Shortest Path**

   - Whenever a new complete route is found that is shorter than the previous best, it updates the record.

4. **Eliminate Unpromising Paths Early**
   - By cutting off paths that are already too long, the algorithm focuses only on routes that have the potential to be the best.

## Why It’s Efficient

- Instead of checking every possible route (which can be extremely slow for many cities), this method skips bad routes early.
- It guarantees finding the **optimal solution** (the shortest path) without having to explore every single possibility.

This makes it much faster than a brute-force approach while still ensuring the best possible answer.

_Note: For a small number of cities, it works quickly, but for a large number, it may still take time—though much less than checking all possible paths!_
