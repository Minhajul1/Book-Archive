const searchBook = (event) => {
    event.preventDefault()
    const searchFeild = document.getElementById('Search-feild');
    const searchText = searchFeild.value;
    searchFeild.value = '';

    // fetch//
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(response => response.json())
    .then(data => displaySearchResult(data.docs))

}
    // Display Property
const displaySearchResult = docs => {
    const searchResult = document.getElementById('search-result');
    docs.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card shadow">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${book.title}</h5>
              <p class="card-text"><span class="fw-bold">Writter :</span> ${book.author_name}</p>
              <p><span class="fw-bold">Publisher :</span> ${book.publisher}</p>
              <p><span class="fw-bold">Published year :</span> ${book.publish_date}</p>
              <p><span class="fw-bold">First Publish Year :</span> ${book.first_publish_year}</p>
            </div>
        </div>
        `;
        searchResult.appendChild(div)
    })
}