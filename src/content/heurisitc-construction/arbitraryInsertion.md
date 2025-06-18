---
type: heuristic-construction
order: 2
solverKey: arbitraryInsertion
friendlyName: Arbitrary Insertion
defaults:
  evaluatingDetailLevel: 1
  maxEvaluatingDetailLevel: 1
---

# Heuristic Construction: Arbitrary Insertion

This heuristic provides a reasonably good solution much faster than brute-force methods, though it doesn't guarantee the absolute shortest path. It builds the route step by step, making locally optimal decisions at each stage.

## How It Works

1. **Start Simple**

   - Begins at your chosen starting city
   - Then goes directly to the nearest neighboring city

2. **Strategic Expansion**

   - Randomly selects remaining unvisited cities one by one
   - For each new city, finds the optimal place to insert it into the existing route
   - Chooses the insertion point that adds the least extra distance

3. **Completion**
   - Repeats until all cities are included in the route
   - Finally returns to the starting point

## Key Advantages

- **Much Faster** than brute-force methods
- **Better Than Random** - makes intelligent placement decisions
- **Scalable** to larger numbers of cities
- **Easy to Understand** with straightforward logic

## Limitations

- **Not Perfect** - may miss the absolute shortest possible route
- **Order Matters** - the random selection of next cities affects the outcome
- **Local Optimization** - makes the best immediate choice without global consideration

## When To Use It

- When you need a decent solution quickly
- For medium-sized problems (dozens of cities)
- As a starting point for more advanced optimization techniques

_Note: While not perfect, this method typically finds a good solution in a fraction of the time needed for exhaustive search methods._
