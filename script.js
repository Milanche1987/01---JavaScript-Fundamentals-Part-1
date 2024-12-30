/* let js = 'amazing';
if (js === 'amazing') alert('JavaScript is FUN!'); */

console.log(40+8+23-10);

const firstName = "Milan";
const lastName = 'Todosijevic';
console.log(firstName);
console.log(lastName);

let PI = 3.1415;

let myFirstJob = 'Trgovac';
let myCurrentJob = 'Operater';
console.log(myFirstJob);
console.log(myCurrentJob);

const country = 'Srbija';
const continent = 'Evropa';
let population = 7;
console.log(country);
console.log(continent);
console.log(population);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Milan');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2024;
console.log(typeof year);

console.log(typeof null);

const isIsland = false;
const language = 'srpski';
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

let age = 37;
age = 38;

const birthYear = 1987;

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);

console.log(population / 2);
population ++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
let description = country + ' je ' + continent + ' i '+ 11 + ' miliona stanovnika govori ' + language;
console.log(description);

console.log(25 - 10 - 5);

let y, z;
y = z = 25 - 10 - 5;
console.log(y, z);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

let massMark = 78;
let heightMark = 1.69;
let bmiMark = massMark / heightMark **2;
console.log(bmiMark);
let massJohn = 92;
let heightJohn = 1.95;
let bmiJohn = massJohn / heightJohn **2;
console.log(bmiJohn);
let markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

let mass_mark = 95;
let height_mark = 1.88;
let bmi_mark = mass_mark / height_mark **2;
console.log(bmi_mark);
let mass_john = 85;
let height_john = 1.76;
let bmi_john = mass_john / height_john **2;
console.log(bmi_john);
let mark_higherBMI = bmi_mark > bmi_john;
console.log(mark_higherBMI);

const milan = 'Ja' + ' sam ' + firstName + ', ' + (year - birthYear) + ' godina star ' + myCurrentJob + '.'
console.log(milan);

const milanNew = `Ja sam ${firstName}, ${year - birthYear} godina star ${myCurrentJob}.`;
console.log(milanNew);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
with
multiple
lines`);

let descriptionTwo = `${country} je ${continent} i 11 miliona stanovnika govori ${language}`;
console.log(descriptionTwo);

let ageTwo = 15;
let isOldEnough = ageTwo >= 18;

if(isOldEnough) {
    console.log('Sarah can start driving license 🚘');
}  else {
    const yearsLeft = 18 - ageTwo;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

let century;
if(birthYear <= 2000) {
    century = 20;
} else  {
    century = 21;
}

console.log(century);

if(population > 33) {
    console.log(`${country} je iznad proseka`);
} else {
    console.log(`${country} je ${33 - population} miliona ispod proseka`);
}

if(bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
}

if(bmi_mark > bmi_john) {
    console.log(`Mark's BMI (${bmi_mark}) is higher than John's (${bmi_john})!`);
} else {
    console.log(`John's BMI (${bmi_john}) is higher than Mark's (${bmi_mark})!`);
}

const inputYear = '1987';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Milan'));
console.log(typeof NaN);

console.log(String(23), 23);

console.log('I am ' + 23 + ' years old');
console.log('I am ' + String(23) + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' / '2');

let n = '1' + 1;
n = n -1;
console.log(n);

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Milan'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if(money) {
    console.log("Don't spend ist all");
} else {
    console.log('You should get a job');
}

let height;
if(height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is undefined');
}

let ageThree = '18';
if(ageThree === 18) console.log('You just become an adult (strict)');

if(ageThree == 18) console.log('You just become an adult (loose)');

/* const favourite = Number(prompt('Koji je tvoj omiljeni broj?'));
console.log(favourite);
console.log(typeof favourite);

if(favourite == 23) {
    console.log('Cool! 23 is amazing number');
} else if(favourite === 7) {
    console.log('7 is also cool number');
} else if(favourite === 9) {
  console.log('9 is also cool number');
}
else {
    console.log('Number is not 23 or 7');
}

if(favourite !== 23) console.log('Why not 23'); 

const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if(numNeighbours === 1) {
    console.log('Only 1 border!');
} else if(numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
} */

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if(shouldDrive) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive');
}

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive');
}

if(language === 'english' && population < 50 && !isIsland) {
    console.log(`You should live in ${country}`);
} else {
    console.log(`${country} does not meet your criteria`);
}

let averageDolphins = (96 + 108 + 89) / 3;
let averageKoalas = (88 + 91 + 110) / 3;
console.log(averageDolphins, averageKoalas);

if(averageDolphins > averageKoalas) {
    console.log('Dolphins wins the trophy 🏆');
} else if(averageKoalas > averageDolphins) {
    console.log('Koalas wins the trophy 🏆');
} else if(averageDolphins === averageKoalas) {
    console.log('Both wins the trophy 🏆');
}
else {
    console.log('No one wins the trophy 🏆');
}

let average_Dolphins = (97 + 112 + 101) / 3;
let average_Koalas = (109 + 95 + 123) / 3;
console.log(average_Dolphins, average_Koalas);

if(average_Dolphins > average_Koalas && average_Dolphins >= 100) {
    console.log('Dolphins wins the trophy 🏆');
} else if(average_Koalas > average_Dolphins && average_Koalas >= 100) {
    console.log('Koalas wins the trophy 🏆');
} else if(average_Dolphins === average_Koalas) {
    console.log('Both wins the trophy 🏆');
}
else {
    console.log('No one wins the trophy 🏆');
}

let average_DolphinsNew = (97 + 112 + 101) / 3;
let average_KoalasNew = (109 + 95 + 106) / 3;
console.log(average_DolphinsNew, average_KoalasNew);

if(average_DolphinsNew > average_KoalasNew && average_DolphinsNew >= 100) {
    console.log('Dolphins wins the trophy 🏆');
} else if(average_KoalasNew > average_DolphinsNew && average_KoalasNew >= 100) {
    console.log('Koalas wins the trophy 🏆');
} else if(average_DolphinsNew === average_KoalasNew && average_DolphinsNew >= 100 && average_KoalasNew >= 100) {
    console.log('Both wins the trophy 🏆');
}
else {
    console.log('No one wins the trophy 🏆');
}

const day = 'monday';

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Now a valid day');
}

if(day === "monday") {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if(day === "tuesday") {
    console.log('Prepare theory videos');
} else if(day === "wednesday" || day === "thursday") {
    console.log('Write code examples');
} else if(day === "friday") {
    console.log('Record videos');
} else if(day === "saturday" || day === "sunday") {
    console.log('Enjoy the weekend');
} else {
    console.log('Now a valid day');
}

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

const ageFour = 23;
ageFour >= 18 ? console.log('I like to dring wine') :
console.log('I like to dring water');

const drink = ageFour >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if(ageFour >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${ageFour >= 18 ? 'wine' : 'water'}`);

console.log(`${country} i njena populacija je ${population > 33 ? 'iznad' : 'ispod'} proseka`);

let bill = 275;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);