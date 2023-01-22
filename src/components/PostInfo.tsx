import { type NextPage } from 'next';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, A11y} from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/a11y';
import { useRef } from 'react';
import Slide from './Slide';

type TChildren = {
	isLoading: boolean;
	isFetching: boolean;
	variableFrom: TPost[];
	userName: string | undefined;
};

const PostInfo: NextPage<TChildren> = ({variableFrom,isFetching,isLoading, userName}) => {

	const nextButton = useRef<HTMLButtonElement | null>(null);
	const prevButton = useRef<HTMLButtonElement | null>(null);
	
	return (
		<section className='mt-10'>

			<div className='container'>
    			<div className='block max-w-lg 2md:w-full rounded-xl bg-white p-4 shadow-xl mx-auto -translate-1/2'>
				<p className='text-black text-center w-full p-1 mx-auto'>{userName}</p>
			<Swiper
				modules={[ Navigation, Autoplay, A11y]}

				navigation={{
					prevEl: prevButton?.current,
					nextEl: nextButton?.current
				}}
				onInit={(swiper) => {
					if (typeof swiper.params.navigation !== 'boolean' && swiper.params.navigation) {
						swiper.params.navigation.prevEl = prevButton?.current;
						swiper.params.navigation.nextEl = nextButton?.current;
						swiper.navigation.init();
						swiper.navigation.update();
					}
					}}
				grabCursor={true}
				centeredSlides={true}
				observer = {true}
				keyboard={{
					enabled: true,
					onlyInViewport: false,
				}}
				speed={1000}
				autoplay={{
					delay: 1000,
					disableOnInteraction: false,
				}}
				spaceBetween={10}
				slidesPerView={1}
				className='mt-10'
			>
				{isLoading || isFetching ? <p className='text-black text-center w-full p-10 mx-auto'>Loading...</p> :
				variableFrom ? variableFrom.map((item) => {
					return (
						<SwiperSlide className='' key={item.id}>
							<Slide content={item.body}  title={item.title}/>
						</SwiperSlide>
					);
					}) : <p className='text-black text-center w-full p-10 mx-auto'>Please, select user</p>
				}
			</Swiper>
			<div className='mt-3 flex items-center justify-center gap-3'>
						<button className='block transform rounded-md bg-blue-600 px-3 py-1 text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40' ref={prevButton} >
							Prev
						</button>
						<button className='block transform rounded-md bg-blue-600 px-3 py-1 text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40' ref={nextButton} >
							Next
						</button>
					</div>

     	</div>
			</div>
		</section>
	);
};

export default PostInfo;
