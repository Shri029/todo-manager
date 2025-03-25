import React from 'react';
import StatusContainer from './StatusContainer';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { updateTodo } from '../utils/todoSlice';
import { statuses } from '../utils/constant';
import useTodos from '../hooks/useTodos';

const MainContainer = () => {
  const dispatch = useDispatch();
  useTodos();
  const todos = useSelector((store) => store.todo.todos);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    
    // If trying to drop item outside, do nothing
    if (!destination) return;
  
    // If the task is dropped back into the same status column, no change
    if (destination.droppableId === source.droppableId) return;
  
    /**
     * Determine the updated status based on the destination droppableId
     * If moved to the 'Completed' column, mark it as completed
     * Otherwise, it remains incomplete
     */
    const updatedStatus = destination.droppableId;
    const isCompleted = updatedStatus === 'Completed';
  
    // Find todo item by its ID
    const draggedTodo = todos.find((todo) => todo.id === Number(draggableId));
  
    // If the todo item exists, dispatch the update
    if (draggedTodo) {
      dispatch(updateTodo({ ...draggedTodo, completed: isCompleted }));
    }
  };

  if (todos.length === 0) return <div>Loading...</div>;

  return (

    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex flex-col md:flex-row col-span-10 m-5 mx-5 gap-2">
      {statuses.map((status, idx) => (<StatusContainer key={idx} status={status}
        todos={status === 'Pending'
        ? todos.filter((todo) => !todo.completed).slice(0, Math.ceil(todos.filter((t) => !t.completed).length / 2))
        : status === 'In Progress'
        ? todos.filter((todo) => !todo.completed).slice(Math.ceil(todos.filter((t) => !t.completed).length / 2))
        : todos.filter((todo) => todo.completed)
      }/>))}
      </div>
    </DragDropContext>
  );
};

export default MainContainer;
