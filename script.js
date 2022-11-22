const ctx = document.getElementById("myChart");

new Chart(ctx, {
    type: "line",
    data: {
        labels: ["Jun",'Feb','March','April','May','Jun',"July","Aug","Sept","Oct","Nov"],
        datasets: [
            {
                label:'BTC',
                data: [29374, 33537, 49631, 59095, 57828, 36684, 33572, 39974, 48847, 48116, 61004],
                borderColor: "red",
                borderWidth: 4
            },
            {
                label:"ETH",
                data: [31500, 41000, 88800, 26000, 46000, 32698, 5000, 3000, 18656, 24832, 36844],
                borderColor: "blue",
                borderWidth: 4
            }
        ]
    },
    options: {
        responsive: true
    }
  });

// show or hide sideBar

const menuBtnTag = document.getElementById("menu-btn");
const closeBtnTag = document.querySelector(".close-btn");
const sideBarTag = document.querySelector("aside");


menuBtnTag.addEventListener("click",() => {
    if(sideBarTag.classList.contains("openSidebar")){
    sideBarTag.style.display = "none";
    sideBarTag.classList.remove("openSidebar")
    } else {
        sideBarTag.style.display = "block";
        sideBarTag.classList.add("openSidebar")
    }
})

closeBtnTag.addEventListener("click",() => {
    sideBarTag.style.display = "none";
})

// change theme

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click",() => {
    document.body.classList.toggle("dark-theme");

    themeBtn.querySelector("span:first-child").classList.toggle("active");
    themeBtn.querySelector("span:last-child").classList.toggle("active");

})