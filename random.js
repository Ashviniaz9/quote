
const quotes = [{
  quote: `The greatest glory in living lies not in never falling, but in rising every time we fall. `,
  
  author: `•Nelson Mandela`
}, {
  quote: `The way to get started is to quit talking and begin doing`,
 
  
  author: `• Walt Disney`
}, {
  quote: `Only a life lived for others is a life worthwhile.`, author : '-Albert Einstein'
}, {
  quote: `The purpose of our lives is to be happy.`,
  author: `•Dalai Lama `
}, {
  quote: `Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.`,
  author: `• Muhammad Waseem`
}, {
  quote: `How you look at it is pretty much how you'll see it`,
  author: `• Steve Jobs`
}, {
  quote: `You only live once, but if you do it right, once is enough."`,
  author: `• Mae West`
}, {
  quote: `i am committed to push my branch to the master.`,
  author: `• Halgurd Hussein`
}, {
  quote: `I never dreamed about success, I worked for it.`,
  author: `• Estee Lauder`
},

{
  quote: `Life is what happens when you're busy making other plans. `,
  author: `• -John Lennon`
},

{
  quote: `It is better to fail in originality than to succeed in imitation." `,
  author: `•-Herman Melville`
},
{
  quote: `I failed my way to success.`,
  author: `Thomas Edison`
},
{
  quote: `The road to success and the road to failure are almost exactly the same." `,
  author: `•-Colin R. Davis `
}, ]
// New Quote Button
const quoteBtn = document.getElementById('quote-btn');
// Get Quote and author Section
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
// Event Handler
quoteBtn.addEventListener('click', () => {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[random].quote;
  author.innerHTML = quotes[random].author;
})