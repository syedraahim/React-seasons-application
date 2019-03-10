import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner'

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = { 
                lat : null,
                errorMessage: null
        };
        
         window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat : position.coords.latitude}),
            err => this.setState({errorMessage : err.message})
        );
    }

renderContent() {
                if(this.state.lat){
                    return <div><SeasonDisplay lat={this.state.lat} /></div>
                }
                else if(this.state.errorMessage){
                   return <div>error: {this.state.errorMessage}</div>
                }
                else{
                   return <Spinner message="Please accept location permission" />
                } 
}


    render(){
        return <div className="render-div">
            {this.renderContent()};
        </div>
    }
}
ReactDOM.render(<App />,document.querySelector('#root'));