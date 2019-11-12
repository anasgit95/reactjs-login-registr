import React from 'react';
import '../Formulaire/Formulaire.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {  faUser,  faEnvelopeOpen, faEye } from '@fortawesome/free-solid-svg-icons'

class  registre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                      formFields: {
                      username: '',
                      password: '',
                      email:'',
                      lastname:''},
                      type:'password',
                      reponse:'',
                      error:false,
                      placeNom:"Username",
                      NameColor: 'grey'
                      };
    
        this.handleChange = this.handleChange.bind(this);
            

        this.handleSubmit = this.handleSubmit.bind(this);
        this.ShowPassword=this.ShowPassword.bind(this);
      }
    
      handleChange(event) {
        let formFields = {...this.state.formFields};
        formFields[event.target.name] = event.target.value ; 
        this.setState({
          formFields
        });


}
ShowPassword(event ) {
  if(this.state.type==="password") { 
this.setState({type:"text"});
}
else this.setState({type:"password"});

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
      { reponse===200?   <div className="Accueil"> BienVenu {this.state.formFields.username } Chez EXPERT SOLUTIONS</div>           
            :<div className="Accueil"> 
           <p> BIENVENU CHEZ EXPERT SOLUTIONS</p>
            <label>
               
              <input className={classes} type="text" name="username" value={this.state.formFields.username} onChange={this.handleChange} placeholder="Nom"  style={{borderColor :this.state.NameColor}}/>
              <FontAwesomeIcon icon={faUser} />

            </label>
            <br/>
            <label>
               
               <input className={classes} type="text" name="lastname" value={this.state.formFields.lastname} onChange={this.handleChange} placeholder="Prenom"  style={{borderColor :this.state.NameColor}}/>
               <FontAwesomeIcon icon={faUser}  />

               <br/>

             </label>
            <label>
            
              <input type={this.state.type} value={this.state.formFields.password} name="password" onChange={this.handleChange} placeholder="password  " style={{borderColor :this.state.NameColor}} />
              
               <FontAwesomeIcon icon={faEye} onClick={this.ShowPassword}  className="Cursor"> </FontAwesomeIcon>

            </label>
            <br/>
            <label>
           
               
              <input type="email" value={this.state.formFields.email} name="email"  onChange={this.handleChange} placeholder="Email" style={{borderColor :this.state.NameColor}}   />
              <FontAwesomeIcon icon={faEnvelopeOpen} />
           
            </label>
            <br/>
            <a href="/" className="Registre">Login </a>

            <br/>
            <button type="submit" value="Envoyer" > Registre </button> 
  

            </div> }
          
          </form>
        );
      }
    }
export default registre;
