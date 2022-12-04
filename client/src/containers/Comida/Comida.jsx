import React from 'react';

const Comida = () => {
    // const [comida, setComida] = useState([])


    // useEffect(() => {
    //     axios.get("/api/saved").then((response) => {
    //         console.log(response.data);
    //         // setTechniques(response.data);
    //     });
    // }, []);
    
    return (
        <div>
            <>
            <div className="container">
            <nav className="navbar navbar-dark bg-dark">
      <button className="btn btn-outline-success" type="button">Nutrition</button>
    <button className="btn btn-sm btn-outline-secondary" type="button">meals</button>
    <button className="btn btn-sm btn-outline-secondary" type="button">saved videos</button>
    </nav>


            <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>
            
            </>
            
        </div>
    );
};

export default Comida;