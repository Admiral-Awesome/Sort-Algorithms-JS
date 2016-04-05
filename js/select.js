
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