import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import ModalControls from './modules/ModalControls';
import $ from 'jquery';

new MobileMenu;
new RevealOnScroll($('.feature-item'), "85%");
new RevealOnScroll($('.testimonial'),"60%");
new StickyHeader;
new ModalControls;