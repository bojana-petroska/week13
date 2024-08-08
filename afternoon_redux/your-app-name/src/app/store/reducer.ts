const initialState: StudentState = {
  students: [
    {
      id: 1,
      name: 'bojana',
      hobby: 'yoga',
    },
    {
        id: 2,
        name: 'nikita',
        hobby: 'running',
      },
      {
        id: 1,
        name: 'idylle',
        hobby: 'painting',
      },
  ],
};

const reducer = (state: StudentState = initialState, action: StudentAction): StudentState => {

    switch(action.type) {
        case 'ADD_STUDENT':
            const newStudent: IStudent = {
                id: Math.random(),
                name: action.student.name,
                hobby: action.student.hobby
            }
            return {
                ...state, students: state.students.concat(newStudent)
            };
        case 'DELETE_STUDENT':
            const deletedStudent: IStudent[] = 
                state.students.filter((student) => student.id !== action.student.id);
                return {
                    ...state, students: deletedStudent,
                }
        default:
        return state;
    }

}

export default reducer;
