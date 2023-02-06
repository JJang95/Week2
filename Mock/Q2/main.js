// Question Description
// Implement the calculateArea function. The calculateArea takes an array of shape object (contains type and edge attribute), based on the type, the function will 
// calculate the areas accordingly and return the result after 2s (simulate the API response waiting time). Assume the input is always valid.

function calculateArea(shapes) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            try {
            const areas = shapes.map(shape => {

                switch (shape.type) {
                case 'SQUARE':
                    return shape.edge[0] ** 2;
                case 'TRIANGLE':
                    return (shape.edge[0] * shape.edge[1]) / 2;
                case 'CIRCLE':
                    return 3.14 * (shape.edge[0] ** 2);
                }
            });

            resolve(areas);
            } catch (err) {
            reject(err);
            }
            
        }, 2000);
    });
}

//test

const shapes = [
    {type:'SQUARE',edge:[4]},
    {type:'TRIANGLE',edge:[3,4]},
    { type: 'CIRCLE', edge: [1] },
]

calculateArea(shapes).then( res => console.log(res)).catch(err => console.log(err));