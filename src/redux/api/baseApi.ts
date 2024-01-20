import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setUser } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    credentials: "include",
    prepareHeaders: (Headers, { getState }) => {
        const token = (getState() as RootState).auth.token
        if (token) {
            Headers.set("authorization", `${token}`)
        }
        return Headers
    }
})

const baseQueryWithRefreshToken = async (args, api, extraOption) => {
    let result = await baseQuery(args, api, extraOption)
    if (result?.error?.status === 401) {
        //*Send refresh token
        console.log("send refres toekn")
        const res = await fetch(`http://localhost:5000/api/v1/auth/refresh-token`, { method: "POST", credentials: "include" })
        const data = await res.json()
        if (data?.data?.accessToken) {
            const user = (api.getState() as RootState).auth.user
            api.dispatch(setUser({ user, token: data.data.accessToken }))
            result = await baseQuery(args, api, extraOption)
        }
        else {
            api.dispatch(logout()) // if our access token is expired then user will be logout 
        }
        // for call again 
    }
    return result
}


export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQueryWithRefreshToken,
    endpoints: () => ({})
})