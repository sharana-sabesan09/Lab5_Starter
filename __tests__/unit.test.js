// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// --- isPhoneNumber ---
// parens around area code is the most common format
test('(123) 456-7890 is a valid phone number', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

// dashes only, no parens, also valid
test('123-456-7890 is a valid phone number', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

// letters shouldn't pass as a phone number
test('letters are not a valid phone number', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

// empty string has no digits at all
test('empty string is not a valid phone number', () => {
  expect(isPhoneNumber('')).toBe(false);
});

// --- isEmail ---
// basic valid email
test('hello@example.com is a valid email', () => {
  expect(isEmail('hello@example.com')).toBe(true);
});

// underscores in the local part are allowed
test('first_last@domain.org is a valid email', () => {
  expect(isEmail('first_last@domain.org')).toBe(true);
});

// no @ means it's just a website, not an email
test('email missing @ is not valid', () => {
  expect(isEmail('bademail.com')).toBe(false);
});

// @ with nothing after it is incomplete
test('email missing domain is not valid', () => {
  expect(isEmail('user@')).toBe(false);
});

// --- isStrongPassword ---
// meets all rules: starts with letter, 6 chars, alphanumeric
test('hello1 is a valid strong password', () => {
  expect(isStrongPassword('hello1')).toBe(true);
});

// underscores count as word characters so this passes
test('a_1234567 is a valid strong password', () => {
  expect(isStrongPassword('a_1234567')).toBe(true);
});

// first character must be a letter, not a digit
test('password starting with a number is not valid', () => {
  expect(isStrongPassword('1password')).toBe(false);
});

// 16 chars, one over the 15 char limit
test('password over 15 characters is not valid', () => {
  expect(isStrongPassword('abcdefghijklmnop')).toBe(false);
});

// --- isDate ---
// standard MM/DD/YYYY format
test('12/25/2023 is a valid date', () => {
  expect(isDate('12/25/2023')).toBe(true);
});

// single digit month and day are fine
test('1/1/2000 is a valid date', () => {
  expect(isDate('1/1/2000')).toBe(true);
});

// spelled out month doesn't match the numeric pattern
test('date with text month is not valid', () => {
  expect(isDate('Jan/01/2023')).toBe(false);
});

// year needs to be 4 digits
test('date with two-digit year is not valid', () => {
  expect(isDate('12/25/23')).toBe(false);
});

// --- isHexColor ---
// standard 6-digit hex with hash
test('#a3f1b2 is a valid hex color', () => {
  expect(isHexColor('#a3f1b2')).toBe(true);
});

// 3-digit shorthand without hash is also valid
test('fff is a valid hex color without hash', () => {
  expect(isHexColor('fff')).toBe(true);
});

// x, y, z are not valid hex digits
test('hex color with invalid characters is not valid', () => {
  expect(isHexColor('#xyz123')).toBe(false);
});

// 7 digits doesn't match 3 or 6
test('hex color with 7 digits is not valid', () => {
  expect(isHexColor('#1234567')).toBe(false);
});
