import { type NextPage } from 'next';
import Modal from '../../../components/Modal';
import Link from 'next/link';
import PostInfo from '../../../components/PostInfo';
// import { type GetServerSideProps } from 'next';
import { getRunningQueriesThunk, methodName2, methodName4, useMethodName4Query, useMethodName2Query } from '../../../store/variableApi';
// import { AppStore, wrapper } from '../../../store/srote';
// import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useRouter } from 'next/router';


type TChildren = {
	data: TPost[]
	name:string;
	isLoading:boolean;
	isFetching:boolean;
};

const Posts: NextPage<TChildren> = () => {
	const router = useRouter();	
	const userId = router.query.user
	const {
		data: user, 
	} = useMethodName4Query(typeof userId === 'string' ? userId : skipToken);
	const {
		data, 
		isFetching,
		isLoading,
	} = useMethodName2Query(typeof userId === 'string' ? userId : skipToken);

	return (

		<header className='py-10'>
			<div className='container'>
				<Link href={`/`} className='block'>
					<button className='mx-auto block transform rounded-md bg-blue-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40'>
						Back to main page
					</button>
				</Link>
			</div>
				<div className='block mt-10 h-1 w-full bg-blue-500'></div>
				{data && user && <PostInfo variableFrom={data} isFetching={isFetching} isLoading={isLoading} userName={user[0]?.name}/>
				}
		</header>
	);
};
// SSR
// export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
// 	(store:AppStore) => async (context) => {
// 		let Posts,User;
// 		const user = context?.params?.user;
// 		if (typeof user === "string") {
// 			Posts = await store.dispatch(methodName2.initiate(user));
// 			User = await store.dispatch(methodName4.initiate(user));
// 		  }
// 		await Promise.all(store.dispatch(getRunningQueriesThunk()));
		
// 	return {
// 		props: {
// 			Posts, User
// 		},
// 	  };
// 	}
// );

export default Posts;
