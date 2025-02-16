import fs from "fs";
import path from "path";

const loadData = (fileName: string) => {
    const filePath = path.join(__dirname, "data", fileName);
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
};

export const searchInData = (query: string) => {
    const files = ["equipments.json", "materials.json", "purchase_orders.json", "sales_orders.json", "workforce.json"];
    let results: any[] = [];
    
    files.forEach((file) => {
        const data = loadData(file);
        const filtered = data.filter((item:any) =>
        JSON.stringify(item).toLowerCase().includes(query.toLowerCase())
    );
    results = [...results, ...filtered];
    });

    return results;

};