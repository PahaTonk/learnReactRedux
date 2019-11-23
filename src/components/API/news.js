import React, { Component, Fragment } from 'react';

const BASE_PATH = 'https://hn.algolia.com/api/v1';
const SEARCH_PATH = '/search';
const SEARCH_PARAM = 'query=';
const PAGE_HITS = 'hitsPerPage';
const HITS = [
    {
        value: 10,
        label: 10
    },
    {
        value: 20,
        label: 20
    },
    {
        value: 30,
        label: 30
    }
]

export default class News extends Component {

    state = {
        searchQuery: '',
        result: '',
        hitsPerPage : 10
    }

    componentDidMount () {
        const { searchQuery, hitsPerPage } = this.state;
        this.fetchData(searchQuery, hitsPerPage);
    }

    fetchData = (searchQuery, hitsPerPage) => {
        fetch(`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${searchQuery}&${PAGE_HITS}=${hitsPerPage}`)
            .then( (response) => response.json() )
            .then( (result) => this.setNews(result) )
            .catch( error => error)
    } 

    setNews = (result) => {
        this.setState({ result });
    }

    onChange = ({ target: { value } }) => {
        const { hitsPerPage } = this.state;

        this.setState(() => ({
            searchQuery: value
        }), () => {
            this.fetchData(value, hitsPerPage);
        } );
        
    }

    onSelectChange = ({ target: { value } }) => {
        const { searchQuery } = this.state;

        this.setState(() => ({
            hitsPerPage: +value
        }), () => {
            this.fetchData(searchQuery, value);
        } );
        

    }

    render () {
        const { searchQuery, result } = this.state;
        const { hits = [] } = result;
        
        return (
            <Fragment>
                <input type="search" value={ searchQuery } onChange={ this.onChange }/><br />
                <select name="quantity-page" onChange={ this.onSelectChange }>
                    { HITS.map( ({ value, label }) => (
                        <option key={value} value={ value }>{ label }</option>
                    ) ) }
                </select>
                <h1>Hacker News</h1>
                <h2>{ searchQuery }</h2>
                <ul>{ 
                    hits.map( ({author, objectID, title, url}) => (
                        <li key={objectID}>
                            <h3>{title} - {author}</h3>
                            <p>{ url }</p>
                        </li>
                    ) )
                }</ul> 
            </Fragment>
        );
    };
}; 