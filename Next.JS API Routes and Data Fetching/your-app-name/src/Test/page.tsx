'use client';
import { useEffect, useState } from 'react';

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const TestComponent = () => {
  const [todos, setTodos] = useState<ITodo[] | null>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        return res.json(); // convert the response body into a readable JS object
      })
      .then((data: ITodo[]) => {
        // got the data successfully
        setTodos(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error: Error) => {
        setError(error);
        console.log(error);
        // if there was no response or an error in the request
      });
  }, []); // [] means only runs once on first render

  if (loading) {
    return <p>Loading</p>;
  }
  if (error) {
    return <p>an error happened: {error.message}</p>;
  }

//   return <p>{JSON.stri + ngify(todo)}</p>;

  return (
    todos && todos.map((todo) => (
        <>
        <p>Title: {todo.title}</p>
        <p>Completed: {todo.completed ? "Yes" : "No"}<br/></p>
        </>
    ))
  )
};

export default TestComponent;
