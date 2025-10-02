import React, {useEffect, useState} from 'react'

const categories =["choose a genra","business","fiction","Horror","Adventure"]
export const Topselling = () => {
    const [books,setBooks] = useState([]);

    useEffect(() =>{
        fetch("books.json")
        .then(res => res.json())
        .then((data) => setBooks(data))
    },[])
  return (
    <div className="py-10">
        <h2 className="text-3xl font-semibld mb-6">Top Seller</h2>
        {/*category*/}
        <div className="mb-8 flex item-center">
            <select name="category" id="category" className="border bg-[#EAEAEA] rounded-md border-gray-300 focus:outline-none p-1">
                {
                    categories.map((category,index) => (
                        <option key={index} value={category}>{category}</option>
                    ))
                }
            </select>
        </div>
    </div>
  )
}

export default Topselling