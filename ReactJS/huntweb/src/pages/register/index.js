import React, { Component } from 'react';
import api from '../../services/api';
import { Link, withRouter } from 'react-router-dom';

import Logo from "../../assets/airbnb-logo.svg";

import { Form, Container } from "./styles";

class Register extends Component{

	state = {
	    title: "",
	    description: "",
	    url: "",
	    error: ""
	};

	handleOnSubmit = async e => {

	    e.preventDefault();

	    const { title, description, url } = this.state;
	    
	    if (!title || !description || !url) {
	    
	      	this.setState({ error: "Preencha todos os dados para registrar" });
	    
	    } else {
	      try {

	        await api.post("/products", { title, description, url });
	        this.props.history.push("/");
	      
	      } catch (err) {
	        
	        console.log(err);
	        this.setState({ error: "Ocorreu um erro ao registrar o produto" });
	      
	      }
	    }
	};

	render() {
		return (
			<Container>
		        <Form onSubmit={this.handleOnSubmit}>
			        <img src={Logo} alt="Airbnb logo" />
			          {this.state.error && <p>{this.state.error}</p>}
			        <input
			            type="text"
			            placeholder="Titulo do produto"
			            onChange={e => this.setState({ title: e.target.value })}
			        />
			        <input
			            type="text"
			            placeholder="Descriçao do Produto"
			            onChange={e => this.setState({ description: e.target.value })}
			        />
			        <input
			            type="url"
			            placeholder="Url do Produto"
			            onChange={e => this.setState({ url: e.target.value })}
			        />
			        <button type="submit">Cadastrar</button>
			          <hr />
			        <Link to="/">Home</Link>
		        </Form>
		    </Container>		
    	)

	}

}

export default withRouter(Register);