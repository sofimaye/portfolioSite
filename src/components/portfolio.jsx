// 2-nd page
import React from "react";

export class Portfolio extends React.Component {
    componentDidMount () {
        const scriptGallery = document.createElement('script');
        scriptGallery.src = "js/fslightbox.js";
        scriptGallery.async = true;
        document.body.appendChild(scriptGallery);


        const galleryImages = ["images/IMGnewsize.jpg", "images/IMGnewsize16.jpg",
            "images/IMGnewsize2.jpg", "images/IMGnewsize3.jpg", "images/IMGnewsize4.jpg",
            "images/IMGnewsize5.jpg", "images/IMGnewsize6.jpg" , "images/IMGnewsize7.jpg",
            "images/IMGnewsize8.jpg"]
        const grid = document.getElementById("grid")
        for (let image of galleryImages) {
            const gridItem = document.createElement("div");
            gridItem.className = "grid-item";

            const aLink = document.createElement('a');
            aLink.setAttribute('data-fslightbox', 'gallery');
            aLink.href = image;

            const img = document.createElement('img');
            img.src = image;

            aLink.appendChild(img)
            gridItem.appendChild(aLink)
            grid.appendChild(gridItem)
        }

    }

    render() {
        return (
            <div id="grid" className="grid">
            </div>
        )
    }
}
