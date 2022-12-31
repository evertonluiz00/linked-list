class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

// A -> B -> C -> D -> NULL

// Pinted Linked List
const printLinkedList = (head) => {
    let current = head;
    while (current !== null) {
        console.log(current.val);
        current = current.next;
    }
}

// Recursive printed Linked List
const printLinkedListRecursive = (head) => {
    if (head === null) return;
    console.log(head.val);
    printLinkedListRecursive(head.next);
}

// Linked List to Array
const linkedListValues = (head) => {
    const values = [];
    let current = head;
    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }
    return values
}

// Recursive Linked List to Array
const linkedListValuesRecursive = (head) => {
    const values = [];
    fillValues(head, values);
    return values;
};

const fillValues = (head, values) => {
    if (head === null) return;
    values.push(head.val);
    fillValues(head.next, values);
}


const v1 = new Node(1);
const v5 = new Node(5);
const v10 = new Node(10);
const v16 = new Node(16);

v1.next = v5;
v5.next = v10;
v10.next = v16;


// Sum Linked List
const sumLinkedList = (head) => {
    let sum = 0;
    let current = head;
    while (current !== null) {
        sum += current.val;
        current = current.next;
    }
    return sum;
}

// Recursive Sum Linked List
const sumLinkedListRecursive = (head) => {
    if (head === null) return 0;
    return head.val + sumLinkedListRecursive(head.next);
};


printLinkedList(a);
printLinkedListRecursive(a);
console.log(linkedListValues(a));
console.log(linkedListValuesRecursive(a));
console.log(sumLinkedList(v1));
console.log(sumLinkedListRecursive(v1));