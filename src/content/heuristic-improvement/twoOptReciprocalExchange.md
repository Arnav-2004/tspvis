---
type: heuristic-improvement
order: 2
solverKey: twoOptReciprocalExchange
friendlyName: Two Opt Reciprocal Exchange
defaults:
  evaluatingDetailLevel: 1
  maxEvaluatingDetailLevel: 1
---

# Two-Opt Reciprocal Exchange

This local search algorithm provides a simpler alternative to standard 2-opt inversion for refining TSP solutions. While less powerful than its inversion counterpart, it offers faster computation for quick improvements.

## How It Works

1. **Initial Setup**

   - Begins with any valid TSP route (can be random or from another algorithm)
   - Tracks the current best path length

2. **Iterative Improvement**

   - Systematically examines all possible pairs of points in the route
   - Swaps each pair's positions in the path
   - Keeps swaps that reduce the total distance
   - Reverts swaps that don't improve the route

3. **Termination**
   - Continues until a full pass through all point pairs yields no improvements
   - Returns the best found configuration

## Key Characteristics

- **Simpler Operation**: Just swaps points rather than reversing segments
- **Faster Computations**: Each swap evaluation is less intensive than 2-opt inversion
- **No Crossing Guarantee**: Unlike 2-opt inversion, may leave some path crossings
- **Mild Improvements**: Typically provides smaller gains than full 2-opt

## Performance Tradeoffs

✔ **Computationally Efficient**: Lower overhead per iteration  
✔ **Easy to Implement**: Simple swap operation  
✔ **Quick First Improvements**: Often finds early gains rapidly

✘ **Limited Optimization**: Doesn't eliminate all crossings  
✘ **Smaller Improvements**: Generally finds less optimal solutions than 2-opt inversion  
✘ **Local Optima**: Can get stuck in suboptimal configurations

## When To Consider Using It

- For rapid preliminary refinement before more intensive optimization
- When working with very large datasets where 2-opt inversion is too slow
- In situations where moderate improvement is sufficient
- As part of a hybrid optimization approach with other techniques

_Implementation Note: While less powerful than full 2-opt inversion, this method's simplicity makes it useful in certain scenarios, particularly when computational resources are limited._
