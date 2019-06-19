export const SYNTAX_IF = '#if'
export const SYNTAX_ELSE = 'else'
export const SYNTAX_ELSE_IF = 'else if'
export const SYNTAX_EACH = '#each'
export const SYNTAX_PARTIAL = '#partial'
export const SYNTAX_IMPORT = '>'
export const SYNTAX_SPREAD = '...'
export const SYNTAX_COMMENT = /^!\s/

export const SLOT_DATA_PREFIX = '$slot_'
export const SLOT_NAME_DEFAULT = 'children'

export const HINT_STRING = 1
export const HINT_NUMBER = 2
export const HINT_BOOLEAN = 3

export const DIRECTIVE_ON = 'on'
export const DIRECTIVE_LAZY = 'lazy'
export const DIRECTIVE_MODEL = 'model'
export const DIRECTIVE_EVENT = 'event'
export const DIRECTIVE_BINDING = 'binding'
export const DIRECTIVE_CUSTOM = 'o'

export const MODEL_PROP_DEFAULT = 'value'

export const NAMESPACE_HOOK = '.hook'

export const HOOK_BEFORE_CREATE = 'beforeCreate'
export const HOOK_AFTER_CREATE = 'afterCreate'
export const HOOK_BEFORE_MOUNT = 'beforeMount'
export const HOOK_AFTER_MOUNT = 'afterMount'
export const HOOK_BEFORE_UPDATE = 'beforeUpdate'
export const HOOK_AFTER_UPDATE = 'afterUpdate'
export const HOOK_BEFORE_DESTROY = 'beforeDestroy'
export const HOOK_AFTER_DESTROY = 'afterDestroy'

// 路由钩子
export const HOOK_BEFORE_ROUTE_ENTER = 'beforeRouteEnter'
export const HOOK_AFTER_ROUTE_ENTER = 'afterRouteEnter'
export const HOOK_BEFORE_ROUTE_UPDATE = 'beforeRouteUpdate'
export const HOOK_AFTER_ROUTE_UPDATE = 'afterRouteUpdate'
export const HOOK_BEFORE_ROUTE_LEAVE = 'beforeRouteLeave'
export const HOOK_AFTER_ROUTE_LEAVE = 'afterRouteLeave'
