const path = require('path')
const cwd = process.cwd()

/**
 * 通过相对路径获取绝对路径
 */
// export const getAbsolutePathByRelativePath = (relativePath: string) => {
// 	return path.resolve(cwd, '', relativePath)
// }
module.exports = {
	getAbsolutePathByRelativePath: (relativePath) => {
		return path.resolve(cwd, '', relativePath)
	}
}

