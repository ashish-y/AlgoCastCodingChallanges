// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor(){
         this.A = new Stack();
         this.B = new Stack();
    }
    add(record){
        this.A.push(record);
    }
    remove(){
        while(this.A.peek()){
            var value = this.A.pop();
            this.B.push(value);
        }
        var element = this.B.pop()
        while(this.B.peek()){
            var value = this.B.pop();
            this.A.push(value);
        }
        return element;
        
    }
    peek(){
        while(this.A.peek()){
            var value = this.A.pop();
            this.B.push(value);
        }
        var element = this.B.pop()
        this.A.push(element);
        while(this.B.peek()){
            var value = this.B.pop();
            this.A.push(value);
        }
        return element;
    }
}

module.exports = Queue;
