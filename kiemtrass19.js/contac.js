let listContact = [
    {
        id: 1,
        name: "hoàng văn em",
        std: "0945678901",
        email: "hoangvanem@email.com"
    },
    {
        id: 2,
        name: "hoàng văn em",
        std: "0945678901",
        email: "hoangvanem@email.com"
    },
    {
        id: 3,
        name: "hoàng văn em",
        std: "0945678901",
        email: "hoangvanem@email.com"
    },
    {
        id: 4,
        name: "hoàng văn em",
        std: "0945678901",
        email: "hoangvanem@email.com"
    },
    {
        id: 5,
        name: "hoàng văn em",
        std: "0945678901",
        email: "hoangvanem@email.com"
    },
    
];
const render = () => {
    let contactBody = document.querySelector("#contact-tbody");
    let renderProduct = listContact.map((p,index) => {
        return `
        <tr>
                <td>${p.id}</td>
                <td>${p.name}</td>
                <td>${p.std}</td>
                <td>${p.email}</td>
                <td>
                  <div class="action-buttons">
                    <button class="btn-edit" onclick="handlEdit(${index})">Sửa</button>
                    <button class="btn-delete" onclick="handlDelete(${index})">Xóa</button>
                  </div>
                </td>
              </tr>`;
    });
    contactBody.innerHTML = renderProduct.join("");
}
render();
const handlDelete = (i) => {
    listContact.splice(i,1);
    render();
} 
const handlEdit = (i) => {
    let formEdit = document.querySelector("#contact-form");
    formEdit.innerHTML = `
    <div class="form-group">
            <label for="contact-name">Họ tên:</label>
            <input
              type="text"
              id="contact-name"
              name="name"
              placeholder="${listContact[i].name}"
            />
          </div>

          <div class="form-group">
            <label for="contact-phone">Số điện thoại:</label>
            <input
              type="tel"
              id="contact-phone"
              name="phone"
              placeholder="${listContact[i].std}"
            />
          </div>

          <div class="form-group">
            <label for="contact-email">Email:</label>
            <input
              type="email"
              id="contact-email"
              name="email"
              placeholder="${listContact[i].email}"
            />
          </div>

          <button type="submit" class="btn-add">cập nhật</button>`;
    formEdit.addEventListener("submit", (e) => {
        e.preventDefault();
        let newName = document.querySelector("#contact-name");
        let newstd = document.querySelector("#contact-phone");
        let newEmail = document.querySelector("#contact-email");
        if (newName == "") {
        } else {
            listContact[i].name = newName.value ;
        }
        if (newstd == "") {
        } else {
            listContact[i].std = newstd.value ;
        }
        if (newEmail == "") {
        } else {
            listContact[i].email = newEmail.value ;
        }
        render();
        
    });
    render();
} 
