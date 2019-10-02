import React from 'react';
import {
    Environment,
    IsomorphicApp,
    Route,
    WebApp,
    withIsomorphicState
} from "infrastructure-components";

export default (
    <IsomorphicApp
        stackName = "isomorphic-state"
        buildPath = 'build'
        assetsPath = 'assets'
        region='eu-west-1'>

        <Environment name="dev" />

        <WebApp
            id="main"
            path="*"
            method="GET">

            <Route
                path='/'
                name='Isomorphic-State'
                render={withIsomorphicState((props)=>{
                    const [count, setCount] = props.useIsomorphicState("counter", 0);

                    // rerender 5 times ... but only at the server-side
                    console.log("current count: ", count);
                    if (count < 5) {
                        setCount(count + 1);
                    }


                    return <div>
                        <p>You clicked {count} times</p>
                        <button onClick={() => setCount(count + 1)}>
                        Click me
                        </button>
                    </div>
                })}
            />
        </WebApp>
    </IsomorphicApp>
);