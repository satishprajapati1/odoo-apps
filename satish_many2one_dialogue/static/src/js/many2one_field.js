import { patch } from "@web/core/utils/patch";
import { Many2OneField } from "@web/views/fields/many2one/many2one_field";
// To Always Open Many2one in a Dialog
const many2onePatch = {
    onExternalBtnClick() {
        this.openDialog(this.resId);
    },
};

patch(Many2OneField.prototype, many2onePatch);