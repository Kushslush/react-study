import './ProductCard.scss';
import Button from './Button';
import imgSrc from './content/icon-cart.svg';

export interface IProductCard {
    title: string;
    description: string;
    category: string;
    price: string;
    salePrice: string;
    img: string;
}

const ProductCard = ({ title, description, category, price, salePrice, img }: IProductCard) => (
    <div className="product-card">
        <div className="product-card-column">
            <img src={img} alt="img" />
        </div>
        <div className="product-card-column">
            <div className="product-card-column-content">
                <div className="product-card-column-category-item">{category}</div>
                <div className="product-card-column-title-item">{title}</div>
                <div className="product-card-column-description-item">{description}</div>
                <div className="product-card-column-price-row">
                    <div className="product-card-column-price-item">{price}</div>
                    <div className="product-card-column-salePrice-item">{salePrice}</div>
                </div>
                <Button
                    title="Add to Cart"
                    img={imgSrc}
                    onClick={() => {
                        // eslint-disable-next-line no-alert
                        alert('Test');
                    }}
                />
            </div>
        </div>
    </div>
);

export default ProductCard;
