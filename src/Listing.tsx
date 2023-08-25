import React from 'react';

interface MainImage {
  url_570xN: string;
}

interface Item {
  listing_id: number;
  url: string;
  MainImage: MainImage;
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
}

interface ListingProps {
  items: Item[];
}

function formatPrice(currencyCode: string, price: string): string {
  let formattedPrice = '';

  if (currencyCode === 'USD' || currencyCode === 'EUR') {
    formattedPrice = `${currencyCode}${parseFloat(price).toFixed(2)}`;
  } else {
    formattedPrice = `${parseFloat(price).toFixed(2)} ${currencyCode}`;
  }

  return formattedPrice;
}

function getQuantityLevel(quantity: number): string {
  if (quantity <= 10) {
    return 'level-low';
  } else if (quantity <= 20) {
    return 'level-medium';
  } else {
    return 'level-high';
  }
}


const Listing: React.FC<ListingProps> = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <div className="item" key={item.listing_id}>
          <div className="item-image">
            <a href={item.url}>
              <img src={item.MainImage.url_570xN} alt={item.title} />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">
              {item.title.length > 50 ? item.title.slice(0, 50) + '...' : item.title}
            </p>
            <p className="item-price">
              {formatPrice(item.currency_code, item.price)}
            </p>
            <p className={`item-quantity ${getQuantityLevel(item.quantity)}`}>
              {item.quantity} left
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listing;
