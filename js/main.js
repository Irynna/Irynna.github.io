
(function() {
    'use strict';
    window.addEventListener('load', function() {
        var obj = [{
            "id": 0,
            "name": "Jacob",
            "surname": "Martin",
            "mail": "ex@gmail.com",
            "date": "1989-06-10",
            "phone": "0502856799"
        }, {
            "id": 1,
            "name": "Jacob2",
            "surname": "Martin2",
            "mail": "ex2@gmail.com",
            "date": "1990-08-08",
            "phone": "0502222799"
        }, {
            "id": 2,
            "name": "Jacob3",
            "surname": "Martin3",
            "mail": "ex3@gmail.com",
            "date": "1987-09-08",
            "phone": "0503356799"
        }, {
            "id": 3,
            "name": "Jacob4",
            "surname": "Martin4",
            "mail": "ex4@gmail.com",
            "date": "1996-01-28",
            "phone": "050999999"
        }];
        var forms = document.getElementsByClassName('check-validity');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            var phone = document.getElementById('phone');
            form.addEventListener('submit', function(event) {
                event.preventDefault();
                event.stopPropagation();
                if (form.checkValidity() === true) {

                    obj.push(createObj(obj.length,
                        document.getElementById("name").value,
                        document.getElementById("surname").value,
                        document.getElementById("mail").value,
                        document.getElementById("date").value,
                        document.getElementById("phone").value));
                    clearTable();
                    renderTable();
                    generateWiner(obj);
                }
                form.classList.add('was-validated');

            }, false);
        });


        var tbody = document.getElementById('tbody');
        function createObj (id, name, surname, mail, date, phone){
            var r = {
                id: id,
                name: name,
                surname: surname,
                mail: mail,
                date: date,
                phone: phone
            };
            return r;
        }
        function clearTable() {
            tbody.innerHTML = '';
        }
        function renderTable() {
            for (var i = 0; i < Object.keys(obj).length; i++) {
                var tr = "<tr>";
                tr += "<td>" + obj[i].id + "</td>" +
                    "<td>" + obj[i].name + "</td>" +
                    "<td>" + obj[i].surname + "</td>" +
                    "<td>" + obj[i].mail + "</td>" +
                    "<td>" + obj[i].date + "</td>" +
                    "<td>" + obj[i].phone + "</td></td></tr>";
                tbody.innerHTML += tr;
            }
        }
        function generateWiner(obj) {

            var c = tbody.childNodes;
            c[Math.floor(Math.random() * obj.length)].style.backgroundColor = "yellow";
            console.log(c.length);
        }
        renderTable();
    }, false);
})();
