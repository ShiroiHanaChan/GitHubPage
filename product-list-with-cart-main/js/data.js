export let data;
const dataLoaded = new Event('dataLoaded');

(async function importJSON() {
    const path = '../data.json'
    try {
        const response = await fetch(path);
        if (!response.ok)
            throw new Error(`${response.status}`);
        data = await response.json();
        window.dispatchEvent(dataLoaded);
    } catch (error) {
        console.log(error.message);
    }
    return data;
})();