const cars=document.querySelector('.cars')
const inputs=document.querySelectorAll('input')
const add=document.querySelector('button')

const Url='https://659ce5dc633f9aee79081f5b.mockapi.io/auto/cars'



async function ClothesCars() {
    const res=await fetch(Url)
    const data=await res.json()
    console.log(data);
    ShowCars(data)
}
ClothesCars()


function ShowCars(arr) {
    cars.innerHTML=''
    for (const obj of arr) {
        cars.innerHTML+=`
        <li>
            <img src="${obj.img}" />
            <h1>Marka: ${obj.marka}</h1>
            <h1>Years: ${obj.years}</h1>
            <h2>Country: ${obj.country}</h2>
            <h4>Price: ${obj.price} $</h4>
            
            <button onclick="delItem(${obj.id})"><i class="bi bi-trash3-fill"></i></button>
            <button onclick="edditItem(${obj.id})"><i class="bi bi-pen"></i></button>

        </li>
        `
        
    }
    
}

async function delItem(id) {
    const res=await fetch(Url+'/'+id, {
        method:'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    ClothesCars()
}

async function edditItem(id) {
const Img=prompt('Img')    
const Marka=prompt('Marka')
const Years=prompt('Years')
const Country=prompt('Country')
const Price=prompt('Price')

const item={
      img:Img,
      marka:Marka,
      years:Years,
      country:Country,
      price:Price

}

    const res=await fetch(Url+'/'+id, {
        method:'PUT',
        body: JSON.stringify(item),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    ClothesCars()
}


async function addItem() {
    const res=await fetch(Url, {
        method:'POST',
        body: JSON.stringify({img:inputs[0].value, marka:inputs[1].value, years:inputs[2].value, country:inputs[3].value, price:inputs[4].value}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    ClothesCars()
}
add.onclick=()=>{
    
    addItem()
}