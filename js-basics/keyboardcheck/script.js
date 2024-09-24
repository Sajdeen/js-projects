const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML =`
    <div class = 'color'>
    <table>
  
  <thead>
    <tr>
      <th scope="col">Key</th>
      <th scope="col">Keycode</th>
      <th scope="col">Code</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td >${e.key}</td>
      <td>${e.keycode}</td>
      <td>${e.code}</td>
    </tr>
    </tbody>
    </table>
     </div>
    `
   
});