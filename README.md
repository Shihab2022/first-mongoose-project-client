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
