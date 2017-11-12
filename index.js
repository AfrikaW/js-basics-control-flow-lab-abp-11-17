// ternaryCheckCity()  "Ok, sounds good." when the city is NYC should return "No go." if the destination city is not NYC

function scuberGreetingForFeet(string) {
 if (string<=400) {
   return  "This one is on me!";
 } else if (string>2000 && string<=2500) {
   return 'I will gladly take your thirty bucks.';
 } else if (string>2500) {
   return 'No can do.';
 }
}

function ternaryCheckCity(city) {
  if (city=== 'NYC') {
    return "Ok, sounds good.";
  } else {
    return "No go.";
  }
}