fetch('./books.json')
  .then(response => response.json())
  .then(data => {
    const row = document.querySelector('.row');
    data.books.forEach(item => {
      const col = document.createElement('div');
      col.classList.add('col-sm-4', 'mb-3');

      const card = document.createElement('div');
      card.classList.add('card');

      const image = document.createElement('img');
      image.classList.add('card-img-top');
      image.setAttribute('src', item.image);
      image.setAttribute('alt', item.title);

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      const cardTitle = document.createElement('h5');
      cardTitle.classList.add('card-title');
      cardTitle.innerHTML = item.title;

      const cardText = document.createElement('p');
      cardText.classList.add('card-text');
      cardText.innerHTML = item.author;

      const cardFooter = document.createElement('div');
      cardFooter.classList.add(
        'card-footer',
        'd-flex',
        'justify-content-between',
        'align-items-center'
      );

      const bookPrice = document.createElement('div');
      bookPrice.classList.add('book-price');
      bookPrice.innerHTML = item.price;

      const btnView = document.createElement('a');
      btnView.classList.add('btn', 'btn-outline-primary', 'px-3');
      btnView.setAttribute('href', '#');
      btnView.textContent = 'View';

      cardFooter.append(bookPrice, btnView);
      cardBody.append(cardTitle, cardText, cardFooter);
      card.append(image, cardBody);
      col.appendChild(card);

      row.appendChild(col);
    });
  });
