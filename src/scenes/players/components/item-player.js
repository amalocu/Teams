import React from 'react';
import { Text, View, Image } from 'react-native';
import ItemStyles from '../styles/item-style';

const ItemPlayer = (props) => (


        <View  style={ItemStyles.container}>

            <View >
                <Image    
                    source = {{uri:props.player.strThumb}}
                    style={ItemStyles.teamImage}
                />
            </View>
            <View style={ItemStyles.teamInfo}>
                <Text style={ItemStyles.teamName}>{props.player.strPlayer}</Text>
                <Text style={ItemStyles.teamDescription}s>{props.player.dateBorn}</Text>
            </View>
     </View>


);

export default ItemPlayer;
