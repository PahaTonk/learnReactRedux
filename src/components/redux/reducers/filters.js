import { CHANGE_FILTER } from './../../../constans';

const BASE_FILTER = 'all';

const filters = ( state = BASE_FILTER, { type, activeFiter } ) => {
    switch (type) {
        case CHANGE_FILTER :
            return activeFiter;

        default: 
            return state;
    }
};

export default filters;