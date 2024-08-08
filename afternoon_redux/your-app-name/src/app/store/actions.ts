
export function addStudent(student: IStudent) {
    const action: AddStudentAction = {
        type: 'ADD_STUDENT',
        student
    };

    return action;
}

export function deleteStudent(student: IStudent) {
    const action: DeleteStudentAction = {
        type: 'DELETE_STUDENT',
        student
    };

    return action;
}


