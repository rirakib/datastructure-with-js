

class HashMap{

    constructor()
    {
        this.map = {}
    }

    put(key,value)
    {
        this.map[key] = value
    }

    get(key)
    {
        return this.map[key]
    }

    remove(key)
    {
        delete this.map[key]
    }
}

let map = new HashMap();
map.put("name","rakib")
map.put("age",24)

