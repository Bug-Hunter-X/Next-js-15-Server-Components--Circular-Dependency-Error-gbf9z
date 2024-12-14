Refactor the code to remove the circular dependency.  Here's a possible solution, which uses a separate module for data fetching:

```javascript
// dataFetcher.js

export async function getData() {
  // ... some async data fetching logic ...
  return { message: 'Data fetched successfully!' };
}

// serverComponentA.js
import {getData} from './dataFetcher';

export default async function ServerComponentA() {
  const data = await getData();
  return <div>{data.message}</div>;
}

// serverComponentB.js
import {getData} from './dataFetcher';

export default async function ServerComponentB() {
  const data = await getData();
  return <div>{data.message}</div>;
}
```
By separating the data fetching into `dataFetcher.js`, we eliminate the circular dependency between `serverComponentA.js` and `serverComponentB.js`.