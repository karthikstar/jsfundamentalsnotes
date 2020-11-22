let re;

// 1. Literal characters
// re = /hello/;
re = /hello/i; // is a expression literal

// Using literal characters along w metacharacter symbols

// 2. Metacharacter symbols
re = /^h/i; // ^ - Must start with 
// str MUST start with h to match with this

re = /d$/i // $ - Must end with d

re = /World$/i // must end with World


re = / World$/i // matches


re = /^hello$/i; // must start with hello and end with hello - hello hello doesnt match w this

re = /^h.llo$/i; // matches with any instances of h_llo where there can be any ONE character filling in the index 1. eg hallo, hxllo, hmllo

re = /h*llo/i; // * matches any character 0 or more times.. means there can be 0 or more characters between h and llo and still be a match. eg heello , hllo, hxxxxxllo, hallo hi

re = /gre?a?y/i; // ? - optional character. e and a are optional. its matches can be grey, gray, gry.

re = /gre?a?y\?/i; // \ - escape character 
// ? is taken as a literal. it needs be part of the str to match it. 

// Brackets [] - Character Sets
re = /gr[ae]y/i; // Must be one an a or e. (one of the letters in the brackets)
// adv of character set over ? is that it ensures either a or e is used, and prevents the possibility of not having both.

re = /[GF]ray/; // must be G or F

re = /[^GF]ray/i; // ^ in char set - match anything EXCEPT a G or F. eg matches: pray

// note: dont be confused with the ^ being in vs out of the char set
// if ^ in front of char set means it must start with either G or F
re = /^[GF]ray/i;

re = /^[A-Z]ray/; // Matches any upper case ltter. eg Pray, Zray, Xray

re = /^[a-z]ray/; // Matches any lowercase letter. eg xray,pray


re = /^[A-Za-z]ray/; // matches any letter , uppercase or lowercase, Pray, xray

re = /[0-9]ray/; // match any digit . eg 9ray, 2ray. fyi 10ray works as well as it will read from 2nd index.

re = /[0-9][0-9]ray/; // matches 2 digits in front of ray. eg 10ray, 63ray. 999 ray works too as it can match from 2nd index.

// Braces {} - Quantifiers
//  quantifier is after the letter of interest
re = /Hel{2}o/i;  // matches EXACTLY 2 l s.
// must occur exactly {m} amount of times

re = /Hel{2,4}o/i; // must have exactly 2-4 ls. 

re = /Hel{2,}o/i; // must have AT LEAST 2 times/ {m} times.

// Parantheses () - Grouping
re = /([0-9]x){3}/; // () groups a number and x together, hence for a match it must have num x num x num x. mnatches 3x4x5x, 3x3x3x, 3x9x2x2x4x

re = /^([0-9]x){3}$/; // match can ONLY be num x num x num x


// Shorthand Character Classes
re = /\w/; // word character - alphanumeric or _

re = /\w+/; // + = one or more chars
re = /\W/; // non word characters - anything BUT a alphanumeric / _ char. eg ! , .
re = /\d/; // match any digit
re = /\d+/; // matches all the digits

re = /\D/; // match any non digit - anythn thats not 0 thru 9

re = /\s/; // match whitespace char
re = /\S/; // match nonwhitespace char

re = /Hell/i;
// above will match with hello hell at index 0
// what if we want the exact match for hell?


re = /Hell\b/i; // \b - Word Boundary - hello hell will match at index 6, not index 0.


// Assertions 
re = /x(?=y)/; // Match x ONLY if its followed by y . eg: xy, sadxy. non matches: x, syx, sxb

re = /x(?!y)/; // Match x only if NOT followed by y - matches: sadx, sadxz, x , xz, yx


// String to match
const str = 'xz';


// Log results
const result = re.exec(str);
console.log(result)

function reTest (re,str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`)
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}


reTest(re,str);