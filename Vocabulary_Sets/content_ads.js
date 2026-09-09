const adsContent = [
  "// Unit 1: Foundations of Algorithms and Array-Based Data Structures",
  "Asymptotic notations Big-O, Theta, and Omega describe the upper, tight, and lower bounds on the growth rate of an algorithm's running time or space usage.",
  "Recursion solves a problem by reducing it to smaller instances of the same problem until a base case is reached; every recursive algorithm can be expressed with a recurrence relation.",
  "The master method provides a cookbook solution for divide-and-conquer recurrences of the form T of n equals a T of n over b plus f of n under certain regularity conditions.",
  "Quick sort selects a pivot, partitions the array around it, and recursively sorts the sub-arrays; its average-case time is Theta of n log n while the worst case is Theta of n squared.",
  "Merge sort divides the array into two halves, recursively sorts them, and then merges the sorted halves in linear time achieving guaranteed Theta of n log n performance.",
  "// Unit 2: Linked Data Structures, Trees, and Hashing Techniques",
  "A singly linked list consists of nodes each containing data and a reference to the next node; insertion and deletion at the head are constant time operations.",
  "A binary search tree maintains the invariant that all keys in the left subtree are less than the root and all keys in the right subtree are greater.",
  "Tree traversals include preorder root-left-right, inorder left-root-right, and postorder left-right-root; level-order traversal visits nodes level by level using a queue.",
  "Hashing maps keys to array indices using a hash function; a good hash function distributes keys uniformly to minimize collisions.",
  "// Unit 3: Graph Algorithms and Dynamic Programming",
  "Dijkstra's algorithm finds shortest paths from a single source in a graph with non-negative edge weights by always expanding the unsettled node with smallest distance.",
  "Prim's algorithm grows a minimum spanning tree by repeatedly adding the cheapest edge that connects a vertex in the tree to a vertex outside the tree.",
  "Kruskal's algorithm sorts all edges by weight and adds an edge to the spanning forest if it does not form a cycle using a union-find structure.",
  "Dynamic programming solves problems by combining solutions to overlapping subproblems and storing intermediate results to avoid recomputation."
];
