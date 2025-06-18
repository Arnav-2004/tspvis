---
type: heuristic-construction
order: 5
solverKey: convexHull
friendlyName: Convex Hull
defaults:
  evaluatingDetailLevel: 2
  maxEvaluatingDetailLevel: 2
---

# Convex Hull

This heuristic method builds an efficient TSP route by first creating a convex hull (the outermost "shape" of the points) and then strategically inserting interior points. It's faster than brute-force methods while often producing good quality solutions.

## How It Works

1. **Build the Convex Hull** (Outer Framework)

   - Finds the leftmost point as a starting location
   - Constructs the outermost polygon by continuously adding the most counterclockwise points
   - This creates the basic "frame" of the route

2. **Insert Interior Points Strategically**

   - For each remaining interior point, calculates where adding it would increase the total distance the least
   - Chooses insertion points that minimize the relative cost increase (cost-to-benefit ratio)
   - Adds points one by one until all are included

3. **Complete the Circuit**
   - Returns to the starting point to finish the route

## Key Advantages

- **More Logical Than Random**: Builds on geometric principles for better structure
- **Efficient**: Avoids the factorial complexity of brute-force methods
- **Visually Appealing**: Creates routes that follow natural boundaries first
- **Scalable**: Handles larger point sets better than exhaustive methods

## Limitations

- **Not Perfect**: May not find the absolute shortest possible route
- **Order Dependent**: Insertion sequence affects final outcome
- **Geometric Bias**: Works best when points have clear convex/concave relationships

## When To Use It

- When you need a reasonably good solution quickly
- For problems with clear geometric clusters of points
- As a starting point for further route optimizations
- When visual appeal of the route matters

_Note: This method often produces more "natural-looking" routes than purely mathematical approaches, making it popular for real-world routing problems where perfect optimization isn't critical._
