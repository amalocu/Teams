import { StackNavigator,  DrawerNavigator, createSwitchNavigator} from 'react-navigation';
import Teams from '../teams'
import Players from '../players'
import WebSite from '../website'

export const stack = StackNavigator(
  {
    TeamsScreen: {
      screen: Teams, navigationOptions:() =>( {
        title: 'Teams',
      })
    },
    PlayersScreen: {
      screen: Players,navigationOptions:() =>( {
        title: 'Players',
      })
    },
    WebScreen: {
      screen: WebSite,navigationOptions:() =>( {
        title: 'WebSite',
      })
    },  
    },
  {
    initialRouteName: 'TeamsScreen',
    navigationOptions:{
      headerStyle: {
        backgroundColor: '#616161',
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontSize: 30,
        fontWeight:'500'
      },
    }
  }
);

   const Drawer = DrawerNavigator({
      Teams: {screen: stack},
  });

//Contiene las rutas de navegacion 
 export const SwitchNavigator =  createSwitchNavigator(
   {
    App: Drawer
  },{
    initialRouteName:'App',
  }
 )



