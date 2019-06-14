import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions';

class SearchBar extends React.Component {
    renderInput = props => {
      return (
        <div className="field">
          <label>{props.label}</label>
          <input { ...props.input } autoComplete="off" />
        </div>
      );
    };

    onSubmit = (formValues) => {
      console.log(this.props.fetchRecipes(formValues.title)); // formValues.title comes from <Field />
    }

    render() {
        return (
          <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
            <Field name="title" component={this.renderInput} label="Ingredient" />
          </form>
        );
    };
};

const formWrapped = reduxForm({
  form: 'fetchRecipes'
})(SearchBar);

export default connect(null, { fetchRecipes })(formWrapped);