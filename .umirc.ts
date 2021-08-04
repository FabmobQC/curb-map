import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  exportStatic: {
    htmlSuffix: true,
    dynamicRoot: true,
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'CurbLR Viewer',
      dll: false,
      locale: {
        enable: true,
        baseNavigator: true,
        antd: true,
        default: 'fr-FR',
        baseSeparator: '-',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
    [
      'umi-plugin-ga',
      {
        code: 'G-9P5KQTT71S',
        judge: ()=>true // true or false
      },
    ],
  ],
}


export default config;
