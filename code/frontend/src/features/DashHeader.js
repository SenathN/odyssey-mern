import { Link } from "react-router-dom"

const DashHeader = () => {
    return (
        <div className="container text-center border-bottom border-3 p-3 mb-3 d-flex justify-content-between">
            <Link to={'/dashboard'} className="text-decoration-none text-dark">
                <h2 className="display-6" >DashBoard</h2>
            </Link>
        </div>
    )
}

export default DashHeader