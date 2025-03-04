import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="text-center mt-5 bg-dark text-light p-5">
            <h1 className="display-4 text-danger">404</h1>
            <p className="lead">Trang không tồn tại</p>
            <Link to="/" className="btn btn-primary btn-lg">Quay lại Trang Chủ</Link>
        </div>
    );
}

export default NotFound;
