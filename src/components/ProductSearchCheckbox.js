import React from 'react';
import PropTypes from 'prop-types';

function ProductSearchCheckbox(props) {
    const { handleChangeInput, handleChangeCheckbox } = props;
    return (
        <div className="app__search-products">
            <div className="app__search">
                <input
                    type="text"
                    placeholder="Tìm kiếm ..."
                    onChange={handleChangeInput}
                />
            </div>
            <div className="app__checkbox">
                <input
                    type="checkbox"
                    id="checkbox"
                    onChange={handleChangeCheckbox}
                />
                <label htmlFor="checkbox">
                    Chỉ hiển thị sản phẩm còn hàng trong kho
                </label>
            </div>
        </div>
    );
}

ProductSearchCheckbox.propTypes = {};

export default ProductSearchCheckbox;
