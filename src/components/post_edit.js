import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost1, createPost } from '../actions/index';
class PostEdit extends Component{
    componentDidMount(){
        this.props.initialize({ title: this.props.post[0].title,
                                categories: this.props.post[0].categories,
                                content: this.props.post[0].content
                            });
    }
    renderField(field){
        if(field.label == "Post Content"){
            return (
                <div className = {`form-group ${field.meta.error && field.meta.touched ? 'has-danger' : ''} `}>
                    <label>{field.label}</label>
                    <textarea
                        row= "30"
                        cols= "30"
                        className = {`form-control ${field.label == "Post Content" ? 'content' : ''} `}
                        type= "text"
                        {...field.input}
                    />
                    <div className = 'text-help'>
                        {field.meta.touched ? field.meta.error : ''}
                    </div>
            </div>
            );
        }
        return (
            <div className = {`form-group ${field.meta.error && field.meta.touched ? 'has-danger' : ''} `}>
                <label>{field.label}</label>
                <input
                    className = {`form-control ${field.label == "Post Content" ? 'content' : ''} `}
                    type= "text"
                    {...field.input}
                />
                <div className = 'text-help'>
                    {field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        );
    }
    Submit(values){
        this.props.deletePost1(this.props.post[0].id);
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }
    render(){
        const { handleSubmit } = this.props;//handleSubmit property passed to componrnt on behalf of reduxForm fucntion
        return (
            <form onSubmit= {handleSubmit(this.Submit.bind(this))} className= 'field'>
                <Field
                    label= "Title"
                    name= "title"
                    component= {this.renderField}  
                />
                <Field
                    label= "Categories"
                    name= "categories"
                    component= {this.renderField}
                />
                <Field
                    label= "Post Content"
                    name= "content"
                    component= {this.renderField}
                    className = "content"
                />
                <button type="submit" className= "btn btn-primary">Submit</button>
                <Link to = "/" className = "btn btn-danger">Cancel</Link>
            </form>
        );
    }
}
function validate(values){
    const errors = {};
    if(!values.title){
        errors.title = "Please enter a title";
    }
    if(!values.categories){
        errors.categories = "Please enter a category";
    }
    if(!values.content){
        errors.content = "Please enter content";
    }
    return errors; // If errors is empty, validation is successful otherwise form is invalid
}
function mapStateToProps(state){
    return { post: state.editpost };
}
export default reduxForm({
    validate,
    form: "PostsNewForm"
}) (
    connect(mapStateToProps, { deletePost1, createPost })(PostEdit)
);