import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK } from './../../../constans';

export const TASKS = [
    {
      id: 1,
      text: 'Learn ReactJS',
      isCompleted: true,
    },
    {
      id: 2,
      text: 'Learn Redux',
      isCompleted: false,
    },
    {
      id: 3,
      text: 'Learn React Router',
      isCompleted: false,
    }
  ];

const tasks = ( state = TASKS, { type, id, text, isCompleted } ) => {
    switch (type) {
      case ADD_TASK :
          return [
              ...state, 
              {
                  id,
                  text,
                  isCompleted
              }
          ];

      case REMOVE_TASK :
          return [ ...state ].filter( (item) => item.id !== id);

      case COMPLETE_TASK :
          return [ ...state ].map( (item) => {
            if (item.id === id) {
              item.isCompleted = !item.isCompleted;
            }

            return item;
          });
            
        default :
            return state;
    };
};

export default tasks;