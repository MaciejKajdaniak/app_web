import {useMemo, useState} from 'react'
import './App.css'

function App() {
  const [photos, setPhoto] = useState([{id: 0, alt: "Mak", filename: "obraz1.jpg", category:1, downloads: 35},
      {id: 1, alt:"Bukiet", filename: "obraz2.jpg", category: 1, downloads: 43},
      {id: 2, alt:"Dalmatyńczyk", filename: "obraz3.jpg", category:2, downloads: 2},
      {id: 3, alt:"Świnka morska", filename: "obraz4.jpg", category:2, downloads: 53},
      {id: 4, alt:"Rotwailer", filename: "obraz5.jpg", category:2, downloads: 43},
      {id: 5, alt:"Audi", filename: "obraz6.jpg", category:3, downloads: 11},
      {id: 6, alt:"kotki", filename: "obraz7.jpg", category:2, downloads: 22},
      {id: 7, alt:"Róża", filename: "obraz8.jpg", category:1, downloads: 33},
      {id: 8, alt:"Świnka morska", filename: "obraz9.jpg", category:2, downloads: 123},
      {id: 9, alt:"Foksterier", filename: "obraz10.jpg", category:2, downloads: 22},
      {id: 10, alt:"Szczeniak", filename: "obraz11.jpg", category:2, downloads: 12},
      {id: 11, alt:"Garbus", filename: "obraz12.jpg", category:3, downloads: 321}])
  const [flowers,setFlower] = useState(true)
  const [pet,setPet] = useState(true)
  const [car,setCar] = useState(true)

  function changeFlower(e) {
    setFlower(e.target.checked)
  }
  function changePet(e) {
    setPet(e.target.checked)
  }
  function changeCar(e) {
    setCar(e.target.checked)
  }

  function changeDownloads(id) {
    setPhoto(prev => prev.map(photos => photos.id===id ?{...photos, downloads: photos.downloads+1}:photos))
  }


  return (
      <>
        <h1>Kategorie zdjęć</h1>
        <label><input type="checkbox" checked={flowers} onChange={changeFlower}/>Kwiaty</label>
        <label><input type="checkbox" checked={pet} onChange={changePet}/>zwięrzęta</label>
        <label><input type="checkbox" checked={car} onChange={changeCar}/>samochody</label>  <br/>
        <div className="main">
          {photos.filter(s => !(s.category === 1 && !flowers))
              .filter(s => !(s.category === 2 && !pet))
              .filter(s => !(s.category === 3 && !car))
              .map(photo => (
                  <div key={photo.id}>
                    <img src={`src/assets/${photo.filename}`} />
                    <h4>Pobrań: {photo.downloads}</h4>
                    <button onClick={() => changeDownloads(photo.id)}>Pobierz</button>
                  </div>
              ))
          }
        </div>
      </>
  )
}

export default App
