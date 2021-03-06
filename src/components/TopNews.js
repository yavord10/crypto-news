import React, { Component } from 'react';
import styled from "styled-components";
import {ProductConsumer, ProductContext} from '../context';
import imgBg from '../../public/img/bitcoin.png';
import {Link} from 'react-router-dom';
import EditorNews from './EditorNews';
import MostReadNews from './MostReadNews';
import MissedNews from './MissedNews';
import RecentNews from './RecentNews';
import BTC from "../../public/img/icons/BTC.png";
import ETH from "../../public/img/icons/ETH.png";
import ADA from "../../public/img/icons/ADA.png";
import BCH from "../../public/img/icons/BCH.png";
import BCHSV from "../../public/img/icons/BCHSV.png";
import EOS from "../../public/img/icons/EOS.png";
import LTC from "../../public/img/icons/LTC.png";
import TRX from "../../public/img/icons/TRX.png";
import USDT from "../../public/img/icons/USDT.png";
import XLM from "../../public/img/icons/XLM.png";
import XRP from "../../public/img/icons/XRP.png";
import BNB from "../../public/img/icons/BNB.png";

export default class TopNews extends Component {
    constructor() {
        super();
        this.urlArray = [];
        this.refNames = [];
        this.finalUrls = [];
        this.firstUrl = "";
        this.imgNames = [];
        this.state = {
            slideIndex: 0,
            imgArr: [],
            firstUrl: "",
            firstNews: {},
            finalUrls: [],
            urlName: "",
            showCoins: false,
        };
        this.plusSlides=this.plusSlides.bind(this);
        this.minusSlides=this.minusSlides.bind(this);
        this.currentSlide=this.currentSlide.bind(this);
        this.handleCoins=this.handleCoins.bind(this);
    }
    plusSlides(n) {
        let slideIndex = this.state.slideIndex;
        if (slideIndex > 2) {
            this.setState(() => {
                return {slideIndex: 0}
            })
        } else {
            this.setState(() => {
                return {slideIndex: slideIndex + n}
            })
        }
    }
    minusSlides(n) {
        let slideIndex = this.state.slideIndex;
        if (slideIndex < 1) {
            this.setState(() => {
                return {slideIndex: 3}
            })
        } else {
            this.setState(() => {
                return {slideIndex: slideIndex - n}
            })
        }
    }
    currentSlide(n) {
        this.setState(() => {
            return {slideIndex: n}
        })
    }
    handleCoins() {
        if (this.state.showCoins === false) {
            this.setState({
                showCoins: true
            })
        } else {
            this.setState({
                showCoins: false
            })
        }
    }
    componentDidMount() {
        setInterval(() => this.handleCoins(), 2000)
        window.scrollTo(0,0);
    }
    componentWillUnmount() {
        clearInterval();
    }
    render() { 
        console.log(this.state.showCoins)
        return (
            <ProductConsumer>
                {value => {
                    const {id, title, publishedOn, readingTime, imageUrl, urlName} = value.topNews[this.state.slideIndex] ? 
                        value.topNews[this.state.slideIndex] : value.topNews[0];
                    return (
                        <React.Fragment>
                            <div className={this.state.showCoins ? "row mt-2 coin-row mx-auto displaynone" : "row mt-2 coin-row mx-auto"}>
                                {value.coinApiData.slice(0, 6).map(
                                    currency => {
                                        return (
                                            <div className={title ? "col-2 coin-col mx-auto" : "col-2 coin-col mx-auto displaynone"}>
                                                    <div className="coinApi">
                                                        <img className={title ? "img-coin mr-1" : "img-coin mr-1 displaynone"}  
                                                        src={currency.asset_id === 'BTC' ? BTC : currency.asset_id === 'ETH' ? 
                                                        ETH : currency.asset_id === 'USDT' ? USDT : currency.asset_id === 'TRX' ? TRX :
                                                        currency.asset_id === 'XLM' ? XLM : currency.asset_id === 'XRP' ? XRP : currency.asset_id === 'BCHSV' ? 
                                                        BCHSV : currency.asset_id === 'EOS' ? EOS : currency.asset_id === 'BNB' ? BNB : currency.asset_id === 'LTC' ?
                                                        LTC : currency.asset_id === 'ADA' ? ADA : currency.asset_id === "BCH" ? BCH : ''} />
                                                        <p className="coin-text">{currency.price_usd ? currency.asset_id === "BTC" ? currency.price_usd.toFixed(1) : 
                                                        currency.asset_id === "ETH" ? currency.price_usd.toFixed(2) : currency.asset_id === "BCH" ? currency.price_usd.toFixed(2)
                                                        : currency.price_usd.toFixed(3) : currency.price_usd}<span className="small">USD</span></p>
                                                    </div>
                                            </div>
                                        )
                                    }
                                )}
                            </div>
                            <div className={this.state.showCoins ? "row mt-2 coin-row mx-auto" : "row mt-2 mx-auto displaynone coin-row"}>
                                {value.coinApiData.slice(6, 12).map(
                                    currency => {
                                        return (
                                            <div className={title ? "col-2 coin-col mx-auto" : "col-2 coin-col mx-auto displaynone"}>
                                                    <div className="coinApi">
                                                        <img className={title ? "img-coin mr-1" : "img-coin mr-1 displaynone"} 
                                                        src={currency.asset_id === 'BTC' ? BTC : currency.asset_id === 'ETH' ? 
                                                        ETH : currency.asset_id === 'USDT' ? USDT : currency.asset_id === 'TRX' ? TRX :
                                                        currency.asset_id === 'XLM' ? XLM : currency.asset_id === 'XRP' ? XRP : currency.asset_id === 'BCHSV' ? 
                                                        BCHSV : currency.asset_id === 'EOS' ? EOS : currency.asset_id === 'BNB' ? BNB : currency.asset_id === 'LTC' ?
                                                        LTC : currency.asset_id === 'ADA' ? ADA : currency.asset_id === "BCH" ? BCH : ''} />
                                                        <p className="coin-text">{currency.price_usd ? currency.asset_id === "BTC" ? currency.price_usd.toFixed(1) : 
                                                        currency.asset_id === "BCH" ? currency.price_usd.toFixed(2) :
                                                        currency.asset_id === "ETH" ? currency.price_usd.toFixed(2) : currency.price_usd.toFixed(3) 
                                                        : currency.price_usd}<span className="small">USD</span></p></div>
                                            </div>
                                        )
                                    }
                                )}
                            </div>
                            <NewsContainer className="row mx-auto mb-1">
                                <div className={title ? "img-column mx-auto col-12 col-md-8 col-lg-8" : "img-column mx-auto col-12 col-md-8 col-lg-8 notloaded"}
                                onClick={() => {value.handleDetail(id)}}>
                                    <Link className="article-link" to={`/newsarticle/${urlName}`}>
                                        <div className="img-column-one mx-auto">
                                            <button className="btn-danger text-capitalize">
                                                последние новости</button>
                                            <div className="img-container">
                                                    <img src={imageUrl ? imageUrl : imgBg} className="img-fluid img-main" alt="top-news"/>
                                                <div className="img-container-second">
                                                </div>
                                            </div>
                                            <div className="text-column">
                                                <div className="text-container mx-auto">
                                                    <div className="heading text-capitalize">
                                                        <h1>{title}</h1>
                                                    </div>
                                                    <div className="row date-minutes">
                                                        <div className="heading text ml-3">
                                                            {publishedOn}
                                                        </div>
                                                        <div className="heading text ml-5">
                                                            {readingTime} мин чтение
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    <button className="prev btn-slide" onClick={()=>this.minusSlides(1)}>
                                        <i className="fas fa-chevron-left arrow"></i></button>
                                    <button className="next btn-slide" onClick={()=>this.plusSlides(1)}>
                                        <i className="fas fa-chevron-right arrow"></i></button>
                                    <div className="dots">
                                        <span className={this.state.slideIndex === 0 ? "active dot" : "dot"} 
                                        onClick={()=>this.currentSlide(0)}></span>
                                        <span className={this.state.slideIndex === 1 ? "active dot" : "dot"} 
                                        onClick={()=>this.currentSlide(1)}></span>
                                        <span className={this.state.slideIndex === 2 ? "active dot" : "dot"} 
                                        onClick={()=>this.currentSlide(2)}></span>
                                        <span className={this.state.slideIndex === 3 ? "active dot" : "dot"} 
                                        onClick={()=>this.currentSlide(3)}></span>
                                    </div>
                                </div>
                                <div className={title ? "img-column-two mx-auto col-10 col-md-4 col-lg-4" 
                                    : "img-column-two mx-auto col-10 col-md-4 col-lg-4 notloaded"}>
                                        <EditorNews/>
                                        <MostReadNews/>
                                </div>
                                <div className="mx-auto recent-news">{imageUrl ? <RecentNews /> : " "}</div>
                                <div className="mx-auto old-news">{imageUrl ? <MissedNews /> : " "}</div>
                                <div className={title ? "container notloaded" : "container"}>
                                    <img src={imgBg} className="img-fluid loading-img"/>
                                </div>
                            </NewsContainer>
                        </React.Fragment>
                    )
                }}
            </ProductConsumer>
        )
    }
}
TopNews.contextType = ProductContext;

