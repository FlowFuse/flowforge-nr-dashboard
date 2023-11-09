module.exports = function (RED) {
    /**
     *
     * @param {*} config
     */
    function UIThemeNode (config) {
        RED.nodes.createNode(this, config)
        const node = this

        // eslint-disable-next-line no-unused-vars
        const { id, name, type, _users, ...rest } = config
        node.colors = { ...rest.colors }
    }
    RED.nodes.registerType('ui-theme', UIThemeNode)
}
