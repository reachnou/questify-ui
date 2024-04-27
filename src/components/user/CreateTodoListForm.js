import React, { useState } from 'react';
import TodoListTable from './TodoListTable';
import store from '../../app/store';
import { createTask, updateTask } from '../../features/task/TaskSlice';
import Swal from 'sweetalert2';

const CreateTodoListForm = () => {
  const [isUpdate, setIsUpdate] = useState("false");
  const [refreshPage, setRefreshPage] = useState()
  const [taskId, setTaskId] = useState();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    deadline: '',
    priority: '',
    status: 'TODO'
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isUpdate === "true") {
      store.dispatch(updateTask({id: taskId, data: formData})).then((res) => {
        if (res?.payload) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          setIsUpdate("false")
          setRefreshPage(res?.payload)
          setFormData({
            name: '',
            description: '',
            deadline: '',
            priority: '',
            status: 'TODO'
          })
        }
      })

    } else {
      store.dispatch(createTask(formData)).then((res) => {
        if (res?.payload) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          setRefreshPage(res?.payload)
          setFormData({
            name: '',
            description: '',
            deadline: '',
            priority: '',
            status: 'TODO'
          })
        }
      })
    }
  };

  return (
    <div>
      <section>
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col">
              <div id="list1">
                <div class="card-body py-4 px-4 px-md-5">

                  <p class="h1 text-center mt-3 mb-4 pb-3 text-primary">
                    <i class="fas fa-check-square me-1"></i>
                    <u>My Todo-s</u>
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div class="pb-2">
                      <div class="card">
                        <div class="card-body">
                          <div class="row d-flex justify-content-between align-items-center">
                            <input type="text" class="form-control form-control-lg fs-3"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              placeholder="Title" />
                            <hr />
                            <input type="text" class="form-control form-control-lg"
                              name="description"
                              value={formData.description}
                              onChange={handleChange}
                              required
                              placeholder="Description..." />
                            <hr />
                            <div className='d-flex flex-row'>
                              <select className='form-select me-3 mt-3' style={{ width: "160px", height: "37px" }} name="priority" value={formData.priority} onChange={handleChange} required>
                                <option value="">Select Priority</option>
                                <option value="LOW">Low</option>
                                <option value="MEDIUM">Medium</option>
                                <option value="HIGH">High</option>
                              </select>
                              {isUpdate === 'true' ?
                                <select className='form-select me-3 mt-3' style={{ width: "160px", height: "37px" }} name="status" value={formData.status} onChange={handleChange} required>
                                  <option value="">Select Status</option>
                                  <option value="TODO">TODO</option>
                                  <option value="IN_PROGRESS">IN_PROGRESS</option>
                                  <option value="COMPLETED">COMPLETED</option>
                                  <option value="CANCELLED">CANCELLED</option>
                                  <option value="ON_HOLD">ON_HOLD</option>
                                </select>
                                : ""
                              }
                              <input type="datetime-local" class="form-control form-control-lg border mt-3" style={{ width: "230px", height: "37px" }}
                                name="deadline"
                                value={formData.deadline}
                                onChange={handleChange}
                                required
                                placeholder='Date time' />
                            </div>
                          </div>
                          <div className='float-end'>
                            <button type="submit" data-mdb-button-init data-mdb-ripple-init className={isUpdate === 'true' ? "btn btn-warning" : "btn btn-success"}>{isUpdate === 'true' ? "Update" : "Add task"}</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <hr class="my-4" />

                  <div class="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
                    <p class="small mb-0 me-2 text-muted">Filter</p>
                    <select data-mdb-select-init>
                      <option value="1">All</option>
                      <option value="2">Completed</option>
                      <option value="3">Active</option>
                      <option value="4">Has due date</option>
                    </select>
                    <p class="small mb-0 ms-4 me-2 text-muted">Sort</p>
                    <select data-mdb-select-init>
                      <option value="1">Added date</option>
                      <option value="2">Due date</option>
                    </select>
                    <a href="#!" style={{ color: "#23af89" }} data-mdb-tooltip-init title="Ascending"><i
                      class="fas fa-sort-amount-down-alt ms-2"></i></a>
                  </div>
                  <TodoListTable setIsUpdate={setIsUpdate} setFormData={setFormData} setTaskId={setTaskId} refreshPage={refreshPage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateTodoListForm;

