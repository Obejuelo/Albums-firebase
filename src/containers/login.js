import React, { Component } from 'react';
import firebase from '../initializers/firebise';

// Redux
import {connect} from 'react-redux';
import {saveToken, clearToken} from '../initializers/actions';

// Components
import Ahutelement from '../components/AhutElement';

class Login extends Component {

    state = {
        userLoggedIn: false,
        imgUrl: ''
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    userLoggedIn: true,
                    imgUrl: user.providerData[0].photoURL
                });
            } else {
                this.setState({
                    userLoggedIn: false,
                    imgUrl: ''
                });
            }
        })

        
    }

    login = () => {
        let provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/photoslibrary.readonly');
        firebase.auth().signInWithPopup(provider).then(res => {
            let token = res.credential.accessToken;
            this.props.saveToken(token);
        }).catch(err => {
            console.log(err);
        })
    }

    logout = () => {
        firebase.auth().signOut().then(() => {
            this.props.clearToken();
        });
    }

    render() {
        return (
            <Ahutelement
                login={this.login}
                logout={this.logout}
                userLogged={this.state.userLoggedIn}
                imgUrl={this.state.imgUrl}/>
        )     
    }
}

const mapeStateToProps = (state) => {
    return {
        token: state.token
    }
}

const mapeDispatchToProps =  {
    saveToken,
    clearToken
}
 
export default connect(mapeStateToProps, mapeDispatchToProps)(Login);
