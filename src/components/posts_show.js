import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost, editPost } from '../actions/index';
import { Link } from 'react-router-dom';
class PostsShow extends Component{
    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.fetchPost(id);
    }
    onDeleteClick(){
        const id = this.props.match.params.id;
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }
    onLink(){
        this.props.editPost(this.props.post);
    }
    render(){
        const { post } = this.props;
        if(!post){
            return <div><img src= "https://cdn.dribbble.com/users/959027/screenshots/2594575/oscar_data_loop__1_.gif" /></div>
        }
        return (
            <div className= "postshow">
                <div><Link to= "/">Back to Index</Link></div>
                <div className= "edit"><Link to= "/posts/edit" onClick = {this.onLink.bind(this)}>Edit Post</Link></div>
                <button 
                    className = "btn btn-danger pull-xs-right"
                    onClick = {this.onDeleteClick.bind(this)}>
                Delete Post</button>
                <h3 className = "title">{post.title}</h3>
                <h6 className = "categories">Categories: {post.categories}</h6>
                <p className = 'content'>{post.content}</p>
            </div>
        );
    }
}
function mapStateToProps(state, ownProps) {
    return { post: state.posts[ownProps.match.params.id] }
}
export default connect(mapStateToProps, { fetchPost, deletePost, editPost }) (PostsShow);