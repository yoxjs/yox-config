export const SYNTAX_IF = '#if'
export const SYNTAX_ELSE = 'else'
export const SYNTAX_ELSE_IF = 'else if'
export const SYNTAX_EACH = '#each'
export const SYNTAX_PARTIAL = '#partial'
export const SYNTAX_IMPORT = '>'
export const SYNTAX_SPREAD = '...'
export const SYNTAX_COMMENT = /^!(?:\s|--)/

export const TAG_SLOT = 'slot'
export const TAG_PORTAL = 'portal'
export const TAG_FRAGMENT = 'fragment'
export const TAG_TEMPLATE = 'template'

export const ATTR_TO = 'to'
export const ATTR_KEY = 'key'
export const ATTR_REF = 'ref'
export const ATTR_SLOT = 'slot'
export const ATTR_NAME = 'name'

export const SLOT_DATA_PREFIX = '$slot_'
export const SLOT_NAME_DEFAULT = 'children'

export const HINT_STRING = 1
export const HINT_NUMBER = 2
export const HINT_BOOLEAN = 3

export const VNODE_TYPE_TEXT = 1
export const VNODE_TYPE_COMMENT = 2
export const VNODE_TYPE_ELEMENT = 3
export const VNODE_TYPE_COMPONENT = 4
export const VNODE_TYPE_FRAGMENT = 5
export const VNODE_TYPE_PORTAL = 6
export const VNODE_TYPE_SLOT = 7

export const DIRECTIVE_ON = 'on'
export const DIRECTIVE_LAZY = 'lazy'
export const DIRECTIVE_MODEL = 'model'
export const DIRECTIVE_EVENT = 'event'
export const DIRECTIVE_TRANSITION = 'transition'
export const DIRECTIVE_CUSTOM = 'o'

export const MODIFER_NATIVE = 'native'

export const MAGIC_VAR_SCOPE = '$scope'
export const MAGIC_VAR_KEYPATH = '$keypath'
export const MAGIC_VAR_LENGTH = '$length'
export const MAGIC_VAR_EVENT = '$event'
export const MAGIC_VAR_DATA = '$data'

export const MODEL_PROP_DEFAULT = 'value'

export const HOOK_BEFORE_CREATE = 'beforeCreate'
export const HOOK_AFTER_CREATE = 'afterCreate'
export const HOOK_BEFORE_MOUNT = 'beforeMount'
export const HOOK_AFTER_MOUNT = 'afterMount'
export const HOOK_BEFORE_UPDATE = 'beforeUpdate'
export const HOOK_AFTER_UPDATE = 'afterUpdate'
export const HOOK_BEFORE_DESTROY = 'beforeDestroy'
export const HOOK_AFTER_DESTROY = 'afterDestroy'

export const HOOK_BEFORE_PROPS_UPDATE = 'beforePropsUpdate'
