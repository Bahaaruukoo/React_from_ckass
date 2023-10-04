import {useEffect, useState} from "react";
import axios from "axios";
const Home =()=>{
    const[courses, setCourses] = useState([])

    useEffect(()=>{
        loadCourses();
    }     
    ,[]);

    const loadCourses =async()=>{
        const result = await axios.get("http://localhost:8080/courses");
        setCourses(result.data);
    }


    return (
        <div className="container">
        <div className= "py-5">
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">S.N</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
      {courses.map((course, index)=>(
        <tr>
      <th scope="row" key={index}>{index + 1}</th>
      <td>{course.title}</td>
      <td>{course.description}</td>
      </tr>
      )
      )}
   
  </tbody>
</table>
</div>
</div>
    );
}

export default Home;