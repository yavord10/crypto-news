import React, { Component } from 'react';
import img from '../../public/img/top-news.jpg';
import {ProductConsumer, ProductContext} from '../context';
import {Link} from 'react-router-dom';

export default class EditorNews extends Component {
    constructor() {
        super();
        this.state = {
            firstNews: {},
            firstUrl: "",
        };
    }
    render() {
        return (
            <ProductConsumer>
                {value => {    
                    if (value.news[0] !== undefined) {
                            const {id, title, publishedOn, readingTime, imageUrl} = value.news[0];
                    return (
                        <div className="img-sm-column mx-auto" onClick={() => {value.handleDetail(id)}}>
                            <Link className="article-link" to={`/newsarticle/${title}`}>
                                <div className="img-sm mx-auto">
                                    <div className="img-container img-container-sm">
                                        <img src={imageUrl ? imageUrl : img} className="img-fluid actual-img-sm" alt="top-news"/>
                                    </div>
                                    <div className="editor-title">
                                        <p>{title}</p>
                                        <div className="row date-minutes">
                                            <div className="heading text ml-3">
                                                {publishedOn}
                                            </div>
                                            <div className="heading text ml-auto mr-3">
                                                {readingTime} min read
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}
EditorNews.contextType = ProductContext;
