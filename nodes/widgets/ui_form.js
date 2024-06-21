const statestore = require('../store/state.js')

module.exports = function (RED) {
    function FormNode (config) {
        RED.nodes.createNode(this, config)

        const node = this

        const group = RED.nodes.getNode(config.group)
        if (!group) { return }

        const evts = {
            onAction: true,
            beforeSend: function (msg) {
                if (msg.ui_update) {
                    const update = msg.ui_update
                    if (typeof update.options !== 'undefined') {
                        // todo: sanity check options is valid format?

                        // dynamically set "options" property
                        statestore.set(group.getBase(), node, msg, 'options', update.options)
                    }
                }
                return msg
            }
        }

        // inform the dashboard UI that we are adding this node
        group.register(node, config, evts)
    }
    RED.nodes.registerType('ui-form', FormNode)
}
