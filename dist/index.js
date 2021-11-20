"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require('path');
exports.default = (ctx) => {
    ctx.registerCommand({
        // 命令名
        name: 'gen',
        // 执行 taro gen 时输出的 options 信息
        optionsMap: {
            '--type': ''
        },
        // 执行 taro gen --help 时输出的使用例子的信息
        synopsisList: [
            'taro gen --type page --path home/index      (生成=>/src/pages/home/index.tsx)'
        ],
        async fn() {
            const options = ctx.runOpts;
            console.log('options', options);
            console.log('path.resolve');
            const nodePlop = require('node-plop');
            // load an instance of plop from a plopfile
            const plop = nodePlop(path.resolve(__dirname, '', './../src/generators/index.js'));
            // get a generator by name
            const basicAdd = plop.getGenerator('page');
            // run all the generator actions using the data specified
            basicAdd.runActions({
                IS_SUB_PACKAGE: 'Y',
                DIR_NAME: 'eee',
                FILE_NAME: 'aaa',
                FILE_DESC: 'test aaa'
            }).then((res) => {
                console.log('生成成功', res);
            }).catch(err => {
                console.log('生成失败, err', err);
            });
        }
    });
};
//# sourceMappingURL=index.js.map