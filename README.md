# monthly-payslip
MYOB coding challenge

# Problem: Employee monthly payslip
When I input the employee's details: first name, last name, annual salary(positive integer) and super rate (0% - 50% inclusive), payment start date, the program should generate payslip information with name, pay period, gross income, income tax, net income and super.

The calculation details will be the following:
 1. pay period = per calendar month
 2. gross income = annual salary / 12 months
 3. income tax = based on the tax table provide below
 4. net income = gross income - income tax
 5. super = gross income x super rate

Notes: All calculation results should be rounded to the whole dollar. If >= 50 cents round up to the next dollar increment, otherwise round down.

The following rates for 2012-13 apply from 1 July 2012.

Taxable income Tax on this income
 1. 0 - $18,200 Nil
 2. $18,201 - $37,000 19c for each $1 over $18,200
 3. $37,001 - $80,000 $3,572 plus 32.5c for each $1 over $37,000
 4. $80,001 - $180,000 $17,547 plus 37c for each $1 over $80,000
 5. $180,001 and over $54,547 plus 45c for each $1 over $180,000

The tax table is from ATO: http://www.ato.gov.au/content/12333.htm

###Example Data
Employee annual salary is 60,050, super rate is 9%, how much will this employee be paid for the month of March ?
 1. pay period = Month of March (01 March to 31 March)
 2. gross income = 60,050 / 12 = 5,004.16666667 (round down) = 5,004
 3. income tax = (3,572 + (60,050 - 37,000) x 0.325) / 12 = 921.9375 (round up) = 922
 4. net income = 5,004 - 922 = 4,082
 5. super = 5,004 x 9% = 450.36 (round down) = 450

Here is the csv input and output format we provide. (But feel free to use any format you want)

Input (first name, last name, annual salary, super rate (%), payment start date):
David,Rudd,60050,9%,01 March – 31 March
Ryan,Chen,120000,10%,01 March – 31 March

Output (name, pay period, gross income, income tax, net income, super):
David Rudd,01 March – 31 March,5004,922,4082,450
Ryan Chen,01 March – 31 March,10000,2696,7304,1000

As part of your solution:
 1. List any assumptions that you have made in order to solve this problem.
 2. Provide instruction on how to run the application
 3. Provide a test harness to validate your solution.


# Get started
 1. git clone https://github.com/JayMc/payslip-calc.git
 2. cd payslip-calc
 3. npm install
 4. bower install
 5. node server.js
 6. gulp concat
 7. browse to [http://localhost:3000](http://localhost:3000)

You may need to install gulp "npm install -g gulp".


# Running tests
 1. npm install -g mocha
 2. mocha test

# Assumptions
 1. pay period not utilised - calculations based on only a single month (ie: salary / 12). 
 2. CSV import / export - it's was unclear if it was requirement.
