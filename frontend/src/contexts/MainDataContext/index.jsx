import axios from 'axios';
import React, { useReducer } from 'react';
import { API } from '../../constants';


const INIT_STATE = {
	heroData: null,
	offersSectionData: null,
	eventsSectionData: null,
	ourProjectsSectionData: null,
	mainPosts: null,
	aboutUs: null,
	ourTeam: null,
	languages: null
}

const reducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case "GET_HERO_DATA":
			return {
				...state,
				heroData: action.payload
			}
		case "GET_OFFERS_DATA":
			return {
				...state,
				offersSectionData: action.payload
			}
		case "GET_EVENTS_DATA":
			return {
				...state,
				eventsSectionData: action.payload
			}
		case "GET_OUR_PROJECTS_DATA":
			return {
				...state,
				ourProjectsSectionData: action.payload
			}
		case "GET_MAIN_POSTS":
			return {
				...state,
				mainPosts: action.payload
			}
		case "GET_ABOUT_US":
			return {
				...state,
				aboutUs: action.payload
			}
		case "GET_OUR_TEAM":
			return {
				...state,
				ourTeam: action.payload
			}
		case "GET_LANGUAGES":
			return {
				...state,
				languages: action.payload
			}
		default:
			return state;
	}
}

export const mainDataContext = React.createContext(null);

export default function MainDataProvider(props){

	const [state, dispatch] = useReducer(reducer, INIT_STATE);

	const fetchHeroData = async () => {
		const { data } = await axios.get(`${API}/api/main/hero-section/`);
		console.log(data)
		dispatch({
			type: "GET_HERO_DATA",
			payload: data
		})
	}

	const fetchOffersSectionData = async () => {
		const { data } = await axios.get(`${API}/api/main/offers/`);
		dispatch({
			type: "GET_OFFERS_DATA",
			payload: data
		})
	}

	const fetchEventsSectionData = async () => {
		const { data } = await axios.get(`${API}/api/main/events-organizations/`);
		dispatch({
			type: "GET_EVENTS_DATA",
			payload: data
		})
	}

	const fetchOurProjectsSectionData = async () => {
		const response = await axios.get(`${API}/api/main/our-projects/`);
		const sectionStaticData = response.data[0];
		
		const { data } = await axios.get(`${API}/api/secondary/portfolio/?is_main=true&limit=4`)
		dispatch({
			type: "GET_OUR_PROJECTS_DATA",
			payload: {
				static: sectionStaticData,
				projects: data.results
			}
		})
	}

	const fetchMainPosts = async () => {
		const { data } = await axios.get(`${API}/api/secondary/blog/?is_main=true&limit=3`);
		dispatch({
			type: "GET_MAIN_POSTS",
			payload: data.results
		})
	}

	const fetchAboutUs = async () => {
		const { data } = await axios.get(`${API}/api/main/about-us/`);
		dispatch({
			type: "GET_ABOUT_US",
			payload: data
		})
	}

	const fetchOurTeam = async () => {
		const { data } = await axios.get(`${API}/api/main/our-team/`);
		dispatch({
			type: "GET_OUR_TEAM",
			payload: data
		})
	}

	const fetchLanguages = async () => {
		const { data } = await axios.get(`${API}/api/main/languages/`) ;
		dispatch({
			type: "GET_LANGUAGES",
			payload: data
		})
	}


	return (
		<mainDataContext.Provider value={{
			fetchHeroData,
			fetchOffersSectionData,
			fetchEventsSectionData,
			fetchOurProjectsSectionData,
			fetchMainPosts,
			fetchAboutUs,
			fetchOurTeam,
			fetchLanguages,
			heroData: state.heroData && state.heroData[0],
			offersSectionData: state.offersSectionData && state.offersSectionData[0],
			eventsSectionData: state.eventsSectionData && state.eventsSectionData[0],
			ourProjectsSectionData: state.ourProjectsSectionData && state.ourProjectsSectionData,
			mainPosts: state.mainPosts && state.mainPosts,
			aboutUs: state.aboutUs && state.aboutUs[0],
			ourTeam: state.ourTeam && state.ourTeam[0],
			languages: state.languages && state.languages
		}}>
			{props.children}
		</mainDataContext.Provider>
	)
}