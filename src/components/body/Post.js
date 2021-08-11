import React, { Component } from 'react'

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state={
            isLoading: true,
            post: [],
            error: null,
            id: this.props.match.params.id
        };
    }
    
    fetchData() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`)
        .then(response=>response.json())        
        .then(data =>
            this.setState({
                post: data,
                isLoading:false
            })
        ).catch((error) => this.setState({error, isLoading: false}));
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        const {error, post, isLoading} = this.state;
        return (
            <div>
            {error ? <p>{}{error.message}</p> : null}
            { !isLoading ? ( 
                <div className="current_post">
                    <h1>{post.title}</h1>
                    <img src="https://source.unsplash.com/random" alt="loaded_image"/>
                    <p>{post.body}</p>
                </div >
            ) : (<h1 className="current_post">Loading Post!!!</h1>)}
            </div>
        )
    }
}
