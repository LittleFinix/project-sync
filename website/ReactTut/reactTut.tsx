import * as React from "react"
import "./styleTut.css"
import * as myStyle from "./styleTut.css"
import { Animal, Person } from "../personScript";

export interface IFunnyButtonProps{
    buttonText: string;
    
}

export interface IFunnyButtonState{
    textboxtext: string;
}

export interface IMenuBarProps{

}

export interface IMenuBarState{

}

export class MenuBar 
        extends React.Component<IMenuBarProps, IMenuBarState>{
        
            render(){
                return <React.Fragment>                
                            <div>
                            </div>    
                    </React.Fragment>
            }
        
}

export default class FunnyButton 
        extends React.Component<IFunnyButtonProps, IFunnyButtonState>{
         
        personJuri : Person = new Person ("Juri", "Baier", "Tim");

    constructor(props : IFunnyButtonProps, context? : any){
        super(props, context);
        this.state = {
            textboxtext: ""
        };
    }
            
    render(){
        return <React.Fragment> 
            <textarea value={this.state.textboxtext} onChange={(ev) => this.textchanged(ev)} />
            <button 
                onClick= { 
                    () => this.showFullName(this.personJuri.fullName)
                }
            >
                    Zeig mir den vollen Namen
            </button>
            <p>{this.state.textboxtext}</p>

            <button 
                id="testButton"
          
                onClick={() => this.clicked(this.state.textboxtext)}
            >
                { this.props.buttonText }
            </button>
        </React.Fragment>
    }
    
    private textchanged(ev : React.ChangeEvent<HTMLTextAreaElement>)
    {
        let newText = ev.target.value;
        this.setState(prev => ({
            textboxtext: newText
        }));
    }

    /*private getFullName(person : Person){
        return person.firstName + " " + person.secondName + " " + person.lastName;
    }
*/
    private clicked(text : string){
        console.log(text);
        
    }

    private showFullName(text: string){
        console.log(text);
    }
}