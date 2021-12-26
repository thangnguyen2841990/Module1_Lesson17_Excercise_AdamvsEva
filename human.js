class Human {
    _name;
    _gender;
    _weight;

    constructor(name, gender, weight) {
        this._name = name;
        this._gender = gender;
        this._weight = weight;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }

    get weight() {
        return this._weight;
    }

    set weight(value) {
        this._weight = value;
    }
    humanTalk(){
        alert("Tôi là: "+ this._name+ ", giơi tính: "+ this._gender +", nặng: " + this._weight + "kg")
    }

    eatApple() {
        this._weight++;
        alert("tôi vừa ăn táo và khối lượng hiện tại của tôi là: "+ this._weight);
    }
}