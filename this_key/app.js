// Understanding the basic working of call Implement a JavaScript code snippet that demonstrates the usage of the call method. In the example, make sure you highlight how call can control the context of this.


let emp1 ={
  firstname:'Saurbah',
  lastname : 'nikkam'


}

let emp2 =  {
  firstname :'basuraj',
  lastname: 23,
  fullNname:function(){
    return ` full name is : ${this.firstname} ${this.lastname}`
  }

}

console.log(emp2.fullNname.call(emp1))