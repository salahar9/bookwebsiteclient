import 'swiper/css';
import Rating from '@mui/material/Rating';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import axios from "../api/axiosAuth"
import { Autoplay} from "swiper";
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import {api} from "../api/"
import {useEffect,useState} from "react"
export const Reviews = ({reviews}) => {
	if(!reviews){ reviews=
[  {    "commentaire": "Great service, would recommend to anyone!",    "rating": 4.5,    "user": {      "lname": "Smith",      "fname": "John"    }  },  {    "commentaire": "The service was okay, but could have been better.",    "rating": 3,    "user": {      "lname": "Johnson",      "fname": "Jane"    }  },  {    "commentaire": "Fantastic experience, exceeded all expectations!",    "rating": 5,    "user": {      "lname": "Brown",      "fname": "Michael"    }  },  {    "commentaire": "I was disappointed with the service I received.",    "rating": 2,    "user": {      "lname": "Davis",      "fname": "Emily"    }  },  {    "commentaire": "The service was above average, would use again.",    "rating": 4,    "user": {      "lname": "Wilson",      "fname": "Jennifer"    }  }]

	}
	// const [reviews,setReviews]=useState([]);
	// useEffect(()=>{
	// 	// const ids=[]
	// 	// for (var key in props.genre) {
 			// // ids.push(props.genre[key].id)
	// 	// }
	// 	// console.log('genre',props.genre,ids);
	// 	const d = async ()=>{
	// 		const data= await axios.post(`${api}/api/user/reviews`,{
	// 			id:ids
	// 		});
	// 	if( data.data.status){
	// 		console.log("data",data);
	// 		setBooks(data.data.books);
	// 	}			
	// 	}
	// 	d();

	// },[])
	
  
  return (
    <section className="reviews" id="reviews">
      <h1 className="heading">
        <span>Client's reviews</span>
      </h1>

      <div className="swiper reviews-slider">
 <Swiper
		className='swiper-wrapper'
		autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
		loop={true}
	 modules={{Autoplay}}
		// breakpoints={{
          // 0: {
            // slidesPerView: 1,
          // },
          // 768: {
            // slidesPerView: 2,
          // },
          // 1024: {
            // slidesPerView: 3,
          // }
        // }}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >

		{

	// <img src="image/book-1.png" alt=""></img>


		}         

		{
	reviews.map(
		(review)=>{
return (
            <SwiperSlide>




          <div className="swiper-slide box">
            <img src="/image/default.png" alt="" />
            <h3> {review.user.lname} {review.user.fname}</h3>
            <p>
	{review.commentaire}
            </p>
	<div>
	<Rating value ={review.rating} precision={0.1} name="Review" readOnly />
	</div>
          </div>

  </SwiperSlide>

)
		}
)
}
    </Swiper>
      </div>
    </section>
  );
};
