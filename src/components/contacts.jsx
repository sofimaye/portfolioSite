//3-rd page
import React from "react";
export class Contacts extends React.Component {
    render() {
        return (
            <div>
                <ul className="col-12 contacts">
                    <a href="mailto:sofi.mann99@gmail.com" target="_blank" rel="noopener norefferer">
                        <li><i className="far fa-envelope"></i>sofi.mann99@gmail.com</li>
                    </a>
                </ul>

                <div className="col-12 about">
                    <p> Hi, my name is Sofi. I have a work experience as a professional model abroad.
                        My measurements are 88-60-88, height 175 cm. I can arrange shooting for you.
                        Also I can write a website for your brand. Contact me:) </p>
                </div>
            </div>
        )
    }
}
