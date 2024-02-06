import Link from "next/link";

 async function getUsers(){
    let data = await fetch("https://dummyjson.com/users");
    data = await data.json();
    return data.users;
}


export default async function Users(){
    let users = await getUsers();
    return(
        <div>
            <Link href="./">Home</Link>
            <br/>
            <h3>Users List</h3>
            <br/>
            <h2>==========================================================</h2>
            {
                users.map((item,index)=>(
                    <h3>{item.firstName} {item.lastName}</h3>
                    ))
            }
            
        </div>
    )
}