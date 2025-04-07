import fs from 'node:fs/promises';

// -------------  READ AND WRITE ---------

export async function getData() {
    try {
        let data = await fs.readFile("src/dummyDb.json", "utf-8");
        if (!data) {
            throw new Error("No products found")
        }
        return JSON.parse(data)
    } catch (error) {
        throw new Error(error.message || "Error with reading the file")
    }


}

export async function writeData(data) {
    let newData = JSON.stringify(data)
    try {
        await fs.writeFile("src/dummyDb.json", newData)
    } catch (error) {
        throw new Error("Could not save the data")
    }
}