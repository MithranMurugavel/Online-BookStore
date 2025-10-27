import { createApi } from "@reduxjs/toolkit/query";

const orderApi =createApi({
    reducerPath:'orderApi',
    baseQuery:fetchBaseQuery({
        baseUrl:`${getBaseUrl()}/api/orders`,
        credentials:'include'
    }),
    tagTypes:['Orders'],
    endPoints:(builder) =>({
        createOrder : (builder.mutation)  ({

            query:(neworder) => ({
                url:"/",
                method:"POST",
                body:neworder,
                credentials:'include',
            })
        })
    })
})

export const {useCreateOrderMutation} = orderApi;
export default orderApi;