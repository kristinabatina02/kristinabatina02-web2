var products = [];
var categories = [];
var brends = [];


window.onload = function(){
    function ajaxCallBack(nameFile, result){
        $.ajax({
            url: "json/" + nameFile + ".json",
            method: "get",
            dataType: "json",
            success: function(data){
                result(data);
            },
            error: function(xhr, error, status){
                console.error(xhr);
            }
        });
    }
    var url = window.location.pathname;
    url = url.substring(url.lastIndexOf('/'));

    if(url == "/shop.html"){
        // ajaxCallBack("menu", function(result){
        //     showMenu(result, id);
        // });
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
        pomId = params.cat;
        ajaxCallBack("categories", function (result) {
            showCategoryFilter(result, params.cat)
        });
        
        ajaxCallBack("brends", showBrendsFilter);
        ajaxCallBack("products", showProducts);
    }
    if (url == "/" || url == "/store.html") {
        // ajaxCallBack("menu", function(result){
        //     showMenu(result, id);
        // })
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
        pomId = params.id;
        ajaxCallBack("categories", fetchCategories)
        ajaxCallBack("brends", fetchBrands)
        ajaxCallBack("products", function(result){
            detailedShowProducts(result, params.id)
        })
        ajaxCallBack("products", fetchProducts)
    }

}
function fetchBrands(br){
    for(b of br){
        brends.push(b);
    }
}

