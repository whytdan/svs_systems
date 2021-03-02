import axios from 'axios';
import React, { useReducer } from 'react';
import { API } from '../../constants';


const INIT_STATE = {
    posts: null,
    projects: null,
    projectDetail: null,
	postDetail: null
}

const reducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case "GET_PROJECTS":
			return {
				...state,
				projects: action.payload
			}
		case "GET_POSTS":
			return {
				...state,
				posts: action.payload
			}
        case "GET_PROJECT":
            return {
                ...state,
                projectDetail: action.payload
            }
		case "GET_POST":
			return {
				...state,
				postDetail: action.payload
			}
		default:
			return state;
	}
}

export const secondaryDataContext = React.createContext(null);

export default function SecondaryDataProvider(props){

	const [state, dispatch] = useReducer(reducer, INIT_STATE);

	const fetchProjects = async () => {
		const { data } = await axios.get(`${API}/api/secondary/portfolio/`);
        console.log(data);
		dispatch({
			type: "GET_PROJECTS",
			payload: data
		})
	}

	const fetchPosts = async () => {
		const { data } = await axios.get(`${API}/api/secondary/blog/`);
		dispatch({
			type: "GET_POSTS",
			payload: data
		})
	}

    const fetchProject = async (id) => {
        const { data } = await axios.get(`${API}/api/secondary/portfolio/${id}/`);
        dispatch({
            type: "GET_PROJECT",
            payload: data
        })
    }

	const fetchPost = async (id) => {
        const { data } = await axios.get(`${API}/api/secondary/blog/${id}/`);
        dispatch({
            type: "GET_POST",
            payload: data
        })
    }

	return (
		<secondaryDataContext.Provider value={{
            fetchProjects,
            fetchPosts,
            fetchProject,
			fetchPost,
            projects: state.projects && state.projects,
            projectDetail: state.projectDetail,	
            posts: state.posts,
            postDetail: state.postDetail,
		}}>
			{props.children}
		</secondaryDataContext.Provider>
	)
}