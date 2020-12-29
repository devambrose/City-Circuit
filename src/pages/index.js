import React,{Component} from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
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
        const current=this;

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
        const containers=[];
        for(let i=0;i<this.state.data.length;i++){
            const current=this.state.data[i];
            containers.push(
                <div key={i} className={'app-left app-full'}>
                    <h3>{this.state.data[i].id}</h3>
                    <img src={this.state.data[i].image.small} />
                    <small >$ {current.market_data.current_price.usd}</small>
                </div>
            );
        }
        console.log(this.state.data);
        return (
            <div title={'City Circuit'}>
                <SEO title="Main CryptoTrade" />
                {containers}
                Better Tradde

            </div>
        )
    }
}

export default IndexPage;