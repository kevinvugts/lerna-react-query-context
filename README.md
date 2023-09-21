# lerna-react-query-context
Demo environment to showcase issue with Lerna, Context and react-query


### Installation
run yarn install from the root folder and lerna will do the rest for you.

run yarn build and lerna will build all packages

run yarn lerna run dev --scope=app and it will start the Remix development server on http://localhost:3000 for you

### The problem
When uncommenting line 18 in the file app -> routes -> _index.tsx the app stops working. The reason for this is that @tanstack/react-query
somehow doesn't propagate or looses it context value when it's rendering the Button component. At least, that's as far as I can guess it.

In root.tsx the whole app and it's children is wrapped with the required QueryClientProvider as stated per [docs](https://tanstack.com/query/latest/docs/react/quick-start)

### Why is this happening?
Well, as you can guess already, I have no clue. 
When creating a separate package called "context" that contains the exact same setup in terms of (creating a context, a provider and make these available for consumers) 
the provider/context is working and getting shared. So to me that clearly looks like a @tanstack/react-query issue.

### Things I tried so far?
Making sure there is only 1 instance of @tanstack/react-query, react and so forth. 
Making use of the peerdependencies and local linking packages with "*" in package.json.

### What is the goal?
The Lerna package "components" should be able to access the context that is defined in the Lerna package "app" when it's being rendered within
the hierachy of the <QueryClientProvider />
