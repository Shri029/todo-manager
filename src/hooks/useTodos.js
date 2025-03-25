import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTodos } from '../utils/todoSlice';

const useTodos = () => {
    const dispatch = useDispatch();  
    const todos = useSelector((store) => store.todo.todos);

    // fetch todos videos and updating store with todo lists
    const fetchTodos = async () => {
        const res = await fetch('https://dummyjson.com/todos?limit=11');
        const data = await res.json();
        dispatch(setTodos(data.todos));
      };
  
  useEffect(() => {
    fetchTodos();
  }, [dispatch]);
}

export default useTodos;