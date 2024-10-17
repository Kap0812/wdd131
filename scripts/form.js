const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Display the date the document was last modified
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
document.getElementById('review').addEventListener('submit', function(event) {
    // Increment the review count
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
    
    // Display a confirmation or count after submission (optional)
    console.log(`Total reviews submitted: ${reviewCount}`);
});

// Optional: Dynamically populate product names (if you decide to load products dynamically)
const products = [
    { id: 'camera', name: 'Camera' },
    { id: 'laptop', name: 'Laptop' },
    { id: 'speaker', name: 'Speaker' },
    { id: 'wireless-keyboard', name: 'Wireless Keyboard' },
    { id: 'mouse', name: 'Mouse' }
];

const productSelect = document.getElementById('product-name');

// If you wish to dynamically populate the product select options
function populateProducts() {
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

// You can call this function to dynamically populate, if required.
populateProducts();