import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// SSR
import { HYDRATE } from 'next-redux-wrapper'

export const variableApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    tagTypes:['variableTag'],
    // SSR
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
        //   eslint-disable-next-line
          return action.payload[reducerPath]
        }
      },
    endpoints: (builder) => ({
        methodName1: builder.query<TUser[],null>({
            query: () => '/users',
            providesTags:['variableTag'],
            }),
        methodName2: builder.query<TPost[],number|string>({
            query: (userId:number|string) => `/posts/?userId=${userId}`,
            providesTags:['variableTag'],
            }),
        methodName3: builder.query<TAlbum[],number>({
            query: (userId:number) => `/albums/?userId=${userId}`,
            providesTags:['variableTag'],
            }),
        methodName4: builder.query<TUser[],number|string>({
            query: (userId:number|string) => `/users?id=${userId}`,
            providesTags:['variableTag'],
            }),
        // methodName2: builder.mutation({
        //     query: (variableArg) => ({
        //         url: '',
        //         method: 'POST', // POST,GET,PUT,PATCH,DELETE,TRACE,OPTIONS,HEAD,CONNECT
        //         body: variableArg,
        //     }),
        //     invalidatesTags:['variableTag'],
        // })
    })
});

//`use` + `MethodName` + `Query` or `Mutation`
export const { useMethodName1Query,useMethodName2Query, useMethodName3Query,useMethodName4Query, useLazyMethodName1Query, util: { getRunningQueriesThunk } } = variableApi;
// SSR
export const { methodName2, methodName4 } = variableApi.endpoints;