import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

    defaultprops = {
        country: 'in',
        category: 'General'
    }

    PropTypes = {
        country: PropTypes.string,
        category: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            totalResults: 0
        }
        document.title = `${this.props.category} - NewsMonkey`
    }

    async componentDidMount() {
        this.props.setprogress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=efa6ba9b7b7743db963bce14eaccc4fd`;
        this.setState({ loading: true })
        this.props.setprogress(30)
        let data = await fetch(url);
        this.props.setprogress(60)
        let parsedData = await data.json()
        this.props.setprogress(80)
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setprogress(100)
    }

    fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=efa6ba9b7b7743db963bce14eaccc4fd`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        })
    }

    render() {
        return (
            <>
                <h1 className="text-center" style={{ margin: '59px' }}>News Monkey Top Hedlines from {this.props.category}</h1>
                <hr />
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}>
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.title}>
                                    <Newsitem title={!element.title ? "" : element.title} discription={!element.discription ? element.description : ""}
                                        imgUrl={element.urlToImage} url={element.url} author={element.author} dt={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}

export default News