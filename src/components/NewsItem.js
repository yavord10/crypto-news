import React, { Component } from 'react';
import styled from "styled-components";
import 'firebase/storage';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default class NewsItem extends Component {
    render() {
        const {id, title, publishedOn, imageUrl, readingTime} = this.props.article;
        return (
                <ProductConsumer>
                    {(value) => {
                        return (
                            <NewsItemWrapper className="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-3" 
                            onClick={() => {value.handleDetail(id)}}>
                                <Helmet>
                                    <meta property="og:title" content={title}/>
                                    <meta property="og:image" content={imageUrl}/>
                                </Helmet>
                                <Link className="article-link" to={`/newsarticle/${title}`}>
                                    <div className="container">
                                        <div className="img-container">
                                            <img src={imageUrl} className="img-fluid"alt="Биткойн новости сегодня"/>
                                        </div>
                                        <div className="text-container">
                                            <div className="text mb-3 mt-1">
                                                <div className="title"><h1>{title}</h1></div>
                                            </div>
                                            <div className="row header mx-1">
                                                <div className="metatag"><button className="keyword-btn"><i className="far fa-clock"></i>{readingTime} мин</button></div>
                                                <div className="date ml-auto"><button className="date-btn"><i className="far fa-calendar"></i>{publishedOn}</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </NewsItemWrapper>
                        )}}
                </ProductConsumer>
        )
    }
}

const NewsItemWrapper = styled.div`
    animation: show-on-load-opacity ease-in;
    animation-duration: 0.5s;
    margin-top: 3rem;
    border-radius: 0.3rem;
    &:hover {
        cursor: pointer;
    }
    .keyword-btn {
        border: solid 2px var(--mainOrange);
        border-radius: 0.2rem;
        font-size: 0.75rem;
        outline: none;
        background: white;
    }
    .metatag {
        margin-bottom: 0.2rem;
    }
    .title, h1 {
        font-size: 0.75rem;
        height: 50px;
        overflow: hidden;
        font-family: 'Yeseva One', sans-serif;
    }
    .container {
        box-shadow: 0px 0px 3px 2px darkgrey;
        border-radius: 0.2rem;
        padding: 0.5rem;
        margin-right: 1rem;
        background: white;
    }
    .container:hover {
        animation: small-jump ease-in;
        animation-duration: 0.3s;
        transition: 0.5s;
        box-shadow: 0px 0px 4px 3px darkgrey;
        .img-container {
            border-bottom: solid 5px var(--blueGreen);
            transition: 0.5s;
        }
        .date-btn {
            transition: 1s;
            color: var(--blueGreen);
        }
        .keyword-btn {
            transition: 1s;
            border-color: var(--blueGreen);
        }
    }
    .img-container {
        position: relative;
        overflow: hidden;
        width: 100%;
        margin-top: 1rem;
        border-bottom: solid 5px var(--mainOrange);
        border-radius: 0.2rem;
        box-shadow: 0px 0px 1px 1px grey;
    }
    img {
        filter: grayscale(40%) brightness(80%);
    }
    .text {
        overflow: hidden;
    }
    .far {
        margin-right: 3px;
    }
    .header {
        width: 100%;
        text-align: center;
    }
    .article-link {
        text-decoration: none !important;
        color: black;
    }
    .date-btn {
        font-size: 0.75rem;
        color: var(--mainOrange);
        font-weight: bold;
        border: none;
        background: none;
        outline: none;
        cursor: default;
    }
    i {
        font-size: 0.75rem;
    }
    .date {
        margin-right: 0.5rem;
    }
    @media (max-width: 575px) {
        & {
            margin-left: auto;
            margin-right: auto;
        }
    }
    @keyframes small-jump {
        0% {transform:translate(0px, 0px)}
        50% {transform:translate(0px, -5px)} 
        100%{transform:translate(0px,0px)}
    }
    @keyframes show-on-load-left {
        from {transform: translate(-100rem, 0px)}
        to {transform: translate(0px,0px)}
    }
    @keyframes show-on-load-opacity {
        from {opacity: 0.0} to {opacity: 1}
    }
`
