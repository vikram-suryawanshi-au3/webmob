import React from 'react';
const axios = require('axios');
 
class Service extends React.Component {
    constructor(){
        super()
        this.state = {
            all:[]
        }
    }

    componentDidMount (){

        var self = this
         axios.get('http://localhost:5000/test')
            .then(function (response) {
                // handle success
                
                self.setState({all:response.data.data.purchased_services})            
                
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            

    }
 
    render() {
        return (
            <div>
            <h1>Purchased services</h1>
            <div>
            {this.state.all.map((item1, index1) => {
                return item1.purchased_office_template.purchased_office_services.map((item2, index2) => {
                    return item2.service_selected !== null || undefined ? 
                    <div key={index1}>
                        {item1.name}
                        <div key={index2}>
                        {item2.name} 
                        <div>
                            price : {item2.price}
                        </div>
                        </div>
                    <br></br>
                    </div>
                    :
                    <div>
                    
                    </div>
                })
                
            })}
            </div>
            <div>
            <h1>Additional services</h1>
            {this.state.all.map((item1) => {
                return item1.purchased_office_template.purchased_office_services.map(item2 => {
                     return item2.service_selected === null || undefined ?
                    <div key={item1.id}>
                        {item1.name}
                        <div key={item2.id}>
                        {item2.name}
                        </div>
                        <br></br>
                    </div>
                     :
                    <div>
                    
                    </div>
                    
                }
                )
                
            })}
            </div>
            </div>
        );
    }
}

export default Service