import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _403fcae4 = () => interopDefault(import('../pages/user/index.vue' /* webpackChunkName: "pages/user/index" */))
const _c23452c4 = () => interopDefault(import('../pages/auth/forgot-password.vue' /* webpackChunkName: "pages/auth/forgot-password" */))
const _f898817c = () => interopDefault(import('../pages/auth/login.vue' /* webpackChunkName: "pages/auth/login" */))
const _3d851260 = () => interopDefault(import('../pages/auth/reset-password.vue' /* webpackChunkName: "pages/auth/reset-password" */))
const _2c5e9802 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _6bcca46c = () => interopDefault(import('../pages/_space/index.vue' /* webpackChunkName: "pages/_space/index" */))
const _402c7768 = () => interopDefault(import('../pages/_space/activities/index.vue' /* webpackChunkName: "pages/_space/activities/index" */))
const _88f97c82 = () => interopDefault(import('../pages/_space/admins/index.vue' /* webpackChunkName: "pages/_space/admins/index" */))
const _166e93be = () => interopDefault(import('../pages/_space/checkins/index.vue' /* webpackChunkName: "pages/_space/checkins/index" */))
const _2de3db24 = () => interopDefault(import('../pages/_space/community/index.vue' /* webpackChunkName: "pages/_space/community/index" */))
const _4e59fa2e = () => interopDefault(import('../pages/_space/corporates/index.vue' /* webpackChunkName: "pages/_space/corporates/index" */))
const _685974a8 = () => interopDefault(import('../pages/_space/directory/index.vue' /* webpackChunkName: "pages/_space/directory/index" */))
const _2db09442 = () => interopDefault(import('../pages/_space/edit.vue' /* webpackChunkName: "pages/_space/edit" */))
const _5b02e594 = () => interopDefault(import('../pages/_space/events/index.vue' /* webpackChunkName: "pages/_space/events/index" */))
const _41d60168 = () => interopDefault(import('../pages/_space/invoice/index.vue' /* webpackChunkName: "pages/_space/invoice/index" */))
const _7dbde1bb = () => interopDefault(import('../pages/_space/members-due/index.vue' /* webpackChunkName: "pages/_space/members-due/index" */))
const _61a1bbc9 = () => interopDefault(import('../pages/_space/members-subscribed/index.vue' /* webpackChunkName: "pages/_space/members-subscribed/index" */))
const _32740598 = () => interopDefault(import('../pages/_space/memberships/index.vue' /* webpackChunkName: "pages/_space/memberships/index" */))
const _85446f36 = () => interopDefault(import('../pages/_space/plans/index.vue' /* webpackChunkName: "pages/_space/plans/index" */))
const _24ab9beb = () => interopDefault(import('../pages/_space/promotions/index.vue' /* webpackChunkName: "pages/_space/promotions/index" */))
const _33ebce60 = () => interopDefault(import('../pages/_space/resources/index.vue' /* webpackChunkName: "pages/_space/resources/index" */))
const _29ff541e = () => interopDefault(import('../pages/_space/settings/index.vue' /* webpackChunkName: "pages/_space/settings/index" */))
const _7171bed8 = () => interopDefault(import('../pages/_space/tags/index.vue' /* webpackChunkName: "pages/_space/tags/index" */))
const _782bdcc0 = () => interopDefault(import('../pages/_space/wellness/index.vue' /* webpackChunkName: "pages/_space/wellness/index" */))
const _392e3964 = () => interopDefault(import('../pages/_space/admins/add.vue' /* webpackChunkName: "pages/_space/admins/add" */))
const _2d60a1ba = () => interopDefault(import('../pages/_space/checkins/history.vue' /* webpackChunkName: "pages/_space/checkins/history" */))
const _4fd93bb8 = () => interopDefault(import('../pages/_space/checkins/settings.vue' /* webpackChunkName: "pages/_space/checkins/settings" */))
const _692ae6f8 = () => interopDefault(import('../pages/_space/corporates/add.vue' /* webpackChunkName: "pages/_space/corporates/add" */))
const _6a5e8712 = () => interopDefault(import('../pages/_space/directory/add.vue' /* webpackChunkName: "pages/_space/directory/add" */))
const _60841747 = () => interopDefault(import('../pages/_space/eatry/categories/index.vue' /* webpackChunkName: "pages/_space/eatry/categories/index" */))
const _52938332 = () => interopDefault(import('../pages/_space/eatry/inventory/index.vue' /* webpackChunkName: "pages/_space/eatry/inventory/index" */))
const _7c5294d0 = () => interopDefault(import('../pages/_space/eatry/orders/index.vue' /* webpackChunkName: "pages/_space/eatry/orders/index" */))
const _d68d0f3a = () => interopDefault(import('../pages/_space/events/add.vue' /* webpackChunkName: "pages/_space/events/add" */))
const _fd088e66 = () => interopDefault(import('../pages/_space/events/categories/index.vue' /* webpackChunkName: "pages/_space/events/categories/index" */))
const _948755ba = () => interopDefault(import('../pages/_space/events/drafts/index.vue' /* webpackChunkName: "pages/_space/events/drafts/index" */))
const _5e0fec6a = () => interopDefault(import('../pages/_space/manage/checkins/index.vue' /* webpackChunkName: "pages/_space/manage/checkins/index" */))
const _1214963e = () => interopDefault(import('../pages/_space/manage/directory/index.vue' /* webpackChunkName: "pages/_space/manage/directory/index" */))
const _ad0684a4 = () => interopDefault(import('../pages/_space/manage/invite/index.vue' /* webpackChunkName: "pages/_space/manage/invite/index" */))
const _3d6a926a = () => interopDefault(import('../pages/_space/manage/invoices/index.vue' /* webpackChunkName: "pages/_space/manage/invoices/index" */))
const _073ac967 = () => interopDefault(import('../pages/_space/memberships/add.vue' /* webpackChunkName: "pages/_space/memberships/add" */))
const _5fb805e2 = () => interopDefault(import('../pages/_space/memberships/archived/index.vue' /* webpackChunkName: "pages/_space/memberships/archived/index" */))
const _d69eec0e = () => interopDefault(import('../pages/_space/memberships/messages/index.vue' /* webpackChunkName: "pages/_space/memberships/messages/index" */))
const _6655d7ea = () => interopDefault(import('../pages/_space/memberships/uninvited/index.vue' /* webpackChunkName: "pages/_space/memberships/uninvited/index" */))
const _0360db74 = () => interopDefault(import('../pages/_space/plans/add.vue' /* webpackChunkName: "pages/_space/plans/add" */))
const _6cf9d87a = () => interopDefault(import('../pages/_space/promotions/add.vue' /* webpackChunkName: "pages/_space/promotions/add" */))
const _97c3b7a2 = () => interopDefault(import('../pages/_space/resources/add.vue' /* webpackChunkName: "pages/_space/resources/add" */))
const _f407dac2 = () => interopDefault(import('../pages/_space/resources/bookings/index.vue' /* webpackChunkName: "pages/_space/resources/bookings/index" */))
const _b1fccefe = () => interopDefault(import('../pages/_space/resources/categories/index.vue' /* webpackChunkName: "pages/_space/resources/categories/index" */))
const _1b8d4344 = () => interopDefault(import('../pages/_space/settings/rooms.vue' /* webpackChunkName: "pages/_space/settings/rooms" */))
const _2ad07363 = () => interopDefault(import('../pages/_space/tags/add.vue' /* webpackChunkName: "pages/_space/tags/add" */))
const _8d579122 = () => interopDefault(import('../pages/_space/wellness/add.vue' /* webpackChunkName: "pages/_space/wellness/add" */))
const _5eb5775f = () => interopDefault(import('../pages/_space/wellness/bookings/index.vue' /* webpackChunkName: "pages/_space/wellness/bookings/index" */))
const _36f4cd41 = () => interopDefault(import('../pages/_space/wellness/categories/index.vue' /* webpackChunkName: "pages/_space/wellness/categories/index" */))
const _cf9d0a54 = () => interopDefault(import('../pages/_space/eatry/categories/add.vue' /* webpackChunkName: "pages/_space/eatry/categories/add" */))
const _05fa2c14 = () => interopDefault(import('../pages/_space/eatry/inventory/add.vue' /* webpackChunkName: "pages/_space/eatry/inventory/add" */))
const _178fc5dc = () => interopDefault(import('../pages/_space/events/categories/add.vue' /* webpackChunkName: "pages/_space/events/categories/add" */))
const _2914ffe5 = () => interopDefault(import('../pages/_space/memberships/messages/create.vue' /* webpackChunkName: "pages/_space/memberships/messages/create" */))
const _069bfae0 = () => interopDefault(import('../pages/_space/resources/categories/add.vue' /* webpackChunkName: "pages/_space/resources/categories/add" */))
const _55293160 = () => interopDefault(import('../pages/_space/wellness/categories/add.vue' /* webpackChunkName: "pages/_space/wellness/categories/add" */))
const _71ebcdd2 = () => interopDefault(import('../pages/_space/eatry/inventory/_id/index.vue' /* webpackChunkName: "pages/_space/eatry/inventory/_id/index" */))
const _1a114865 = () => interopDefault(import('../pages/_space/invoice/add/_id/index.vue' /* webpackChunkName: "pages/_space/invoice/add/_id/index" */))
const _2229f44c = () => interopDefault(import('../pages/_space/invoice/preview/_id/index.vue' /* webpackChunkName: "pages/_space/invoice/preview/_id/index" */))
const _685bff38 = () => interopDefault(import('../pages/_space/memberships/messages/_id/index.vue' /* webpackChunkName: "pages/_space/memberships/messages/_id/index" */))
const _0cb074f2 = () => interopDefault(import('../pages/_space/wellness/bookings/_id.vue' /* webpackChunkName: "pages/_space/wellness/bookings/_id" */))
const _2296533a = () => interopDefault(import('../pages/_space/eatry/inventory/_id/edit.vue' /* webpackChunkName: "pages/_space/eatry/inventory/_id/edit" */))
const _7697fb93 = () => interopDefault(import('../pages/_space/directory/_id/index.vue' /* webpackChunkName: "pages/_space/directory/_id/index" */))
const _2407167f = () => interopDefault(import('../pages/_space/events/_id/index.vue' /* webpackChunkName: "pages/_space/events/_id/index" */))
const _1cffaf5a = () => interopDefault(import('../pages/_space/invoice/_id/index.vue' /* webpackChunkName: "pages/_space/invoice/_id/index" */))
const _c3bed6fa = () => interopDefault(import('../pages/_space/memberships/_id/index.vue' /* webpackChunkName: "pages/_space/memberships/_id/index" */))
const _1976b94b = () => interopDefault(import('../pages/_space/resources/_id/index.vue' /* webpackChunkName: "pages/_space/resources/_id/index" */))
const _2e215c8b = () => interopDefault(import('../pages/_space/wellness/_id/index.vue' /* webpackChunkName: "pages/_space/wellness/_id/index" */))
const _1fa31e3c = () => interopDefault(import('../pages/_space/admins/_id/edit.vue' /* webpackChunkName: "pages/_space/admins/_id/edit" */))
const _1763b110 = () => interopDefault(import('../pages/_space/corporates/_id/edit.vue' /* webpackChunkName: "pages/_space/corporates/_id/edit" */))
const _11ec9202 = () => interopDefault(import('../pages/_space/directory/_id/notes.vue' /* webpackChunkName: "pages/_space/directory/_id/notes" */))
const _e2038ab4 = () => interopDefault(import('../pages/_space/events/_id/attendees.vue' /* webpackChunkName: "pages/_space/events/_id/attendees" */))
const _126e7e26 = () => interopDefault(import('../pages/_space/events/_id/edit.vue' /* webpackChunkName: "pages/_space/events/_id/edit" */))
const _b56cbf08 = () => interopDefault(import('../pages/_space/plans/_id/edit.vue' /* webpackChunkName: "pages/_space/plans/_id/edit" */))
const _3f03d736 = () => interopDefault(import('../pages/_space/promotions/_id/edit.vue' /* webpackChunkName: "pages/_space/promotions/_id/edit" */))
const _ef7bbf24 = () => interopDefault(import('../pages/_space/wellness/_id/slots.vue' /* webpackChunkName: "pages/_space/wellness/_id/slots" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/user",
    component: _403fcae4,
    name: "user"
  }, {
    path: "/auth/forgot-password",
    component: _c23452c4,
    name: "auth-forgot-password"
  }, {
    path: "/auth/login",
    component: _f898817c,
    name: "auth-login"
  }, {
    path: "/auth/reset-password",
    component: _3d851260,
    name: "auth-reset-password"
  }, {
    path: "/",
    component: _2c5e9802,
    name: "index"
  }, {
    path: "/:space",
    component: _6bcca46c,
    name: "space"
  }, {
    path: "/:space/activities",
    component: _402c7768,
    name: "space-activities"
  }, {
    path: "/:space/admins",
    component: _88f97c82,
    name: "space-admins"
  }, {
    path: "/:space/checkins",
    component: _166e93be,
    name: "space-checkins"
  }, {
    path: "/:space/community",
    component: _2de3db24,
    name: "space-community"
  }, {
    path: "/:space/corporates",
    component: _4e59fa2e,
    name: "space-corporates"
  }, {
    path: "/:space/directory",
    component: _685974a8,
    name: "space-directory"
  }, {
    path: "/:space/edit",
    component: _2db09442,
    name: "space-edit"
  }, {
    path: "/:space/events",
    component: _5b02e594,
    name: "space-events"
  }, {
    path: "/:space/invoice",
    component: _41d60168,
    name: "space-invoice"
  }, {
    path: "/:space/members-due",
    component: _7dbde1bb,
    name: "space-members-due"
  }, {
    path: "/:space/members-subscribed",
    component: _61a1bbc9,
    name: "space-members-subscribed"
  }, {
    path: "/:space/memberships",
    component: _32740598,
    name: "space-memberships"
  }, {
    path: "/:space/plans",
    component: _85446f36,
    name: "space-plans"
  }, {
    path: "/:space/promotions",
    component: _24ab9beb,
    name: "space-promotions"
  }, {
    path: "/:space/resources",
    component: _33ebce60,
    name: "space-resources"
  }, {
    path: "/:space/settings",
    component: _29ff541e,
    name: "space-settings"
  }, {
    path: "/:space/tags",
    component: _7171bed8,
    name: "space-tags"
  }, {
    path: "/:space/wellness",
    component: _782bdcc0,
    name: "space-wellness"
  }, {
    path: "/:space/admins/add",
    component: _392e3964,
    name: "space-admins-add"
  }, {
    path: "/:space/checkins/history",
    component: _2d60a1ba,
    name: "space-checkins-history"
  }, {
    path: "/:space/checkins/settings",
    component: _4fd93bb8,
    name: "space-checkins-settings"
  }, {
    path: "/:space/corporates/add",
    component: _692ae6f8,
    name: "space-corporates-add"
  }, {
    path: "/:space/directory/add",
    component: _6a5e8712,
    name: "space-directory-add"
  }, {
    path: "/:space/eatry/categories",
    component: _60841747,
    name: "space-eatry-categories"
  }, {
    path: "/:space/eatry/inventory",
    component: _52938332,
    name: "space-eatry-inventory"
  }, {
    path: "/:space/eatry/orders",
    component: _7c5294d0,
    name: "space-eatry-orders"
  }, {
    path: "/:space/events/add",
    component: _d68d0f3a,
    name: "space-events-add"
  }, {
    path: "/:space/events/categories",
    component: _fd088e66,
    name: "space-events-categories"
  }, {
    path: "/:space/events/drafts",
    component: _948755ba,
    name: "space-events-drafts"
  }, {
    path: "/:space/manage/checkins",
    component: _5e0fec6a,
    name: "space-manage-checkins"
  }, {
    path: "/:space/manage/directory",
    component: _1214963e,
    name: "space-manage-directory"
  }, {
    path: "/:space/manage/invite",
    component: _ad0684a4,
    name: "space-manage-invite"
  }, {
    path: "/:space/manage/invoices",
    component: _3d6a926a,
    name: "space-manage-invoices"
  }, {
    path: "/:space/memberships/add",
    component: _073ac967,
    name: "space-memberships-add"
  }, {
    path: "/:space/memberships/archived",
    component: _5fb805e2,
    name: "space-memberships-archived"
  }, {
    path: "/:space/memberships/messages",
    component: _d69eec0e,
    name: "space-memberships-messages"
  }, {
    path: "/:space/memberships/uninvited",
    component: _6655d7ea,
    name: "space-memberships-uninvited"
  }, {
    path: "/:space/plans/add",
    component: _0360db74,
    name: "space-plans-add"
  }, {
    path: "/:space/promotions/add",
    component: _6cf9d87a,
    name: "space-promotions-add"
  }, {
    path: "/:space/resources/add",
    component: _97c3b7a2,
    name: "space-resources-add"
  }, {
    path: "/:space/resources/bookings",
    component: _f407dac2,
    name: "space-resources-bookings"
  }, {
    path: "/:space/resources/categories",
    component: _b1fccefe,
    name: "space-resources-categories"
  }, {
    path: "/:space/settings/rooms",
    component: _1b8d4344,
    name: "space-settings-rooms"
  }, {
    path: "/:space/tags/add",
    component: _2ad07363,
    name: "space-tags-add"
  }, {
    path: "/:space/wellness/add",
    component: _8d579122,
    name: "space-wellness-add"
  }, {
    path: "/:space/wellness/bookings",
    component: _5eb5775f,
    name: "space-wellness-bookings"
  }, {
    path: "/:space/wellness/categories",
    component: _36f4cd41,
    name: "space-wellness-categories"
  }, {
    path: "/:space/eatry/categories/add",
    component: _cf9d0a54,
    name: "space-eatry-categories-add"
  }, {
    path: "/:space/eatry/inventory/add",
    component: _05fa2c14,
    name: "space-eatry-inventory-add"
  }, {
    path: "/:space/events/categories/add",
    component: _178fc5dc,
    name: "space-events-categories-add"
  }, {
    path: "/:space/memberships/messages/create",
    component: _2914ffe5,
    name: "space-memberships-messages-create"
  }, {
    path: "/:space/resources/categories/add",
    component: _069bfae0,
    name: "space-resources-categories-add"
  }, {
    path: "/:space/wellness/categories/add",
    component: _55293160,
    name: "space-wellness-categories-add"
  }, {
    path: "/:space/eatry/inventory/:id",
    component: _71ebcdd2,
    name: "space-eatry-inventory-id"
  }, {
    path: "/:space/invoice/add/:id",
    component: _1a114865,
    name: "space-invoice-add-id"
  }, {
    path: "/:space/invoice/preview/:id",
    component: _2229f44c,
    name: "space-invoice-preview-id"
  }, {
    path: "/:space/memberships/messages/:id",
    component: _685bff38,
    name: "space-memberships-messages-id"
  }, {
    path: "/:space/wellness/bookings/:id",
    component: _0cb074f2,
    name: "space-wellness-bookings-id"
  }, {
    path: "/:space/eatry/inventory/:id/edit",
    component: _2296533a,
    name: "space-eatry-inventory-id-edit"
  }, {
    path: "/:space/directory/:id",
    component: _7697fb93,
    name: "space-directory-id"
  }, {
    path: "/:space/events/:id",
    component: _2407167f,
    name: "space-events-id"
  }, {
    path: "/:space/invoice/:id",
    component: _1cffaf5a,
    name: "space-invoice-id"
  }, {
    path: "/:space/memberships/:id",
    component: _c3bed6fa,
    name: "space-memberships-id"
  }, {
    path: "/:space/resources/:id",
    component: _1976b94b,
    name: "space-resources-id"
  }, {
    path: "/:space/wellness/:id",
    component: _2e215c8b,
    name: "space-wellness-id"
  }, {
    path: "/:space/admins/:id/edit",
    component: _1fa31e3c,
    name: "space-admins-id-edit"
  }, {
    path: "/:space/corporates/:id/edit",
    component: _1763b110,
    name: "space-corporates-id-edit"
  }, {
    path: "/:space/directory/:id/notes",
    component: _11ec9202,
    name: "space-directory-id-notes"
  }, {
    path: "/:space/events/:id/attendees",
    component: _e2038ab4,
    name: "space-events-id-attendees"
  }, {
    path: "/:space/events/:id/edit",
    component: _126e7e26,
    name: "space-events-id-edit"
  }, {
    path: "/:space/plans/:id/edit",
    component: _b56cbf08,
    name: "space-plans-id-edit"
  }, {
    path: "/:space/promotions/:id/edit",
    component: _3f03d736,
    name: "space-promotions-id-edit"
  }, {
    path: "/:space/wellness/:id/slots",
    component: _ef7bbf24,
    name: "space-wellness-id-slots"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
