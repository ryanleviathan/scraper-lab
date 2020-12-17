const parser = document => {
  const books = document.querySelectorAll('.product_pod');

  return [...books].map(book => ({
    img: book.querySelector('img').src,
    ratingOutOfFive: book.querySelector('p').classList[1],
    title: book.querySelector('h3').textContent,
    price: book.querySelector('.price_color').textContent,
    inStock: !!book.querySelector('.icon-ok')
  }));
};

module.exports = parser;
