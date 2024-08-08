'use client';
import * as React from 'react';
import { useSelector } from 'react-redux';

type Props = {
    removeStudent: (student: IStudent) => void
}

export const StudentList: React.FC<Props> = ({ removeStudent }) => {

    const students = useSelector((state: StudentState) => state.students)


    return (
        <div>
            <h2>students:</h2>
            {students.map((student: IStudent) => (
                <div key={student.id}>
                    <p>Name: {student.name}</p>
                    <p>Hobby: {student.hobby}</p>
                    <button onClick={() => removeStudent(student)}>delete</button>
                </div>
            ))}
        </div>
    )
}


