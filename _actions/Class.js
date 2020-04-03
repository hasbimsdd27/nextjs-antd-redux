import { API } from "../config/Api";
import { useDispatch } from "react-redux";

const Classes = () => {
    const dispatch = useDispatch();
    const GetClasses = async (params = {}) => {
        const config = {
            method: "get",
            url: "http://localhost:5000/api/v1/classes",
            params: {
                results: 10,
                ...params
            }
        };
        await API(config).then(data => {
            dispatch({
                type: "GET_CLASSES",
                data
            });
        });
    };
    const GetClassAllSelect = async () => {
        const config = {
            method: "get",
            url: "http://localhost:5000/api/v1/classesSelect"
        };
        await API(config).then(data => {
            dispatch({
                type: "GET_CLASSES_SELECT",
                data
            });
        });
    };
    const AddClass = async data => {
        const config = {
            method: "post",
            url: "http://localhost:5000/api/v1/class",
            data
        };
        await API(config).then(data => {
            dispatch({
                type: "ADD_CLASS",
                data
            });
        });
    };
    const GetDetailsClass = async id => {
        const config = {
            method: "get",
            url: `http://localhost:5000/api/v1/class/${id}`
        };
        await API(config).then(data => {
            dispatch({
                type: "GET_DETAILS_CLASS",
                data
            });
        });
    };
    return {
        GetClasses,
        GetClassAllSelect,
        AddClass,
        GetDetailsClass
    };
};

export default Classes;
