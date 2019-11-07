import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import styled from 'styled-components';
import BlockchainItem from './BlockchainItem';

export default class BlockchainNews extends Component {
    render() {
        return (
            <BlockchainWrapper>
                <div className="title-search">Блокчейн <span className="orange">Новости:</span></div>
                <div className="row mx-auto">
                    <ProductConsumer>
                        {(value) => {
                            return value.blockchainNews.map(
                                article => {
                                    if (article !== undefined) {
                                        return <BlockchainItem key={article.id}
                                            article={article} />
                                    }
                                    if (value.BlockchainNews < 1) {
                                        return <div className="no-results">No articles <span className="orange"> found</span></div>
                                    }
                                }
                            )
                        }}
                    </ProductConsumer>
                </div>
            </BlockchainWrapper>
        )
    }
}

const BlockchainWrapper = styled.div`
    background: rgb(248,248,248);
    margin-top: 7rem;
    padding: 4rem; 
    .title-search {
        font-family: "Yeseva One", sans-serif;
        font-size: 1.5rem;
        border-bottom: solid 5px var(--mainOrange);
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