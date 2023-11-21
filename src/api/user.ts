import { http } from "@/utils/http";

export type UserResult = {
  success: boolean;
  data: {
    /** 用户名 */
    username: string;
    /** 当前登陆用户的角色 */
    roles: Array<string>;
    /** `token` */
    accessToken: string;
    /** 用于调用刷新`accessToken`的接口时所需的`token` */
    refreshToken: string;
    /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
    expires: Date;
  };
};

export type RefreshTokenResult = {
  success: boolean;
  data: {
    /** `token` */
    accessToken: string;
    /** 用于调用刷新`accessToken`的接口时所需的`token` */
    refreshToken: string;
    /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
    expires: Date;
  };
};
export type CaptchaResult = {
  success: boolean;
  data: {
    id: string;
    backgroundImage: string;
    backgroundImageHeight: number;
    backgroundImageWidth: number;
    sliderImage: string;
    sliderWith: number;
    sliderHeight: number;
  };
};
export type CheckCaptchaResult = {
  success: boolean;
  data: {
    isOk: boolean;
  }
};
/** 登录 */
export const getLogin = (data?: object) => {
  return http.request<UserResult>("post", "/login", { data });
};

/** 刷新token */
export const refreshTokenApi = (data?: object) => {
  return http.request<RefreshTokenResult>("post", "/refresh-token", { data });
};
/** 获取滑块验证码 */
export const getCaptcha = () => {
  return http.request<CaptchaResult>('get', '/getCaptcha');
};
/** 检查滑块 */
export const checkCaptcha = (data?: object) => {
  return http.request<CheckCaptchaResult>('post', '/checkCaptcha', { data });
};