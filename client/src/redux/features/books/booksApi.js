
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import getBaseURL from '../../../utils/baseUrl';
const baseQuery = fetchBaseQuery({
    baseUrl: `${getBaseURL()}/api/books`,
    credentials:'include',
    prepareHeaders : (Headers) =>{
        const token = localStorage.getItem('token');
        if(token){
            Headers.set('Authorization',`Bearer ${token}`)
        }
        return Headers;
    }
})
 const booksApi = createApi({
    reducerPath: 'booksApi',
  baseQuery,
  tagTypes: ['Books'],
  endpoints: (builder) => ({
    fetchAllBooks : builder.query({
        // getting data no needed to mutate
        query : () => "/",
        providedTags: ["Books"]
    })
  }),
})

export const {useFetchAllBooksQuery} = booksApi;
export default booksApi;