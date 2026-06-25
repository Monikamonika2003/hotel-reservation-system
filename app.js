// Select Logo
const logo = document.querySelector(".logo");

// Click Event
logo.addEventListener("click", function(){

    alert("Welcome to Royal Crown Hotel!");

});

// Page Load Animation
window.addEventListener("load", function(){

    logo.style.transform = "scale(1.2)";

    setTimeout(function(){
        logo.style.transform = "scale(1)";
    },500);

});

// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function(){
    navLinks.classList.toggle("active");
});

// Hero Button Click
const heroBtn = document.querySelector(".hero-btn");

heroBtn.addEventListener("click", function(){
    alert("Explore Our Luxury Rooms!");
});

// Book Button Click
const bookButtons = document.querySelectorAll(".book-btn");

bookButtons.forEach(function(button){
    button.addEventListener("click", function(){
        alert("Room Added For Booking!");
    });
});

// Booking Calculation
const calculateBtn = document.querySelector(".calculate-btn");

calculateBtn.addEventListener("click", function(){

    const checkin = new Date(document.getElementById("checkin").value);
    const checkout = new Date(document.getElementById("checkout").value);
    const pricePerNight = parseInt(document.getElementById("roomType").value);

    const result = document.getElementById("result");

    if(!checkin || !checkout){
        alert("Please select dates");
        return;
    }

    const timeDifference = checkout - checkin;
    const days = timeDifference / (1000 * 60 * 60 * 24);

    if(days <= 0){
        alert("Checkout date must be after checkin date");
        return;
    }

    const subtotal = days * pricePerNight;
    const gst = subtotal * 0.18;
    const total = subtotal + gst;

    result.innerText = 
        "Days: " + days + 
        " | Subtotal: ₹" + subtotal + 
        " | GST (18%): ₹" + gst.toFixed(0) + 
        " | Total: ₹" + total.toFixed(0);

});