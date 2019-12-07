import React from 'react';
import {Link} from 'react-router-dom';
import {ButtonContainer} from '../Button';
export default function CartTotals({value,history}) {
const {cartSubTotal,cartTax,cartTotal,clearCart}=value;
    return (
        <React.Fragment>
            <div className="container">
            <div className="row">
            <div className="col-10 mt-2 ml-sm-5 
            ml-auto col-sm-8 text-capitalize text-right">
            <Link to='/'>
                <button className="btn btn-outline-danger
                 text-uppercase mb-3 px-5" 
                 type="button"
                 onClick={()=>{clearCart()}}>
                     sepeti temizle
                 </button>
            </Link>
            <h5>
                <span className="text-title">
                ürünler toplamı : <strong>{cartSubTotal} ₺</strong>
                </span>
            </h5>
            <h5>
                <span className="text-title">
               toplam kdv : <strong>{cartTax} ₺</strong>
                </span>
            </h5>
            <h5>
                <span className="text-title">
                ödenecek tutar : <strong>{cartTotal} ₺</strong>
                </span>
            </h5>
            <ButtonContainer cart onClick={()=>{
                var str="TOPLAM FİYAT : "+cartTotal+" ₺\nDevam edilsin mi?";
                (window.confirm(str))?alert("Ürün satın alındı.Tebrikler!"):alert("Satın alım işlemi iptal edildi.");
                }}>
                satın al <i className="fas fa-lira-sign"></i>
            </ButtonContainer>
            </div>
            </div>
            </div>
        </React.Fragment>
    )
}