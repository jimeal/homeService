import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const swiperMethod = {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }
};
const swiperMethod2 = {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    }
};

const modules = [
  Navigation, 
  Pagination,
  Autoplay
];


export { swiperMethod, swiperMethod2, modules }



