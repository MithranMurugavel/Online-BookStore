import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseUrl from "../../utils/bookURL"
const orderApi = createApi({
    reducerPath:'orderApi',
    baseQuery:fetchBaseQuery({
        baseUrl:`${getBaseUrl()}/api/orders`,
        credentials:'include'
    }),
    tagTypes:['Orders'],
    endpoints:(builder) =>({
        createOrder : (builder.mutation)  ({

            query:(neworder) => ({
                url:"/",
                method:"POST",
                body:neworder,
                credentials:'include',
            })
        }),

        getOrderByEmail: (builder.query) ({
            query: (email) => ({
                url: `/email/${email}`
            }),
            providesTags: ['Orders']
        }) 

    })
})

export const {useCreateOrderMutation,useGetOrderByEmailQuery} = orderApi;
export default orderApi;