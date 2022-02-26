class StackDataStructure {
    a_stack;
    size_of_stack;

    constructor() {
        this.a_stack = [];
        this.size_of_stack = 5;


    }

    push(num) {

        if (this.a_stack.length < this.size_of_stack) {
                    
            this.a_stack[this.a_stack.length] = num;
            console.log(this.a_stack);
        }
        else {
            console.log("Cannot add more than 5 elements");
        }
    }


    checksize(){
        console.log(`The current size of the stack = ${this.a_stack.length}`);
    }
}


let sds = new StackDataStructure();
sds.checksize();
sds.push(4);
sds.push(7);
sds.push(2);
sds.push(5);
sds.push(0);
sds.push(4);


