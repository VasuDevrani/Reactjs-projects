import "./App.css";
import Header from "./component/header";
import Content from "./component/content";
import { useEffect, useState } from "react";
import apiRequest from "./apiRequest";

function App() {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState("");

  // this is to prevent any error in case of null response from api
  const [fetchError, setFetchError] = useState(null);

  // this is to create a loading effect
  const [loading, setLoading] = useState(true);
  let API_URL = "http://localhost:3500/items";

  // loading on load
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Error and no data received");
        const listItems = await response.json();
        setData(listItems);
        console.log(listItems);
        setFetchError(null);
      } catch (err) {
        console.log(err.stack);
        setFetchError(err.message);
      } finally {
        console.log("process ends");
        setLoading(false);
      }
    };
    // to produce delay effect at start
    setTimeout(() => {
      fetchItems();
    }, 2000);
  }, [API_URL]);

  const addItem = async (item) => {
    const id = data.length ? data[data.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...data, myNewItem];
    setData(listItems);

    // Update or add new obj to api
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }

    const result= await apiRequest(API_URL, postOptions);
    if(result) setFetchError(result);
  };


  // FOr UPDATE OPERATION BELOW IS THE CODE THAT CAN BE USED WHEREVER REQUIRED NOT HERE (^_^)

  // const handleCheck = async (id) => {
  //   const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
  //   setItems(listItems);

  //   const myItem = listItems.filter((item) => item.id === id);
  //   const updateOptions = {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ checked: myItem[0].checked })
  //   };
  //   const reqUrl = `${API_URL}/${id}`;
  //   const result = await apiRequest(reqUrl, updateOptions);
  //   if (result) setFetchError(result);
  // }


  // FOr DELETE OPERATION BELOW IS THE CODE THAT CAN BE USED WHEREVER REQUIRED NOT HERE (^_^)

  // const handleDelete = async (id) => {
  //   const listItems = items.filter((item) => item.id !== id);
  //   setItems(listItems);

  //   const deleteOptions = { method: 'DELETE' };
  //   const reqUrl = `${API_URL}/${id}`;
  //   const result = await apiRequest(reqUrl, deleteOptions);
  //   if (result) setFetchError(result);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  return (
    <>
      <Header />

      <main>
        {loading && (
          <p style={{ color: "green", textAlign: "center", fontSize: "30px" }}>
            Loading Items...
          </p>
        )}

        {fetchError && (
          <p
            style={{ color: "crimson", textAlign: "center", fontSize: "30px" }}
          >{`Error: ${fetchError}`}</p>
        )}
        {!fetchError && !loading && <Content datas={data} newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit}/>}
      </main>
    </>
  );
}

export default App;
