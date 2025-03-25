import React, { useState } from 'react';
import TodoCard from './TodoCard';
import plus from '../assets/plus.png';
import { addTodo } from '../utils/todoSlice';
import { useDispatch } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';

const StatusContainer = ({ status, todos }) => {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [newTask, setNewTask] = useState({ todo: '', completed: false, userId: Math.random() * 100 });

  const getStatusBg = () => {
    if (status === 'Pending') return 'bg-blue-100';
    if (status === 'In Progress') return 'bg-orange-100';
    if (status === 'Completed') return 'bg-green-100';
    return 'bg-gray-50';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTaskData = {
      ...newTask,
      id: todos.length + 1,
    };
    dispatch(addTodo(newTaskData));
    setNewTask({ todo: '', completed: false, userId: Math.random() * 100 });
    setShowForm(false);
  };

  return (
    <div className={`h-fit flex flex-1 flex-col m-2 p-4 rounded-lg gap-2 ${getStatusBg()}`}>
      <h1 className='font-semibold text-xl'>{status}</h1>
      {/* Droppable area for tasks based on their status (Pending, In Progress, Completed).
          react-beautiful-dnd requires a unique droppableId to track where tasks are dragged
          provided.innerRef connects the DOM node to the drag-and-drop.
          provided.droppableProps` props for the droppable area to function correctly
          Tasks (TodoCards) are mapped inside the droppable area, each with a required index
          provided.placeholder reserves space while dragging to prevent layout shift 
      */}

      <Droppable droppableId={status}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps} className='flex-col min-h-[50px]'>
            {todos.map((todo, index) => (
              <TodoCard key={todo.id} todo={todo} index={index} />))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

    <div 
      className="flex p-2 justify-center items-center gap-1 sm:gap-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
      onClick={() => setShowForm(true)}>
      <img src={plus} alt="plus icon" className="w-5 h-5" />
      <h1 className="text-sm sm:text-base">Add new task</h1>
    </div>
    {/* Add task form*/}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
            <input
              className="border p-2 w-full mb-3 rounded"
              type="text"
              placeholder="Task Description"
              value={newTask.todo}
              onChange={(e) => setNewTask({ ...newTask, todo: e.target.value })}
              required
            />
            <div className="flex justify-between">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Task</button>
              <button type="button" onClick={() => setShowForm(false)} className="border px-4 py-2 rounded hover:bg-gray-400">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default StatusContainer;
