const stack=require('./stack');
const queue=require('./queue');

stack.insert(1);
stack.insert(2);
stack.insert(3);
stack.insert(4);
stack.display();
stack.remove();
stack.display();
queue.enque(1);
queue.enque(2);
queue.enque(3);
queue.enque(4);
console.log("before removing")
queue.display();
queue.deque();
console.log("after removing")
queue.display();
