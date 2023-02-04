import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay} from "swiper";

export const Main =()=>{
// var swiper = new Swiper(".books-slider", {
//   loop: true,
//   centeredSlides: true,
//   autoplay: {
//     delay: 9500,
//     disableOnInteraction: false,
//   },
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     1024: {
//       slidesPerView: 3,
//     },
//   },
// });

	return (
<section className="home" id="home">

    <div className="row">

        <div className="content">
            <h3>Welcome</h3>
            <p>To our book website! Here you will find a wide selection of books in various genres including fiction, non-fiction, mystery, romance, and more. Our easy-to-use website allows you to browse and purchase books with just a few clicks.</p>
        </div>
        <div className="swiper books-slider">
 <Swiper
		className='swiper-wrapper'
		autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
		loop={true}
	 modules={{Autoplay}}
		breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          }
        }}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >

		{

	// <img src="image/book-1.png" alt=""></img>


		}         
		<SwiperSlide><a href="#" className="swiper-slide"><img src="image/book-1.png" alt=""></img></a>
</SwiperSlide>
                <SwiperSlide><a href="#" className="swiper-slide"><img src="image/book-2.png" alt=""></img></a></SwiperSlide>
             <SwiperSlide>   <a href="#" className="swiper-slide"><img src="image/book-3.png" alt=""></img></a></SwiperSlide>
               <SwiperSlide> <a href="#" className="swiper-slide"><img src="image/book-4.png" alt=""></img></a></SwiperSlide>
              <SwiperSlide>  <a href="#" className="swiper-slide"><img src="image/book-5.png" alt=""></img></a></SwiperSlide>
              <SwiperSlide>  <a href="#" className="swiper-slide"><img src="image/book-6.png" alt=""></img></a></SwiperSlide>
    </Swiper>
		{
		// <div className="swiper books-slider">
        //     <div className="swiper-wrapper">
        //         <a href="#" className="swiper-slide"><img src="image/book-1.png" alt=""></img></a>
        //         <a href="#" className="swiper-slide"><img src="image/book-2.png" alt=""></img></a>
        //         <a href="#" className="swiper-slide"><img src="image/book-3.png" alt=""></img></a>
        //         <a href="#" className="swiper-slide"><img src="image/book-4.png" alt=""></img></a>
        //         <a href="#" className="swiper-slide"><img src="image/book-5.png" alt=""></img></a>
        //         <a href="#" className="swiper-slide"><img src="image/book-6.png" alt=""></img></a>
        //     </div>
			//     
			}
            <img src="image/stand.png" className="stand" alt=""></img>
        </div>

    </div>

</section>
	)}
