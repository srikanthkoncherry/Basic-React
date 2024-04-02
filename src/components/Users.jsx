import React, { useState, useEffect } from 'react';
import CardTemplate from './CardTemplate';

const UserComponent = ({ userId }) => {
  return (
    <div>
      User ID: {userId}
    </div>
  );
};

const Users = () => {
  console.log("mounting user")
  const URL = "https://dummyjson.com/users"
  const [data, setData] = useState([])

  // useEffect(() => {
  //   let userdata = fetchUsers(URL)
  //   console.log("setting data state")
  //   setData(userdata)
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setData(data.users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    if (data != null) {
      console.log("current state is ", data)
    }
  }, [data])


  if (data == null) {
    console.log("No Data")
    return (
      <>
        <span>No Data</span>
      </>
    );
  }
  else {
    return (
      <div>
        <h1>Users</h1>
        <div className='Users'>
          {data.map(user => (
            <CardTemplate className='usercard' key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  }

}

export default Users;