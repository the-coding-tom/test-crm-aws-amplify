import Vue from 'vue'

// window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
if (process.client) {
  window.onNuxtReadyCbs = []
  window.onNuxtReady = (cb) => {
    window.onNuxtReadyCbs.push(cb)
  }
}

export function empty () {}

export function globalHandleError (error) {
  if (Vue.config.errorHandler) {
    Vue.config.errorHandler(error)
  }
}

export function interopDefault (promise) {
  return promise.then(m => m.default || m)
}

export function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length
}
export function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || []
  for (const child of children) {
    if (child.$fetch) {
      instances.push(child)
      continue; // Don't get the children since it will reload the template
    }
    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances)
    }
  }
  return instances
}

export function applyAsyncData (Component, asyncData) {
  if (
    // For SSR, we once all this function without second param to just apply asyncData
    // Prevent doing this for each SSR request
    !asyncData && Component.options.__hasNuxtData
  ) {
    return
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () { return {} }
  Component.options._originDataFn = ComponentData

  Component.options.data = function () {
    const data = ComponentData.call(this, this)
    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid]
    }
    return { ...data, ...asyncData }
  }

  Component.options.__hasNuxtData = true

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data
  }
}

export function sanitizeComponent (Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component
  }
  if (!Component.options) {
    Component = Vue.extend(Component) // fix issue #6
    Component._Ctor = Component
  } else {
    Component._Ctor = Component
    Component.extendOptions = Component.options
  }
  // If no component name defined, set file path as name, (also fixes #5703)
  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file
  }
  return Component
}

export function getMatchedComponents (route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map((key) => {
      matches && matches.push(index)
      return m[prop][key]
    })
  }))
}

export function getMatchedComponentsInstances (route, matches = false) {
  return getMatchedComponents(route, matches, 'instances')
}

export function flatMapComponents (route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index))
      } else {
        delete m.components[key]
      }
      return promises
    }, [])
  }))
}

export function resolveRouteComponents (route, fn) {
  return Promise.all(
    flatMapComponents(route, async (Component, instance, match, key) => {
      // If component is a function, resolve it
      if (typeof Component === 'function' && !Component.options) {
        Component = await Component()
      }
      match.components[key] = Component = sanitizeComponent(Component)
      return typeof fn === 'function' ? fn(Component, instance, match, key) : Component
    })
  )
}

export async function getRouteData (route) {
  if (!route) {
    return
  }
  // Make sure the components are resolved (code-splitting)
  await resolveRouteComponents(route)
  // Send back a copy of route with meta based on Component definition
  return {
    ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta, ...(route.matched[index] || {}).meta }
    })
  }
}

