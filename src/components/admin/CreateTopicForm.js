import React, { useEffect, useState } from 'react';
import store from '../../app/store';
import { createTopic, getAllTopics } from '../../features/topic/topicSlice';
import TopicCard from './TopicCard';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

const CreateTopicForm = () => {
    const [topics, setTopic] = useState()
    const [refresh, setRefresh] = useState()
    const topicsStore = store.getState().topic.topics
    const [formData, setFormData] = useState({
        name: '',
    });

    useEffect(() => {
        if (topicsStore.length === 0) {
            console.log("API");
            store.dispatch(getAllTopics()).then((res) => {
                setTopic(res?.payload)
            })
        } else {
            console.log("Store");
            setTopic(topicsStore)
        }
    }, [refresh])

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Data: ", formData);
        store.dispatch(createTopic(formData)).then((res) => {
            if (res?.payload) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
                setFormData({
                    name: '',
                })
                setRefresh(res?.payload)
            }
        })
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
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
                                        <u>My Topics</u>
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
                                                    </div>
                                                    <div className='float-end'>
                                                        <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-success">Add Topic</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
                <br/>
            </section>
            <div class="container h-100">
                <div className="d-flex flex-wrap ms-5 mt-1">
                    {topics?.map((item) => (
                        <Link to={`${ROUTES.TOPIC}/${item.id}`}><TopicCard key={item.id} topic={item} /></Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CreateTopicForm