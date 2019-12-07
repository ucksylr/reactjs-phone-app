import React, { Component } from 'react';
import resim from '../indir.jpg'
import Title from './Title';
class AboutUs extends Component {
    render() {
        return (
            <div className="container py-5">
            <div className="row">
            <div className="col-10 mx-auto">
            <Title name="hakkımızda"></Title>
            </div>
            <div className="col-md-auto mx-auto">
            <img src={resim} className="img-fluid pull-left mr-3 float-left"/>
            <p className="text-muted mt-0 mb-2 ml-0">
            <span className="ml-5"></span>Tengri teg tengride bolmış Türk Bilge Kağan bu ödke olurtum. Sabimin tüketi eşidgil. Ulayu ini yigünüm oğlanım biriki oğuşum budunum biriye şadpıt begler yırıya tarkat buyruk begler Otuz Tokuz Oğuz Begleri budunı bu sabımın edgüti eşid katığdı tıngla: İlgerü kün toğsıkka birigerü kün ortusıngaru kurığaru kün batsıkınga yırığaru tün ortusıngaru anda içreki budun kop manga körür. Bunça budun kop itdim. Ol amtı arıyıg yok. Türk Kağan Ötüken yış olursar ilte bung yok. İlgerü Şantung yazıka tegi süledim, taluyka kiçig tegmedim. Birigerü tokuz ersinke tegi süledim, tüpütke kiçig tegmedim. Kurıgaru yinçü ögüz keçe temir kapığka tegi süledim. Yırığaru yir bayırku yiririge tegi süledim. Bunca yirke tegi yorıtdım. Ötüken yışda yig idi yok ermiş. İl tutsık yir Ötüken yış ermiş. Bu yirde olurup Tabğaç budun birle tüzültüm. Altun, kümüş işgiti kutay burigsuz anca birür. Tabğaç budun sabi süçig ağısı yımşak ermiş. Süçig sabin yımşak ağın arıp ırak budunuğ anca yağutır ermiş. Yağuru kondukda kisre arıyığ bilig anda öyür ermiş.
            <strong>
            Edgü bilge kişig edgü alp kişig yontmaz ermiş...
            </strong>
            </p>           
            </div>
            </div>
            </div>
        );
    }
}

export default AboutUs;