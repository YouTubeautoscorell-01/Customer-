/* =====================================================
   RESTAURANT WEBSITE
   MAIN JAVASCRIPT

   IMPORTANT:
   This website has NO:
   - Add To Cart
   - Cart
   - Checkout
   - Quantity buttons
   - LocalStorage cart
===================================================== */



/* =====================================================
   MENU DATA
===================================================== */

const menuItems = [

    {
        name: "Paneer Tikka",
        price: 209,
        cat: "Starter",
        desc: "Smoked cottage cheese with aromatic spices"
    },

    {
        name: "Crispy Veg",
        price: 160,
        cat: "Starter",
        desc: "Crispy vegetables with chef special sauce"
    },

    {
        name: "Veg Manchurian",
        price: 180,
        cat: "Starter",
        desc: "Crispy vegetable balls with Chinese sauce"
    },

    {
        name: "Cheese Corn Balls",
        price: 190,
        cat: "Starter",
        desc: "Crispy cheese and corn bites"
    },



    {
        name: "Butter Paneer",
        price: 250,
        cat: "Main",
        desc: "Creamy tomato gravy with soft paneer"
    },

    {
        name: "Kadhai Paneer",
        price: 270,
        cat: "Main",
        desc: "Paneer with peppers and aromatic spices"
    },

    {
        name: "Veg Biryani",
        price: 280,
        cat: "Main",
        desc: "Fragrant basmati rice with fresh vegetables"
    },

    {
        name: "Dal Makhani",
        price: 150,
        cat: "Main",
        desc: "Slow cooked black lentils with butter"
    },

    {
        name: "Royal Thali",
        price: 250,
        cat: "Main",
        desc: "Complete traditional Indian dining experience"
    },

    {
        name: "Paneer Handi",
        price: 260,
        cat: "Main",
        desc: "Rich creamy paneer preparation"
    },



    {
        name: "Special Pizza",
        price: 240,
        cat: "Pizza",
        desc: "Cheese, vegetables and house seasoning"
    },

    {
        name: "Margherita Pizza",
        price: 220,
        cat: "Pizza",
        desc: "Tomato, mozzarella and fresh basil"
    },

    {
        name: "Farmhouse Pizza",
        price: 260,
        cat: "Pizza",
        desc: "Fresh vegetables with premium cheese"
    },

    {
        name: "Cheese Burst Pizza",
        price: 290,
        cat: "Pizza",
        desc: "Rich cheese with a delicious golden crust"
    },



    {
        name: "Gulab Jamun",
        price: 100,
        cat: "Dessert",
        desc: "Soft milk dumplings in sweet syrup"
    },

    {
        name: "Brownie",
        price: 150,
        cat: "Dessert",
        desc: "Warm chocolate brownie"
    },

    {
        name: "Rasmalai",
        price: 110,
        cat: "Dessert",
        desc: "Soft cheese dumplings in saffron milk"
    },

    {
        name: "Ice Cream",
        price: 90,
        cat: "Dessert",
        desc: "Creamy chilled dessert"
    },



    {
        name: "Cold Coffee",
        price: 80,
        cat: "Drink",
        desc: "Chilled creamy coffee"
    },

    {
        name: "Mango Shake",
        price: 90,
        cat: "Drink",
        desc: "Fresh mango blended with milk"
    },

    {
        name: "Fresh Lime",
        price: 70,
        cat: "Drink",
        desc: "Refreshing fresh lime cooler"
    },

    {
        name: "Masala Chaas",
        price: 60,
        cat: "Drink",
        desc: "Refreshing traditional buttermilk"
    }

];



/* =====================================================
   RENDER MENU
===================================================== */

function renderMenu(category = "All") {

    const menuGrid =
        document.getElementById("menuGrid");


    if (!menuGrid) {
        return;
    }


    let filteredItems;


    if (category === "All") {

        filteredItems = menuItems;

    } else {

        filteredItems =
            menuItems.filter(function(item) {

                return item.cat === category;

            });

    }


    menuGrid.innerHTML = "";


    filteredItems.forEach(function(item) {

        const menuItem =
            document.createElement("div");


        menuItem.className = "menu-item";


        /*
           IMPORTANT:

           No button.
           No cart.
           No quantity.
           No checkout.

           Only item information and price.
        */

        menuItem.innerHTML = `

            <div class="menu-item-info">

                <div class="menu-name">
                    ${item.name}
                </div>

                <div class="menu-desc">
                    ${item.desc}
                </div>

            </div>


            <div class="menu-price">
                ₹${item.price}
            </div>

        `;


        menuGrid.appendChild(menuItem);

    });

}



/* =====================================================
   MENU CATEGORY FILTER
===================================================== */

const categoryButtons =
    document.querySelectorAll(
        "#categories button"
    );


categoryButtons.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {


            categoryButtons.forEach(
                function(btn) {

                    btn.classList.remove(
                        "active"
                    );

                }
            );


            button.classList.add(
                "active"
            );


            const category =
                button.getAttribute(
                    "data-category"
                );


            renderMenu(category);

        }
    );

});



/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuButton =
    document.getElementById("menuBtn");


const navigation =
    document.getElementById("nav");


if (menuButton && navigation) {

    menuButton.addEventListener(
        "click",
        function() {

            navigation.classList.toggle(
                "show"
            );

        }
    );

}



/* =====================================================
   CLOSE MOBILE MENU AFTER LINK CLICK
===================================================== */

const navigationLinks =
    document.querySelectorAll(
        "#nav a"
    );


navigationLinks.forEach(
    function(link) {

        link.addEventListener(
            "click",
            function() {

                if (navigation) {

                    navigation.classList.remove(
                        "show"
                    );

                }

            }
        );

    }
);



/* =====================================================
   RESTAURANT GALLERY
===================================================== */

const galleryItems =
    document.querySelectorAll(
        ".gallery-item"
    );


const lightbox =
    document.getElementById(
        "lightbox"
    );


const lightboxImage =
    document.getElementById(
        "lightboxImage"
    );


const closeLightbox =
    document.getElementById(
        "closeLightbox"
    );



/* =====================================================
   OPEN GALLERY IMAGE
===================================================== */

galleryItems.forEach(
    function(item) {

        item.addEventListener(
            "click",
            function() {


                const imageURL =
                    item.getAttribute(
                        "data-full"
                    );


                if (
                    !imageURL ||
                    !lightbox ||
                    !lightboxImage
                ) {

                    return;

                }


                lightboxImage.src =
                    imageURL;


                lightbox.classList.add(
                    "show"
                );


                document.body.style.overflow =
                    "hidden";

            }
        );

    }
);



/* =====================================================
   CLOSE GALLERY
===================================================== */

function closeGallery() {

    if (lightbox) {

        lightbox.classList.remove(
            "show"
        );

    }


    document.body.style.overflow = "";

}



/* =====================================================
   CLOSE BUTTON
===================================================== */

if (closeLightbox) {

    closeLightbox.addEventListener(
        "click",
        closeGallery
    );

}



/* =====================================================
   CLOSE WHEN CLICKING OUTSIDE IMAGE
===================================================== */

if (lightbox) {

    lightbox.addEventListener(
        "click",
        function(event) {

            if (
                event.target === lightbox
            ) {

                closeGallery();

            }

        }
    );

}



/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeGallery();

        }

    }
);



/* =====================================================
   INITIAL MENU
===================================================== */

renderMenu("All");



/* =====================================================
   END
===================================================== */
