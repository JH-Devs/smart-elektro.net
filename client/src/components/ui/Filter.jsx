import React from 'react'
import '../../styles/filter.css'
import StarIcon from '@mui/icons-material/Star';

const Filter = () => {
  return (
    <div className="filter__widget">
    <select>
      <option>řadit podle:</option>
      <option value='vzestupne'>cena: vzestupně</option>
      <option value='sestupne'>cena: sestupně</option>
    </select>
    <select>
      <option>dostupnost:</option>
      <option value='vzestupne'>skladem</option>
      <option value='sestupne'>skladem u dodavatele</option>
      <option value='sestupne'>vyprodané</option>
    </select>
    <select>
      <option>hodnocení:</option>
      <option value='vzestupne'> &#9733;</option>
      <option value='sestupne'> &#9733; &#9733;</option>
      <option value='sestupne'> &#9733; &#9733; &#9733;</option>
      <option value='sestupne'> &#9733; &#9733; &#9733; &#9733;</option>
      <option value='sestupne'> &#9733; &#9733; &#9733; &#9733; &#9733;</option>
    </select>
  </div>
  )
}

export default Filter