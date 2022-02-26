class StackDataStructure {
    a_stack;
    size_of_stack;

    constructor() {
        this.a_stack = [];
        this.size_of_stack = 5;
    }


    checksize(){
        console.log(`The current size of the stack = ${this.a_stack.length}`);
    }
}


let sds = new StackDataStructure();
sds.checksize();



