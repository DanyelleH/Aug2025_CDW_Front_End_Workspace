
// BASE URL FOR API
const PRODUCT_URL = "http://localhost:3000/product"


const deleteBtn = id => {
    // create button element...
    const btn = document.createElement("button")

    //...then add btn text and bootstrap class...
    btn.textContent = "Delete"
    btn.classList.add("btn")
    btn.classList.add("btn-danger")
    
    // ...and finally the click event listener
    btn.addEventListener('click', () => {
        alert("Product Deleted with id = " + id)
    })

    return btn
}

const updateBtn = id => {
    // create button element...
    const btn = document.createElement("button")

    //...then add btn text and bootstrap class...
    btn.textContent = "Update"
    btn.classList.add("btn")
    btn.classList.add("btn-primary")
    
    // ...and finally the click event listener
    btn.addEventListener('click', () => {
        alert("Product Updated with id = " + id)
    })

    return btn
}



// Once we have the data from the API, we'll need to place it on the page
// each product will be JSON that looks like this: { id: ..., name: ..., price: ..., qty: ... }
// first, let's create a function that takes a product object and places on a row in the table

const createRow = (product) => { // product -> product object

    // create a row for product
    const row = document.createElement("tr")

    // set an id for the row
    row.id = `product-${product.id}`

    // names of product keys
    const colAttributes = [ "id", "name", "price", "qty" ]

    for(col of colAttributes) {

        // create the cell
        const cell = document.createElement("td")

        // add text to the cell
        cell.textContent = product[col]

        // append the cell to the row
        row.appendChild(cell)
    }

    // add in the delete and update buttons to the last cell
    const btnCell = document.createElement("td")



    // add the row to the tbody
    document.getElementsById("product-t-body").appendChild(row)
}