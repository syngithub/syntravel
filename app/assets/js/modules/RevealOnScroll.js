import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import $ from 'jquery';

class RevealOnScroll{
    constructor(targetCollection, vOffset){
        this.itemsToReveal = targetCollection;
        this.vOffset = vOffset;
        this.hideInitially();
        this.createWaypoints();
    }

    hideInitially(){
        this.itemsToReveal.addClass("reveal-item");
    }

    createWaypoints(){
        var that = this;
        this.itemsToReveal.each(function(){
            var currentItem = this;
            new Waypoint({
                element: currentItem,
                handler: function(){
                    $(currentItem).addClass("reveal-item--is-visible")
                },
                offset: that.vOffset                
            });
        });
    }
}

export default RevealOnScroll;