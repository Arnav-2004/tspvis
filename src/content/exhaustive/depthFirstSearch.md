---
type: exhaustive
order: 1
solverKey: depthFirstSearch
friendlyName: Depth First Search (Brute Force)
defaults:
  evaluatingDetailLevel: 2
  maxEvaluatingDetailLevel: 2
---

# Depth First Search (Brute Force)

This is the simplest but least efficient way to solve the Traveling Salesperson Problem (TSP). It checks **every possible route** to guarantee finding the absolute shortest path.

## How It Works

1. **Starts at the First City**

   - The algorithm begins at your chosen starting point.

2. **Tries Every Possible Path One by One**

   - From the current city, it moves to every unvisited city, then repeats the process recursively.
   - It keeps track of visited cities to avoid revisiting them.

3. **Calculates the Total Distance for Each Complete Route**

   - Once a path includes all cities and returns to the start, it records the total distance.

4. **Keeps the Shortest Path Found**
   - After evaluating all possible routes, it returns the one with the smallest total distance.

## Why It’s Inefficient

- **Factorial Growth**: The number of possible paths explodes as more cities are added.
  - **10 cities** → ~181,000 paths
  - **12 cities** → ~20 million paths
  - **20 cities** → ~60 quintillion paths (impossible to compute in a reasonable time)
- **Guaranteed but Impractical**: While it always finds the best path, it’s too slow for anything beyond a small number of cities.

## When to Use It

- Only useful for **very small problems** (less than 10 cities).
- Helps understand the basics of TSP before moving to smarter algorithms.

_Note: For real-world problems, faster (but approximate) methods are used instead._
