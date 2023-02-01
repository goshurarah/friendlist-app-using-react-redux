import { ACCEPT_NAME, REJECT_NAME, BLOCK_NAME, UNDO } from "../constants";

const initialState = {
    Name: [
        {
            id: 1,
            name: 'Hurarah',
            status: null
        },
        {
            id: 2,
            name: 'Subhan',
            status: null
        },
        {
            id: 3,
            name: 'Usman',
            status: null
        },
        {
            id: 4,
            name: 'Hamza',
            status: null
        },
        {
            id: 5,
            name: 'Qasim',
            status: null
        },
        {
            id: 6,
            name: 'Arif',
            status: null
        },
        {
            id: 7,
            name: 'Nasarullah',
            status: null
        },
        {
            id: 8,
            name: 'Naeem',
            status: null
        },
        {
            id: 9,
            name: 'Ahmad',
            status: null
        },
        {
            id: 10,
            name: 'Ali',
            status: null
        },
    ]
};

const personStatus = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case ACCEPT_NAME:
            return {
                Name: [...state.Name.map((items) => {
                    if (items.id === action.data.id) {
                        return {
                            id: items.id,
                            name: items.name,
                            status: items.status = 'Accepted'
                        }
                    }
                    return items
                })]
            };

        case REJECT_NAME:
            return {
                Name: [...state.Name.map((items) => {
                    if (items.id === action.data.id) {
                        return {
                            id: items.id,
                            name: items.name,
                            status: items.status = 'Rejected'
                        }
                    }
                    return items
                })]
            };

        case BLOCK_NAME:
            return {
                Name: [...state.Name.map((items) => {
                    if (items.id === action.data.id) {
                        return {
                            id: items.id,
                            name: items.name,
                            status: items.status = 'Blocked'
                        }
                    }
                    return items
                })]
            };

        case UNDO:
            return {
                Name: [...state.Name.filter((filterItems) => {
                    if (filterItems.id === action.data.id) {
                        return {
                            id: filterItems.id,
                            name: filterItems.name,
                            status: filterItems.status = null
                        }
                    }
                    return filterItems
                })]

            };

        default:
            return state;
    }
};
export default personStatus;
