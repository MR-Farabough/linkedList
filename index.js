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
        this.size++;
    }
    // insertLast
    // at(index) => returns node at index
    // pop() => remove last item in list
    // contains(value) => return true or false
    // find(value) => return index of node or null
    // insert at index
    // remove at index
    toString() {
        let current = this.head;
        let str = '';
        while (current) {
            str += `( ${current.data} ) => `;
            current = current.pointer;
        }
        str += 'null'
        return str
    }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(50);
console.log(ll.toString());
console.log(ll.size)