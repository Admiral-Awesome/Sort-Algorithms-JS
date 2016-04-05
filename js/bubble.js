
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

window.onload = (function () {
    this.bubbleSort = bubbleSort;
    this.insertSort = insertSort;
    this.selectSort = selectSort;
    this.quickSort = quickSort;
}).call(Array.prototype);