---
type: exhaustive
order: 2
solverKey: random
friendlyName: Random
defaults:
  evaluatingDetailLevel: 1
  maxEvaluatingDetailLevel: 1
---

# Random Search

This is the most basic (and least effective) way to approach the Traveling Salesperson Problem. It works by blindly guessing random paths and keeping the best one found so far.

## How It Works

1. **Starts with the First City**

   - The algorithm begins at your chosen starting point.

2. **Creates Random Paths**

   - It shuffles the remaining cities in a random order to create a new potential route.

3. **Checks if the New Path is Better**

   - If the randomly generated path is shorter than the best one found so far, it keeps it.
   - Otherwise, it discards it and tries again.

4. **Repeats Forever (or Until Stopped)**
   - In theory, given infinite time, it would eventually find the optimal path.
   - In practice, it's extremely unlikely to find a good solution for even moderately sized problems.

## Why It’s Not Practical

- **Extremely Slow**: The chance of randomly finding the best path decreases dramatically as more cities are added.
- **No Guarantees**: Even after millions of attempts, it might never come close to the true shortest path.
- **Only Works for Tiny Problems**: Useful for demonstrating how _not_ to solve TSP, but ineffective beyond about 7 cities.

## When You Might Use It

- For educational purposes, to show why better algorithms are needed.
- As a baseline to compare against smarter methods.
- When you only have 3-4 cities and want the simplest possible approach.

_Note: This method is included for demonstration only—real-world TSP solutions use much more sophisticated techniques!_
