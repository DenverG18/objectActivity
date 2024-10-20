let Car = {
    type: "Mirai",
    model: "Jpd20",
    color: "Black"
  };

  console.log(Car); 
  console.log(typeof Car);
  
  
  Car.type = "Toyota";
  console.log(`Updated car object:`, Car); 
  
 
  Car.wheels = 4;
  console.log(`New property:`, Car); 