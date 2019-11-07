import React, { Component } from 'react';
import Firebase from './firebase';
import 'firebase/database';

//create Context Object
const ProductContext = React.createContext();

class ProductProvider extends Component {
    constructor() {
        super();
        this.database = Firebase.database().ref("flamelink/environments/production/content/news/en-US");
        this.hottestDatabase = Firebase.database().ref().child('HottestNews');
        this.editorDatabase = Firebase.database().ref().child('EditorsChoice');
        this.arrayNews = [{}];
        this.arrayBitcoinNews = [{}];
        this.arrayBlockchainNews = [{}];
        this.searchArray = [{}];
        this.arrayTopNews = [{}];
        this.arrayNewsLeft = [{}];
        this.state = {
            search: "",
            news: [{}],
            newsLeft: [{}], 
            openNewsItem: {},
            topNews: [{}],
            searchList: [{}],
            editorNews: {},
            hottestNews: {},
            bitcoinNews: [{}],
            blockchainNews: [{}],
            readingTime: 0,
            arrVal: []
        };
    }
    handleDetail = (id) => {
        const newsItem = this.state.news.find((item => item.id === id));
        this.setState(()=>{
            return {openNewsItem:newsItem}
        })
    };
    handleBitcoinDetail = (id) => {
        const newsItem = this.state.bitcoinNews.find((item => item.id === id));
        this.setState(()=>{
            return {openNewsItem:newsItem}
        })
    };
    handleBlockchainDetail = (id) => {
        const newsItem = this.state.blockchainNews.find((item => item.id === id));
        this.setState(()=>{
            return {openNewsItem:newsItem}
        })
    };
    handleSearch = (input) => {
        let newState = [];
        let finalState = [];
        let finalObj;
        for (let nItem in this.state.news) {
            let obj = this.state.news[nItem];
            let objVal = Object.values(obj);
            let objString = objVal.filter(e => typeof e === 'string' && e !== '');
            for (let str in objString) {
                let lowStr = objString[str].toLowerCase();
                if (lowStr.includes(input)) {
                    finalObj = obj;
                }
            }
            newState.unshift(finalObj);
        };
        let finalStateSet = new Set(newState);
        finalState = Array.from(finalStateSet);
        console.log(finalState);
        console.log(newState);
        if (input !== "") {
            this.setState({
                searchList: finalState
            });
        }
    };
    handleTopDetail = (id) => {
        const newsItem = this.state.topNews.find((item => item.id === id));
        this.setState(()=>{
            return {openNewsItem:newsItem}
        })
    };
    calcReadingTime = () => {
        for (let newsItem in this.state.topNews) {
            let arrVal = Object.values(this.state.topNews[newsItem]);
            let arrString = arrVal.filter(e => typeof e === 'string' && e !== '');
            let totalCоunt = 0;
            let readingTime = 0;
            for (let str in arrString) {
                let wordCount = arrString[str].split(' ').length;
                totalCоunt += wordCount;
            }
            readingTime = Math.round(totalCоunt / 200);
        }
    }
    UNSAFE_componentWillMount() {
        this.database.limitToLast(4).on('value', snapshot => {
            this.arrayTopNews =[{}];
            snapshot.forEach(childSnapshot => {
                let childVal = childSnapshot.val();
                let arrVal = Object.values(childVal);
                let arrString = arrVal.filter(e => typeof e === 'string' && e !== '');
                let totalCоunt = 0;
                let readingTime = 0;
                for (let str in arrString) {
                    let wordCount = arrString[str].split(' ').length;
                    totalCоunt += wordCount;
                }
                readingTime = Math.round(totalCоunt / 200);
                childVal.readingTime = readingTime;
                this.arrayTopNews.unshift(childVal);
                this.setState({
                    topNews: this.arrayTopNews,
                });
            });
        });
        this.database.on('value', (snapshot) => {
            this.arrayNews = [];
            this.arrayNewsLeft = [];
            this.arrayBitcoinNews = [];
            this.arrayBlockchainNews = [];
            snapshot.forEach(childSnapshot => {
                let childVal = childSnapshot.val();
                let arrVal = Object.values(childVal);
                let arrString = arrVal.filter(e => typeof e === 'string' && e !== '');
                let totalCоunt = 0;
                let readingTime = 0;
                for (let str in arrString) {
                    let wordCount = arrString[str].split(' ').length;
                    totalCоunt += wordCount;
                }
                readingTime = Math.round(totalCоunt / 200);
                childVal.readingTime = readingTime;
                if (childVal.keyword1 === "биткойн новости") {
                    this.arrayBitcoinNews.unshift(childVal);
                }
                if (childVal.keyword2 === "блокчейн") {
                    this.arrayBlockchainNews.unshift(childVal);
                }
                this.arrayNews.unshift(childVal);
            });
            this.arrayNews.splice(0,4);
            this.arrayNewsLeft = this.arrayNews.slice(4);
            this.setState({
                news: this.arrayNews,
                newsLeft: this.arrayNewsLeft,
                bitcoinNews: this.arrayBitcoinNews,
                blockchainNews: this.arrayBlockchainNews
            });
        });
    };
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                handleTopDetail: this.handleTopDetail,
                handleSearch: this.handleSearch,
                handleBitcoinDetail: this.handleBitcoinDetail,
                handleBlockchainDetail: this.handleBlockchainDetail,
                calcReadingTime: this.calcReadingTime
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};