import { type NextPage } from 'next';

type TChildren = {
	content?: string;
	title:string
};

const Slide: NextPage<TChildren> = ({ content,title }) => {
	return (
		<div className='mt-3 rounded-md border-[2px] bg-white'>
			<p className='text-center text-black font-semibold'>{title}</p>
			{content ? <p className='text-center text-black mt-3'>{content}</p> : null}
		</div>
	);
};

export default Slide;
