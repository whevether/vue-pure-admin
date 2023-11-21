// 根据角色动态生成路由
import { defineFakeRoute } from "vite-plugin-fake-server/client";

export default defineFakeRoute([
  {
    url: "/login",
    method: "post",
    response: ({ body }) => {
      if (body.username === "admin") {
        return {
          success: true,
          data: {
            username: "admin",
            // 一个用户可能有多个角色
            roles: ["admin"],
            accessToken: "eyJhbGciOiJIUzUxMiJ9.admin",
            refreshToken: "eyJhbGciOiJIUzUxMiJ9.adminRefresh",
            expires: "2030/10/30 00:00:00"
          }
        };
      } else {
        return {
          success: true,
          data: {
            username: "common",
            // 一个用户可能有多个角色
            roles: ["common"],
            accessToken: "eyJhbGciOiJIUzUxMiJ9.common",
            refreshToken: "eyJhbGciOiJIUzUxMiJ9.commonRefresh",
            expires: "2030/10/30 00:00:00"
          }
        };
      }
    }
  },
  {
    url: "/getCaptcha",
    method: "get",
    response: () => {
      const arr: any[] = [
        {
          id: "d136c6447eb64d389631c7da795a0981",
          backgroundImage: "https://minioapi.zytravel.shop/img/captcha_bg.jpg",
          sliderImage: "https://minioapi.zytravel.shop/img/captcha_sel.jpg",
          backgroundImageWidth: 590,
          backgroundImageHeight: 360,
          sliderImageWidth: 110,
          sliderImageHeight: 360
        },
        {
          id: "575e7f28fae84461941817217bfb31f3",
          backgroundImage: "https://minioapi.zytravel.shop/img/captcha1_bg.jpg",
          sliderImage: "https://minioapi.zytravel.shop/img/captcha1_sel.jpg",
          backgroundImageWidth: 590,
          backgroundImageHeight: 360,
          sliderImageWidth: 110,
          sliderImageHeight: 360
        },
        {
          id: "426c7eb9d06e4dbbac0a40959c9f6886",
          backgroundImage: "https://minioapi.zytravel.shop/img/captcha2_bg.jpg",
          sliderImage: "https://minioapi.zytravel.shop/img/captcha2_sel.jpg",
          backgroundImageWidth: 590,
          backgroundImageHeight: 360,
          sliderImageWidth: 110,
          sliderImageHeight: 360
        }
      ];
      return {
        success: true,
        data: arr[Math.floor(Math.random() * 3)]
      };
    }
  },
  {
    url: "/checkCaptcha",
    method: "post",
    response: ({ body }) => {
      const obj: any = {
        d136c6447eb64d389631c7da795a0981: {
          trackList: body.trackList,
          x: [80, 81, 82, 83, 84, 85, 86, 87, 88, 89]
        },
        "575e7f28fae84461941817217bfb31f3": {
          trackList: body.trackList,
          x: [100, 101, 102, 103, 104, 105, 106, 107, 108, 109]
        },
        "426c7eb9d06e4dbbac0a40959c9f6886": {
          trackList: body.trackList,
          x: [130, 131, 132, 133, 134, 135, 136, 137, 138, 139]
        }
      };
      const value = obj[body.captchaId];
      const last = value.trackList[value.trackList.length - 1];
      if (value.x.indexOf(last.x) != -1) {
        return {
          success: true,
          data: {
            isOk: true
          }
        };
      } else {
        return {
          success: false,
          data: {
            isOk: false
          }
        };
      }
    }
  }
]);