const NewsContainer = styled.div`
    .notloaded {
        display: none;
    }
    .displaynone {
        display: none;
    }
    .coin-container {
        width: 100%;
    }
    .coinApi {
        color: var(--mainOrange); 
        padding: 1rem;
    }
    .img-coin {
        border-radius: 50% !important;
        filter: grayscale(40%) brightness(80%) !important;
        animation: show-on-load 1s;
    }
    overflow: hidden;
    padding: 1rem;
    padding-bottom: 0px;
    padding-top: 0px;
    width: 100%;
    border-bottom-color: var(--mainOrange);
    border-bottom-width: 1rem;
    .old-news {
        width: 100%;
    }
    .recent-news {
        width: 100%;
    }
    .title-ni {
        font-size: 1rem !important;
    }
    .img-container {
        position: relative;
        overflow: hidden;
        width: 100%;
    }
    .img-container-second {
        z-index: -1;
        position: absolute;
        height: 100%;
        width: 100%;
        bottom: 0%;
        background-image: url(${imgBg});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .loading-img {
        animation: spin linear infinite;
        animation-duration: 1.5s;
    }
    .img-container-sm {
        background-image: url(${imgBg});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .img-main {
        filter: grayscale(40%) brightness(80%);
    }
    .actual-img-sm {
        filter: grayscale(40%) brightness(80%);
    }
    .img-bg {
        opacity: 0.0;
    }
    .img-column {
        animation: show-on-load;
        animation-duration: 0.5s;
    }
    .img-column-one:hover {
        img {
            transition: 1s;
            transform: scale(1.3);
        }
    }
    .btn-slide {
        cursor: pointer;
        position: absolute;
        top:45%;
        color: var(--blueGreen);
        font-weight: bold;
        transition: 0.6s ease;
        border: none;
        user-select: none;
        z-index: 3;
        background: none;
        outline: none;
    }
    .prev {
        left: 1.2rem;
        padding-left: 0;
    }
    .next {
        right: 1.2rem;
        padding-right: 0;
    }
    .btn-slide:hover {
        color: var(--mainOrange);
        text-shadow: 2px 2px 2px black;
        animation: text-jump 0.2s;
        animation-iteration-count: 3;
    }
    .arrow {
        font-size: 3rem;
    }
    .dots {
        position: absolute;
        top: 90%;
        width:90%;
        text-align: center;
        background: none;
        z-index: 3;
    }
    .dot {
        cursor: pointer;
        height: 15px;
        width: 15px;
        margin: 0 3px;
        background-color: black;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.6s ease;
        z-index: 4;
    }
    .active, .dot: hover {
        background-color: var(--blueGreen);
        transform: scale(1.2);
    }
    .active {
        animation: text-jump 0.2s;
        animation-iteration-count: 1;
    }
    .btn-danger {
        position: absolute;
        z-index: 1;
        bottom: 70%;
        font-size: 2rem;
        background: var(--mainOrange) !important;
        outline: none;
        border: var(--mainOrange) !important;
        font-family: 'Yeseva One', sans-serif;
        border-top-right-radius: 0.4rem;
    }
    .editors-choice {
        text-align: center;
    }
    h5 {
        margin-bottom: 0.5rem;
    }
    .heading, h1 {
        margin-top: 0.75rem;
        font-size: 1.5rem;
        font-weight: bold;
        font-family: 'Arsenal', sans-serif;
        text-shadow: 1px 1px black;
    }
    .text {
        font-size: 1.2rem;
        color: var(--mainOrange);
    }
    .heading-sm {
        margin-top: 0.5rem;
        color: var(--mainOrange);
        font-size: 1rem;
    }
    .img-sm {
        position: relative;
    }
    .img-sm-two {
        position: relative;
    }
    .second-image {
        margin-top: 1.25rem;
    }
    .text-column {
        overflow: hidden;
        width: 100%;
        position: absolute;
        bottom: 0%;
        color: white;
        padding: 1rem;
        height: 40%;
        margin-bottom: 0.5rem;
    }
    .editor-title {
        overflow: hidden;
        width: 100%;
        position: absolute;
        bottom: -4%;
        color: white;
        padding: 1rem;
        height: 100%;
        margin-bottom: 0.5rem;
        font-size: 1rem;
        font-weight: bold;
        text-shadow: 0.5px 0.5px black;
    }
    .img-column {
        position: relative;
        border-width: 5px;
        border-color: var(--mainOrange);
    }
    .img-column-one {
        position: relative;
        border-width: 5px;
        border-color: var(--mainOrange);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        border: solid 1px darkgrey;
    }
    .img-column-two {
        position: relative;
        border-width: 5px;
        border-color: var(--mainOrange);
        animation: show-on-load;
        animation-duration: 0.5s;
    }
    .img-sm-column {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        border: solid 1px darkgrey;
    }
    .img-sm-column:hover {
        img {
            transition: 1s;
            transform: scale(1.3);
        }
    }
    .img-main:hover {
        transition: 1s;
        transform: scale(1.3);
    }
    .actual-img-sm:hover {
        transition: 1s;
        transform: scale(1.3);
    }
    .fade {
        opacity: 1;
        animation-name: fade;
        animation-duration: 1.5s;
    }
    @keyframes fade {
        from {opacity: 0.4} to {opacity: 1}
    }
    @media (min-width: 767px) {
        .title {
            margin: 2rem;
        }
    }
    @media (max-width: 768px) {
        .text-container {
            height: 295px;
            font-size: 1rem;
        }
        .display-lg{
            display: none;
        }
        .img-column-two {
            display: none;
        }
        .heading {
            font-size: 1.3rem;
        }
        .title {
            margin: 3rem;
        }
        .btn-danger {
            font-size: 2rem;
        }
    }
    @media (max-width: 680px) {
        .heading, h1 {
            font-size: 1.1rem;
        }
        .title-header {
            font-size: 0.8rem;
        }
        .btn-danger {
            font-size: 1.5rem;
        }
        .text-column {
            height: 55%;
            width: 92%;
            left: 4.3%;
        }
        .missed-news {
            display: none;
        }
        .dots {
            top: 85%
        }
    }
    @media (min-width: 768px) and (max-width: 992px) {
        .text-container {
            height: 236px;
            font-size: 1rem;
        }
        .btn-danger-sm {
            font-size: 1rem;
        }
        .editor-title {
            font-size: 0.70rem;
        }
        .heading, h1 {
            font-size: 1rem;
        }
        .title-header {
            font-size: 1.1rem;
        }
        .dots {
            top: 88%
        }
    }
    @media (min-width: 992px) and (max-width: 1200px) {
        .text-container {
            height: 326px
            font-size: 1rem;
        }
        .title-header {
            font-size: 1.1rem;
        }
    }
    @media (min-width: 1200px) {
        .text-container {
            height: 393px;
        }
    }
    @media (max-width: 499px) {
        .text-column {
            height: 110%;
            width: 90%;
            left: 5.5%;
        }
        .heading, h1 {
            font-size: 1.1rem;
        }
        .btn-danger {
            display: none;
        }
        .btn-slide {
            top: 40%;
        }
        .text {
            color: var(--mainOrange);
        }
        .dots {
            top: 85%
        }
    }
    @keyframes show-on-load {
        from {transform: translate(0px,-100rem)}
        to {transform: translate(0px,0px)}
    }
    @keyframes spin {
        0% {transform: rotate(0deg)}
        100% {transform: rotate(1080deg)}
    }
`