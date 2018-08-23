import {ExcelOOXMLTemplate} from '../../interfaces/iExcel';

const sheet: ExcelOOXMLTemplate = {
    getTemplate() {
        return {
            name: "sheet",
            properties: {
                rawMap: {
                    "state": "visible",
                    "name": "Sheet1",
                    "sheetId": "1",
                    "r:id": "rId3"
                }
            }
        };
    }
};

export default sheet;