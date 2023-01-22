import { type NextPage } from 'next';
import User from './User';
import { useAutoAnimate } from '@formkit/auto-animate/react';
type TChildren = {
	variableFrom: TUser[] | undefined;
	isLoading: boolean;
	isFetching: boolean;
};

const UserList: NextPage<TChildren> = ({variableFrom, isLoading, isFetching}) => {

	const [parent] = useAutoAnimate<HTMLDivElement>(/* optional config */)

	return (
			<div className='grid grid-cols-1 gap-5 py-8 sm:grid-cols-2 2md:grid-cols-3 lg:grid-cols-4' ref={parent}style={{display: variableFrom  ? 'grid' : 'block'}}>
				{isLoading || isFetching ? <p className='text-black text-center w-full p-10 mx-auto'>Loading...</p> :
				variableFrom ? variableFrom.map((item:TUser) => {
					return (
						<User name={item.name} email={item.email} userId={item.id} key={item.id} />
					);
					}) : <p className='text-black text-center w-full p-10 mx-auto'>Please, load users</p>
				}
			</div>
	);
};

export default UserList;
