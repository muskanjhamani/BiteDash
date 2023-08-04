import React from 'react'

export default function Card() {
    return (
        <div>
            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "400px" }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOy7LHAIb8LsZWILYNVuLtGgS20wQdU5zl4A&usqp=CAU" className="card-img-top h-10"
                    style={{ height: "5%" }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is text</p>
                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-success text-white rounded'>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1} >{i + 1}</option>
                                )
                            })}
                        </select>

                        <select className='m-2 h-100 bg-success text-white rounded'>
                            <option key={1} value="half" >Half</option>
                            <option key={2} value="full" >Full</option>
                        </select>
                        <div className='d-inline h-100 fs-5'> Total Price</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
