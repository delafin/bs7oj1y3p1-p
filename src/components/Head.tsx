
import Head from 'next/head';
import { type NextPage } from 'next';

type TChildren = {
    children?: React.ReactNode;
}

const HeadMetaTags: NextPage<TChildren> = ({children}) => {
    
    return (
            < Head >
                {/* <!-- IF favicon.html not include --> */}
                <link rel='icon' href='../../public/favicon.ico'/>
                
                {/* <!-- Use Only and Always in `app.tsx` --> */}
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                
                <title>Proxy Band</title>
                
                <meta name='title' content='Proxy Band test'/>
                <meta name='description' content='Proxy Band test task with Next.js, React and Typescript'/>
                
                {/* <!-- Open Graph / Facebook --> */}
                <meta property='og:type' content='website'/>
                <meta property='og:url' content=''/>
                <meta property='og:title' content='Proxy Band test'/>
                <meta property='og:description' content='Proxy Band test task with Next.js, React and Typescript'/>
                <meta property='og:image' content='../../public/meta.jpg'/>
                
                {/* <!-- Twitter --> */}
                <meta property='twitter:card' content='summary_large_image'/>
                <meta property='twitter:url' content=''/>
                <meta property='twitter:title' content='Proxy Band test'/>
                <meta property='twitter:description' content='Proxy Band test task with Next.js, React and Typescript'/>
                <meta property='twitter:image' content='../../public/meta.jpg'/>
            {children}
            </ Head >
    );
}

export default HeadMetaTags;




