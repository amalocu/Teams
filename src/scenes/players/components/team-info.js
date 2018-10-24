import React from 'react';
import { Text, View, Image } from 'react-native';
import ItemStyles from '../styles/item-style';
import Icon from 'react-native-vector-icons/FontAwesome5';

const TeamInfo = (props) => (

    <View  style={ItemStyles.container}>

    <View >
        <Image    
            source = {{uri:props.team.strTeamJersey}}
            style={ItemStyles.teamImage}
        />
    </View>
    <View style={ItemStyles.teamInfo}>
        <Text style={ItemStyles.teamName}>{props.team.strAlternate}</Text>
        <Text style={ItemStyles.teamDescription}s>{props.team.strDescriptionES}</Text>
        <Icon name="rocket" size={30} color="#900" onPress={ ()=> props.navigation.navigate('WebScreen', { url: props.team.strFacebook }) } />
        <Icon.Button name="facebook-square" iconStyle = {{marginRight: 10}} onPress={ ()=> props.navigation.navigate('WebScreen', { url: props.team.strFacebook }) }>
            <Text > Facebook</Text>
        </Icon.Button>
        <Icon.Button name="twitter">
            <Text > twitter</Text>
        </Icon.Button>
        <Icon.Button name="instagram"  >
            <Text >instagram</Text>
        </Icon.Button>
        <Icon.Button name="youtube-square" >
            <Text > Youtube</Text>
        </Icon.Button>
        <Text style={ItemStyles.teamName}s>{props.team.strTwitter}</Text>
    </View>
</View>

);

export default TeamInfo;
