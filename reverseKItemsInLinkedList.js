
function printLinkedList(header) {
  let node = header;
  while (node != null) {
    console.log(`${node.val}-`);
    node=node.next
  }
}



function reverseKItems(k, header) {

    let firstNode=header;
  
    let prevNode; //for first element this remains null
  
    let oldPointer;
  
    let currentNode = header;
  
    for (let i = 0; i < k; i++) {
      oldPointer = currentNode.next;
  
      if (prevNode) {
        currentNode.next = prevNode;            
      }
  
      prevNode = currentNode;
      currentNode = oldPointer;
    }
    
    //at last point 1st node to k+1th node
    firstNode.next = currentNode;

    //prevNode at end of loop is now the start of linkedlist
    return prevNode

  }
  

let linkedList = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: {
            val: 6,
            next: null
          }
        },
      },
    },
  },
};






let k = 3;
//print original list 

printLinkedList(linkedList);
let linkedListNewHeader=reverseKItems(k,linkedList);
printLinkedList(linkedListNewHeader);


