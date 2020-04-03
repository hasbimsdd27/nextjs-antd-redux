import React, { useEffect } from "react";
import { withRedux } from "../lib/redux";
import Counter from "../_components/counter";

import useCounter from "../_actions/Counter";

const IndexPage = () => {
    const { increment } = useCounter();
    useEffect(() => {
        increment();
    }, []);
    return <Counter />;
};

export default withRedux(IndexPage);
