function _(id){
  return document.getElementById(id);
}
var val = _("inp");
function validate(arg){
  _("err-msg").innerHTML = "Invalid input";
  
  if(!val.value){
    _("err-msg").style.opacity = 1;
    _("output").style.opacity = 0;
  }
  else{
    _("err-msg").style.opacity = 0;
    _("output").style.opacity = 1;
    if(arg==="even"){
      isEven();
    }
    else if(arg==="five"){
      isDivisibleByFive();
    }
    else if(arg==="zero"){
      isEndsWithZero();
    }
    else if(arg==="prime"){
      isPrime();
    }
  }
  
}

function isEven(){
  if(val.value % 2 == 0){
    _("output").innerHTML = `${val.value} is an even number!`;
  }
  else {
    _("output").innerHTML = `${val.value} is not an even number!`;
  }
}

function isDivisibleByFive(){
  if(val.value % 5 == 0){
    _("output").innerHTML = `${val.value} is divisble by five!`;
  }
  else {
    _("output").innerHTML = `${val.value} is not divisble by five`;
  }
}

function isEndsWithZero(){
  if(val.value % 10 == 0){
    _("output").innerHTML = `${val.value} is ending with zero!`;
  }
  else {
    _("output").innerHTML = `${val.value} is not ending with zero!`;
  }
}

function isPrime(){

  if(val.value < 3){
    _("err-msg").innerHTML = "Enter number greater than 2!"
    _("err-msg").style.opacity = "1";
    _("output").style.opacity = "0";
  }

  else{
    outPut = `${val.value} is a prime number`;
    _("err-msg").style.opacity = "0";
  for(let i=2; i<val.value/2; i++){
    if(val.value % i == 0){
      outPut = `${val.value} is not a prime number`;
      break;
    }
  }
  }
  _("output").innerHTML = outPut;
}