export async function setContext (app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: process.static,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: '/',
      env: {"publishable_key":"pk_test_EldDf62abr3QSC1ju7jhfdAs","secret_key":"sk_test_On1uFFOK31r2vCBDSH1ofldL","base_url":"https://api.shack15.com/api/v1","staging_base_url":"http://staging.bdgic76uiy.us-east-1.elasticbeanstalk.com/api/v1","square_app_id":"sq0idp-vX9ROmcOKd8kjXRXOuxbbg","square_location":"1883YH8CHHJM4","npm_package_devDependencies_prettier":"1.14.3","npm_package_devDependencies_identity_obj_proxy":"^3.0.0","npm_package_dependencies_moment_timezone":"^0.5.27","TERM_PROGRAM":"vscode","rvm_bin_path":"/Users/tom/.rvm/bin","npm_package_dependencies_vue2_filters":"^0.8.0-beta.1","NODE":"/usr/local/bin/node","INIT_CWD":"/Users/tom/Documents/shack15/shack15-crm","npm_config_version_git_tag":"true","TERM":"xterm-256color","SHELL":"/bin/zsh","npm_package_devDependencies_jest":"^26.1.0","npm_package_dependencies_vue_quill_editor":"^3.0.6","TMPDIR":"/var/folders/69/jk711s112g55g97fk0q3smjm0000gn/T/","npm_package_dependencies_node_html_markdown":"^0.1.5","npm_package_dependencies__nuxtjs_axios":"^5.6.0","npm_package_scripts_lint":"eslint --ext .js,.vue --ignore-path .gitignore .","npm_config_init_license":"MIT","TERM_PROGRAM_VERSION":"1.60.1","npm_package_devDependencies_babel_core":"^7.0.0-bridge.0","npm_package_dependencies_vue_stripe_elements_plus":"^0.3.2","npm_package_scripts_dev":"cross-env NODE_ENV=development nodemon server/index.js --watch server","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","npm_package_devDependencies_sass_loader":"^7.1.0","npm_package_dependencies_vue2_editor":"^2.10.2","npm_package_scripts_heroku_postbuild":"yarn build","npm_package_dependencies_showdown":"^1.9.1","npm_package_private":"true","npm_config_registry":"https://registry.yarnpkg.com","npm_package_scripts_generate":"nuxt generate","npm_package_readmeFilename":"README.md","npm_package_dependencies_vue2_datepicker":"^2.12.0","npm_package_dependencies__fullcalendar_vue":"^4.2.2","USER":"tom","npm_package_description":"My stunning Nuxt.js project","npm_config_python":"/usr/bin/python","COMMAND_MODE":"unix2003","npm_package_devDependencies_eslint_loader":"^2.0.0","npm_package_dependencies_perfect_scrollbar":"^1.4.0","npm_package_dependencies__nuxtjs_pwa":"^3.0.0-beta.19","npm_package_dependencies__nuxtjs_dotenv":"^1.4.1","rvm_path":"/Users/tom/.rvm","npm_package_devDependencies_babel_jest":"^26.1.0","npm_package_devDependencies__babel_core":"^7.4.5","npm_package_dependencies__fullcalendar_core":"^4.2.0","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.YFuhnku80D/Listeners","npm_package_dependencies_lodash":"^4.17.15","__CF_USER_TEXT_ENCODING":"0x1F5:0x0:0x0","npm_package_devDependencies_flush_promises":"^1.0.2","npm_package_devDependencies_eslint":"^5.0.1","npm_execpath":"/usr/local/Cellar/yarn/1.22.10/libexec/bin/yarn.js","npm_package_author_name":"Edwin Tsatsu","npm_package_devDependencies_eslint_plugin_prettier":"2.6.2","rvm_prefix":"/Users/tom","npm_package_devDependencies_jest_serializer_vue":"^2.0.2","npm_package_dependencies_bootstrap_vue":"^2.0.0-beta","PATH":"/var/folders/69/jk711s112g55g97fk0q3smjm0000gn/T/yarn--1633474603965-0.5037939004518037:/Users/tom/Documents/shack15/shack15-crm/node_modules/.bin:/Users/tom/.config/yarn/link/node_modules/.bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/opt/php@7.4/sbin:/usr/local/opt/php@7.4/bin:/usr/local/opt/php@7.2/sbin:/usr/local/opt/php@7.2/bin:/usr/local/opt/openjdk/bin:/Users/tom/fvm/default/bin:/usr/local/Cellar/php@7.2/7.2.34_4/bin:/Users/tom/.gem/ruby/2.6.0/bin:/usr/local/Cellar/ruby/2.4.1_1/bin:/usr/local/Cellar/python@3.8/3.8.6/bin/:/usr/local/Cellar/php/7.4.11/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/opt/anaconda3/bin:/Users/tom/fvm/default/bin:/usr/local/share/dotnet:~/.dotnet/tools:/Library/Apple/usr/bin:/Users/tom/Library/Android/sdk/platform-tools:/usr/local/opt/php@7.4/sbin:/usr/local/opt/php@7.4/bin:/usr/local/opt/php@7.2/sbin:/usr/local/opt/php@7.2/bin:/usr/local/opt/openjdk/bin:/usr/local/Cellar/php@7.2/7.2.34_4/bin:/Users/tom/.gem/ruby/2.6.0/bin:/usr/local/Cellar/ruby/2.4.1_1/bin:/Users/tom/.rvm/bin:/Users/tom/.rvm/bin","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"build\"]}","_":"/Users/tom/Documents/shack15/shack15-crm/node_modules/.bin/nuxt","LaunchInstanceID":"0F6F5E69-8B73-46B6-9952-C2562EFC865C","__CFBundleIdentifier":"com.microsoft.VSCode","PWD":"/Users/tom/Documents/shack15/shack15-crm","npm_package_dependencies_bootstrap":"4.3.1","npm_lifecycle_event":"build","npm_package_dependencies_date_fns":"^2.4.1","npm_package_dependencies_cross_env":"^5.2.0","LANG":"en_GB.UTF-8","ANDROID_SDK":"/Users/tom/Library/Android/sdk","npm_package_name":"shack15new","npm_package_devDependencies__babel_preset_env":"^7.10.4","npm_package_dependencies__toast_ui_vue_editor":"^2.2.0","npm_package_devDependencies__vue_test_utils":"^1.0.3","npm_package_dependencies__fullcalendar_daygrid":"^4.1.0","npm_package_scripts_start":"cross-env NODE_ENV=production node server/index.js","npm_package_scripts_build":"nuxt build","npm_config_version_commit_hooks":"true","XPC_FLAGS":"0x0","npm_package_dependencies__nuxtjs_auth":"^4.8.4","npm_package_dependencies__fullcalendar_timegrid":"^4.1.0","npm_package_dependencies_vee_validate":"^3.0.10","npm_config_bin_links":"true","npm_package_engines_node":"x.x","npm_package_devDependencies_eslint_config_prettier":"^3.1.0","npm_package_dependencies_nuxt_rollbar_module":"^1.1.0","XPC_SERVICE_NAME":"0","npm_package_scripts_aws_eb_prod":"node -e \"console.log('aws-eb:prod');\"","npm_package_version":"1.0.0","rvm_version":"1.29.10 (latest)","SHLVL":"2","HOME":"/Users/tom","VSCODE_GIT_ASKPASS_MAIN":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js","npm_package_devDependencies_eslint_plugin_vue":"^4.0.0","npm_package_scripts_test":"jest","npm_package_dependencies_es6_promise":"^4.2.8","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_package_devDependencies_babel_eslint":"^8.2.1","npm_config_version_git_message":"v%s","NPM_CONFIG_PYTHON":"/usr/bin/python","npm_package_devDependencies_vue_jest":"^3.0.5","npm_package_dependencies__fullcalendar_moment_timezone":"^4.4.0","LOGNAME":"tom","YARN_WRAP_OUTPUT":"false","npm_package_scripts_test_coverage":"jest --no-cache --coverage","PREFIX":"/usr/local","npm_lifecycle_script":"nuxt build","npm_package_dependencies_element_ui":"^2.12.0","npm_package_dependencies__fullcalendar_moment":"^4.4.0","VSCODE_GIT_IPC_HANDLE":"/var/folders/69/jk711s112g55g97fk0q3smjm0000gn/T/vscode-git-6b94f5f1b8.sock","npm_package_dependencies_vuex_map_fields":"^1.3.5","npm_package_dependencies__fullcalendar_list":"^4.3.0","npm_package_dependencies__fullcalendar_interaction":"^4.1.0","npm_config_version_git_sign":"","npm_config_ignore_scripts":"","npm_config_user_agent":"yarn/1.22.10 npm/? node/v14.16.0 darwin x64","VSCODE_GIT_ASKPASS_NODE":"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Renderer).app/Contents/MacOS/Code Helper (Renderer)","GIT_ASKPASS":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh","npm_package_dependencies__nuxtjs_moment":"^1.3.0","npm_package_dependencies_nuxt":"^2.14.7","npm_package_dependencies_express":"^4.16.3","npm_package_engines_yarn":"1.x","npm_config_init_version":"1.0.0","npm_config_ignore_optional":"","SECURITYSESSIONID":"186a6","npm_package_devDependencies_node_sass":"^4.14.1","npm_package_devDependencies_nodemon":"^1.11.0","npm_package_devDependencies_babel_plugin_component":"^1.1.0","npm_package_dependencies_vue2_transitions":"^0.3.0","npm_package_dependencies_vue_qrcode_reader":"^2.3.14","npm_package_scripts_precommit":"yarn lint --fix","npm_config_unsafe_perm":"true","COLORTERM":"truecolor","npm_node_execpath":"/usr/local/bin/node","npm_config_version_tag_prefix":"v","NODE_ENV":"production","_applied":"true"}
    }
    // Only set once
    if (!process.static && context.req) {
      app.context.req = context.req
    }
    if (!process.static && context.res) {
      app.context.res = context.res
    }
    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext
    }
    app.context.redirect = (status, path, query) => {
      if (!status) {
        return
      }
      app.context._redirected = true
      // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
      let pathType = typeof path
      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {}
        path = status
        pathType = typeof path
        status = 302
      }
      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath
      }
      // "/absolute/route", "./relative/route" or "../relative/route"
      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        })
      } else {
        path = formatUrl(path, query)
        if (process.server) {
          app.context.next({
            path,
            status
          })
        }
        if (process.client) {
          // https://developer.mozilla.org/en-US/docs/Web/API/Location/replace
          window.location.replace(path)

          // Throw a redirect error
          throw new Error('ERR_REDIRECT')
        }
      }
    }
    if (process.server) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn)
    }
    if (process.client) {
      app.context.nuxtState = window.__NUXT__
    }
  }

  // Dynamic keys
  const [currentRouteData, fromRouteData] = await Promise.all([
    getRouteData(context.route),
    getRouteData(context.from)
  ])

  if (context.route) {
    app.context.route = currentRouteData
  }

  if (context.from) {
    app.context.from = fromRouteData
  }

  app.context.next = context.next
  app.context._redirected = false
  app.context._errored = false
  app.context.isHMR = false
  app.context.params = app.context.route.params || {}
  app.context.query = app.context.route.query || {}
}

