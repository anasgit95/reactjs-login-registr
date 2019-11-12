import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUser, faVoicemail, faCreditCard, faAddressCard, faUnlock, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import './Formulaire.css' ;
import logo from './experts.png'
class  formulaire extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                      formFields: {
                      username: '',
                      password: '',
                      email:'',},
                     
                      reponse:'',
                      error:false,
                      placeNom:"password",
                      NameColor: 'grey'
                      };
    
        this.handleChange = this.handleChange.bind(this);


        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        let formFields = {...this.state.formFields};
        formFields[event.target.name] = event.target.value ; 
        this.setState({
          formFields
        });


}
     
    
      handleSubmit(event) {
        if((this.state.formFields.username )&&(this.state.formFields.email) && (this.state.formFields.password) ) { 
        fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
        .then(response =>this.setState({reponse:response}) )   
         event.preventDefault();
        }
        else this.setState({error:true})
        event.preventDefault();

       }
 
      render() {

    const    reponse =  this.state.reponse.status ;
    const    error =this.state.error
    let classes  =['bold'].join(' ') ; 
    if(error ) {
       classes  =['essaye'].join(' ') ; 

}   

        return ( 
        
          <form onSubmit={this.handleSubmit} className="Essayer"> 
      { reponse===200?   <div className="Accueil"> BienVenu {this.state.formFields.username } Chez EXPERT SOLUTIONS
      </div>           
            :<div className="Accueil" > 
           <img src={logo} className="ImageExp" alt="Logo" />
           <br/>

            <label>

              <input className={classes} type="text" name="username" value={this.state.formFields.username} onChange={this.handleChange} placeholder="Username"  style={{borderColor :this.state.NameColor}}/>
              <FontAwesomeIcon icon={faUser} />

            </label>
            <br/>
            <label>
            
              <input type="password" value={this.state.formFields.password} name="password" onChange={this.handleChange} placeholder={this.state.placeNom} style={{borderColor :this.state.NameColor}} />
              <FontAwesomeIcon icon={faUnlock} />

            </label>
            <br/>
            <label>
           
               
              <input type="email" value={this.state.formFields.email} name="email"  onChange={this.handleChange} placeholder="User@User.fr" style={{borderColor :this.state.NameColor}}  />
              <FontAwesomeIcon icon={faEnvelopeOpen} />
              

            </label>
            <br/>
            <a href="/registre" className="Registre">Registre </a>
            <a href="/registre" className="Registre">MotDepasseOublier </a>

            <br/>
            
    






            <button type="submit" value="Envoyer" > Login </button> 
  

            </div> }
          
          </form>
        );
      }
    }
export default formulaire;
