import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader{
    constructor(){
        this.SiteHeader = $('.site-header');
        this.headerTriggerElement = $('.large-hero__title');
        this.pageSections = $('.page-section, .large-hero');
        this.headerLinks = $('.primary-nav a');
        this.createHeaderWaypoint();
        this.createPageSectionWaypoints();
        this.addSmoothScrolling();
    }

    createHeaderWaypoint(){
        var that = this;

        new Waypoint({
            element: that.headerTriggerElement[0],
            handler: function(direction){
                if ( direction == "down" ){
                    that.SiteHeader.addClass("site-header--dark");
                } else {
                    that.SiteHeader.removeClass("site-header--dark");
                }
            }
        });
    }

    addSmoothScrolling(){
        this.headerLinks.smoothScroll();

    }

    createPageSectionWaypoints(){
        var that = this;
        this.pageSections.each(function(){
            var currentSection = this;
            new Waypoint({
                element: currentSection,
                handler: function(direction){
                    if ( direction == "down"){
                        var matchingHeaderLink = currentSection.getAttribute("data-matching-link");
                        that.headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");
                    }
                },
                offset: "18%"
            });
            new Waypoint({
                element: currentSection,
                handler: function(direction){
                    if ( direction == "up"){
                        var matchingHeaderLink = currentSection.getAttribute("data-matching-link");
                        that.headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");
                    }
                },
                offset: "-40%"
            });
        });
    }

}

export default StickyHeader;