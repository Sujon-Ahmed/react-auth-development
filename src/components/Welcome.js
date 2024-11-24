import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <>
            <Card className='shadow border-0 py-5'>
                <Card.Body>
                    <h2 className='fw-bold text-capitalize'>Welcome to our system</h2>
                    <div className="d-flex align-items-center justify-content-around mt-3">
                        <Link to="/signin" className='btn btn-primary'>Login</Link>
                        <Link to="/signup" className='btn btn-info'>Sign Up</Link>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default Welcome