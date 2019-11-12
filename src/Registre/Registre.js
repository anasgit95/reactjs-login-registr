import React from 'react';
import '../Formulaire/Formulaire.css'
class  registre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                      formFields: {
                      username: '',
                      password: '',
                      email:'',
                      lastname:''},
                     
                      reponse:'',
                      error:false,
                      placeNom:"ecrivez votre nom Monsieur",
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
      { reponse===200?   <div> BienVenu {this.state.formFields.username } Chez EXPERT SOLUTIONS</div>           
            :<div> 
           <p> BIENVENU CHEZ EXPERT SOLUTIONS</p>
            <label>
               
              <input className={classes} type="text" name="username" value={this.state.formFields.username} onChange={this.handleChange} placeholder="Ecrivez votre nom"  style={{borderColor :this.state.NameColor}}/>
            
            </label>
            <br/>
            <label>
               
               <input className={classes} type="text" name="lastname" value={this.state.formFields.lastname} onChange={this.handleChange} placeholder="Ecrivez votre nom"  style={{borderColor :this.state.NameColor}}/>
             
             </label>
            <label>
            
              <input type="password" value={this.state.formFields.password} name="password" onChange={this.handleChange} placeholder={this.state.placeNom} style={{borderColor :this.state.NameColor}} />
            </label>
            <br/>
            <label>
           
               
              <input type="email" value={this.state.formFields.email} name="email"  onChange={this.handleChange} placeholder="Ecrivez votre Email" style={{borderColor :this.state.NameColor}}   />
            </label>
            <br/>
            <button type="submit" value="Envoyer" > Registre </button> 
  

            </div> }
          
          </form>
        );
      }
    }
export default registre;
