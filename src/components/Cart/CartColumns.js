import React from 'react'

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">ürün</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">ürün adı</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">fiyatı</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">adet</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">ürünü kaldır</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">toplam</p>
                </div>
            </div>
        </div>
    )
}
