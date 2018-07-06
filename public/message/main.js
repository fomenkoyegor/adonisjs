window.addEventListener('load', function () {

    const list = document.querySelector('.list');
    const title = document.querySelector('#title');
    const body = document.querySelector('#body');
    const btnSubmit = document.querySelector('#add');

    function UpdataList() {

        list.innerHTML = "";

        fetch('/api/posts')
            .then(res => res.json())
            .then(res => {

                let data = res.data;
                data = data.reverse();
                data.forEach((el) => {
                    list.innerHTML +=
                        `<li class='list-group-item'>
                                <p>${el.title}</p>
                                <p>${el.body}</p>
                                <button  class="btn btn-danger del" data-id="${el.id}" >del</button>
                         </li>`
                })
            })
    }

    function addPost() {
        fetch('/api/post', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify({title: title.value, body: body.value})
        }).then(res => {
            console.log(res);
            UpdataList();
        }).catch(err => console.log(err));
        title.value = "";
        body.value = "";
    }

    function deletePost(id) {
        fetch(`/api/post/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'delete',

        }).then(res => {
            console.log(res);
            UpdataList();
        }).catch(err => console.log(err));

    }

    list.addEventListener('click',function (e) {
        if (e.target.matches('.del')){
            deletePost(e.target.dataset.id)
        }
    });

    btnSubmit.addEventListener('click', function () {
        addPost()
    });

    UpdataList()

})