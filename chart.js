var chartCtx = document.getElementById('createChart').getContext("2d");
var myRadarChart = new Chart(chartCtx, {
  type: 'radar',
  data: {
    labels: [
      'プログラミング',
      '3Dモデリング',
      'アニメーション',
      '画像、動画編集',
      '楽曲制作',
    ],
    datasets: [
      {
        data: [5, 3, 4, 4, 2],
        borderColor: 'rgba(221, 63, 82, 1)',
        backgroundColor: 'rgba(221, 63, 82, 0.5)',
      },
    ],
  },
  options: {
    responsive: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      r: {
        min: 0,
        max: 5,
        ticks: {
          stepSize: 1,
        },
        backgroundColor: 'snow',
        grid: {
          color: 'lightgray',
        },
        angleLines: {
          color: 'lightgray',
        },
        pointLabels: {
          color: 'black',
        },
      },
    },
  },
});

chartCtx = document.getElementById('programmingChart');
myRadarChart = new Chart(chartCtx, {
  type: 'radar',
  data: {
    labels: ['C', 'C#', 'Python', 'PHP', 'HTML/CSS', 'javascript', 'java'],
    datasets: [
      {
        data: [2, 5, 4, 2, 3, 2, 5],
        borderColor: 'rgba(63, 82, 221, 1)',
        backgroundColor: 'rgba(63, 82, 221, 0.5)',
      },
    ],
  },
  options: {
    responsive: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      r: {
        min: 0,
        max: 5,
        ticks: {
          stepSize: 1,
        },
        backgroundColor: 'snow',
        grid: {
          color: 'lightgray',
        },
        angleLines: {
          color: 'lightgray',
        },
        pointLabels: {
          color: 'black',
        },
      },
    },
  },
});
