# algorithms-trainning

# Notes

# Stacks and queues

## Stack

**Amortized analysis**: Average running time per operation over a worst-case sequence of operations.

Stack example (Dijkstra's two-stack algorithm):
( 1 + ( ( 2 + 3 ) * ( 4 * 5 ) ) )
can be solved with two stack. One to values another to operators.


### Linked-list implementations.
* Every operations takes constant time in the worst case.
* Uses extra time and space to deal with the links

### Resizing-array implementation.
* Every operation takes constant amortized time.
* Less wasted space.

## Bag
* Adding items to a collection and iterating (when order doesn't matter)


# Analysis of Algorithms

Predict performance
Compare algoriths
Provide guarantees

### Scientific method.
* **Observe** some feature of natural world.
* **Hypothesize** a model that is consistent with the observations
* **Predict** events using the hypothesis
* **Verify** the predictions by making further obervations
* **Validate** by repeating until the hypothesis and observations agree

### Principles
* Experiments must be **reproducible**
* Hypotheses mus be **falsifiable**

## Observations

* **Standart plot.** Plot running time T(N) vs. input size N.
* **Log-log plot.** Plot running time T(N) vs. input size N using log-log scale.

lg(T(N)) = b lg N + c </br>
b = 2.999             </br>
c = -33.2103          </br>
T(N) = aN<sup>b</sup>, where a = 2<sup>c</sup> </br>


## Order of growth

log _N_, _N_, _N_ log _N_, _N_<sup>2</sup>, N<sup>3</sup>, and 2<sup>n</sup>


| Order of growth| name          | example code                                                                            | description| example      |
|:--------------:|:-------------:|:---------------------------------------------------------------------------------------:|:--------------:|:--------------:| 
| 1              | constant      | a = b + c                                                                               | statement     | add two numbers     |
| log N          | logarithmic   |  ``` while (N > 1) ```</br>``` {   N = N / 2; ...}```                                   | divide in half| binary search       |
| N              | linear        | ```for (int i = 0; i < N; i++) ```</br>``` { ... } ```                                  |  loop          | find the maximum    | 
| N log N        | linearithmic  |  [mergesort]                                                                            | divide and conquer | mergesort |
| N<sup>2</sup>  | quadratic     |```for (int i = 0;...)```</br>```  for(int j = 0;...)```                                 | double loop | check all pairs |
| N<sup>3</sup>  | cubic         |```for (int i = 0;...)```</br>```  for(int j = 0;...)```</br>```    for(int k = 0;...)```| triple loop | check all triples |
| 2<sup>N</sup>  | exponential   | combinatorial                                                                           | exhaustive search | check all subsets |





