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
  return { getList, append };
};

const newList = LinkedList(1);

console.log(newList.getList());

newList.append(5);
newList.append(7);

console.log(newList.getList());
