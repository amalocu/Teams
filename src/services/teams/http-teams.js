import {API_BASE, HTTP_TEAMS} from '../base/config.js';
import HttpBase from '../base/http-base';

class HttpTeams{
    async getTeams( country, sport ){
        try {
            const url = `${API_BASE}${HTTP_TEAMS.getTeams}?s=${sport}&c=${country}`;
            const data = await HttpBase.baseGet(url, {});
            return data;
        } catch (error) {
            console.log("error==>")
            console.log(error);
        }
    }

    async getPlayers(team){
        try {
            const url = `${API_BASE}${HTTP_TEAMS.getPlayers}?t=${team}`;
            const data = await HttpBase.baseGet(url, {});
            return data;
        } catch (error) {
            console.log("error==>")
            console.log(error);
        }
    }
    async getTeam( _id ){
        try {
            const url = `${API_BASE}${HTTP_TEAMS.getTeam}?id=${_id}`;
            const data = await HttpBase.baseGet(url, {});
            return data;
        } catch (error) {
            console.log("error==>")
            console.log(error);
        }
    }

}

export default new HttpTeams;