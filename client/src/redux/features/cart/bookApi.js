import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getBaseUrl from '../../../utils/baseUrl';
// Define a service using a base URL and expected endpoints'

const baseQuery = fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/books`,
    credentials:'include',
    prepareHeaders:(Headers) =>{
        const token = localStorage.getItem('token');
        if(token){
            Headers.set('Authorization',`Bearer ${token}`);
        }
        return Headers;
    }
})



 const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery,
    tagTypes:['Books'], 
    endpoints:(builder) =>({
        fetchAllBooks: builder.query({
            query:() => "/",
            providedTags:["Books"]
        })
    })
  })
  
  export const { useFetchAllBooksQuery } = booksApi
  export default booksApi;