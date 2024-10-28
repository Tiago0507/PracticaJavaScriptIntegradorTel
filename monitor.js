// const getEvaluationById = async (id) => {
//     let response = await fetch(`http://localhost:8080/evaluation/${id}`);
//     let object = await response.json();
//     console.log(object);
// }

// getEvaluationById(1);

new Chart(ctx, {
    
}) config = {
    type: 'scatter',
    data: [{
        x: 10,
        y: 20
    }, {
        x: 15,
        y: 10
    }],
    options: {
      scales: {
        x: {
          type: 'linear',
          position: 'bottom'
        }
      }
    }
  };