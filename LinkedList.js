const Node = (value = null, nextNode = null) => {
  return { value, nextNode };
};

const LinkedList = (value) => {
  head = Node(value);
  return head;
};

console.log(LinkedList(3));
