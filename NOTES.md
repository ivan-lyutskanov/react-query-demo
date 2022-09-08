# Presentation's Notes

## Types of state

**Application State = Client State + Server State !**

**Server State** = network state/cache

**Client State** has the following representations:

- *Local State* - Component state (ex. useState, useRef, Props)
- *"Global State"* - State available across multiple components (The whole App or certain parts)
- *Router State* - State available across the whole App via URL params
- *Storage State* - State available across the whole App via Browser Storage API (Cookie, Session, Local Storage, IndexDB)

## Popular solutions for managing application state in React

Just to name a few:

React Context API (embeded in React), Redux, MobX, React Query, Zustand (followed by quite too many more such as Jotai, Recoil, Rematch, Hookstate ... 🤯 ) 

You can write your own solution too 😅

## Redux vs. React Query

**Redux** is a design pattern (based on Flux) and also official library for React. As design pattern is not  biased only to React and has diffrent implementations for React and other frameworks. By nature Redux is not opinionated on how server state should be managed but most of it's implementations/addons are. As a library is highly extendable via plugins/middleware system (Redux Toolkit, Redux Saga). It's primary focus is how to handle global state in efficiant and predictable way (+ great dev tooling) and not that much on the fetching data and caching although many of it's extensions covers pretty decent that as well (RTK Query). Main issues with Redux are performance impact (on large scale) and dev experiance 🥲 . It's verbose, the setup process is slow and has high learning curve.

Beside all said modern Redux eco system is like a swiss army knife and is widely adopted as a single solution for managing application state (try to cut down a tree with a swiss army knife 🤠 )

Enough of Redux 🤕

Let's go back to the types of state and consider if we really need Redux in the first place. 

Almost every web/client application rely heavily on server communication. Most of those apps state is represented via network state. Typically **more** than 90% of all app state is actually server state. This % ofcorse can vary from app to app. With such impact is much more important how we handle and manage our server state effectively beside rest of the state (global)

This is where React Query steps in.

The entire purpose of this small library (and main topic of our presentation) is on data fetching and server state cache management.

Lets jump to the demo. But before that an **important** disclaimer:

React Query is **not** a standalone 1:1 replacement of Redux and does not provide any solution for managing global state outside of server state context. Those typically less than 5-10% of the app state mentioned above must be addressed separately with another solution!
