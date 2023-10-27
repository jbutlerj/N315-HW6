// declare variables
var SUPPLIES = [
    {
        name: "Hiking Bag",
        thumbIMG: "bag-thumb.jpg",
        fullIMG: "bag-full.jpg",
        briefDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eveniet?",
        fullDesc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit voluptatibus inventore enim sit officia cum. Illum blanditiis enim, reiciendis rem ut nemo provident molestias. Modi ullam ex laborum sint laboriosam quam praesentium similique voluptate magnam?",
        price: "$79.99",
    },
    {
        name: "Hiking Boots",
        thumbIMG: "boots-thumb.jpg",
        fullIMG: "boots-full.jpg",
        briefDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eveniet?",
        fullDesc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit voluptatibus inventore enim sit officia cum. Illum blanditiis enim, reiciendis rem ut nemo provident molestias. Modi ullam ex laborum sint laboriosam quam praesentium similique voluptate magnam?",
        price: "$89.99",
    },
    {
        name: "Camp Stove",
        thumbIMG: "camp-stove-thumb.jpg",
        fullIMG: "camp-stove-full.jpg",
        briefDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eveniet?",
        fullDesc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit voluptatibus inventore enim sit officia cum. Illum blanditiis enim, reiciendis rem ut nemo provident molestias. Modi ullam ex laborum sint laboriosam quam praesentium similique voluptate magnam?",
        price: "$39.99",
    },
    {
        name: "Camp Coffee Kit",
        thumbIMG: "coffee-kit-thumb.jpg",
        fullIMG: "coffee-kit-full.jpg",
        briefDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eveniet?",
        fullDesc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit voluptatibus inventore enim sit officia cum. Illum blanditiis enim, reiciendis rem ut nemo provident molestias. Modi ullam ex laborum sint laboriosam quam praesentium similique voluptate magnam?",
        price: "$29.99",
    },
    {
        name: "Flint Fire Starter",
        thumbIMG: "flint-fire-starter-thumb.jpg",
        fullIMG: "flint-fire-starter-full.jpg",
        briefDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eveniet?",
        fullDesc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit voluptatibus inventore enim sit officia cum. Illum blanditiis enim, reiciendis rem ut nemo provident molestias. Modi ullam ex laborum sint laboriosam quam praesentium similique voluptate magnam?",
        price: "$14.99",
    },
    {
        name: "Lantern",
        thumbIMG: "lantern-thumb.jpg",
        fullIMG: "lantern-full.jpg",
        briefDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eveniet?",
        fullDesc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit voluptatibus inventore enim sit officia cum. Illum blanditiis enim, reiciendis rem ut nemo provident molestias. Modi ullam ex laborum sint laboriosam quam praesentium similique voluptate magnam?",
        price: "$39.99",
    },
    {
        name: "Raised Tent",
        thumbIMG: "raised-tent-thumb.jpg",
        fullIMG: "raised-tent-full.jpg",
        briefDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eveniet?",
        fullDesc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit voluptatibus inventore enim sit officia cum. Illum blanditiis enim, reiciendis rem ut nemo provident molestias. Modi ullam ex laborum sint laboriosam quam praesentium similique voluptate magnam?",
        price: "$449.99",
    },
    {
        name: "Sleeping Bag",
        thumbIMG: "sleeping-bag-thumb.jpg",
        fullIMG: "sleeping-bag-full.jpg",
        briefDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eveniet?",
        fullDesc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit voluptatibus inventore enim sit officia cum. Illum blanditiis enim, reiciendis rem ut nemo provident molestias. Modi ullam ex laborum sint laboriosam quam praesentium similique voluptate magnam?",
        price: "$119.99",
    },
    {
        name: "Smores Kit",
        thumbIMG: "smore-kit-thumb.jpg",
        fullIMG: "smore-kit-full.jpg",
        briefDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eveniet?",
        fullDesc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit voluptatibus inventore enim sit officia cum. Illum blanditiis enim, reiciendis rem ut nemo provident molestias. Modi ullam ex laborum sint laboriosam quam praesentium similique voluptate magnam?",
        price: "$24.99",
    },
    {
        name: "Standard Tent",
        thumbIMG: "tent-thumb.jpg",
        fullIMG: "tent-full.jpg",
        briefDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eveniet?",
        fullDesc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit voluptatibus inventore enim sit officia cum. Illum blanditiis enim, reiciendis rem ut nemo provident molestias. Modi ullam ex laborum sint laboriosam quam praesentium similique voluptate magnam?",
        price: "$199.99",
    },
]

// function export to app - loads data from JSON variable SUPPLIES
export function loadData() {
    $.each(SUPPLIES, function(idx, item){
        $("#app").append(`<div id="${idx}" class="item-holder">
        <h4>${item.name}</h4>
        <div class="item-image">
          <img src="images/thumbnails/${item.thumbIMG}" alt="${item.name}" />
        </div>
        <div class="description">
          <div class="brief-des">
          ${item.briefDesc}
          </div>
          <div class="price">Price: ${item.price}</div>
        </div>
      </div>`);
    });

    initListeners();
}

function initListeners() {

    // shows full page popout of item when clicked
   $(".item-holder").click(function (e) {
        let itemIndex = e.currentTarget.id;
        console.log(itemIndex);
        $("#app").html(`<div class="item-popout">
        <div class="left">
          <img src="images/full/${SUPPLIES[itemIndex].fullIMG}" alt="${SUPPLIES[itemIndex].name}" />
        </div>
        <div class="right">
          <div class="top">
            <h3>${SUPPLIES[itemIndex].name}</h3>
            <h3>${SUPPLIES[itemIndex].price}</h3>
          </div>
          <p>${SUPPLIES[itemIndex].fullDesc}</p>
          <div class="close">close</div>
        </div>
      </div>`)

      addCloseListener();
    });
}

function addCloseListener () {

    // returns to original view when close button clicked
    $(".close").click(function () {
        $("#app").html("");
        loadData();
    })
}