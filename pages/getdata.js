import React, { useEffect } from "react";
import { withRedux } from "../lib/redux";
import { useSelector } from "react-redux";
import Classes from "../_actions/Class";
const getdata = () => {
    const { data } = useSelector(state => state.classes.addClass);
    console.log(data.results);
    const { GetClasses } = Classes();
    useEffect(() => {
        GetClasses();
    }, []);
    return <h1>Halo</h1>;
};

export default withRedux(getdata);
