import React, {Component} from 'react';
import { View,  FlatList, Text } from 'react-native';
import ItemPlayer from './components/item-player';
import TeamInfo from './components/team-info';
import ItemSeparator from './components/item-separator';
import httpTeams from '../../services/teams/http-teams';



class Players extends Component {

    constructor(props){
        super(props);
        this.state = {
            team:{},
            playersList:[]
        };

      }
  


      componentDidMount () {
        team = this.props.navigation.getParam('team','NO DATA');
       // console.log('team');
        //console.log(team);
        this.getTeamData(team);
        this.getPlayerData(team)
      };
      async getTeamData(team){
        const data = await httpTeams.getTeam(team.idTeam);
         console.log('getData');
        console.log(data);
        await console.log(data.teams[0].strFacebook);

        await this.setState({
            team: data.teams[0] 
        });
      }
      async getPlayerData(team){
        const data = await httpTeams.getPlayers(team.strTeam);
        //        console.log('getData');
        //console.log(data);
        await this.setState({
            playersList: data.player 
        });
      }

    renderItem = ({item}) =><ItemPlayer player={item} navigation={this.props.navigation}/>;
    separatorComponente = () => <ItemSeparator/>
    emptyComponent = () => <Text>Sin Equipos</Text>
    keyExtractor = item => item.idPlayer;

    render(){
        return (
            <View>
                <TeamInfo team={this.state.team} navigation={this.props.navigation} />
                <FlatList
                  data={this.state.playersList}
                  renderItem={this.renderItem}
                  ItemSeparatorComponent={this.separatorComponente}
                  ListEmptyComponent={this.emptyComponent}
                  keyExtractor = {this.keyExtractor}
                />
            </View>
        );
    }


}

export default Players;