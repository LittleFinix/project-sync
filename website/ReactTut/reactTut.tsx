import * as React from "react"
import "./styleTut.css"
import * as myStyle from "./styleTut.css"

export interface IFunnyButtonProps{
    buttonText: string;
    
}

export interface IFunnyButtonState{
    textboxtext: string;
}

export default class FunnyButton 
        extends React.Component<IFunnyButtonProps, IFunnyButtonState>{
         
    constructor(props : IFunnyButtonProps, context? : any){
        super(props, context);
        this.state = {
            textboxtext: ""
        };
    }
            
    render(){
        return <React.Fragment> 
            <textarea value={this.state.textboxtext} onChange={(ev) => this.textchanged(ev)} />
            
            <p>{this.state.textboxtext}</p>

            <button 
                id="testButton"
              /*  style={{
                    backgroundColor: "green", 
                    color: "White"
                }} */
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

    private clicked(text : string){
        console.log(text);
    }
}