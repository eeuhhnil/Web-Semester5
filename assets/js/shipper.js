window.addEventListener("load", async function() {
    const container = document.getElementById("shipper-infor")
    const template = this.document.getElementById("shipper-template")
    let users_list = []
    const shuffled = Math.floor(Math.random() * 2);
    let userApi;
    if (shuffled == 0) {
        userApi = 'https://jsonplaceholder.typicode.com/users?id_gte=7';
    }
    if (shuffled == 1) {
        userApi = 'https://jsonplaceholder.typicode.com/users?id_lte=6';
    }

    try {
        const response = await fetch(userApi);
        users_list = await response.json();

        if (users_list.length === 0) {
            const message = document.createElement("p");
            message.innerHTML = "There is no free shipper now!";
            message.classList.add("shipper-information__shipper-not-available-message");
            container.appendChild(message);
            return;
        }

        users_list.forEach(user => {
            const shipper_card = document.importNode(template.content, true);

            shipper_card.querySelector(".shipper-information__shipper-card__id").innerHTML = 'ID:\t' + user.id;
            shipper_card.querySelector(".shipper-information_shipper-card_name").innerHTML = user.name;
            shipper_card.querySelector(".shipper-information_shipper-card_phone").innerHTML = 'Phone:\t' + user.phone;
            shipper_card.querySelector(".shipper-information_shipper-card_email").innerHTML = 'Email:\t' + user.email;
            shipper_card.querySelector(".shipper-information_shipper-card_address").innerHTML = 'Address:\t' + user.address.zipcode + ', ' + user.address.street + ', ' + user.address.city;

            container.appendChild(shipper_card);
        });
    } catch (error) {
        const message = document.createElement("p");
        message.innerHTML = "Cannot load page";
        message.classList.add("error_message");
        container.appendChild(message);
    } finally {
        document.getElementsByClassName("preloader")[0].style.display = "none";
    }
});
