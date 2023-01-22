import { type NextPage } from 'next';
import imgMountain from '../../public/User/pexels-photo-417173.jpeg';
import Image from 'next/image';
import Modal from './Modal';
import { useState } from 'react';
import Link from 'next/link';

type TChildren = {
	name: string;
	email: string;
	userId: number;
};

const User: NextPage<TChildren> = ({ name, email, userId }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	
	return (
		<div className='w-full overflow-hidden rounded-xl bg-white p-4 shadow-xl'>
			<Image src={imgMountain} alt='mountain' className='mx-auto h-12 w-12 rounded-full object-cover ring ring-white' />
			<div className='mt-3 flex flex-col items-center justify-center gap-3'>
				<p className='text-black text-center'>{name.length > 20 ? `${name.slice(0, 20)}...` : name}</p>
				<p className='text-black text-center'>{email.length > 20 ? `${email.slice(0, 20)}...` : email}</p>
			</div>

			<div className='mt-3 flex items-center justify-between gap-3'>
				
				<button className='block transform rounded-md bg-blue-600 text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 '>
				<Link href={`/${userId}/posts`} className='block px-4 py-2' target='_blank'>
					Show Posts
				</Link>
				</button>
				<button className='block transform rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 transition-colors duration-300 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40' onClick={() => setIsOpen(() => true)}>
					Show Albums
				</button>
			</div>
				<Modal name={name} userId={userId} setIsOpen={setIsOpen} isOpen={isOpen}/>
		</div>
	);
};

export default User;
