// const thumbUp = document.getElementsByClassName("fa-thumbs-up");
// const thumbDown = document.getElementsByClassName("fa-thumbs-down");
// const trash = document.getElementsByClassName("fa-trash-o");

// Array.from(thumbUp).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//         fetch('messages', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg,
//             'thumbUp':thumbUp 
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });
// });

// Array.from(thumbDown).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//         fetch('direction', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg,
//             'thumbUp':thumbDown
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });
// });

// Array.from(trash).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         fetch('messages', {
//           method: 'delete',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg
//           })
//         }).then(function (response) {
//           window.location.reload()
//         })
//       });
// });






let thumbUp = document.getElementsByClassName("fa-thumbs-up");
let thumbDown = document.getElementsByClassName("fa-thumbs-down");
let trash = document.getElementsByClassName("fa-trash");

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const id = this.parentNode.parentNode.childNodes[1].dataset.userId
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('like', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'thumbUp': thumbUp,
            'id': id
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(thumbDown).forEach(function(element) {
      element.addEventListener('click', function(){
        const id = this.parentNode.parentNode.childNodes[1].dataset.userId
        const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[6].innerText)
        fetch('dislike', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'thumbDown':thumbDown,
            'id': id
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const id = this.parentNode.parentNode.childNodes[1].dataset.userId
        fetch('trash', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'id' : id
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});