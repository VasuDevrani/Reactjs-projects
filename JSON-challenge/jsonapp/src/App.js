import React, { useEffect, useState } from 'react';
import Header from './component/header';
import Content from './component/content';

function App() {

  const [data,setData]=useState([
    // {
    //   userId: 1,
    //   id: 1,
    //   title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    //   body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    // },
    // {
    //   userId: 1,
    //   id: 2,
    //   title: "qui est esse",
    //   body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    // },
    // {
    //   userId: 1,
    //   id: 3,
    //   title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    //   body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    // },
    // {
    //   userId: 1,
    //   id: 4,
    //   title: "eum et est occaecati",
    //   body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    // },
    // {
    //   userId: 1,
    //   id: 5,
    //   title: "nesciunt quas odio",
    //   body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    // }
  ]
  )

  const [key,setKey]=useState('posts');

    // let URL='https://jsonplaceholder.typicode.com/';
    useEffect(()=>{
        const fetchItems =(()=>{
          // try{
          //   const response  = await fetch(`https://jsonplaceholder.typicode.com/${key}`);
          //   const newData= await response.json();
          //   setData(JSON.parse(newData));
          //   console.log(newData);
          // } catch(err) {
          //     console.log(1234);
          // } finally{
          //     console.log("ended");
          // }

          fetch(`https://jsonplaceholder.typicode.com/${key}`)
          .then(res => {
            return res.json();
          })
          .then((data) => {
              console.log(data);
              setData(data);
          })
        });

        fetchItems();
    },[key])

    const toggle1 = (() => {
        setKey('users');
    });

    const toggle2= (() => {
      setKey('comments');
  });

  const toggle3 = (() => {
    setKey('posts');
})

  return (
    <>
      <Header toggle1={toggle1} toggle2={toggle2} toggle3={toggle3}/>
      <Content data={data}/>
    </>
  );
}

export default App;
