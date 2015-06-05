/*
  This function takes in two parameters: a number, and a string.
  The number represents the amount of hours/minutes/seconds.
  The string represents the unit, and is one of
    * "hour"
    * "minute"
    * "second"

  It returns a whole number value from 0-255 representing the
  relative CSS RGB value of that time period.

  It's pre-written for you. Best to not muck around with it.
*/
var convertTimeframe = function(amount, unit) {

  switch (unit) {
    case "hour":
    case "hours":
      return Math.round((amount / 23) * 255)
    case "minute":
    case "minutes":
    case "second":
    case "seconds":
      return Math.round((amount / 59) * 255)
    default:
      return 0;
  }
}

var getColor= function(){

  $(".clock").toggle("deactivate")
 
  $(".color").toggle("active")
  
  
}

var getClock = function(){

  $(".color").toggle("deactivate")
  $(".clock").toggle("active")

}
//how to get getHexNum
/*var getHexNum = function(color){
  var hexArray=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]

  var num1=Math.floor(color/16)
  var num2=(color % 16)
  var hexNum1=[[hexArray[num1]],[hexArray[num2]]]

}*/

$(document).on("ready", function(){

  setInterval( function(){
   
  /*var currentTime= moment().format("hh:mm:ss")*/

  var hours=moment().format('hh')
  var minutes=moment().format('mm')
  var seconds=moment().format('ss')
  var currentTime=hours+":"+minutes+":"+seconds

  var r =(convertTimeframe(hours,"hours"))  
  var g = (convertTimeframe(minutes,"minutes"))
  var b = (convertTimeframe(seconds,"seconds"))


  $(".pageContainer").css("background-color", "rgb(" + r + "," + g + "," + b + ")")
  
  var hexArray=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]

  var num1=Math.floor(r/16)
  var num2=(r % 16)
  var hexNum1=[[hexArray[num1]],[hexArray[num2]]]

  

  var num3=Math.floor(g/16)
  var num4=(g % 16)
  var hexNum2=[[hexArray[num3]],[hexArray[num4]]]

  


  var num5=Math.floor(b/16)
  var num6=(b % 16)
  var hexNum3=[[hexArray[num5]],[hexArray[num6]]]

  //This is how I think i would put the RGB to HEX process into a function, but when I log out hexR, hexG
  //hexB shows undifined
  /*var hexR = getHexNum(r)
  console.log(hexR)
  var hexG = getHexNum(g)
  var hexB = getHexNum(b)*/

  var newString=hexNum1.concat(hexNum2,hexNum3)
  $(".color").text(newString.join(" "))

  $(".clock").text(currentTime)} ,1000)

  $(".clock").on("click", getColor)
  $(".color").on("click", getClock)
})