export function middlewareSeries (promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve()
  }
  return promisify(promises[0], appContext)
    .then(() => {
      return middlewareSeries(promises.slice(1), appContext)
    })
}

export function promisify (fn, context) {
  let promise
  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise((resolve) => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err)
        }
        data = data || {}
        resolve(data)
      })
    })
  } else {
    promise = fn(context)
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise
  }
  return Promise.resolve(promise)
}

// Imported from vue-router
export function getLocation (base, mode) {
  let path = decodeURI(window.location.pathname)
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '')
  }
  // To get matched with sanitized router.base add trailing slash
  if (base && (path.endsWith('/') ? path : path + '/').startsWith(base)) {
    path = path.slice(base.length)
  }
  return (path || '/') + window.location.search + window.location.hash
}

// Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
export function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

export function getQueryDiff (toQuery, fromQuery) {
  const diff = {}
  const queries = { ...toQuery, ...fromQuery }
  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true
    }
  }
  return diff
}

export function normalizeError (err) {
  let message
  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2)
    } catch (e) {
      message = `[${err.constructor.name}]`
    }
  } else {
    message = err.message || err
  }
  return {
    ...err,
    message,
    statusCode: (err.statusCode || err.status || (err.response && err.response.status) || 500)
  }
}

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
const PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  const tokens = []
  let key = 0
  let index = 0
  let path = ''
  const defaultDelimiter = (options && options.delimiter) || '/'
  let res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0]
    const escaped = res[1]
    const offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    const next = str[index]
    const prefix = res[2]
    const name = res[3]
    const capture = res[4]
    const group = res[5]
    const modifier = res[6]
    const asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    const partial = prefix != null && next != null && next !== prefix
    const repeat = modifier === '+' || modifier === '*'
    const optional = modifier === '?' || modifier === '*'
    const delimiter = res[2] || defaultDelimiter
    const pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g
  return encodeURI(str).replace(re, (c) => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURIComponentPretty(str, true)
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$/()])/g, '\\$1')
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options))
    }
  }

  return function (obj, opts) {
    let path = ''
    const data = obj || {}
    const options = opts || {}
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      const value = data[token.name || 'pathMatch']
      let segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Format given url, append query to url query string
 *
 * @param  {string} url
 * @param  {string} query
 * @return {string}
 */
function formatUrl (url, query) {
  let protocol
  const index = url.indexOf('://')
  if (index !== -1) {
    protocol = url.substring(0, index)
    url = url.substring(index + 3)
  } else if (url.startsWith('//')) {
    url = url.substring(2)
  }

  let parts = url.split('/')
  let result = (protocol ? protocol + '://' : '//') + parts.shift()

  let path = parts.join('/')
  if (path === '' && parts.length === 1) {
    result += '/'
  }

  let hash
  parts = path.split('#')
  if (parts.length === 2) {
    [path, hash] = parts
  }

  result += path ? '/' + path : ''

  if (query && JSON.stringify(query) !== '{}') {
    result += (url.split('?').length === 2 ? '&' : '?') + formatQuery(query)
  }
  result += hash ? '#' + hash : ''

  return result
}

/**
 * Transform data object to query string
 *
 * @param  {object} query
 * @return {string}
 */
function formatQuery (query) {
  return Object.keys(query).sort().map((key) => {
    const val = query[key]
    if (val == null) {
      return ''
    }
    if (Array.isArray(val)) {
      return val.slice().map(val2 => [key, '=', val2].join('')).join('&')
    }
    return key + '=' + val
  }).filter(Boolean).join('&')
}

export function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = []
  }
  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn)
  }
}

export function urlJoin () {
  return [].slice
    .call(arguments)
    .join('/')
    .replace(/\/+/g, '/')
    .replace(':/', '://')
}

export function stripTrailingSlash (path) {
  return path.replace(/\/+$/, '') || '/'
}

export function isSamePath (p1, p2) {
  return stripTrailingSlash(p1) === stripTrailingSlash(p2)
}

export function setScrollRestoration (newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch(e) {}
}
