# For access cookie information in front end from backend

_First we add this part credentials: "include" in redux base query_

```
   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1", credentials: "include" }),
```

_Then we have to change in backend cors credentials: true_

```
app.use(cors({ origin: ['http://localhost:5173'], credentials: true }));
```

# For decode token we use this package

# [jwt-decode](https://www.npmjs.com/package/jwt-decode)

```
npm i jwt-decode
```

# For set token in our local storage we use this package

# [redux-persist](https://www.npmjs.com/package/redux-persist)

```
npm i redux-persist
```

_If we use redux-persist then it gives an warning to solve this warning we can see this documentation_
[use-with-redux-persist](https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist)

_Only we can use this code on our redux middleware_

```
serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
```

# For toast here use sonner

[sonner](https://sonner.emilkowal.ski/getting-started)

```
npm i sonner
```

# for send token form front end to backend we use this

```
   prepareHeaders: (Headers, { getState }) => {
        const token = (getState() as RootState).auth.token
        if (token) {
            Headers.set("authorization", `${token}`)
        }
        return Headers
    }
```

_This is provide redux we can see this documentation_

[prepareheaders](https://redux-toolkit.js.org/rtk-query/api/fetchBaseQuery#prepareheaders)
