
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
    btnCell.appendChild( updateBtn(product.id) )
    btnCell.appendChild( deleteBtn(product.id) )

    row.appendChild(btnCell)


    // add the row to the tbody
    document.getElementById("product-t-body").appendChild(row)
}




// LOADING PRODUCTS TO THE TABLE USING THE API
const getProducts = () => {

    // fetch( url, optional: object that includes method, head, body, etc.  )
    // .then( callback function checking the intial response back )
    // .then( callback function doing something with data returned )
    // .catch( callback function on what to do if there's an error )

    fetch( PRODUCT_URL )
        .then( (response) => {
            console.log("RESPONSE:");
            console.log(response);

            // response.json() => extracts the json data held within object (response body)
            return response.json();
        } )
        .then( (data) => {

            console.log("DATA:");
            console.log(data); // array of product objects coming from db.json
            
            // loop through products in array and create row for each one
            for(product of data) {
                createRow(product)
            }

        } )
        .catch( (error) => {
            // printing the error
            console.error(error)
        } )

}

// CREATE PRODUCT AFTER SUBMITING FORM
const createProduct = () => {

    // grabbing the form
    const form = document.getElementById("product-form")


    // create an event listener that takes the data from the form and adds it to the table and does a POST request to our API
    form.addEventListener('submit', (event) => {

        // prevent default behavior: reloading the page
        event.preventDefault()

        // get values from the form
        const name = document.getElementById("product-name").value 
        const price = document.getElementById("product-price").value 
        const qty = document.getElementById("product-qty").value 

        // create product object
        const product = {
            "name": name,
            "price": price,
            "qty": qty
        }

        // send a POST request 
        // fetch( URL, optional: method, header, body,... )
        fetch( PRODUCT_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        } )
            .then( response => response.json() )
            .then( data => {

                // data = product object we just created with a generated ID

                alert("Product created with ID = " + data.id)

                createRow(data)
                
            } )
            .catch( error => {
                console.error("Error creating product")
                console.error(error)
            })

    })

}



getProducts()

createProduct()




