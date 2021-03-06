import { jobsTypes } from './jobs.types';

const jobsReducer = (state = { all: null, jobsCompany: null }, action) => {
    switch (action.type) {
        case jobsTypes.GET_ALL:
            return { ...state, all: action.payload };
        case jobsTypes.GET_JOBS_COMPANY:
            return { ...state, jobsCompany: action.payload }
        case jobsTypes.CLEAR_JOBS:
            return { ...state, all: null }
        default:
            return state;
    }
}

export default jobsReducer;