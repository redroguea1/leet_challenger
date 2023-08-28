//Console.WriteLine("Hello World!");

Console.Write("Congratulations");
Console.Write(" ");
Console.Write("You wrote your first lines of code.");

Console.WriteLine(123);
Console.WriteLine(0.25f); //creates a float value

Console.WriteLine(2.625); //decimal since it has decimal
Console.WriteLine(12.39816m); //creates a decimal literal 

Console.WriteLine(true);
Console.WriteLine(false);

// string firstName = "McKinley";
// firstName = "Bob";
// Console.WriteLine(firstName);
// firstName = "Liem";
// Console.WriteLine(firstName);
// firstName = "Isabella";
// Console.WriteLine(firstName);
// firstName = "Yasmin";
// Console.WriteLine(firstName);


//DECLARING VARIABLES
var message = "Yo what it do";
message = 10.703m;
//the above code will throw an error when written. 
Console.WriteLine(message);


//method check 
string firstName = "Bob";
int numero = 3;
float thirty = 34.4f;
//could have been written
decimal temperature = 34.4m;

Console.WriteLine("Hello, " + firstName + "! You have " + numero + " in your inbox. The temperature is " + thirty + " celsius.");


//Combining strings with character escape sequences 
Console.WriteLine("Hello\nWorld!"); //adds a new line
Console.WriteLine("Hello\tWorld!"); // adds a tab to it

Console.WriteLine("Hello \"World\"!"); //add quotation marks

Console.WriteLine("c:\\source\\repos"); //double backslash to display backslashes


//combining string 
string firstName = "Bob";
string message = ("Hello " + firstName + "!");
Console.WriteLine(message);
Console.Write("new: ");
string message2 = $"Hello {firstName}!";
Console.WriteLine(message2);

int version = 11;
string updateText = "Update to Windows";
string message3 = $"{updateText} {version}!";
Console.WriteLine(message3);

//challenge from 
string projectName = "ACME";
string russianMessage = "\u041f\u043e\u0441\u043e\u0442\u0440\u0435\u0442\u044c \u0440\u0443\u0441\u043a\u0438\u0439 \u0432\u044b\u0432\u043e\u0434";


//print this using the two below Write line statments only. 
//protip always use the name of the message so its clear what it is. ex. englishMsg & russianMsg 
string printMsg1 = $"View English ouput:\n \tc:\\Exercise\\{projectName}\\data.txt";
string printMsg2 = $"{russianMessage}:\n \tc:\\Exercise\\{projectName}\\ru-RU\\data.txt";
Console.WriteLine(printMsg1);
Console.WriteLine(printMsg2); 

int sum = 7+5;
int difference = 7-5;
int product = 7*5;
//int quotient = 7/5;

Console.WriteLine("sum: " + sum);
Console.WriteLine("Difference: " + difference);
Console.WriteLine("Product: " + product);
//Console.WriteLine("Quotient: " + quotient);

decimal decimalQuotient = 7.0m/5;
Console.WriteLine($"Decimal quotient: {decimalQuotient}");

//casting
int first = 7;
int second = 5;
decimal quotient = (decimal)first / (decimal)second;
Console.WriteLine(quotient);
//casting to cast you add the type you want casted to before the variable 

Console.WriteLine($"Modulus of 200/5 : {200 % 5}");
Console.WriteLine($"Modulus of 7/5 : {7 % 5}");
//when modululus is 0 that means the dividend is divisible the divisor

int value1 = 3 + 4 * 5;
int value2 = (3+4) * 5;
Console.WriteLine(value1);
Console.WriteLine(value2);

//incrementing/decrmenting
int value = 1;

value = value + 1;
Console.WriteLine("First increment: " + value);

value += 1;
Console.WriteLine("Second increment: " + value);

value++;
Console.WriteLine("Third increment: " + value);

value = value - 1;
Console.WriteLine("First decrment: " + value);

value -= 1;
Console.WriteLine("Second decrment: " + value);

value--;
Console.WriteLine("Third decrement: " + value);


//positiion matters with "++" and "--" 
int value = 1;
//intial increment 
value++;
Console.WriteLine("First: " + value);
//print then increment
Console.WriteLine("Second: " + value++);
//print post increment 
Console.WriteLine("Third: " + value);
//incremenet then print 
Console.WriteLine("Fourth: " + (++value));


//
int fahrenheit = 94;
decimal celsius = (decimal)((fahrenheit - 32)*(5/9m)); '
//needed to add them m for decimal in side the parens
//Correction need to or could have add m to the 32 and the 5 as well. 
Console.WriteLine("The temperture is " + celsius + " Celsius." );

//PROJECT
//given some stirngs and integers representing students and grades
//final scores are calculated as an average of the 5 scores
//display each students anme and final score. 

