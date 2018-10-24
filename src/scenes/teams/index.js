import React, {Component} from 'react';
import { View, FlatList, Text } from 'react-native';
import ItemTeam from './components/item-team';
import ItemSeparator from './components/item-separator';
import httpTeams from '../../services/teams/http-teams';



class Teams extends Component {

    constructor(props){
        super(props);
        this.state = {
            teamsList:[]
        };

      }
  
      componentDidMount () {
          this.getData()
      };
  
      async getData(){
        const data = await httpTeams.getTeams("spain", "soccer");
        //console.log('getData');
        //console.log(data);
        await this.setState({
            teamsList: data.teams 
        });
      }

    renderItem = ({item}) =><ItemTeam team={item} navigation={this.props.navigation}/>;
    separatorComponente = () => <ItemSeparator/>
    emptyComponent = () => <Text>Sin Equipos</Text>
    keyExtractor = item => item.idTeam;

    render(){
        return (
            <View>
                <FlatList
                  data={this.state.teamsList}
                  renderItem={this.renderItem}
                  ItemSeparatorComponent={this.separatorComponente}
                  ListEmptyComponent={this.emptyComponent}
                  keyExtractor = {this.keyExtractor}
                />
            </View>
        );
    }


}

export default Teams;

