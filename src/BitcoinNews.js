import React, { Component } from 'react';
import {ProductConsumer} from './context';
import styled from 'styled-components';
import BitcoinItem from './BitcoinItem';

export default class BitcoinNews extends Component {
    render() {
        return (
            <BitcoinWrapper>
                <div className="title-search">Bitcoin <span className="orange">News:</span></div>
                <div className="row mx-auto">
                    <ProductConsumer>
                        {(value) => {
                            return value.bitcoinNews.map(
                                article => {
                                    if (article !== undefined) {
                                        return <BitcoinItem key={article.id}
                                            article={article} />
                                    }
                                    if (value.bitcoinNews < 1) {
                                        return <div className="no-results">No articles <span className="orange"> found</span></div>
                                    }
                                }
                            )
                        }}
                    </ProductConsumer>
                </div>
            </BitcoinWrapper>
        )
    }
}

const BitcoinWrapper = styled.div`
    margin-top: 7rem;
    padding: 4rem; 
    .title-search {
        font-family: "Yeseva One", sans-serif;
        font-size: 1.5rem;
    }
    .orange {
        color: var(--mainOrange);
    }
    .no-results {
        margin-top: 5rem;
        font-size: 1.5rem;
        font-family: "Arsenal", sans-serif;
    }
`