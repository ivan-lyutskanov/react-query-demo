# Presentation's Notes

## Types of state

**Application State = Client State + Server State !**

**Server State** = Network state

**Client State** has the following representations:

- *Local State* - Component state (ex. useState, useRef, Props)
- *Global State* - State available across multiple components (The whole App or certain parts)
- *Router State* - State available across the whole App via URL params
- *Storage State* - State available across the whole App via Browser Storage API (Cookie, Session, Local Storage, IndexDB)

## Popular solutions for managing application state in React

Just to name a few:

React Context API (embeded in React), Redux, MobX, React Query, Zustand, Jotai ( and many other like Recoil, Rematch, Hookstate, StateX ... 🤯 ) 

You can write your own solution too 😅

## Redux vs. React Query

**Redux** is a design pattern (based on Flux) and also official library for React. As design pattern is not  biased only to React and has diffrent implementations for React and other frameworks. By nature Redux is not opinionated on how server state should be managed but most of it's implementations are. As a library is highly extendable via middleware system (Redux Toolkit, Redux Saga). It's primary focus is how to handle global state in efficiant and predictable way and not that much on the fetching data and caching although many of it's extensions covers that as well (RTK Query). Main issues with Redux are performance impact and dev experiance 🥲 . It's verbose, the setup process is slow and has high learning curve.

Beside all said modern Redux eco system is like a swiss army knife and is widely adopted as a single solution for managing application state (try to cut down a tree with a swiss army knife 🤠 )

Enough of Redux 🤕

Let's go back to the types of state and consider if we really need Redux in the first place. 

Almost every web/client application rely heavily on server communication. Most of those apps state is represented via network state. Typically **more** than 90% of all app state is in fact server state. This % ofcorse can vary from app to app.

This is where React Query steps in.

The entire purpose of this library is on data fetching and server state cache management.

Before jumping to the demo one **important** disclaimer:

React Query is **not** a 1:1 replacement of Redux and does not provide any solution for managing global state outside of server state context. Those typically less than 5-10% of the app state mentioned above must be addressed separately with additional solution!
