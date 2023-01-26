import './App.scss';
import ProductCard from './tasks/product-card/ProductCard';

import imgSrc from './tasks/product-card/content/image-product-desktop.jpg';

function App() {
    return (
        <div className="app">
            <ProductCard
                title="Gabrielle Essence Eau De Parfum"
                description="A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL"
                category="PERFUME"
                price="$149.99"
                salePrice="$169.99"
                img={imgSrc}
            />
        </div>
    );
}

export default App;
