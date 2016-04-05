# Sort Algorithms JS
### 1 Bubble sort
### 2 Insert sort
### 3 Select sort
### 4 Quick sort
### 5 compare 




### 1 Bubble sort
    May be the first sort algorithm of everyone. There is O(n^2) complexity in every case. 
    Complexity O(n) if we check "is sorted" with first
    iteration (and it is sorted).
    dance illustration https://www.youtube.com/watch?v=lyZQPjUT5B4
    
    ####usage 
      ` <script type="text/javascript" src="js/sort.min.js"></script>`
      `<script> 
      var arr = [10, 2, 3, 4,5,5,3,3,2,6,3];
      arr.bubbleSort();
      console.log(arr);
      </script>`
      
### 2 Insert sort
    Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list. 
    Each iteration, insertion sort removes one element from the input data, finds the location 
    it belongs within the sorted list,
    and inserts it there. It repeats until no input elements remain.
    
    complexity O(n^2), O(n) in the best case ( if it is sorted).
    Also weak side is a lot of swaps, it defines O(n) memory usage
    
    ####usage
    
    ` <script type="text/javascript" src="js/sort.min.js"></script>
      <script> 
      var arr = [10, 2, 3, 4,5,5,3,3,2,6,3];
      arr.insertSort();
      console.log(arr);
      </script>`
      
### 3 Select sort
    selection sort is a sorting algorithm, specifically an in-place comparison sort.
    It has O(n2) time complexity, making it inefficient on large lists, 
    and generally performs worse than the similar insertion sort.     
    Selection sort is noted for its simplicity, and it has performance advantages 
    over more complicated algorithms in certain situations, particularly where auxiliary memory is limited.
    
    ####usage
    
    ` <script type="text/javascript" src="js/sort.min.js"></script>
      <script> 
      var arr = [10, 2, 3, 4,5,5,3,3,2,6,3];
      arr.selectSort();
      console.log(arr);
      </script>`
### 4 Quick sort
    Quicksort is a divide and conquer algorithm. Quicksort first divides a large array into two smaller sub-arrays:
    the low elements and the high elements. Quicksort can then recursively sort the sub-arrays.

    The steps are:

    Pick an element, called a pivot, from the array.
    Partitioning: reorder the array so that all elements with values less than the pivot come before the pivot, 
    while all elements with values greater than the pivot come after it (equal values can go either way). 
    After this partitioning, the pivot is in its final position. This is called the partition operation.
    Recursively apply the above steps to the sub-array of elements with smaller values and separately 
    to the sub-array of elements with greater values.
    
    ####usage 
    
    ` <script type="text/javascript" src="js/sort.min.js"></script>
      <script> 
      var arr = [10, 2, 3, 4,5,5,3,3,2,6,3];
      arr.quickSort();
      console.log(arr);
      </script>`
      
### 5 compare
    ####result at 100 elements :
    
    bubbleSort:0.003 sec
    insertSort:0.001 sec
    selectSort:0.001 sec
    quickSort:0.001 sec
    
    ####result at 10 000 elements :
    bubbleSort:0.477 sec
    insertSort:0.168 sec
    selectSort:0.252 sec
    quickSort:0.042 sec
    
    quick sort stars winning :)
    
    ####result at 300 000 elements :
    bubbleSort:403.687 sec
    insertSort:165.92 sec
    selectSort:178.916 sec
    quickSort:0.744 sec
    
