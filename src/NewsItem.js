import React, { Component } from 'react';
import styled from "styled-components";
import img from '../public/img/news-item.jpg';
import {ProductConsumer} from './context';
import {Link} from 'react-router-dom';

export default class NewsItem extends Component {
    render() {
        const {id, title, publishedOn} = this.props.article;
        return (
                <ProductConsumer>
                    {(value) => {
                        return (
                            <NewsItemWrapper className="col-6 col-md-4 col-lg-3 col-xl-3" 
                            onClick={() => {value.handleDetail(id)}}>
                                <Link className="article-link" to={`/newsarticle/${title}`}>
                                    <div className="container">
                                        <div className="img-container">
                                            <img src={img} className="img-fluid"alt="news photo"/>
                                        </div>
                                        <div className="text-container">
                                            <div className="text my-3">
                                                <div className="title">{title}</div>
                                            </div>
                                            <div className="row header mx-1">
                                                <div className="metatag"><button className="keyword-btn">#news</button></div>
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
    }
    .metatag {
        margin-bottom: 0.2rem;
    }
    .keyword-btn:hover {
        border:solid 2px var(--blueGreen);
        transition: 0.5s;
    }
    .title {
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
        transition: 1s;
        box-shadow: 0px 0px 4px 3px darkgrey;
        .img-container {
            border-bottom: solid 5px var(--blueGreen);
            transition: 0.5s;
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
`
