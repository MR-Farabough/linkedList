class Node {
    constructor(data, pointer = null) {
        this.data = data;
        this.pointer = pointer;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++
    }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(50)
console.log(ll);
