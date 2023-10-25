let store = {
    "vendor-111" : {
            "categories" : {
                "fruites" : {
                    "apple" : {
                        "qty" : 5,
                        "price" : 60,
                        "unit" : "kg",
                        "reviews" : {
                            "user-111" : 5,
                            "user-222" : 4,
                            "user-333" : 5
                        }
                    },
                    "pinaple" : {
                        "qty" : 15,
                        "price" : 10,
                        "unit" : "piece"
                    }
                },
                "flowers" : {

                },
                "color" : {

                }
            }      
        },
    "vendor-222" : {
        
    },
    "vendor-333" : {
        
    }
}

console.log(store['vendor-111']['categories'])