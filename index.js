const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {

  function capitalized(wordArray) {

    let capitalTitle = wordArray.map(element => element.replace(element[0], element[0].toUpperCase()) )
    return capitalTitle.join(" ")
  }

  return tutorials.map(title => {

    let titleArray = title.split(" ");
    return capitalized(titleArray)
  })
}