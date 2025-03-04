import UserList from "../components/UserList";

function Home() {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Danh sách người dùng</h1>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <UserList />
                </div>
            </div>
        </div>
    );
}

export default Home;
