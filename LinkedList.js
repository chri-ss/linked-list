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
  return { getHead, getTail, append, prepend, size, at, pop };
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
// console.log(newList.size());
// console.log(newList.getHead());
// console.log(newList.getTail());
// console.log(newList.at(2));
newList.pop();
console.dir(newList.getHead(), { depth: null, colors: true });
