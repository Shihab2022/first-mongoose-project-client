import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

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
    const result = await baseQuery(args, api, extraOption)
    if (result?.error?.status === 401) {
        //*Send refresh token
        const res = await fetch(`http://localhost:5000/api/v1/auth/refresh-token`, { method: "POST", credentials: "include" })

        const data = await res.json()
        const user = (api.getState() as RootState).auth.user
        api.dispatch({ user, token: data.data.accessToken })
    }
    return result
}


export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQueryWithRefreshToken,
    endpoints: () => ({})
})