/* eslint-disable jsx-a11y/heading-has-content */
import logo from './logo.svg';
import './App.css';
import products from './assets/products-data/products';
import ProductAmount from './components/ProductAmount';
import ProductSearchCheckbox from './components/ProductSearchCheckbox';
import ProductCategoryWrapper from './components/ProductCategoryWrapper';
import { useEffect, useState } from 'react';

function App() {
    const [input, setInput] = useState('');
    const [cartProducts, setCartProducts] = useState([]);
    const [productArr, setProductArr] = useState([]);
    const [status, setStatus] = useState(false);
    const [activeClass, setActiveClass] = useState('');

    useEffect(() => {
        setProductArr(products);
    }, []);

    const handleChangeInput = (e) => {
        if (e.target.value) {
            const arrSearchItem = productArr.filter((item) => {
                return item.name.toLowerCase().indexOf(e.target.value) !== -1;
            });
            setProductArr(arrSearchItem);
        } else if (e.target.value === '') {
            if (status) {
                const arrSearchItem = products.filter((item) => {
                    return item.stocked === status;
                });
                setProductArr(arrSearchItem);
            } else {
                setProductArr(products);
            }
        }
    };

    const handleChangeCheckbox = (e) => {
        setStatus(e.target.checked);
        if (e.target.checked) {
            const arrSearchItem = productArr.filter((item) => {
                return item.stocked === e.target.checked;
            });
            setProductArr(arrSearchItem);
        } else {
            setProductArr(products);
        }
    };

    const handleShowTable = () => {
        setActiveClass('active');
    };

    const handleAddProduct = (data) => {
        if (cartProducts.length !== 0) {
            const result = cartProducts.filter(
                (item) => item.name === data.name,
            );
            const check = cartProducts.filter(
                (item) => item.name !== data.name,
            );
            if (result.length) {
                const productToCart = result.map((x) =>
                    x.name === data.name ? { ...x, count: x.count + 1 } : x,
                );
                setCartProducts([...check, ...productToCart]);
            } else {
                setCartProducts([...cartProducts, { ...data, count: 1 }]);
            }
        } else {
            setCartProducts([...cartProducts, { ...data, count: 1 }]);
        }
    };

    return (
        <div className="App">
            <div className="app__products">
                <div className="app__navbar">
                    <div className="app__navbar__cart">
                        <ProductAmount cartProducts={cartProducts} />
                        <div className="app__navbar__cart__icon">
                            <i
                                className="fas fa-shopping-cart"
                                onClick={handleShowTable}
                            ></i>
                        </div>
                    </div>
                </div>
                <ProductSearchCheckbox
                    handleChangeInput={handleChangeInput}
                    handleChangeCheckbox={handleChangeCheckbox}
                />
                <div className="app__products-content">
                    <ProductCategoryWrapper
                        products={productArr}
                        handleAddProduct={handleAddProduct}
                    />
                </div>
                <div className={`app__product_cart__table ${activeClass}`}>
                    {cartProducts.map((item) => (
                        <>
                            <p>{item.name}</p>
                            <p>Số lượng đặt hàng: {item.count}</p>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
