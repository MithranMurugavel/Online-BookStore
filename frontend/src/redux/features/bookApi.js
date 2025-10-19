import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import getBaseUrl from '../../utils/bookURL'

const baseQuery =fetchBaseQuery(
    {
        baseUrl:`${getBaseUrl()}/api/books`,
        credentials:'include',
        prepareHeaders:(Headers) =>{
        const token =localStrorage.getItem('token');

        if(token){
            Headers.set('Authorization',`Bearer ${token}`);
        }
        return Headers;
        }
    }
)

const booksApi = createApi({
    reducerPath:'bookApi',
    baseQuery,
    endpoints:(builder) =>({
        fetchAllBooks:builder.query({
            query:() =>"/",
            providesTags:["Books"]
        })
    })
})

export const {useFetchAllBooksQuery} =booksApi
export default booksApi
