import React from 'react'
import { useNavigate } from 'react-router-dom'

const ActiveStep = ({ id }) => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate(`/order/${id}/planning`);
    }, []);
    return (
        <div>ActiveStep</div>
    )
}

export default ActiveStep