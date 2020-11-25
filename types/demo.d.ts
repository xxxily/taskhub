declare function test001(selector: string): any;

export namespace Demo {
  interface AjaxSettings {
    method?: 'GET' | 'POST' | string;
    data?: any;
  }
}

export interface AjaxSettings {
  method?: 'GET' | 'POST' | string;
  data?: any;
  // 允许任意属性值
  [propName: string]: any;
}
