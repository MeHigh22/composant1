import React from "react"
import Article from "../Articles/Articles"



class Body extends React.Component {
    nbArticles = 2;
    
    render(){
        return(
            <section className="body">
                <div className="container">
                    {
                        this.nbArticles >= 2 &&
                        <div>
                            <Article titre="Les tartines"/>
                            <Article titre="Coding School"/>
                        </div>
                    }
                    {
                        this.nbArticles < 2 &&
                        <h1>Il n'y a pas d'articles</h1>
                    }
                </div>
            </section>
        )
    }
}

export default Body