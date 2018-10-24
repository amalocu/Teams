
class HttpBase{

    async basePost(url, config){
        try {
            const conf = this.headersConfig(config.headers);
            const options = {
                method: 'POST',
                headers:conf,
                body: JSON.stringify(config.param)
            }
            let query = await this.callHttp(url,options); 
            const data = await query.json(); 
            return  data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async baseGet(url, config){
        try {
            const conf =  this.headersConfig(config.headers);
            const options = {
                method: 'GET',
                headers:conf
            }
            let query = await this.callHttp(url,options); 
            const data = await query.json(); 
            return  data;
        } catch (error) {
            throw new Error(error);
        }
    }

    headersConfig(customHeaders){
        const defaultHeaders = {
            'Content-Type':'application/json',
            Accept: 'appication/json'
        };

        const headersConfig = Object.assign(defaultHeaders,customHeaders);
        let headers = new Headers(headersConfig);
        return headers;s
    }


    callHttp(url, options){
        let promise = new Promise( (resolve, reject)=>{
            fetch(url, options)  
            .then(response =>  {               
                //console.log(response)

                resolve(response)
            } )
            .catch(error => {
                console.log(error)
                reject(error)
            } );
        });
        return promise;
    }

    getStringParameters(data){
        let param = [];
        if(data){
            for(let[name,value] of Object.entries(data)){
                param.push(name+'='+value);
            }
            return param.join('&');
        }
        return '';
    }


}
export default new HttpBase;