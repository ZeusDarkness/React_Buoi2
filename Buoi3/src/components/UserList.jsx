import { Link } from "react-router-dom";

const users = [
    { id: 1, name: "Alejandro Garnacho", avatar: "https://cdn-images.vtv.vn/zoom/640_400/66349b6076cb4dee98746cf1/2025/01/22/image-2025-01-23-012349454-47039212449483423726103-34558002854522319495894.png" },
    { id: 2, name: "Bruno Fernandes", avatar: "https://images2.thanhnien.vn/528068263637045248/2023/11/14/bruno-fernandes-1699932080449748989733.jpeg" },
    { id: 3, name: "André Onana", avatar: "https://assets.goal.com/images/v3/blt10e14440c59c0998/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202024-09-08T184449.264.png?auto=webp&format=pjpg&width=3840&quality=60" }
];

function UserList() {
    return (
        <>
            <style>
                {`

                    .user-item {
                        border: 2px solid #333; 
                        border-radius: 10px;
                        padding: 15px;
                        transition: all 0.3s ease;
                        background-color: #212529; 
                    }

                    .user-item:hover {
                        background-color: #343a40; 
                        transform: scale(1.05); 
                        box-shadow: 0 8px 15px rgba(0, 123, 255, 0.2); 
                        cursor: pointer; 
                    }

                    .user-item:hover h5 {
                        color: inherit; /
                    }

                    .user-item:hover .btn {
                        background-color: #28a745;
                        border-color: #28a745;
                    }
                `}
            </style>

            <div className="list-group">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="list-group-item shadow-sm mb-3 rounded bg-dark text-light user-item"
                    >
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <img
                                    src={user.avatar}
                                    alt={user.name}
                                    className="rounded-circle"
                                    style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }}
                                />
                                <h5 className="mb-0">{user.name}</h5>
                            </div>
                            <Link
                                to={`/user/${user.id}`}
                                className="btn btn-success"
                            >
                                Xem
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default UserList;
