import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router-dom';
import _ from 'lodash';
class PostsIndex extends Component{
    constructor(props){
        super(props);
        this.renderPost = this.renderPost.bind(this);
    }
    componentDidMount(){
        this.props.fetchPosts();     
    }
    renderPost(){
        if(_.isEmpty(this.props.posts)){
            return <div className = 'nopost'>There are no posts to show</div>
        }
        return _.map(this.props.posts, post => {
            return (
                <li className = 'list-group-item' key= {post.id} >
                    <Link to= {`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            ); 
        });
    }
    render(){
        return (// Link tag prevents the browser from reloading and making request to the server
            <div className = "posts">
                <div className = "butt">
                    <Link className = "btn btn-primary" to= "/posts/new">
                        Add a post
                    </Link>
                </div>
                <div className= "heads"><h3><span className = "head">Posts</span></h3></div>
                <ul className = "list-group">
                    {this.renderPost()}
                </ul>
            </div>
        );
    }
}
function mapStateToProps(state){
    return { posts: state.posts };
}
export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostsIndex);