import React, { useState } from 'react';
import edit from '../assets/edit.png';
import remove from '../assets/remove.png';
import confirmremove from '../assets/confirmremove.png';
import { deleteTodo, updateTodo } from '../utils/todoSlice';
import { useDispatch } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';

const TodoCard = ({ todo, index }) => {
  const dispatch = useDispatch();
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editTask, setEditTask] = useState(todo.todo);

  if (!todo) return null;

  const handleEditSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTodo({ id: todo.id, todo: editTask }));
    setShowEditModal(false);
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    setConfirmDelete(false);
  };

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <div
          className='flex flex-col gap-2 my-4 bg-white rounded-lg p-4'
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className='flex justify-between'>
            <h1 className='font-medium'>Todo title</h1>
            <span className='flex h-4 gap-2'>
              {!confirmDelete && <img alt="edit" src={edit} onClick={() => setShowEditModal(true)} />}
              {!confirmDelete && <img src={remove} alt="remove" onClick={() => setConfirmDelete(true)} />}
              {confirmDelete && <img className='h-5' src={confirmremove} alt="confirm-remove" onClick={handleDelete} />}
            </span>
          </div>
          <p>{todo.todo}</p>
        {/* Edit task form*/}
          {showEditModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <form onSubmit={handleEditSubmit} className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold mb-4">Edit Task</h2>
                <input
                  type="text"
                  value={editTask}
                  onChange={(e) => setEditTask(e.target.value)}
                  className="border p-2 w-full mb-3 rounded"
                  required
                />
                <div className="flex justify-between">
                  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Update</button>
                  <button type="button" onClick={() => setShowEditModal(false)} className="border px-4 py-2 rounded hover:bg-gray-400">Cancel</button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </Draggable>
  );
};

export default TodoCard;
