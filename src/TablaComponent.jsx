function TablaComponent({datos})
{
  const celdas=datos.map((user)=>{
    
        return (<tr key={user.id}>
            <th style={{border: "1px solid"}}>{user.id}</th>
            <th style={{border: "1px solid"}}>{user.name}</th>
            <th style={{border: "1px solid"}}>{user.username}</th>
            <th style={{border: "1px solid"}}>{user.email}</th>
            <th style={{border: "1px solid"}}>{user.phone}</th>
            <th style={{border: "1px solid"}}>{user.website}</th>
        </tr>)
  })
  return <div >
    <p>Tabla</p>
    <table style={{
  tableLayout: "fixed",
  margin: "auto",
  width: "95%",
  borderCollapse: "collapse",
  border: "3px solid",
}}>
        <thead>
        <tr style={{border: "1px solid"}}>
            <th style={{border: "1px solid"}}>id</th>
            <th style={{border: "1px solid"}}>name</th>
            <th style={{border: "1px solid"}}>username</th>
            <th style={{border: "1px solid"}}>email</th>
            <th style={{border: "1px solid"}}>phone</th>
            <th style={{border: "1px solid"}}>website</th>
        </tr>
        </thead>
        <tbody>
        {celdas}
        </tbody>
    </table>
    
  </div>
}

export default TablaComponent;