/* Funkcija za odabir kolicine proizvoda unutar store.html */
function counter() {
    var proQty = $(".pro-qty");
    proQty.prepend('<span onclick="" class="dec qtybtn minus">-</span>');
    proQty.append('<span class="inc qtybtn plus">+</span>');
    proQty.on("click", ".qtybtn", function () {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.hasClass("inc")) {
        var newVal = parseFloat(oldValue) + 1;
        } else {
        // Don't allow decrementing below zero
        if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
        } else {
        newVal = 0;
        }
        }
        $button.parent().find("input").val(newVal);
    });
}
function detailedShowProducts(niz, id){
        let html = ``;
        for(let n of niz){
        let product = niz.find(x => x.id == id)
            html += `<div class="content-wraper">
            <div class="container">
                <div class="row single-product-area">
                    <div class="col-lg-5 col-md-6">
                        <div class="product-details-left">
                            <div class="product-details-images slider-navigation-1">
                                <div class="lg-image">
                                    <a class="popup-img venobox vbox-item" href="images/product/${n.images.src}" data-gall="myGallery">
                                        <img src="${n.images[0].src}" alt="${n.images[0].alt}">
                                    </a>
                                </div>
                                <div class="product-details-thumbs slider-thumbs-1">                                        
                                    <div class="sm-image"><img src="${n.images[1].src}" alt="products.images[0].alt"></div>
                                </div>
                           </div>
                        </div>
                        <div class="col-lg-7 col-md-6">
                        <div class="product-details-view-content pt-60">
                            <div class="product-info">
                                <h2>${n.name}</h2>
                                    <div class="rating-box pt-20">
                                        <ul class="rating rating-with-review-item">
                                            <li>${numberStar(n.numberStar)}</li>
                                            
                                        </ul>
                                    </div>
                                    <div class="price-box pt-20">
                                        <span class="new-price new-price-2">${n.price.current}</span>
                                    </div>
                                    <div class="product-desc">
                                        <p>
                                            <span>${n.description}</span>
                                        </p>
                                    </div>
                                    <div class="single-add-to-cart">
                                        <form action="#" class="cart-quantity">
                                            <div class="quantity">
                                                <label>Quantity</label>
                                                <div class="cart-plus-minus">
                                                    <input class="cart-plus-minus-box" value="1" type="text">
                                                    <div class="dec qtybutton"><i class="fa fa-angle-down"></i></div>
                                                    <div class="inc qtybutton"><i class="fa fa-angle-up"></i></div>
                                                </div>
                                            </div>
                                            <button class="add-to-cart" type="submit">Add to cart</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        }
        return html;
}

//         for (let i = 0; i < 3; i++) {
//             html2 += `
//             <div class="smallBlockPicture">
// 				<img class="w-inherit smallPicture" src="${products.images[i].src}" alt="${products.images[i].alt}">
// 			</div>
//             `
//         }
//         html3 += `
//             <h2 class="product-name">${products.name}</h2>
//             <div>
//                 ${numberStar(products.numberStar)}
//             </div>
//             <div>
//                 <h3 class="product-price">${products.price.current}<del class="product-old-price">${product.price.priceBeforeDiscount}</del></h3>
//                 <span class="product-available">${inStocks(products.inStocks)}</span>
//             </div>`

//         if (inStocks(products.inStocks) == "In stocks")
//             html3 += `
//             <div class="add-to-cart">
//                 <button onclick="buttonAddCart(${pomId})"  class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> Add to cart</button>
//             </div>

//             <div class="productdetailsquantity">
//                 <div class="quantity">
//                   <div class="pro-qty">
//                     <input id="quantity" type="text" value="1" />
//                   </div>
//                 </div>
//             </div>
//             `

//         html3 += `<ul>
//                 <li><b>Proizvodjac:</b> ${showBrand(products.brendId)} </li>
//                 <li><b>Garancija:</b> 2 godine</li>
//                 <li><b>Description:</b> ${description(products.description)}</i></li>
//                 <li></li>
//             </ul>

//             <ul class="product-links">
//                 <li><b>Category:</b> ${fetchCategories(products.categoryId)}</li>
//             </ul>
//         `

//         $("#bigPicture").html(html1);
//         $("#smallPicture").html(html2);
//         $("#detailsProducts").html(html3);

//         printingTable(proizvod.karakteristike)
//         let xd = $(".smallPicture");
//         for (let i = 0; i < xd.length; i++) {
//             xd[i].addEventListener("click", () => {
//                 fetchSmallPicture(xd[i])
//             })
//         }
//         counter();
//     }

    /* Funkcija za ispisivanje tabele sa svim karakteristikama proizvoda */
    function printingTable(obj) {
        html = ``;
        for (key in obj) {
            html += `
             <tr>
                 <th scope="row">${key}</th>
                 <td>${obj[key]}</td>
             </tr>
             `
        }
        $("#bodyTable").html(html)

    }

    /* Funkcija za zamenu velike slicice sa slikom iz manje slicice */
    function fetchSmallPicture(n) {
        $("#bigPicture").attr("src", n.src);
    }


    /* Ispis brenda product.html */
    function showBrand(id) {
        html = ``;
        for (b of brends) {
            if (b.id == id)
                html += b.name;
        }
        return html;
    }
    function inStocks(state) {
        let html = ``;
        if (state)
            html += "In stock";
        else
            html += "It is not available";
        return html;
    }

    /* Funkcija za ispisivanje checkbox kategorija na shop stranici */
    function showCategoryFilter(niz, id) {
        let html = ``;
        if (id == undefined) {
            for (n of niz) {
                categories.push(n)
                html += `
                    <div class="input-checkbox">
                        <input class="categories-check" type="checkbox" value="${n.id}" id="categories${n.id}">
                        <label for="categories${n.id}">
                            <span></span>
                            ${n.name}
                            
                        </label>
                    </div>
                `;
            }
        }
        else {
            for (n of niz) {
                html += `
                <div class="input-checkbox">
                `
                if (n.id == id)
                    html += `
                    <input class="categories-check" checked type="checkbox" value="${n.id}" id="categories${n.id}">
                    `;
                else
                    html += `<input class="categories-check" type="checkbox" value="${n.id}" id="categories${n.id}">`

                html += `
                <label for="categories${n.id}">
                <span></span>
                ${n.name}
                
            </label>
        </div>
                `
            }
        }
        $("#categories").html(html);
    }

    /* Funkcija za ispisivanje brendova i scheckboksova */
    function showBrendsFilter(niz) {
        let html = ``;
        for (n of niz) {
            brends.push(n)
            html += `
                <div class="input-checkbox">
                    <input class="brends-check" type="checkbox" value="${n.id}" id="brends${n.id}">
                    <label for="brends${n.id}">
                        <span></span>
                        ${n.name}                    
                    </label>
                </div>
            `;
        }
        $("#brands").html(html);

    }

    /* DOhvatanje svih proizvoda */
    function fetchProducts(niz) {
        for (let i = 0; i < niz.length; i++) {
            products.push(niz[i])
        }
    }

    /* Funkcija za ispisivanje proizvoda unutar stranice store.html */
    function showProducts(niz) {
        let html = ``;
        niz = sortProducts(niz);
        niz = filterByCategory(niz);
        niz = filterByBrands(niz);
        if (niz.length == 0)
            html = `<h2 class="alert-danger">Sorry, we have no products with the selected features.</h2>`
        for (x of niz) {
            products.push(x)
            html += `
            <a href="shop.html?id=${x.id}&"><div class="col-lg-4 col-md-4 col-sm-6 mt-40">
            <div class="single-product-wrap">
                <div class="product-image">
                        <img src="${x.images[0].src}" alt="${x.images[0].name}" class="img-fluid">
                        <span class="sticker">${isItNew(x.new)}</span>
                </div>
                <div class="product_desc">
                    <div class="product_desc_info">
                        <div class="product-review">
                            <h5 class="manufacturer">
                                ${showCategoriesList(x.categoryId)}
                            </h5>
                            <div class="rating-box">
                                ${numberStar(x.numberStar)}
                            </div>
                        </div>
                        <h4><a class="product_name" href="store.html">${x.name}</a></h4>
                            <div class="price-box">
                                <span class="new-price">$${x.price.current}</span>
                                <del class="product-old-price">${x.price.priceBeforeDiscount}</del>
                             </div>
                    </div>
                            <div class="add-actions">
                                <ul class="add-actions-link">
                                    <li class="add-cart active"><a href="shopping-cart.html">Add to cart</a></li>
                                    <li><a class="links-details" href="wishlist.html"><i class="fa fa-heart-o"></i></a></li>
                                </ul>
                            </div>
                    </div>
                </div>
            </div></a>
            `
        }
        $("#products").html(html);
    }

    /* Funkcija za ispis broja zvezdica proizvoda */
    function numberStar(br) {
        let html = `<div class="product-rating">`;
        for (let i = 0; i < br; i++) {
            html += `<i class="fa fa-star"></i>`;
        }
        html += `</div>`;
        return html;
    }

    /* Funkcija koja ispisuje da li je proizvod nov */
    function isItNew(nov) {
        let html = `<div class="product-label">`;
        if (nov)
            html += `<span class="new">NEW</span>`;
        
        html += `</div>`
        return html;
    }

    /* Dohvatanje svih kategorija iz jsona */
    function fetchCategories(nizKategorija) {
        for (n of categories)
            categories.push(n)
    }

    /* Ispis kategorije unutar proizvoda */
    function showCategoriesList(id) {
        let html = ``;
        categories.forEach(element => {
            if (element.id == id)
                html += element.name
        })
        return html;

    }

    // function sortProducts(niz) {
    //     let x = $("#sort").val();
    //     if (x == 0) {
    //         niz.sort((a, b) => (a.price.current > b.price.current) ? 1 : -1);
    //     }
    //     else if (x == 1) {
    //         niz.sort((a, b) => (a.price.current < b.price.current) ? 1 : -1);
    //     }
    //     else if (x == 2) {
    //         niz.sort((a, b) => (a.numberStar < b.numberStar) ? 1 : -1);
    //     }
    //     else if (x == 3) {
    //         niz.sort((a, b) => (a.name > b.name) ? 1 : -1);
    //     }
    //     else if (x == 4) {
    //         niz.sort((a, b) => (a.name < b.name) ? 1 : -1);
    //     }
    //     return niz;
    // }

    function sortProducts(niz){
        let sortedProducts = [];
        let x = $("#sort").val();
    
        if(x == "0"){
            sortedProducts = niz;
        }
        else{
            sortedProducts = niz.sort(function(a, b){
                if(x == 1){
                    return a.price.current - b.price.current;
                }
                if(x == 2){
                    return b.price.current - a.price.current;
                }
                if(x == 4){
                    if(a.name < b.name){
                        return -1;
                    }
                    else if(a.name > b.name){
                        return 1;
                    }
                    else{
                        return 0;
                    }
                }
                if(x == 5){
                    if(a.name > b.name){
                        return -1;
                    }
                    else if(a.name < b.name){
                        return 1;
                    }
                    else{
                        return 0;
                    }
                }   
            })
        }
        return sortedProducts;
    }

    /* Funkcija za filtriranje proizvoda po kategorijama */
    // function filterByCategory(niz) {
    //     let checkedCategory = [];
    //     for (let i = 0; i < $(".categories-check:checked").length; i++)
    //         checkedCategory.push(parseInt($(".categories-check:checked")[i].value))
    //     if (checkedCategory.length != 0)
    //         return niz.filter((x) => checkedCategory.includes(x.categoryId));
    //     return niz;
    // }

    function filterByCategory(niz) {
        let checkedCategory = [];
        $('.categories-check:checked').each(function(el){
            checkedCategory.push(parseInt($this).val());
        });
        if (checkedCategory.length != 0)
            return niz.filter(x => x.categories.some(y => checkedCategory).includes(y));
        return niz;
    }

    /* Funkcija za filtriranje prema brendovima */
    function filterByBrands(niz) {
        let checkedBrend = [];
        for (let i = 0; i < $(".brends-check:checked").length; i++)
        checkedBrend.push(parseInt($(".brends-check:checked")[i].value));
        if (checkedBrend.length != 0)
            return niz.filter((x) => checkedBrend.includes(x.brendId));
        return niz;
    }

    /* Ispis menija na svakoj strani */
    // function showMenu(niz, index) {
    //     let html = ``;
    //     for (let i = 0; i < niz.length; i++) {
    //         if (niz[i].id == index) {
    //             html += `<li class="active"><a href="${niz[i].href}">${niz[i].name}</a></li>`;
    //         } else {
    //             html += `<li><a href="${niz[i].href}">${niz[i].name}</a></li>`;
    //         }
    //     }
    //     html += `</ul>`;
    //     $("#responsive-nav").html(html);
    // }



