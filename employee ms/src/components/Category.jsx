import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Category = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/auth/category').then((res)=>{
           setCategory(res.data.category);
        }).catch((err)=>console.log(err))

    }, [])
    
  return (
    <div className='px-5 mt-3'>
        <div className='d-flex justify-content-center'>
            <h3>Category List</h3>
        </div>
        <Link to="/dashboard/add_category" className='btn btn-success'>Add Cetegory</Link>
        <div className='mt-3'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {category?
                        category.map((c,index) => (
                            <tr key={index}>
                                <td>{c.name}</td>
                            </tr>
                        ))
                        :
                        <div>no category found</div>
                    }
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default Category