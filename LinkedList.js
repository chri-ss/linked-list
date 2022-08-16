const Node = (value = null, next = null) => {
  return { value, next };
};

const LinkedList = (value) => {
  head = Node(value);

  const getList = () => {
    return head;
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
  return { getList, append, prepend };
};

//test

const newList = LinkedList(1);
console.log(newList.getList());

newList.append(5);
console.log(newList.getList());

newList.prepend(7);
console.log(newList.getList());
newList.prepend(3);
console.log(newList.getList());
