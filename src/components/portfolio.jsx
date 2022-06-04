// 2-nd page
import React, {Component} from 'react';
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

const MyGallery = () => (
    <Gallery>
        <Item
            original="images/IMGnewsize.jpg"
            thumbnail="images/IMGnewsize.jpg"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="/images/IMGnewsize.jpg" />
            )}
        </Item>
        <Item
            original="images/IMGnewsize16.jpg"
            thumbnail="images/IMGnewsize16.jpg"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="/images/IMGnewsize16.jpg" />
            )}
        </Item>
    </Gallery>
)

class GridItem extends Component {
    render() {
        return(
            <div id="grid-item" className="grid-item">
                <a data-fslightbox='gallery'>
                    <img alt="image" src={this.props.src}/>
                </a>
            </div>
        )
    }
}


const images = ["images/IMGnewsize.jpg", "images/IMGnewsize16.jpg",
    "images/IMGnewsize2.jpg", "images/IMGnewsize3.jpg", "images/IMGnewsize4.jpg",
    "images/IMGnewsize5.jpg", "images/IMGnewsize6.jpg", "images/IMGnewsize7.jpg",
    "images/IMGnewsize8.jpg"]

export class Portfolio extends Component {
    render(){
        return (
            <div id="grid" className="grid">
                {/*{images.map((image, i) => (<GridItem src={image} key={i}/>))}*/}
                <MyGallery/>
            </div>
        )
    }
}
