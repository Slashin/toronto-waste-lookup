import React from 'react';

class Results extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currFavs: []
        }
    }

    htmlDecode = (input) => {
        var e = document.createElement('div');
        e.innerHTML = input;
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    }

    toggleFav = (elem) => {
        let arr = this.state.currFavs;
        if(arr.includes(elem)){
            let index = arr.indexOf(elem);
            arr.splice(index,1);
        }else{
            arr.push(elem);
        }
        
        this.setState({currFavs: arr});
    }

    render(){
        return(
            <div>
                <div className="container">
                    {this.props.data.map((elem)=>{
                        let newBody = this.htmlDecode(elem.body);
                        return <div className="row">
                                    <div className="col-lg-6">
                                        { 
                                            this.state.currFavs.includes(elem) ? (
                                                <div><i onClick={()=>this.toggleFav(elem)} className="fa fa-star" style={{"color":"#23965d"}}></i>  {elem.title}</div>
                                            ) : (
                                                <div><i onClick={()=>this.toggleFav(elem)} className="fa fa-star"></i>  {elem.title}</div>
                                            )

                                        }
                                    </div>
                                    <div className="col-lg-6">
                                        <div dangerouslySetInnerHTML={{__html: newBody}}></div>
                                    </div>
                                </div>
                    })}
                </div>

                    <br/><br/>

                <div id="favouritesSection" className="container">
                    <h3 style={{"color":"#23965d"}}><strong>Favourites</strong></h3>
                    <br/>
                    {
                        this.state.currFavs.map((elem)=>{
                            let newBody = this.htmlDecode(elem.body);
                            return <div className="row">
                                    <div className="col-lg-6">
                                        { 
                                            this.state.currFavs.includes(elem) ? (
                                                <div><i onClick={()=>this.toggleFav(elem)} className="fa fa-star" style={{"color":"#23965d"}}></i>  {elem.title}</div>
                                            ) : (
                                                <div><i onClick={()=>this.toggleFav(elem)} className="fa fa-star"></i>  {elem.title}</div>
                                            )

                                        }
                                    </div>
                                    <div className="col-lg-6">
                                        <div dangerouslySetInnerHTML={{__html: newBody}}></div>
                                    </div>
                                </div>
                        })
                    }
                </div>

            </div>
        )
    }
}

export default Results;