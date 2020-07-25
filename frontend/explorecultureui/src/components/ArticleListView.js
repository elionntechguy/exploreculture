import React, { Component } from 'react'
import Article from './Article';
import axios from 'axios';

class ArticleListView extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             articles: []
        }
    }

    componentDidMount()
    {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                let list = [];
                res.data.forEach(element => {
                    list.push(element.title);
                });
                this.setState({
                    articles: list
                });
                console.log(res.data)
            })
    }
    

    render() {
        return (
            <React.Fragment>
                <Article data={this.state.articles} />
            </React.Fragment>
        )
    }
}

export default ArticleListView
