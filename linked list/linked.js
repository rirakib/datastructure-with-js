class Node{
    constructor(data,next=null){
        this.data = data
        this.next = next
    }
}

class Linked{

    constructor(data){
        let node = new Node(data)
        this.head = node
        this.tail = node
    }

}

let list = new Linked(10)
