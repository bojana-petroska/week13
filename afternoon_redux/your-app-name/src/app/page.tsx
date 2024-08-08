'use client';

import { StudentList } from './components/StudentList';
import { useDispatch } from 'react-redux';
import { deleteStudent } from './store/actions';
import StoreWrapper from './store/store';

export default function Home() {
  const dispatch = useDispatch();

  const removeStudent = (student: IStudent) => {
    dispatch(deleteStudent(student));
  };
  return (
    <StoreWrapper>
      <main>
        <StudentList removeStudent={removeStudent} />
      </main>
    </StoreWrapper>
  );
}
