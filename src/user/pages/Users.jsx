
import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Hrishav Khadka',
            image: 'https://i.imgur.com/XTtJX36.jpeg',
            places: 3
        }
    ]

    return(
        <>
        <UsersList items={USERS}/>
        </>
    )
}

export default Users;