import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { type AppType } from 'next/dist/shared/lib/utils';
import Head from 'next/head';
import {variableApi} from '../store/variableApi'
import '../styles/globals.css';

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<>
		
			<ApiProvider api={variableApi}>
				<Head>
					<title>Proxy Band</title>
				</Head>
				<Component {...pageProps} />
			</ApiProvider>
		</>
	);
};

export default MyApp;
