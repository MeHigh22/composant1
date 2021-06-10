import React from "react";
import Article from "../Articles/Articles";

class Body extends React.Component {
  nombreArticles = (nbrarticle) => {
      console.log(nbrarticle);
  }

  render() {
    return (
      <section className="body">
        <div className="container">
            <div>
              <Article
                titre="Les tartines"
                articleHandler={(x) => this.nombreArticles(x)}
              />
              <Article
                titre="Coding School"
                articleHandler={(x) => this.nombreArticles(x)}
              />
            </div>
        </div>
      </section>
    );
  }
}

export default Body;
