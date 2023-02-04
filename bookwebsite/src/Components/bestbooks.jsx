import { Swiper, SwiperSlide } from 'swiper/react';
import {api} from "../api/"
import {useEffect,useState} from "react"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import axios from "../api/axiosAuth"
import { Autoplay} from "swiper";
import {Link} from 'react-router-dom';

export const Books=(props)=>{
	
	const [books,setBooks]=useState([]);
	useEffect(()=>{

		const d = async ()=>{
			const data= await axios.post(`${api}/api/user/samebooks`,{
				genre:props.genre?props.genre:null
			});
		if( data.data.status){
			console.log(data);
			setBooks(data.data);
		}			
		}
		d();

	},[])
	
	return(

<section className="arrivals" id="arrivals">

    <h1 className="heading"> <span>{props.title}</span> </h1>

    <div className="swiper arrivals-slider">

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

		{
	books.map(
		(book)=>{
return (
            <SwiperSlide><div className="swiper-slide box">
                <div className="image">
                    <img src={book.image}alt=""/>
                </div>
                <div className="content">
                    <h3>{book.nomLivre}</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <div styles="font-size: medium;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;color: rgb(72, 72, 204);">
                        <Link to={`/${book.id}`}>Read More</Link>
                    </div>                
                </div>
            </div></SwiperSlide>

)
		}
)
}
    </Swiper>
    </div>

</section>

	)
}
