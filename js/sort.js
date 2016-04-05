
function insertSort() {
    if ( this.length == 1 ) {
        return this;
    }
    var tmp;

    for ( var i = 1; i < this.length; i++ ) {
        tmp = this[i];
        var j = i - 1;
        while ( j >= 0 && this[j] > tmp) {
            
            this[j+1] = this[j];

            j--;

            this[j+1] = tmp;
        
        }
        
    }
        return this;
}


function selectSort() {
    if ( this.length == 1 ) {
        return this;
    }

    for ( var i = 0; i < this.length; i++) {
        var min = this[i];
        var k = i;
        for ( var j = i+1; j < this.length; j++ ) {
            if ( min > this[j]) {
                k = j;
                min = this[j];
            }
        }
        this[k] = this[i];
        this[i] = min;
       
    }
    return this;
}


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


function bubbleSort() {
    if (this.length == 1) {
        return this;
    }

    var tmp;

    for ( var i = 0; i < this.length; i++)
        for ( var j = 0; j < this.length; j++) {
            if ( this[i] < this[j] ) {
                tmp = this[i];
                this[i] = this[j];
                this[j] = tmp;

            }
        }
        return this;
}

(function () {
    this.bubbleSort = bubbleSort;
    this.insertSort = insertSort;
    this.selectSort = selectSort;
    this.quickSort = quickSort;
}).call(Array.prototype);