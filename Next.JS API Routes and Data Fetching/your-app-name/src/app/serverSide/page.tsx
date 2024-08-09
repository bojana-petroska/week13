interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

// one way on async syntax
async function getData () {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if(!response.ok) {
        throw new Error ('Failed to get the data');
        //catch 
    }
    //then
    return response.json();
}

async function getAPIData() {
    const response = await fetch('http://localhost:3000/api/hello');
    console.log(response);
}

// another way of async syntax
const ServerSide = async () => {
    const data: ITodo[] = await getData();
    await getAPIData();

    return (
        <div>{JSON.stringify(data, null, 2)}</div>
    )
}

export default ServerSide;


