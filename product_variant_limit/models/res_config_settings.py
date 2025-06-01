from odoo import models, fields


class ResConfigSettings(models.TransientModel):
    _inherit = 'res.config.settings'

    dynamic_product_variant_limit = fields.Integer(
        config_parameter="product_variant_limit.dynamic_product_variant_limit", default=1000)
