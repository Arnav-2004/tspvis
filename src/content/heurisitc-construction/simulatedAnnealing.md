---
type: heuristic-construction
order: 6
solverKey: simulatedAnnealing
friendlyName: Simulated Annealing
defaults:
  evaluatingDetailLevel: 1
  maxEvaluatingDetailLevel: 1
---

# Simulated Annealing

This probabilistic algorithm mimics the physical process of metal annealing to find high-quality solutions to the Traveling Salesperson Problem. Unlike greedy algorithms, it can escape local optima to explore better solutions.

## How It Works

1. **Initial Setup**

   - Starts with a random initial route
   - Sets an initial "temperature" (controls exploration)

2. **Iterative Improvement**

   - Randomly modifies the current route (e.g., swaps two cities)
   - Always accepts better solutions
   - Sometimes accepts worse solutions (based on temperature and how much worse)

3. **Cooling Process**

   - Gradually reduces temperature over time
   - Makes algorithm more selective as it progresses
   - Transitions from exploration to exploitation

4. **Completion**
   - Returns the best solution found when cooled

## Key Advantages

- **Escapes Local Optima**: Can accept temporary worse solutions to find better ones
- **Controlled Exploration**: Temperature parameter balances exploration vs exploitation
- **Asymptotic Convergence**: Given proper cooling, will find global optimum
- **Flexible**: Can be combined with other heuristics

## Practical Considerations

✔ **Effective for Complex Problems**: Handles rugged solution spaces well  
✔ **Tunable Parameters**: Cooling schedule can be adjusted for quality/speed tradeoff  
✔ **Generally Outperforms Greedy Methods**: Finds better solutions given enough time

✘ **Parameter Sensitive**: Performance depends on cooling schedule  
✘ **Computationally Intensive**: Requires many iterations  
✘ **Non-Deterministic**: Different runs may yield different results

## When To Use

- For medium-large problems where good solutions are more important than perfect ones
- When you can afford computation time for better quality
- For problems with many local optima where greedy methods fail
- As a refinement step after construction heuristics

_Implementation Insight: The algorithm's temperature parameter acts like a "funnel" - starting wide to explore broadly, then narrowing to focus on promising areas._
