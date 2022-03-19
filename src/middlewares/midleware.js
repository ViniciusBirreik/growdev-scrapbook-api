"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.midVerifyId = exports.midVerifyFields = void 0;
const data_1 = require("../data/data");
function midVerifyFields(request, response, next) {
    const { description, detail } = request.body;
    if (!description || !detail) {
        return response.status(400).json({
            msg: "Fill in the fields correctly"
        });
    }
    next();
}
exports.midVerifyFields = midVerifyFields;
function midVerifyId(request, response, next) {
    const { id } = request.params;
    const item = data_1.errands.find((f) => parseInt(id) === f.id);
    if (!item) {
        return response.status(404).json({
            smg: "ID not found"
        });
    }
    next();
}
exports.midVerifyId = midVerifyId;
