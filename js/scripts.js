AOS.init({
    duration: 1200,
})
const ctx = document.getElementById("pieChart").getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut', data: {
        labels: ["do 9 lat", "9-15 lat", "15-18 lat", "18-30lat", ">30 lat"],
        datasets: [{
            data: [10000, 80000, 120000, 110000, 20000],
            backgroundColor: ["#0074D9", "#FF4136", "#2ECC40", "#FF851B", "#7FDBFF"]
        }]
    },
});

