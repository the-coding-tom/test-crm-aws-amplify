import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _78992f7c = () => interopDefault(import('../pages/user/index.vue' /* webpackChunkName: "pages/user/index" */))
const _dcead95c = () => interopDefault(import('../pages/auth/forgot-password.vue' /* webpackChunkName: "pages/auth/forgot-password" */))
const _67870cf6 = () => interopDefault(import('../pages/auth/login.vue' /* webpackChunkName: "pages/auth/login" */))
const _7574539c = () => interopDefault(import('../pages/auth/reset-password.vue' /* webpackChunkName: "pages/auth/reset-password" */))
const _6af689ce = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _06505e7e = () => interopDefault(import('../pages/_space/index.vue' /* webpackChunkName: "pages/_space/index" */))
const _1e5fe398 = () => interopDefault(import('../pages/_space/activities/index.vue' /* webpackChunkName: "pages/_space/activities/index" */))
const _4fba1e8b = () => interopDefault(import('../pages/_space/admins/index.vue' /* webpackChunkName: "pages/_space/admins/index" */))
const _56bb8fed = () => interopDefault(import('../pages/_space/checkins/index.vue' /* webpackChunkName: "pages/_space/checkins/index" */))
const _0a4c3ad8 = () => interopDefault(import('../pages/_space/community/index.vue' /* webpackChunkName: "pages/_space/community/index" */))
const _ed12cc96 = () => interopDefault(import('../pages/_space/corporates/index.vue' /* webpackChunkName: "pages/_space/corporates/index" */))
const _44c1d45c = () => interopDefault(import('../pages/_space/directory/index.vue' /* webpackChunkName: "pages/_space/directory/index" */))
const _777205e4 = () => interopDefault(import('../pages/_space/edit.vue' /* webpackChunkName: "pages/_space/edit" */))
const _218c7b40 = () => interopDefault(import('../pages/_space/events/index.vue' /* webpackChunkName: "pages/_space/events/index" */))
const _347abe1c = () => interopDefault(import('../pages/_space/invoice/index.vue' /* webpackChunkName: "pages/_space/invoice/index" */))
const _3ce5b722 = () => interopDefault(import('../pages/_space/members-due/index.vue' /* webpackChunkName: "pages/_space/members-due/index" */))
const _025072d6 = () => interopDefault(import('../pages/_space/members-subscribed/index.vue' /* webpackChunkName: "pages/_space/members-subscribed/index" */))
const _d3796f68 = () => interopDefault(import('../pages/_space/memberships/index.vue' /* webpackChunkName: "pages/_space/memberships/index" */))
const _189bbbce = () => interopDefault(import('../pages/_space/plans/index.vue' /* webpackChunkName: "pages/_space/plans/index" */))
const _55619a92 = () => interopDefault(import('../pages/_space/promotions/index.vue' /* webpackChunkName: "pages/_space/promotions/index" */))
const _10542e14 = () => interopDefault(import('../pages/_space/resources/index.vue' /* webpackChunkName: "pages/_space/resources/index" */))
const _e81ba42c = () => interopDefault(import('../pages/_space/settings/index.vue' /* webpackChunkName: "pages/_space/settings/index" */))
const _44e6c060 = () => interopDefault(import('../pages/_space/tags/index.vue' /* webpackChunkName: "pages/_space/tags/index" */))
const _25dceb6c = () => interopDefault(import('../pages/_space/wellness/index.vue' /* webpackChunkName: "pages/_space/wellness/index" */))
const _6108831a = () => interopDefault(import('../pages/_space/admins/add.vue' /* webpackChunkName: "pages/_space/admins/add" */))
const _cc197422 = () => interopDefault(import('../pages/_space/checkins/history.vue' /* webpackChunkName: "pages/_space/checkins/history" */))
const _3be2a4d8 = () => interopDefault(import('../pages/_space/checkins/settings.vue' /* webpackChunkName: "pages/_space/checkins/settings" */))
const _69c47e78 = () => interopDefault(import('../pages/_space/corporates/add.vue' /* webpackChunkName: "pages/_space/corporates/add" */))
const _85150daa = () => interopDefault(import('../pages/_space/directory/add.vue' /* webpackChunkName: "pages/_space/directory/add" */))
const _4dd335da = () => interopDefault(import('../pages/_space/eatry/categories/index.vue' /* webpackChunkName: "pages/_space/eatry/categories/index" */))
const _66fd071b = () => interopDefault(import('../pages/_space/eatry/inventory/index.vue' /* webpackChunkName: "pages/_space/eatry/inventory/index" */))
const _db28aec8 = () => interopDefault(import('../pages/_space/eatry/orders/index.vue' /* webpackChunkName: "pages/_space/eatry/orders/index" */))
const _1259182f = () => interopDefault(import('../pages/_space/events/add.vue' /* webpackChunkName: "pages/_space/events/add" */))
const _1b332481 = () => interopDefault(import('../pages/_space/events/categories/index.vue' /* webpackChunkName: "pages/_space/events/categories/index" */))
const _62c5bad7 = () => interopDefault(import('../pages/_space/events/drafts/index.vue' /* webpackChunkName: "pages/_space/events/drafts/index" */))
const _613ed27f = () => interopDefault(import('../pages/_space/manage/checkins/index.vue' /* webpackChunkName: "pages/_space/manage/checkins/index" */))
const _eab237ec = () => interopDefault(import('../pages/_space/manage/directory/index.vue' /* webpackChunkName: "pages/_space/manage/directory/index" */))
const _56862362 = () => interopDefault(import('../pages/_space/manage/invite/index.vue' /* webpackChunkName: "pages/_space/manage/invite/index" */))
const _71917f7f = () => interopDefault(import('../pages/_space/manage/invoices/index.vue' /* webpackChunkName: "pages/_space/manage/invoices/index" */))
const _38b9adca = () => interopDefault(import('../pages/_space/memberships/add.vue' /* webpackChunkName: "pages/_space/memberships/add" */))
const _86e1dc76 = () => interopDefault(import('../pages/_space/memberships/messages/index.vue' /* webpackChunkName: "pages/_space/memberships/messages/index" */))
const _be70f482 = () => interopDefault(import('../pages/_space/memberships/uninvited/index.vue' /* webpackChunkName: "pages/_space/memberships/uninvited/index" */))
const _22afdbb0 = () => interopDefault(import('../pages/_space/plans/add.vue' /* webpackChunkName: "pages/_space/plans/add" */))
const _62269b74 = () => interopDefault(import('../pages/_space/promotions/add.vue' /* webpackChunkName: "pages/_space/promotions/add" */))
const _b27a3e3a = () => interopDefault(import('../pages/_space/resources/add.vue' /* webpackChunkName: "pages/_space/resources/add" */))
const _23321d6b = () => interopDefault(import('../pages/_space/resources/bookings/index.vue' /* webpackChunkName: "pages/_space/resources/bookings/index" */))
const _623fbf66 = () => interopDefault(import('../pages/_space/resources/categories/index.vue' /* webpackChunkName: "pages/_space/resources/categories/index" */))
const _7d801d10 = () => interopDefault(import('../pages/_space/settings/rooms.vue' /* webpackChunkName: "pages/_space/settings/rooms" */))
const _4b2d962f = () => interopDefault(import('../pages/_space/tags/add.vue' /* webpackChunkName: "pages/_space/tags/add" */))
const _4d8b143b = () => interopDefault(import('../pages/_space/wellness/add.vue' /* webpackChunkName: "pages/_space/wellness/add" */))
const _0f2639da = () => interopDefault(import('../pages/_space/wellness/bookings/index.vue' /* webpackChunkName: "pages/_space/wellness/bookings/index" */))
const _40801bf5 = () => interopDefault(import('../pages/_space/wellness/categories/index.vue' /* webpackChunkName: "pages/_space/wellness/categories/index" */))
const _e75668bc = () => interopDefault(import('../pages/_space/eatry/categories/add.vue' /* webpackChunkName: "pages/_space/eatry/categories/add" */))
const _abe760ac = () => interopDefault(import('../pages/_space/eatry/inventory/add.vue' /* webpackChunkName: "pages/_space/eatry/inventory/add" */))
const _b052e2e0 = () => interopDefault(import('../pages/_space/events/categories/add.vue' /* webpackChunkName: "pages/_space/events/categories/add" */))
const _05f11cce = () => interopDefault(import('../pages/_space/memberships/messages/create.vue' /* webpackChunkName: "pages/_space/memberships/messages/create" */))
const _cc2fe548 = () => interopDefault(import('../pages/_space/resources/categories/add.vue' /* webpackChunkName: "pages/_space/resources/categories/add" */))
const _6f22d304 = () => interopDefault(import('../pages/_space/wellness/categories/add.vue' /* webpackChunkName: "pages/_space/wellness/categories/add" */))
const _7b771c86 = () => interopDefault(import('../pages/_space/eatry/inventory/_id/index.vue' /* webpackChunkName: "pages/_space/eatry/inventory/_id/index" */))
const _ab4fddce = () => interopDefault(import('../pages/_space/invoice/add/_id/index.vue' /* webpackChunkName: "pages/_space/invoice/add/_id/index" */))
const _2bb54300 = () => interopDefault(import('../pages/_space/invoice/preview/_id/index.vue' /* webpackChunkName: "pages/_space/invoice/preview/_id/index" */))
const _4e4fc230 = () => interopDefault(import('../pages/_space/memberships/messages/_id/index.vue' /* webpackChunkName: "pages/_space/memberships/messages/_id/index" */))
const _ec22e38a = () => interopDefault(import('../pages/_space/wellness/bookings/_id.vue' /* webpackChunkName: "pages/_space/wellness/bookings/_id" */))
const _806743f4 = () => interopDefault(import('../pages/_space/eatry/inventory/_id/edit.vue' /* webpackChunkName: "pages/_space/eatry/inventory/_id/edit" */))
const _23a16147 = () => interopDefault(import('../pages/_space/directory/_id/index.vue' /* webpackChunkName: "pages/_space/directory/_id/index" */))
const _56aaa56a = () => interopDefault(import('../pages/_space/events/_id/index.vue' /* webpackChunkName: "pages/_space/events/_id/index" */))
const _554f6b07 = () => interopDefault(import('../pages/_space/invoice/_id/index.vue' /* webpackChunkName: "pages/_space/invoice/_id/index" */))
const _2e675d37 = () => interopDefault(import('../pages/_space/memberships/_id/index.vue' /* webpackChunkName: "pages/_space/memberships/_id/index" */))
const _72ffc202 = () => interopDefault(import('../pages/_space/resources/_id/index.vue' /* webpackChunkName: "pages/_space/resources/_id/index" */))
const _443a7057 = () => interopDefault(import('../pages/_space/wellness/_id/index.vue' /* webpackChunkName: "pages/_space/wellness/_id/index" */))
const _66d25ed4 = () => interopDefault(import('../pages/_space/admins/_id/edit.vue' /* webpackChunkName: "pages/_space/admins/_id/edit" */))
const _bd50e5a8 = () => interopDefault(import('../pages/_space/corporates/_id/edit.vue' /* webpackChunkName: "pages/_space/corporates/_id/edit" */))
const _82141094 = () => interopDefault(import('../pages/_space/directory/_id/notes.vue' /* webpackChunkName: "pages/_space/directory/_id/notes" */))
const _f9bce91c = () => interopDefault(import('../pages/_space/events/_id/attendees.vue' /* webpackChunkName: "pages/_space/events/_id/attendees" */))
const _599dbebe = () => interopDefault(import('../pages/_space/events/_id/edit.vue' /* webpackChunkName: "pages/_space/events/_id/edit" */))
const _073c7a48 = () => interopDefault(import('../pages/_space/plans/_id/edit.vue' /* webpackChunkName: "pages/_space/plans/_id/edit" */))
const _27e5862c = () => interopDefault(import('../pages/_space/promotions/_id/edit.vue' /* webpackChunkName: "pages/_space/promotions/_id/edit" */))
const _c349978c = () => interopDefault(import('../pages/_space/wellness/_id/slots.vue' /* webpackChunkName: "pages/_space/wellness/_id/slots" */))

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
    component: _78992f7c,
    name: "user"
  }, {
    path: "/auth/forgot-password",
    component: _dcead95c,
    name: "auth-forgot-password"
  }, {
    path: "/auth/login",
    component: _67870cf6,
    name: "auth-login"
  }, {
    path: "/auth/reset-password",
    component: _7574539c,
    name: "auth-reset-password"
  }, {
    path: "/",
    component: _6af689ce,
    name: "index"
  }, {
    path: "/:space",
    component: _06505e7e,
    name: "space"
  }, {
    path: "/:space/activities",
    component: _1e5fe398,
    name: "space-activities"
  }, {
    path: "/:space/admins",
    component: _4fba1e8b,
    name: "space-admins"
  }, {
    path: "/:space/checkins",
    component: _56bb8fed,
    name: "space-checkins"
  }, {
    path: "/:space/community",
    component: _0a4c3ad8,
    name: "space-community"
  }, {
    path: "/:space/corporates",
    component: _ed12cc96,
    name: "space-corporates"
  }, {
    path: "/:space/directory",
    component: _44c1d45c,
    name: "space-directory"
  }, {
    path: "/:space/edit",
    component: _777205e4,
    name: "space-edit"
  }, {
    path: "/:space/events",
    component: _218c7b40,
    name: "space-events"
  }, {
    path: "/:space/invoice",
    component: _347abe1c,
    name: "space-invoice"
  }, {
    path: "/:space/members-due",
    component: _3ce5b722,
    name: "space-members-due"
  }, {
    path: "/:space/members-subscribed",
    component: _025072d6,
    name: "space-members-subscribed"
  }, {
    path: "/:space/memberships",
    component: _d3796f68,
    name: "space-memberships"
  }, {
    path: "/:space/plans",
    component: _189bbbce,
    name: "space-plans"
  }, {
    path: "/:space/promotions",
    component: _55619a92,
    name: "space-promotions"
  }, {
    path: "/:space/resources",
    component: _10542e14,
    name: "space-resources"
  }, {
    path: "/:space/settings",
    component: _e81ba42c,
    name: "space-settings"
  }, {
    path: "/:space/tags",
    component: _44e6c060,
    name: "space-tags"
  }, {
    path: "/:space/wellness",
    component: _25dceb6c,
    name: "space-wellness"
  }, {
    path: "/:space/admins/add",
    component: _6108831a,
    name: "space-admins-add"
  }, {
    path: "/:space/checkins/history",
    component: _cc197422,
    name: "space-checkins-history"
  }, {
    path: "/:space/checkins/settings",
    component: _3be2a4d8,
    name: "space-checkins-settings"
  }, {
    path: "/:space/corporates/add",
    component: _69c47e78,
    name: "space-corporates-add"
  }, {
    path: "/:space/directory/add",
    component: _85150daa,
    name: "space-directory-add"
  }, {
    path: "/:space/eatry/categories",
    component: _4dd335da,
    name: "space-eatry-categories"
  }, {
    path: "/:space/eatry/inventory",
    component: _66fd071b,
    name: "space-eatry-inventory"
  }, {
    path: "/:space/eatry/orders",
    component: _db28aec8,
    name: "space-eatry-orders"
  }, {
    path: "/:space/events/add",
    component: _1259182f,
    name: "space-events-add"
  }, {
    path: "/:space/events/categories",
    component: _1b332481,
    name: "space-events-categories"
  }, {
    path: "/:space/events/drafts",
    component: _62c5bad7,
    name: "space-events-drafts"
  }, {
    path: "/:space/manage/checkins",
    component: _613ed27f,
    name: "space-manage-checkins"
  }, {
    path: "/:space/manage/directory",
    component: _eab237ec,
    name: "space-manage-directory"
  }, {
    path: "/:space/manage/invite",
    component: _56862362,
    name: "space-manage-invite"
  }, {
    path: "/:space/manage/invoices",
    component: _71917f7f,
    name: "space-manage-invoices"
  }, {
    path: "/:space/memberships/add",
    component: _38b9adca,
    name: "space-memberships-add"
  }, {
    path: "/:space/memberships/messages",
    component: _86e1dc76,
    name: "space-memberships-messages"
  }, {
    path: "/:space/memberships/uninvited",
    component: _be70f482,
    name: "space-memberships-uninvited"
  }, {
    path: "/:space/plans/add",
    component: _22afdbb0,
    name: "space-plans-add"
  }, {
    path: "/:space/promotions/add",
    component: _62269b74,
    name: "space-promotions-add"
  }, {
    path: "/:space/resources/add",
    component: _b27a3e3a,
    name: "space-resources-add"
  }, {
    path: "/:space/resources/bookings",
    component: _23321d6b,
    name: "space-resources-bookings"
  }, {
    path: "/:space/resources/categories",
    component: _623fbf66,
    name: "space-resources-categories"
  }, {
    path: "/:space/settings/rooms",
    component: _7d801d10,
    name: "space-settings-rooms"
  }, {
    path: "/:space/tags/add",
    component: _4b2d962f,
    name: "space-tags-add"
  }, {
    path: "/:space/wellness/add",
    component: _4d8b143b,
    name: "space-wellness-add"
  }, {
    path: "/:space/wellness/bookings",
    component: _0f2639da,
    name: "space-wellness-bookings"
  }, {
    path: "/:space/wellness/categories",
    component: _40801bf5,
    name: "space-wellness-categories"
  }, {
    path: "/:space/eatry/categories/add",
    component: _e75668bc,
    name: "space-eatry-categories-add"
  }, {
    path: "/:space/eatry/inventory/add",
    component: _abe760ac,
    name: "space-eatry-inventory-add"
  }, {
    path: "/:space/events/categories/add",
    component: _b052e2e0,
    name: "space-events-categories-add"
  }, {
    path: "/:space/memberships/messages/create",
    component: _05f11cce,
    name: "space-memberships-messages-create"
  }, {
    path: "/:space/resources/categories/add",
    component: _cc2fe548,
    name: "space-resources-categories-add"
  }, {
    path: "/:space/wellness/categories/add",
    component: _6f22d304,
    name: "space-wellness-categories-add"
  }, {
    path: "/:space/eatry/inventory/:id",
    component: _7b771c86,
    name: "space-eatry-inventory-id"
  }, {
    path: "/:space/invoice/add/:id",
    component: _ab4fddce,
    name: "space-invoice-add-id"
  }, {
    path: "/:space/invoice/preview/:id",
    component: _2bb54300,
    name: "space-invoice-preview-id"
  }, {
    path: "/:space/memberships/messages/:id",
    component: _4e4fc230,
    name: "space-memberships-messages-id"
  }, {
    path: "/:space/wellness/bookings/:id",
    component: _ec22e38a,
    name: "space-wellness-bookings-id"
  }, {
    path: "/:space/eatry/inventory/:id/edit",
    component: _806743f4,
    name: "space-eatry-inventory-id-edit"
  }, {
    path: "/:space/directory/:id",
    component: _23a16147,
    name: "space-directory-id"
  }, {
    path: "/:space/events/:id",
    component: _56aaa56a,
    name: "space-events-id"
  }, {
    path: "/:space/invoice/:id",
    component: _554f6b07,
    name: "space-invoice-id"
  }, {
    path: "/:space/memberships/:id",
    component: _2e675d37,
    name: "space-memberships-id"
  }, {
    path: "/:space/resources/:id",
    component: _72ffc202,
    name: "space-resources-id"
  }, {
    path: "/:space/wellness/:id",
    component: _443a7057,
    name: "space-wellness-id"
  }, {
    path: "/:space/admins/:id/edit",
    component: _66d25ed4,
    name: "space-admins-id-edit"
  }, {
    path: "/:space/corporates/:id/edit",
    component: _bd50e5a8,
    name: "space-corporates-id-edit"
  }, {
    path: "/:space/directory/:id/notes",
    component: _82141094,
    name: "space-directory-id-notes"
  }, {
    path: "/:space/events/:id/attendees",
    component: _f9bce91c,
    name: "space-events-id-attendees"
  }, {
    path: "/:space/events/:id/edit",
    component: _599dbebe,
    name: "space-events-id-edit"
  }, {
    path: "/:space/plans/:id/edit",
    component: _073c7a48,
    name: "space-plans-id-edit"
  }, {
    path: "/:space/promotions/:id/edit",
    component: _27e5862c,
    name: "space-promotions-id-edit"
  }, {
    path: "/:space/wellness/:id/slots",
    component: _c349978c,
    name: "space-wellness-id-slots"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
