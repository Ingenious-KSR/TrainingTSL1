var person = {

    firstName: "Narendra",
  
    lastName: "Modi",
  
    age: 70,
  
    fullName: function() {
  
      return this.firstName + " " + this.lastName;
  
    }
  
  };
  
  console.log(person.firstName);  // Outputs: Narendra
  
  console.log(person.fullName());  // Outputs: Narendra Modi