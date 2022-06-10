// 1-st page
import React from "react";
export class MainPage extends React.Component {
    render() {
        return (
            <div className="row content-bar">
                <picture className="col pic">
                    <source srcSet="/images/50px.jpg" media="(max-width:50px)"/>
                    <source srcSet="/images/360px.JPG" media="(max-width: 360px)"/>
                    <source srcSet="/images/720px.JPG" media="(max-width: 1500px)"/>
                    <source srcSet="/images/1080px.jpg" media="(max-width: 1900px)"/>
                    <source srcSet="/images/imageFor1920widthscreen.jpg" media="(max-width: 2500px)"/>
                    <img src="/images/IMGnewsize1.JPG" alt='my photo'/>
                </picture>
            </div>
        )
    }
}