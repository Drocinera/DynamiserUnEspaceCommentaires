function validateForm() {

    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var comment = document.getElementById('message').value;
    

    if (firstName === '' || lastName === '' || comment === '') {

      document.getElementById('error-message').style.display = 'block';
      /*Aucun message d'erreur ne s'affiche*/
    } else {
    
        var commentElement = document.createElement('div');
      commentElement.className = 'flex space-x-4 text-sm text-gray-500';
      commentElement.innerHTML = `
        <div class="flex-1 py-10 border-t border-gray-200">
          <h3 class="font-medium text-gray-900">${firstName} + '' + ${lastName}</h3>
          <div class="prose prose-sm mt-4 max-w-none text-gray-500">
            <p>${comment}</p>
          </div>
        </div>
      `;

      document.getElementById('comment-list').appendChild(commentElement);; /* Aucun commentaire ne s'envoie*/
    }

    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('message').value = '';

    document.getElementById('errorMessage').style.display = 'none';
  }





