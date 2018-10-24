import React from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import ItemStyles from '../styles/item-style';

const ItemTeam = (props) => (

    <TouchableHighlight
            onPress={ ()=> props.navigation.navigate('PlayersScreen', { team: props.team }) }
            
                underlayColor='#616161'
           
    >
        <View  style={ItemStyles.container}>

            <View >
                <Image    
                    source = {{uri:props.team.strTeamBadge}}
                    style={ItemStyles.teamImage}
                />
            </View>
            <View style={ItemStyles.teamInfo}>
                <Text style={ItemStyles.teamName}>{props.team.strAlternate}</Text>
                <Text style={ItemStyles.teamDescription}s>{props.team.strDescriptionES}</Text>
            </View>
     </View>
    </TouchableHighlight>

);

export default ItemTeam;
