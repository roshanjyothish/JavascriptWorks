// extends is used to inherit parent class 

// multiple inheritance could not supported in js

class Parent{

    m1(){

        console.log("inside parent m1 methods");
    }
}

class Child extends Parent{

    m2(){

        console.log("inside child m2 methods");
    }
}

const ch=new Child()

ch.m2()

ch.m1()