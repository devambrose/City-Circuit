import React,{Component} from "react"

import Layout from "../components/Containers/Layout/Layout"
import SEO from "../components/seo"
import {Loader,Coin} from "../templates/Template"
import axios from "axios";

class IndexPage extends Component{
    constructor(props) {
        super(props);

        this.state={
            coins:['ethereum','bitcoin'],
            data:[]
        }
    }
    componentDidMount(){

        for(let i=0;i<this.state.coins.length;i++){

            let state_data=this.state.data;
            axios('https://api.coingecko.com/api/v3/coins/'+this.state.coins[i]+'?localization=false&market_data=true&community_data=true&developer_data=true&sparkline=true').then(results=>{
                state_data.push({id:this.state.coins[i],...results.data });
            });
            this.setState({data: state_data});
        }


    }
    componentDidUpdate(prev,current){
        console.log("Previous state",prev);
        console.log("current",current);
    }

    render(){
        console.log(this.state.data);
        return (
            <Layout title={'City Circuit'}>
                <SEO title="Main CryptoTrade" />
                <div className='coin-container'>
                {
                    [
                        {name:"Bitcoin",icon:'fab fa-bitcoin'},
                        {name:'Etherium',icon:'fab fa-ethereum'}
                    ].map(coin=><Coin {...coin}/>)
                }
                </div>
               

                <Loader/>
            </Layout>
        )
    }
}

export default IndexPage;