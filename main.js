class StackDataStructure {
    a_stack;
    size_of_stack;

    constructor() {
        this.astack = [];
        this.size = 5;
    }


    checksize(){
        console.log(`The current size of the stack = ${this.astack.length}`);
    }
}


let sds = new StackDataStructure();
sds.checksize();



