# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Olivia and I worked on this together for the first implementation. When I changed my implementation to using a queue, I used https://www.geeksforgeeks.org/implementation-queue-javascript/, to read more on queues in javascript and the functions that come with them.  https://www.geeksforgeeks.org/how-to-remove-a-specific-element-from-queue/. I used the class slides on quicksort and also remembered the idea of median of three from quicksort pivot. I also read more of median of three through https://www.geeksforgeeks.org/how-do-you-avoid-a-worst-case-algorithm-for-a-quick-sort/. 

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

With this implementation, the while loop processes subarrays using a stack, and the for loop nested in this while loop partions each subarray around the pivot. In a worst-case runtime, the time complexity would be $\Theta$ $(n^2)$. 
