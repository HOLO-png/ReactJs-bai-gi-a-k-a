import React from 'react';
import PropTypes from 'prop-types';

function ProductItem(props) {
    const { item, handleAddProduct } = props;

    return (
        <div className="app__product-item">
            <div className="app__product-image">
                <img src={item.image} alt={item.name} />
            </div>
            <div className="app__product-content">
                <div className="app__product-name">{item.name}</div>
                <div className="app__product-orther">
                    <div className="app__product-status">
                        <div className="app__product__price">{item.price}</div>
                        {!item.stocked && <h6>Tạm hết hàng</h6>}
                    </div>
                    {item.stocked && (
                        <button
                            className="app__product__add-cart"
                            onClick={() => handleAddProduct(item)}
                        >
                            thêm vào giỏ hàng
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

ProductItem.propTypes = {};

export default ProductItem;
