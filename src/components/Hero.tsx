import { type NextPage } from 'next';
import UserList from './UserList';
import {useLazyMethodName1Query } from '../store/variableApi';


const Hero: NextPage = () => {

	const [ trigger,
			{
			isLoading,
			isFetching,
			data,
			}
	] = useLazyMethodName1Query();

	const classButton = (condition: boolean | undefined, condition2: boolean | undefined) => {
		const errorClass = condition || condition2 
			? `bg-gray-600 hover:bg-gray-500 focus:ring-gray-300`
			: `bg-blue-600 hover:bg-blue-500 focus:ring-blue-300`;
		return `mx-auto block transform rounded-md px-4 py-2 text-white transition-colors duration-300 focus:outline-none focus:ring focus:ring-opacity-40 ${errorClass}`;
	};

	const onHancleClick = () => {
      	// eslint-disable-next-line
		trigger(null);
	}
	return (
	
		<header className='py-10'>
			<div className='container'>
				<button className={classButton(isLoading, isFetching)}
				disabled={isLoading || isFetching ? true : false}
				onClick={() => onHancleClick()}>
					Load Users
				</button>
			</div>
			<div className='mt-5 h-1 w-full bg-blue-500'></div>
			<div className='container'>
				<UserList isLoading={isLoading} isFetching={isFetching}  variableFrom={data} />
			</div>
		</header>

	);
};

export default Hero;