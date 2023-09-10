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

    push(data){
        let node = new Node(data)
        this.tail.next = node
        this.tail = node
    }

    print(){

        let head = this.head
        while(head){
            console.log(head.data)
            head = head.next
        }

    }

}

let list = new Linked(10)
list.push(20)
list.push(30)
list.print()