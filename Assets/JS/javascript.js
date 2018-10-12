  modulo(){
  var FirstNumber = document.getElementById("firstNumber").value;
  var SecondNumber = document.getElementById("secondNumber").value;
  var result = (FirstNumber) % (SecondNumber);
  if(isNaN(FirstNumber) || isNaN(SecondNumber)){
  alert("Veuillez entrer des nombres");
  }else{
  alert("Le reste est de " + result);
  }
  }
