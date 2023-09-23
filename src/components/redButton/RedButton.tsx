import "./RedButton.css" 



/*--------Types-------------*/

type Text = {
    textButton: string   
    
}

/*------------------------------*/




function RedButton(props:Text) {
    return (
        
        <div className="button">{props.textButton}</div>
    );
}

export default RedButton ;