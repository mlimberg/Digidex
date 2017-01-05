import React, { Component } from 'react'
import firebase from 'firebase';
import { signIn, signOut, reference } from '../firebase';
import Input from './Input';
import Button from './Button';
import NewContactForm from './NewContactForm';
import Login from './Login';
import Link from './Link';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      // showNewForm: false,
      user: null,
    }
  }

  // toggleNewContactForm() {
  //   this.setState({showNewForm: !this.state.showNewForm})
  // }

  render() {
    return (
      // <div>
      //   {
      //   !this.state.user
      //   ?
      //   <Login className='signIn' text='Sign In' authorize={signIn} setUser={(user)=> {this.setState({ user: user })}} />
      //   :
        <div>
          <div className='header'>
            <Link to='/'>
              <h1>Digidex💻</h1>  
            </Link>

            <Input />

            {/* <Button text="New" handleClick={this.toggleNewContactForm.bind(this)}/> */}

          <Link to='/NewContact'>
            New
          </Link>
          </div>

          <main>
            {this.props.children}
          </main>

          {/* {this.state.showNewForm ? <NewContactForm /> : <div></div>} */}

          {/* <Login className='signOut' text='Sign Out' authorize={signOut} setUser={()=> {this.setState({ user: null })}} />
        </div>
        } */}
      </div>
    )
  }
}
