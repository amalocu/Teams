import React, {Component} from 'react';
import { View, WebView } from 'react-native';




class WebSite extends Component {

    constructor(props){
        super(props);
        this.setState = {
            url:'www.gana.com.co'
        };

      }
  
      componentDidMount () {
        url = this.props.navigation.getParam('url','NO DATA');
        console.log('url');
        console.log(url);
        this.setState = {
            url:url
        };
      };

    render(){
        return (
            <WebView
            source={{uri: this.state.url}}
            style={{marginTop: 20}}
            
        />
        );
    }


}

export default WebSite;