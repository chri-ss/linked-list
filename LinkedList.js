const Node = (value = null, next = null) => {
  return { value, next };
};
const LinkedList = (value) => {
  head = Node(value);
  const getHead = (value) => {
    return head;
  };

  const getTail = () => {
    let temp = head;
    while (temp.next != null) {
      temp = temp.next;
    }
    return temp;
  };

  const append = (value) => {
    temp = head;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = Node(value);
  };

  const prepend = (value) => {
    //create a new node, set it's next equal to the head of the list
    const newNode = Node(value);
    newNode.next = head;
    //set head equal to the new node instead of the original head
    head = newNode;
  };

  const size = () => {
    //walk through the list and increment counter for each node visited
    let counter = 1;
    let curr = head;
    while (curr.next != null) {
      curr = curr.next;
      counter++;
    }
    return counter;
  };

  const at = (index) => {
    let counter = 0;
    let curr = head;
    while (curr.next != null) {
      curr = curr.next;
      counter++;
      if (counter === index) {
        return curr;
      }
    }
  };

  const pop = () => {
    let curr = head;
    while (curr.next.next != null) {
      curr = curr.next;
    }
    curr.next = null;
  };

  const contains = (value) => {
    let curr = head;
    while (curr.next != null) {
      curr = curr.next;
      if (curr.value === value) {
        return true;
      }
    }
    return false;
  };

  const find = (value) => {
    let curr = head;
    let counter = 0;
    while (curr.next != null) {
      curr = curr.next;
      counter++;
      if (curr.value === value) {
        return counter;
      }
    }
    return false;
  };

  const toString = () => {
    let curr = head;
    let str = "";
    while (curr != null) {
      str += `( ${curr.value} ) -> `;
      curr = curr.next;
    }
    str += "null";
    return str;
  };

  const insertAt = (value, index) => {
    // create the new node
    const newNode = Node(value);

    //set the pointer of the new node to the point to the node that currently occupies the index [value]
    if (index <= size()) {
      const curr = at(index);
      const prev = at(index - 1);
      newNode.next = curr;
      prev.next = newNode;
    } else {
      return false;
    }
  };

  const removeAt = (index) => {
    if (index <= size()) {
      let curr = at(index);
      let prev = at(index - 1);
      prev.next = curr.next;
      curr = null;
    } else {
      return false;
    }
  };
  return {
    getHead,
    getTail,
    append,
    prepend,
    size,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};

//test

const newList = LinkedList(1);
// console.log(newList.getHead());

newList.append(5);
newList.append(4);
newList.append(3);
newList.append(2);
newList.append(17);

// console.log(newList.getHead());
console.log(newList.size());
// console.log(newList.getHead());
// console.log(newList.getTail());
// console.log(newList.at(2));
// newList.pop();
// console.dir(newList.getHead(), { depth: null, colors: true });

// console.log(newList.contains(2));
// console.log(newList.contains(15));

// console.log(newList.find(4));
// console.log(newList.find(8));

console.log(newList.toString());
newList.insertAt("h", 3);
console.log(newList.toString());

//doesn't add because index doesn't exist
newList.insertAt("h", 7);
console.log(newList.toString());

newList.removeAt(2);
console.log(newList.toString());

//doesn't remove because index doesn't exist
newList.removeAt(8);
console.log(newList.toString());
