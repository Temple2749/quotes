//variables

let btn = document.querySelector('#new-quote');

let quote = document.querySelector('.quote');

let person = document.querySelector('.person')

const quotes = [
    {
        quote:`" The best way to find yourself is to loose yourself in the service of others
        "`,
        person:' mahatma grandhill'
    },
    {
        quote:`" “First, solve the problem. Then, write the code.
        "`,
        person:' John Johnson'
    },
    {
        quote:`"Experience is the name everyone gives to their mistakes.
        "`,
        person:'  Oscar Wilde'
    },
    {
        quote:`" Java is to Javascript what car is to Carpet.
        "`,
        person:'Chris Heilmann'
    },
    {
        quote:`" “Knowledge is power”
        "`,
        person:' Francis Bacons'
    },

    {
        quote:`" Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.
        "`,
        person:'  Dan Salomon'
    },

    {
        quote:`" Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.”
        "`,
        person:' Antoine de Saint Exupery'
    },

    {
        quote:`" “Ruby is rubbish! PHP is phpantastic!.”
        "`,
        person:' Nikita Popov'
    },

    {
        quote:`" Optimism is an occupational hazard of programming: feedback is the treament.
        "`,
        person:' Kent Beck'
    },

    {
        quote:`" “Any fool can write code that a computer can understand. Good programmers write code that humans can understand.
        "`,
        person:'martin fowler'
    },

    {
        quote:`" When to use iterative development? You should use iterative development only on projects that you want to succeed.”
        "`,
        person:'Martin Fowler'
    },

    {
        quote:`"Make it work, make it right, make it fast.”
        "`,
        person:'Kent Beck'
    },
];

btn.addEventListener('click', function(){ let random = Math.floor(Math.random() *quotes.length);

quote.innerText = quotes[random].quote;
person.innerText = quotes[random].person;

});