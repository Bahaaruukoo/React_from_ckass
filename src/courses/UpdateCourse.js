import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const UpdateCourse =()=>{
    let navigate = useNavigate();
    const {id} = useParams();
    const [course, setCourse] = useState(
       {
        title:"",
        description:""
       }
    );
    const {title, description} = course;
    const onInputChange = (e) =>{
        setCourse({...course, [e.target.name]: e.target.value})
    }

    const submitHandler = async (e)=>{
        e.preventDefault();
        console.log(course);
        await axios.put(`http://localhost:8080/courses/${id}`, course)
        navigate("/");
    }

    useEffect(()=>{
        loadCourse();
    },[])
    const loadCourse = async ()=>{
        const result =await axios.get(`http://localhost:8080/courses/${id}`)
        setCourse(result.data);
    }
    return(
<div className="container">
            <div className="row">
                <h2 className="text-center m-4">Update Course</h2>
                <form onSubmit={(e) => (submitHandler(e))}>

                    <label htmlFor="Title" className="form-label">
                        Title
                    </label>
                    <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter Course Title"
                        name="title"
                        value={title}
                        onChange={(e) => onInputChange(e)}
                    />
                    <label htmlFor="Description" className="form-label">
                        Description
                    </label>
                    <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter Course Description"
                        name="description"
                        value={description}
                        onChange={(e) => onInputChange(e)}

                    />
                    <button type="submit" className="btn btn-outline-primary">
                        UpdateCourse
                    </button>
                </form>
            </div>
        </div>    );
}

export default UpdateCourse;