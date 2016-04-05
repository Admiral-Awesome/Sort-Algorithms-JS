
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