import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let { title, discription, imgUrl, url, author, dt, source  } = this.props

        return (
            <div className="card" style={{ borderWidth: "medium" }}>
                <img src={!imgUrl ? "https://www.nainzulinu.com/wp-content/uploads/2017/08/naslovna-news.jpg" : imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div style={{ textAlign: "end" }}>
                        <span className="badge bg-success my-2">{source}</span>
                    </div>
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{discription}...</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} <br /> on {new Date(dt).toGMTString()}</small></p>
                    <a href={url} className="btn btn-sm btn-primary">Read more</a>
                </div>
            </div>
        )
    }
}

export default Newsitem