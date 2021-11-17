export default (ctx, options) => {
  const {
    helper: {
      chalk
    }
  } = ctx

  ctx.onBuildStart(() => {
		console.log(chalk.yellow('插件 '), '编译开始');
		console.log('options:', options);
  });

  ctx.onBuildFinish(() => {
    console.log(chalk.blue('插件 '), '编译结束');
  });
}
