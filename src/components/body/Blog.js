import React from 'react';
import Posts from './Posts';

export default class Blog extends React.Component {
    state={
        isLoading: true,
        posts: [],
        error: null
    }
    fetchData() {
        fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(response=>response.json())        
        .then(data =>
            this.setState({
                posts: data,
                isLoading:false
            })
        ).catch(error => this.setState({error, isLoading: false}));
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        const {error, posts, isLoading} = this.state;
        return (

            
            <div className="loaded_posts">
            {error ? <p>{}{error.message}</p> : null}
            { !isLoading ? (posts.map((post) => {
                const {id, title} = post
                return (<div key={id}>
                    {id < 4 ? (<Posts  id={id} title={title} />) : (null)}
                </div>)
                
            })
            ) : (<h1>Loading posts...</h1>) }
            </div>
                
        )
    }
}

