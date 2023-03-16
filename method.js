const postBtn = document.getElementById('postBtn');
const getBtn = document.getElementById('getBtn');
const putBtn = document.getElementById('putBtn');
const deleteBtn = document.getElementById('deleteBtn');
const dateSpan = document.getElementById('date');
const output = document.getElementById('output');

function postData() {
  const data = {
    id: document.getElementById('id').value,
    article_name: document.getElementById('article_name').value,
    article_body: document.getElementById('article_body').value,
    date: new Date().toISOString()
  };

  fetch('https://httpbin.org/post', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'X-Sent-By': 'javascript'
    }
  })
    .then(response => response.json())
    .then(data => {
      output.innerHTML = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Request failed.', error));
}

function getData() {
  fetch('https://httpbin.org/get')
    .then(response => response.json())
    .then(data => {
      output.innerHTML = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Request failed.', error));
}

function putData() {
  const data = {
    id: document.getElementById('id').value,
    article_name: document.getElementById('article_name').value,
    article_body: document.getElementById('article_body').value,
    date: new Date().toISOString()
  };

  fetch('https://httpbin.org/put', {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'X-Sent-By': 'javascript'
    }
  })
    .then(response => response.json())
    .then(data => {
      output.innerHTML = JSON.stringify(data,null,2);
    })
    .catch(error => console.error('Request failed.', error));
}

function deleteData() {
  const id = document.getElementById('id').value;

  fetch('https://httpbin.org/delete', {
    method: 'DELETE',
    headers: {'Authorization': 'KMC'},
    body: id
  })
    .then(response => response.json())
    .then(data => {
      output.innerHTML = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Request failed.', error));
}

postBtn.addEventListener('click', postData);
getBtn.addEventListener('click', getData);
putBtn.addEventListener('click', putData);
deleteBtn.addEventListener('click', deleteData);

dateSpan.textContent = new Date().toISOString();
