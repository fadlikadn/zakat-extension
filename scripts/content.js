const article = document.querySelector('article');

// `document.querySelector` returns null if no element is found
if (article) {
  const text = article.textContent
  const wordMatchRegExp = /[^\s]+/g
  const words = text.matchAll(wordMatchRegExp)
  // matchAll returns an iterator, so we need to convert it to an array
  const wordCount = [...words].length
  const readingTime = Math.round(wordCount / 200)
  const badge = document.createElement('p')
  
}