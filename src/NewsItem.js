import React, { Component } from 'react';
import styled from "styled-components";
import img from '../public/img/top-news.jpg';
import {ProductConsumer} from './context';
import {Link} from 'react-router-dom';

export default class NewsItem extends Component {
    render() {
        const {id, title, publishedOn} = this.props.article;
        return (
                <ProductConsumer>
                    {(value) => {
                        return (
                            <NewsItemWrapper className="col-6 col-md-4 col-lg-2 col-xl-2" 
                            onClick={() => {value.handleDetail(id)}}>
                                <Link className="article-link" to={`/newsarticle/${id}`}>
                                    <div className="container">
                                        <div className="img-container">
                                            <img src={img} className="img-fluid"alt="news photo"/>
                                        </div>
                                        <div className="text-container">
                                            <div className="text my-3">
                                                <div className="title">{title}</div>
                                            </div>
                                            <div className="row header mx-1">
                                                <div className="date ml-auto"><i className="far fa-calendar-alt"></i>{publishedOn}</div>
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
    .container {
        box-shadow: 0px 0px 3px 2px darkgrey;
        border-radius: 0.2rem;
        padding: 0.5rem;
        margin-right: 1rem;
        background: rgba(211,211,211, 0.2);
    }
    .container:hover {
        transition: 1s;
        box-shadow: 0px 0px 3px 2px black;
    }
    .img-container {
        position: relative;
        overflow: hidden;
        width: 100%;
        margin-top: 1rem;
        border-bottom: solid 5px red;
        border-radius: 0.2rem;
        box-shadow: 0px 0px 1px 1px grey;
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
    .date {
        font-size: 0.75rem;
        margin-top: 0.1rem;
        margin-right: 0.5rem;
        color: red;
        margin-bottom: 0.2rem;
    }
`
