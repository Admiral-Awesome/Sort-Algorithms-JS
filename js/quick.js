
function  quickSort( left, right) {
    if ( arguments.length != 2   ) {
        left = 0;
        right = this.length - 1;
    }
    var i = left;
    var j = right;
    var tmp;
    pivotidx = (left + right) / 2; 
    var pivot = parseInt(this[pivotidx.toFixed()]);  
    
    while (i <= j) {
        while (parseInt(this[i]) < pivot)
        i++;
        while (parseInt(this[j]) > pivot)
            j--;
        if (i <= j) {
            tmp = this[i];
            this[i] = this[j];
            this[j] = tmp;
            i++;
            j--;
        }
    }

    if (left < j)
        this.quickSort( left, j);
    if (i < right)
        this.quickSort( i, right);
    return this;
}