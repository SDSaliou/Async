// Task 01:

// Iterate with Async/Await: Write an async function iterateWithAsyncAwait that takes an array of values ​​and logs each value with a 1 second delay between logs.

async function iterateWithAsyncAwait(array) {
    for (const value of array) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000)); //  délai de 1 seconde
    }
}

// exemple
iterateWithAsyncAwait(['madd', 'mangue', 'fraise']);

// Task 02:

//Wait for a call: Create an asynchronous awaitCall function that simulates getting data from an API. Use await to wait for the API response, then save the data.

async function awaitCall() {
    try {
        // Simuler l'obtention de données à partir d'une API
        const response = await new Promise((resolve, reject) => {
            setTimeout(() => resolve('Data from API'), 3000); // Simulate 3-second delay
        });
        console.log(response);
        return response; // enregistrer
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Exemple
awaitCall();

// Task 04:

//Waiting for concurrent requests: Create an asynchronous concurrentRequests function that makes two API calls simultaneously using Promise.all() . Save the combined results after both requests are resolved.

async function concurrentRequests() {
    const apiCall1 = new Promise(resolve => {
        setTimeout(() => resolve('Result  API 1'), 1000); // Simule reponse API 
    });

    const apiCall2 = new Promise(resolve => {
        setTimeout(() => resolve('Result API 2'), 2000); // Simule reponse API 
    });

    const results = await Promise.all([apiCall1, apiCall2]);
    console.log('Combine des Results:', results);
}

// Exemple
concurrentRequests();
