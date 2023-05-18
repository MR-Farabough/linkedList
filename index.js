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
    insertLast(data) {
        if (data) {
            if (this.size == 0) {
                return this.insertFirst(data)
            } else {
                let current = this.head;
                while (current) {
                    if (current.pointer == null) {
                        this.size++
                        return current.pointer = new Node(data)
                    } else {
                        current = current.pointer;
                    }
                }
            }
            this.size++
        }
    }
    at(index) {
        if (index > this.size || index < 0) return null
        let curIndex = 0
        let current = this.head
        let stopper = true
        while (stopper) {
            if (curIndex == index) {
                stopper = false
                return current
            } else {
                current = current.pointer
                curIndex++
            }
        }
    }
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
ll.insertLast(200);
ll.insertFirst(50);
console.log(ll.toString());
console.log(ll.at(0))