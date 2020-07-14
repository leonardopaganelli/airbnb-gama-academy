import { getHouses } from './service'
import { monetaryFormat } from './util'

const loadData = async () => {
  let houseList

  try {
    houseList = await getHouses()
  } catch (error) {
    console.error('Ocorre um erro ao carregar a lista de casas', error)
    alert('Ocorre um erro ao carregar as casas, tente novamente mais tarde')
  }

  return houseList || []
}

const mapTemplateHouseCard = ({
  name,
  photo,
  price,
  property_type
}) => (`
  <div class="col-md-4">
    <div class="card mb-4 box-shadow">
      <img
        class="card-img-top"
        src="${photo}"
        alt="Foto do imóvel ${name}"
      >
      <div class="card-body">
        <div class="card-text">
          <p class="property-type">
            ${property_type}
          </p>
          <p class="property-name">
            ${name}
          </p>
          <p class="property-price">
            ${monetaryFormat(price)}
          </p>
        </div>
      </div>
    </div>
  </div>
`)

const addCardsToContent = (cardsMapped = []) => {
  const row = document.querySelector(".row")

  row.innerHTML = cardsMapped.join(' ')
}

const initPage = async () => {
  const houseList = await loadData()
  const houseCardsMapped = houseList.map(mapTemplateHouseCard)

  addCardsToContent(houseCardsMapped)
}

initPage()