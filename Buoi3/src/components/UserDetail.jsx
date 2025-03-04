import { useParams } from "react-router-dom";

const users = [
    { id: 1, name: "Alejandro Garnacho", age: 25, email: "a@example.com", avatar: "https://cdn-images.vtv.vn/zoom/640_400/66349b6076cb4dee98746cf1/2025/01/22/image-2025-01-23-012349454-47039212449483423726103-34558002854522319495894.png" },
    { id: 2, name: "Bruno Fernandes", age: 30, email: "b@example.com", avatar: "https://images2.thanhnien.vn/528068263637045248/2023/11/14/bruno-fernandes-1699932080449748989733.jpeg" },
    { id: 3, name: "André Onana", age: 28, email: "c@example.com", avatar: "https://assets.goal.com/images/v3/blt10e14440c59c0998/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202024-09-08T184449.264.png?auto=webp&format=pjpg&width=3840&quality=60" }
];

function UserDetail() {
    const { id } = useParams();
    const user = users.find((u) => u.id === parseInt(id));

    if (!user) {
        return <h2 className="text-center text-danger">Người dùng không tồn tại</h2>;
    }

    return (
        <div className="card shadow-lg mx-auto mt-5 bg-dark text-light" style={{ maxWidth: '25rem' }}>
            <div className="card-body text-center">
                <img
                    src={user.avatar}
                    alt={user.name}
                    className="card-img-top rounded-circle mb-3"
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
                <h5 className="card-title mb-3">{user.name}</h5>
                <p className="card-text"><strong>Tuổi:</strong> {user.age}</p>
                <p className="card-text"><strong>Email:</strong> {user.email}</p>
                <a href="/" className="btn btn-success">Quay lại</a>
            </div>
        </div>
    );
}

export default UserDetail;
