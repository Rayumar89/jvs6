var r1 = "result :"
var v1 = "The value of a is : "
var p1 = prompt("enter a number")
document.write(r1+"<br>")
document.write(v1+p1 +"<br>" +"<br>" +"<br>")


var r2 = "the value of ++a is :"
p1++
document.write(r2+p1 +"<br>")
var v2 = "now the value of a is : "
document.write(v2+p1 +"<br>"+"<br>"+"<br>")

p1
var r2 = "the value of ++a is :"
document.write(r2+p1 +"<br>")
p1++
var v2 = "now the value of a is : "
document.write(v2+p1 +"<br>"+"<br>"+"<br>")


p1
var r2 = "the value of ++a is :"
document.write(r2+p1 +"<br>")
p1--
var v2 = "now the value of a is : "
document.write(v2+p1 +"<br>"+"<br>"+"<br>")


p1
var r2 = "the value of ++a is :"
document.write(r2+p1 +"<br>")
p1--
var v2 = "now the value of a is : "
document.write(v2+p1 +"<br>"+"<br>"+"<br>"+"<br>"+"<br>"+"<br>")




var a =2,b=1
var result1= --a
document.write("a 2"+"<br>")
document.write("a is : " + result1+"<br>")
var result1= --b
document.write("b 1"+"<br>")
document.write("b is : " + result1+"<br>")
var result1= --a - --b
document.write("--a - --b is : " + result1+"<br>")
var result1= --a - --b + ++b
document.write("--a - --b + ++b is : " + result1+"<br>")
var result1= --a - --b + ++b + b--
document.write("--a - --b + ++b + b-- is : " + result1+"<br>"+"<br>"+"<br>"+"<br>"+"<br>")









// Take three subjects name from user and store them in 3 different variables
var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");

// Total marks for each subject is 100, store it in another variable
var totalMarks = 100;

// Take obtained marks for first subject from user and stored it in different variable
var obtainedMarks1 = Number(prompt("Enter the obtained marks for " + subject1 + ":"));

// Take obtained marks for remaining 2 subjects from user and store them in variables
var obtainedMarks2 = Number(prompt("Enter the obtained marks for " + subject2 + ":"));
var obtainedMarks3 = Number(prompt("Enter the obtained marks for " + subject3 + ":"));

// Now calculate total marks and percentage and show the result in browser like this
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// Display the result in a table
document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td><td>" + (obtainedMarks1 / totalMarks) * 100 + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td><td>" + (obtainedMarks2 / totalMarks) * 100 + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td><td>" + (obtainedMarks3 / totalMarks) * 100 + "%</td></tr>");
document.write("<tr><td></td><td><b>" + totalMarks * 3 + "</b></td><td><b>" + totalObtainedMarks + "</b></td><td><b>" + percentage + "%</b></td></tr>");
document.write("</table>");