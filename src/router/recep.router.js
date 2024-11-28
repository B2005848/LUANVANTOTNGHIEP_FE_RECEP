const recep = [
  // Router for admin login page (separated from admin routes).
  {
    path: "/login",
    name: "recep.login",
    component: () => import("../layouts/account.login.vue"),
    meta: {
      title: "CTU CLINIC - Lễ tân đăng nhập",
    },
  },
  // -----------------------------------Router for  recep pages
  {
    path: "/recep/:staffId",
    name: "recep.page",
    component: () => import("../layouts/index.vue"),
    meta: {
      title: "CTU CLINIC - Lễ Tân",
    },
    children: [
      {
        path: "appointment_managements",
        name: "recep.appointment",
        component: () => import("../pages/appointment_managements/index.vue"),
        meta: {
          title: "CTU CLINIC - Quản lí lịch hẹn",
        },
      },

      // TẠO LỊCH HẸN
      {
        path: "create_appointment_managements",
        name: "create_recep.appointment",
        component: () => import("../layouts/booking_page.vue"),
        meta: {
          title: "CTU CLINIC - Quản lí lịch hẹn",
        },
      },

      {
        path: "patients_managements/:id",
        name: "recep.patients",
        component: () => import("../pages/patient_details/index.vue"),
        meta: {
          title: "CTU CLINIC - Hồ sơ bệnh nhân",
        },
      },

      //---------------------------------------------------------Router for admin request managements page (CHAT ONLINE)
      {
        path: "request_managements",
        name: "admin.requests",
        component: () => import("../pages/request_managements/index.vue"),
        meta: {
          title: "CTU CLINIC - Các yêu cầu",
        },
      },

      // Nội dung đoạn chat theo id
      {
        path: "chatcontent/:id",
        name: "admin.chat",
        component: () => import("../pages/request_managements/chatcontent.vue"),
        meta: {
          title: "CTU CLINIC - Nhắn tin hỗ trợ ",
        },
      },
    ],
  },
];
export default recep;
