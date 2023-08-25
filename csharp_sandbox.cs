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