// initialize variables - graded assignments 
int currentAssignments = 5;

int sophia1 = 93;
int sophia2 = 87;
int sophia3 = 98;
int sophia4 = 95;
int sophia5 = 100;

int nicolas1 = 80;
int nicolas2 = 83;
int nicolas3 = 82;
int nicolas4 = 88;
int nicolas5 = 85;

int zahirah1 = 84;
int zahirah2 = 96;
int zahirah3 = 73;
int zahirah4 = 85;
int zahirah5 = 79;

int jeong1 = 90;
int jeong2 = 92;
int jeong3 = 98;
int jeong4 = 100;
int jeong5 = 97;


int sophiaSum = sophia1 + sophia2 + sophia3 + sophia4 + sophia5;
int nicolasSum = nicolas1 + nicolas2 + nicolas3 + nicolas4 + nicolas5;
int zahirahSum = zahirah1 + zahirah2 + zahirah3 + zahirah4 + zahirah5;
int jeongSum = jeong1 + jeong2 + jeong3 + jeong4 + jeong5;

decimal sophiaScore = (decimal)sophiaSum / currentAssignments;
decimal nicolasScore = (decimal)nicolasSum / currentAssignments;
decimal zahirahScore = (decimal)zahirahSum / currentAssignments;
decimal jeongScore = (decimal)jeongSum / currentAssignments;

Console.WriteLine("Student\t\tGrade\n");
Console.WriteLine("Sophia:\t\t" + sophiaScore + "\tA");
Console.WriteLine("Nicolas:\t"+ nicolasScore + "\tB");
Console.WriteLine("Zahirah:\t" + zahirahScore + "\tB");
Console.WriteLine("Jeong:\t\t" + jeongScore + "\tA");

//project being walked through 

//grade value x # credit hours
//do this for all courses and sum the results
//sum/total credit hours 

//sophia Johnson example 
// Course          Grade   Credit Hours	
// English 101         4       3 = 12
// Algebra 101         3       3 = 9
// Biology 101         3       4 = 12
// Computer Science I  3       4 = 12
// Psychology 101      4       3 = 12
// Final GPA:          3.35

string studentName = "Sophia Johnson";
string course1Name = "English 101";
string course2Name = "Algebra 101";
string course3Name = "Biology 101";
string course4Name = "Computer Science I";
string course5Name = "Psychology 101";

int course1Credit = 3;
int course2Credit = 3;
int course3Credit = 4;
int course4Credit = 4;
int course5Credit = 3;

int gradeA = 4;
int gradeB = 3;

int course1Grade = gradeA;
int course2Grade = gradeB;
int course3Grade = gradeB;
int course4Grade = gradeB;
int course5Grade = gradeA;

int totalCreditHours = 0;
totalCreditHours += course1Credit;
totalCreditHours += course2Credit;
totalCreditHours += course3Credit;
totalCreditHours += course4Credit;
//forgot this line when writing. I am paying better attention to detail 
totalCreditHours += course5Credit;

int totalGradePoints = 0;
totalGradePoints += course1Credit * course1Grade;
totalGradePoints += course2Credit * course2Grade;
totalGradePoints += course3Credit * course3Grade;
//forgot this line when writing. I am paying better attention to detail 
totalGradePoints += course4Credit * course4Grade;
totalGradePoints += course5Credit * course5Grade;

//unneccessary line of code. Added to check value of statements. I am paying better attention to detail
Console.WriteLine($"{totalGradePoints} {totalCreditHours}");

Console.WriteLine($"{course1Name} {course1Grade} {course1Credit}");
Console.WriteLine($"{course2Name} {course2Grade} {course2Credit}");
Console.WriteLine($"{course3Name} {course3Grade} {course3Credit}");
Console.WriteLine($"{course4Name} {course4Grade} {course4Credit}");
Console.WriteLine($"{course5Name} {course5Grade} {course5Credit}");
//pre end of project. 

int leadingDigit = (int) gradePointAverage;
int trailingDigits = (int) (gradePointAverage * 100) - (leadingDigit * 100);

Console.WriteLine($"Student: {studentName}\n");
Console.WriteLine("Course\t\t\t\tGrade\tCredit Hours");

Console.WriteLine($"{course1Name}\t\t\t{course1Grade}\t\t{course1Credit}");
Console.WriteLine($"{course2Name}\t\t\t{course2Grade}\t\t{course2Credit}");
Console.WriteLine($"{course3Name}\t\t\t{course3Grade}\t\t{course3Credit}");
Console.WriteLine($"{course4Name}\t{course4Grade}\t\t{course4Credit}");
Console.WriteLine($"{course5Name}\t\t{course5Grade}\t\t{course5Credit}");

Console.WriteLine($"\nFinal GPA:\t\t\t{leadingDigit}.{trailingDigits}");