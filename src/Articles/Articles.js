import React, { Fragment } from"react"
import tartine from "../toast.jpg"



const articles = () => {
    return (
      <Fragment>
        <div className="article">
          <div className="d-left">
            <img src={tartine} className="img-fluid"/>
          </div>

          <div className="d-right">
            <h1>Mon premier article</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quidem iure sit, magni tempora maxime, cupiditate soluta voluptatem fuga impedit velit aliquid harum neque recusandae! Ipsa non aperiam ipsum possimus dolor, repellat officia vero laudantium mollitia illo quidem beatae minima molestias magnam ipsam, a sunt. Debitis aperiam veniam dolores vitae?
            </p>
          </div>
        </div>
      </Fragment>
    );
}

export default articles