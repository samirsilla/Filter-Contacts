document.getElementById('search-input').addEventListener('input', filterContacts);
var contactsList = document.getElementById('contacts-list');
var contactsItem = document.getElementsByTagName('li');

function filterContacts(e) {
  var i = 0;
  let searchValue = e.target.value;

  for (; i < contactsItem.length; i++) {
    console.log(contactsItem[i].innerText);

    if (contactsItem[i].innerText.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) {
      // Keep the items on display
      contactsItem[i].style.display = 'block';
     } else {
      contactsItem[i].style.display = 'none';
    }
  }
}