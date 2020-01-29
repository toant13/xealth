# Xealth Take Home

You are given a list of words sorted in alphabetical order. The only issue
is that this alphabet isn’t English. Can you determine the ordering of the
alphabet?

Note that you can assume the list of words will have enough information to
derive the complete order of the alphabet.

Input: ['bca','aaa','acb]<br />
Output: [‘b’, ‘a’, ‘c’]

Please include Test Cases

### When Running App

Upon running the app, you will be prompted the following:

```
How many words would you like to enter? 3
Ok, great! 3. Make sure to enter words in sort alphabetical order

Enter word  1: bca
Enter word  2: aaa
Enter word  3: acb

List of words sorted in alphabetical order: [ 'bca', 'aaa', 'acb' ]
Ordering of the alphabet:                   [ 'b', 'a', 'c' ]

```


## Running Locally

#### Prerequisites

* `yarn` or `npm` installed (whichever you prefer)
* node installed

#### Steps to Run App Via Yarn

* `yarn`
* `yarn start`

#### Steps to Run Tests Via Yarn

* `yarn`
* `yarn test`

#### Steps to Run App Via NPM

* `npm install`
* `npm start`

#### Steps to Run Tests Via NPM

* `npm install`
* `npm test`


## Running In Docker

#### Prerequisites

* You have Docker installed

#### Steps to Run App

* `./run.sh`

#### Steps to Run Tests

* `./test.sh`
