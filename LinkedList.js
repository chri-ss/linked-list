const Node = (value = null, next = null) => {
  return { value, next };
};

const LinkedList = (value) => {
  head = Node(value);

  const append = (value) => {
    temp = head;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = Node(value);
  };
  return { head, append };
};

const newList = LinkedList(1);

console.log(newList.head);

newList.append(5);
newList.append(7);

console.log(newList.head);
