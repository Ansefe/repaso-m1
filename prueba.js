function Queue() {
    this.array = [];
}

Queue.prototype.enqueue = function (elemento) {
    return this.array.push(elemento);
};

Queue.prototype.dequeue = function () {
    return this.array.shift();
};

Queue.prototype.size = function () {
    return this.array.length;
};

Queue.prototype.isEmpty = function () {
    return this.size === 0;
};



Queue.prototype.reverseStack = function () {
    var elim = this.dequeue();
    if (this.size()>0){
        this.reverseStack();
    }
    this.enqueue(elim);
    console.log(this);
    return this.array;
};

const q1 = new Queue();
q1.enqueue(1);
q1.enqueue(2);
q1.enqueue(3);
q1.enqueue(4);

console.log(q1);

console.log(q1.reverseStack());
