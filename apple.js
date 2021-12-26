class Apple {
    _weight;

    constructor(weight) {
        this._weight = weight;
    }

    get weight() {
        return this._weight;
    }

    set weight(value) {
        this._weight = value;
    }
    checkWeightApple(){
        if (this._weight > 0){
            return true;
        }
        return false;
    }
    appleAfterEat(){
        this._weight --;
    alert( "khối lượng qủa táo còn: "+ this._weight)
    }
}