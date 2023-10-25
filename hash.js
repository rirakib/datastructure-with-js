class HashTable{

    constructor(size){
        this.arr = new Array(size);
        this.size = size;
    }

    hashFunction(val)
    {
        let str = val + '';
        let sum = 0;

        for (let i = 0; i < str.length; i++) {
            sum += str.charCodeAt(i);
        }

        return sum % this.size;
    }

    set(val){

        let index = this.hashFunction(val)
        let arr = this.arr[index];

        if(!arr){
            arr = [val]
        }else{
            arr.push(val)
        }

        this.arr[index] = arr;
    }

    get(val){
        let index = this.hashFunction(val);
        let arr = this.arr[index];

        if(!arr){
            for(let i=0;i<arr.length;i++){
                if(arr[i] == val){
                    return true;
                }
            }
        }

        return false;
    }

}

let hash = new HashTable(5)
hash.set('apple')
hash.set('jacfruit')
hash.set('goava')
hash.set('mango')
hash.set('banana')

console.log(hash.get('pinaple'))
