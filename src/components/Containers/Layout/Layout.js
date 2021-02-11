import React from "react"
import "./layout.css"
import "./fnt/css/all.css"
class LayoutManager extends React.Component{

    render(){
        return (
            <section className='app-left app-full'>
                {this.props.children}
            </section>
        )
    }
}

export default LayoutManager;