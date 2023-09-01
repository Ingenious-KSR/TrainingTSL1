var person = {

    firstName: "rahul",
  
    lastName: "Gandhi",
  
    age: 45,
    
    fullName: function() {
  
      return this.firstName + " " + this.lastName;
  
    }
  
  };
  
  console.log(person.firstName);  // Outputs: Narendra
  
  console.log(person.fullName());  // Outputs: Narendra Modi