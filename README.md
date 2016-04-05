# Sport Algorithms JS
### 1 Bubble sort
### 2 Insert sort
### 3 Select sort
### 4 quick sort
### 5 compare 




### 1 Bubble sort
    May be the first sort algorithm of everyone. There is O(n^2) complexity in every case. 
    Complexity O(n) if we check "is sorted" with first
    iteration (and it is sorted).
    dance illustration https://www.youtube.com/watch?v=lyZQPjUT5B4
    
    usage 
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
    
    usage
    
    ` <script type="text/javascript" src="js/sort.min.js"></script>
      <script> 
      var arr = [10, 2, 3, 4,5,5,3,3,2,6,3];
      arr.insertSort();
      console.log(arr);
      </script>`
      
### 3 Select sort
    
