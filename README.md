I am trying to build a module resolver with webpack 4 and I am running into basic issues using existing code.

```
➜  webpack-failure yarn build
yarn run v1.12.3
warning package.json: No license field
$ webpack
/Users/thomas/Desktop/webpack-failure/NormalModuleReplacementPlugin.js:18
                compiler.hooks.normalModuleFactory.tap(
                                                   ^

TypeError: Cannot read property 'tap' of undefined
    at NormalModuleReplacementPlugin.apply (/Users/thomas/Desktop/webpack-failure/NormalModuleReplacementPlugin.js:18:38)
    at plugins.forEach.plugin (/Users/thomas/Desktop/webpack-failure/node_modules/enhanced-resolve/lib/ResolverFactory.js:276:10)
    at Array.forEach (<anonymous>)
    at Object.exports.createResolver (/Users/thomas/Desktop/webpack-failure/node_modules/enhanced-resolve/lib/ResolverFactory.js:275:10)
    at ResolverFactory._create (/Users/thomas/Desktop/webpack-failure/node_modules/webpack/lib/ResolverFactory.js:60:28)
    at ResolverFactory.get (/Users/thomas/Desktop/webpack-failure/node_modules/webpack/lib/ResolverFactory.js:52:28)
    at NormalModuleFactory.getResolver (/Users/thomas/Desktop/webpack-failure/node_modules/webpack/lib/NormalModuleFactory.js:519:31)
    at /Users/thomas/Desktop/webpack-failure/node_modules/webpack/lib/NormalModuleFactory.js:165:32
    at /Users/thomas/Desktop/webpack-failure/node_modules/webpack/lib/NormalModuleFactory.js:129:4
    at hooks.beforeResolve.callAsync (/Users/thomas/Desktop/webpack-failure/node_modules/webpack/lib/NormalModuleFactory.js:396:5)
    at AsyncSeriesWaterfallHook.eval [as callAsync] (eval at create (/Users/thomas/Desktop/webpack-failure/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:6:1)
    at AsyncSeriesWaterfallHook.lazyCompileHook (/Users/thomas/Desktop/webpack-failure/node_modules/tapable/lib/Hook.js:154:20)
    at NormalModuleFactory.create (/Users/thomas/Desktop/webpack-failure/node_modules/webpack/lib/NormalModuleFactory.js:377:28)
    at semaphore.acquire (/Users/thomas/Desktop/webpack-failure/node_modules/webpack/lib/Compilation.js:966:18)
    at Semaphore.acquire (/Users/thomas/Desktop/webpack-failure/node_modules/webpack/lib/util/Semaphore.js:29:4)
    at Compilation._addModuleChain (/Users/thomas/Desktop/webpack-failure/node_modules/webpack/lib/Compilation.js:965:18)
    at Compilation.addEntry (/Users/thomas/Desktop/webpack-failure/node_modules/webpack/lib/Compilation.js:1072:8)
    at compiler.hooks.make.tapAsync (/Users/thomas/Desktop/webpack-failure/node_modules/webpack/lib/SingleEntryPlugin.js:46:17)
    at AsyncParallelHook.eval [as callAsync] (eval at create (/Users/thomas/Desktop/webpack-failure/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:7:1)
    at AsyncParallelHook.lazyCompileHook (/Users/thomas/Desktop/webpack-failure/node_modules/tapable/lib/Hook.js:154:20)
    at hooks.beforeCompile.callAsync.err (/Users/thomas/Desktop/webpack-failure/node_modules/webpack/lib/Compiler.js:541:20)
    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/thomas/Desktop/webpack-failure/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:6:1)
    at AsyncSeriesHook.lazyCompileHook (/Users/thomas/Desktop/webpack-failure/node_modules/tapable/lib/Hook.js:154:20)
    at Compiler.compile (/Users/thomas/Desktop/webpack-failure/node_modules/webpack/lib/Compiler.js:534:28)
    at readRecords.err (/Users/thomas/Desktop/webpack-failure/node_modules/webpack/lib/Compiler.js:274:11)
    at Compiler.readRecords (/Users/thomas/Desktop/webpack-failure/node_modules/webpack/lib/Compiler.js:401:11)
    at hooks.run.callAsync.err (/Users/thomas/Desktop/webpack-failure/node_modules/webpack/lib/Compiler.js:271:10)
    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/thomas/Desktop/webpack-failure/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:6:1)
    at AsyncSeriesHook.lazyCompileHook (/Users/thomas/Desktop/webpack-failure/node_modules/tapable/lib/Hook.js:154:20)
    at hooks.beforeRun.callAsync.err (/Users/thomas/Desktop/webpack-failure/node_modules/webpack/lib/Compiler.js:268:19)
    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/thomas/Desktop/webpack-failure/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:15:1)
    at AsyncSeriesHook.lazyCompileHook (/Users/thomas/Desktop/webpack-failure/node_modules/tapable/lib/Hook.js:154:20)
    at Compiler.run (/Users/thomas/Desktop/webpack-failure/node_modules/webpack/lib/Compiler.js:265:24)
    at processOptions (/Users/thomas/Desktop/webpack-failure/node_modules/webpack-cli/bin/cli.js:533:20)
    at yargs.parse (/Users/thomas/Desktop/webpack-failure/node_modules/webpack-cli/bin/cli.js:536:3)
    at Object.parse (/Users/thomas/Desktop/webpack-failure/node_modules/yargs/yargs.js:567:18)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```