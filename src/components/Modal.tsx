import { type NextPage } from 'next';
import Slide from './Slide';
import { type Dispatch, type SetStateAction, useEffect, useState, useRef } from 'react';
import { useMethodName3Query } from '../store/variableApi';
import useOutsideFunction from '../hooks/useOutsideFunction';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, A11y} from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/a11y';

import ReactDOM from 'react-dom';


type TChildren = {
	name: string;
	userId: number;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	isOpen: boolean;
};
type PChildren = {
	children?: React.ReactNode;
};


const Modal: NextPage<TChildren> = ({ name, userId, setIsOpen, isOpen }) => {


	const {
		data: variableFrom = [],
		isFetching,
		isLoading,
	} = useMethodName3Query(userId);

	
	const modalMain = useRef<HTMLDivElement | null>(null);
	const onClose = () => {
		setIsOpen(() => false)
	}
	useOutsideFunction(modalMain,onClose)

	const [isClient, setIsClient] = useState(false);
	useEffect(() => {
		setIsClient(() => true)
	}, []);
	
	useEffect(() => {
		document.body.classList.add("overflow-y-hidden")
		if(!isOpen){
			return 	document.body.classList.remove("overflow-y-hidden")
		}
	}, [isOpen]);

	const nextButton = useRef<HTMLButtonElement | null>(null);
	const prevButton = useRef<HTMLButtonElement | null>(null);

	if(!isClient) {
		return null;
	}
	if(!isOpen) {
		return null
	}

	return (
		<Portal>
			<div className='bg-black/50 flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 ' >
				<div className='max-w-lg 2md:w-full overflow-hidden rounded-xl bg-white p-4 shadow-xl top-1/2 left-1/2 -translate-1/2' ref={modalMain}>
					<div className='mt-3 flex flex-col items-center justify-center gap-3'>
						<p className='text-center text-black'>{name.length > 20 ? `${name.slice(0, 20)}...` : name}</p>
					</div>

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
					>
						{isLoading || isFetching ? <p className='text-black text-center w-full p-10 mx-auto'>Loading...</p> :
						variableFrom ? variableFrom.map((item) => {
							return (
								<SwiperSlide className='' key={item.id}>
									<Slide title={item.title}/>
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
					<div className='mt-3 w-full'>
						<button className=' mx-auto block transform rounded-md bg-blue-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40' onClick={() => setIsOpen(() => false)}>
							Close Modal
						</button>
					</div>
				</div>
			</div>
		</Portal>
	);
};

const Portal: React.FC<PChildren> = ({children}) => {
	// const parent = document.createElement('div')
	// document.body.append(parent)
	const parent = document.body
	document.body.classList.add("relative")
	return ReactDOM.createPortal(children, parent)
}

export default Modal;
