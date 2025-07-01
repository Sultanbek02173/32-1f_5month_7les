import './product.scss';

export const Product = ({img, title, price}) => {
    return (
        <div className='product_card'>
            <div className='product_card_img'>
                <img src={img} alt="" />
            </div>
            <h3>{title}</h3>
            <p>$ {price}</p>
        </div>
    );
}

