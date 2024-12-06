class train {
    constructor(name) {
        this.name = name;
        this.isRunning = false;
    }
    depart(){
        this.isRunning = true;
    }
    stop(){
        this.isRunning = false;
    }
}

const myTrain = new train('Frecciarossa');
console.log(myTrain.isRunning);
